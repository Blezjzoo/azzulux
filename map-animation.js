        (function () {
            var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            var card = document.getElementById('heroMapCard');
            var wrapper = document.getElementById('mapZoomWrapper');
            var wideGroup = document.getElementById('wideGroup');
            var progressEl = document.getElementById('mapProgress');
            if (!card || !wrapper) return;

            var ALL_PATH_IDS = ['mapPathAlghero', 'mapPathOlbia', 'mapPathRest', 'mapPathLidl', 'mapPathScoglio', 'mapPathDolci', 'mapPathBalai'];
            var ALL_BADGE_IDS = ['mapBadgeAlghero', 'mapBadgeOlbia', 'mapBadgeRest', 'mapBadgeLidl', 'mapBadgeScoglio', 'mapBadgeDolci', 'mapBadgeBalai'];
            var ALL_DOT_IDS = ['mapDotAlghero', 'mapDotOlbia', 'mapDotRest', 'mapDotLidl', 'mapDotScoglio', 'mapDotDolci', 'mapDotBalai'];

            // Osoby z włączonym "ogranicz animacje" dostają od razu gotowy, w pełni
            // odsłonięty stan mapy — bez rysowania linii, zoomu i bez blokowania scrolla.
            function showFinalStateInstantly() {
                ALL_PATH_IDS.forEach(function (id) {
                    var p = document.getElementById(id);
                    if (!p) return;
                    p.style.strokeDashoffset = '0';
                    p.setAttribute('marker-end', 'url(#mapArrow)');
                });
                ALL_BADGE_IDS.forEach(function (id) {
                    var b = document.getElementById(id);
                    if (b) b.style.opacity = '1';
                });
                ALL_DOT_IDS.forEach(function (id) {
                    var d = document.getElementById(id);
                    if (!d) return;
                    d.setAttribute('fill', 'rgba(201,168,76,0.4)');
                    d.setAttribute('stroke', '#c9a84c');
                });
                if (wideGroup) wideGroup.style.opacity = '0';
                wrapper.style.transform = 'scale(1)';
                if (progressEl) progressEl.style.display = 'none';
            }

            if (reducedMotion) { showFinalStateInstantly(); return; }

            /* ── Krok po kroku, w stylu "Apple scrollytelling" ──────────────────────
               Gdy karta z mapą dojedzie do środka ekranu, CAŁA strona zostaje
               zablokowana (prawdziwa blokada scrolla przez position:fixed na <body>,
               a nie tylko preventDefault na pojedynczych zdarzeniach — to jedyny
               sposób, żeby nie dało się "przewinąć bezwładnościowo" przez animację na
               telefonie, gdzie system kontynuuje scroll jeszcze chwilę po puszczeniu
               palca). Każdy kolejny scroll/swipe w dół odsłania jedną z 5 porcji;
               swipe w górę cofa poprzednią. Po dotarciu do końca ANIMACJA JEST
               TRWALE ZAKOŃCZONA — powrót od dołu strony (np. z FAQ) nigdy jej nie
               cofa ani nie blokuje ponownie scrolla. */

            var STEPS = [
                { points: [{ path: 'mapPathAlghero', badge: 'mapBadgeAlghero', dot: 'mapDotAlghero', len: 1000, dur: 700 }] },
                { points: [{ path: 'mapPathOlbia', badge: 'mapBadgeOlbia', dot: 'mapDotOlbia', len: 1000, dur: 900 }] },
                {
                    zoomIn: true,
                    points: [
                        { path: 'mapPathRest', badge: 'mapBadgeRest', dot: 'mapDotRest', dur: 380 },
                        { path: 'mapPathLidl', badge: 'mapBadgeLidl', dot: 'mapDotLidl', dur: 450 }
                    ]
                },
                {
                    points: [
                        { path: 'mapPathScoglio', badge: 'mapBadgeScoglio', dot: 'mapDotScoglio', dur: 600 },
                        { path: 'mapPathDolci', badge: 'mapBadgeDolci', dot: 'mapDotDolci', dur: 650 }
                    ]
                },
                { points: [{ path: 'mapPathBalai', badge: 'mapBadgeBalai', dot: 'mapDotBalai', dur: 850 }] }
            ];
            var TOTAL = STEPS.length;
            var step = 0;          // ile porcji jest odsłoniętych (0..TOTAL)
            var completed = false; // raz na zawsze — po dojściu do końca nie odpalamy się już nigdy więcej
            var engaged = false;   // strona jest aktualnie zablokowana na tej sekcji
            var cooldown = false;  // jeden gest = jeden krok
            var COOLDOWN_MS = 620;
            var lockedScrollY = 0;
            var suppressEngageUntil = 0;

            var lenCache = {};
            function pathLen(id, fallback) {
                if (lenCache[id]) return lenCache[id];
                var p = document.getElementById(id);
                var len = fallback;
                try { if (p && p.getTotalLength) len = p.getTotalLength(); } catch (e) { }
                lenCache[id] = len;
                return len;
            }

            function revealPoint(pt, forward) {
                var p = document.getElementById(pt.path);
                var b = document.getElementById(pt.badge);
                var d = document.getElementById(pt.dot);
                if (!p) return;
                var len = pathLen(pt.path, pt.len || 600);
                if (forward) {
                    p.style.strokeDasharray = len;
                    p.style.transition = 'stroke-dashoffset ' + (pt.dur || 500) + 'ms cubic-bezier(0.35, 0, 0.3, 1)';
                    p.style.strokeDashoffset = '0';
                    setTimeout(function () {
                        // Grot strzałki dopiero po dorysowaniu linii — inaczej marker-end
                        // renderuje się na końcu ścieżki natychmiast i przez chwilę "lata"
                        // w miejscu docelowym, zanim linia zdąży tam dotrzeć.
                        p.setAttribute('marker-end', 'url(#mapArrow)');
                        if (b) b.style.opacity = '1';
                        if (d) {
                            d.style.transition = 'fill 0.3s, stroke 0.3s';
                            d.setAttribute('fill', 'rgba(201,168,76,0.4)');
                            d.setAttribute('stroke', '#c9a84c');
                        }
                    }, (pt.dur || 500) + 60);
                } else {
                    if (b) b.style.opacity = '0';
                    p.removeAttribute('marker-end');
                    if (d) {
                        d.style.transition = 'fill 0.25s, stroke 0.25s';
                        d.setAttribute('fill', 'rgba(201,168,76,0.15)');
                        d.setAttribute('stroke', 'rgba(201,168,76,0.3)');
                    }
                    p.style.transition = 'stroke-dashoffset 380ms ease';
                    p.style.strokeDashoffset = String(len);
                }
            }

            function applyStep(direction) {
                var idx = direction === 1 ? step : step - 1;
                var s = STEPS[idx];
                if (!s) return;
                if (direction === 1) {
                    if (s.zoomIn) {
                        if (wideGroup) wideGroup.style.opacity = '0';
                        wrapper.style.transform = 'scale(1)';
                    }
                    s.points.forEach(function (pt) { revealPoint(pt, true); });
                } else {
                    s.points.forEach(function (pt) { revealPoint(pt, false); });
                    if (s.zoomIn) {
                        if (wideGroup) wideGroup.style.opacity = '1';
                        wrapper.style.transform = 'scale(0.42)';
                    }
                }
            }

            function updateProgress() {
                if (!progressEl) return;
                var dots = progressEl.children;
                for (var i = 0; i < dots.length; i++) {
                    dots[i].classList.toggle('filled', i < step);
                }
            }

            // ── prawdziwa blokada scrolla całej strony ──
            // preventDefault na pojedynczych zdarzeniach NIE wystarcza na telefonach —
            // po puszczeniu palca system i tak dokończy przewijanie bezwładnościowe.
            // position:fixed na <body> fizycznie uniemożliwia jakikolwiek scroll,
            // niezależnie od tego, czy próbuje go wywołać kółko, palec czy klawiatura.
            function lockScroll() {
                lockedScrollY = window.scrollY || window.pageYOffset || 0;
                document.body.style.position = 'fixed';
                document.body.style.top = (-lockedScrollY) + 'px';
                document.body.style.left = '0';
                document.body.classList.add('map-scroll-locked');
            }
            function unlockScroll() {
                document.body.classList.remove('map-scroll-locked');
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.left = '';
                window.scrollTo(0, lockedScrollY);
                // Ta przywrócona pozycja to DOKŁADNIE ten sam punkt, w którym karta jest
                // wyśrodkowana — bez tego okna zdarzenie "scroll" wywołane przez powyższy
                // scrollTo natychmiast z powrotem uruchomiłoby maybeEngage() (błędne koło:
                // odblokuj → scrollTo → scroll event → znów wyśrodkowana → zablokuj).
                suppressEngageUntil = Date.now() + 400;
            }

            function tryAdvance(dir) {
                if (cooldown) return false;
                if (dir === 1) {
                    if (step >= TOTAL) return false;
                    cooldown = true;
                    applyStep(1);
                    step += 1;
                    updateProgress();
                    setTimeout(function () { cooldown = false; }, COOLDOWN_MS);
                    if (step >= TOTAL) {
                        completed = true;
                        setTimeout(release, COOLDOWN_MS + 60);
                    }
                    return true;
                } else {
                    if (step <= 0) return false;
                    cooldown = true;
                    applyStep(-1);
                    step -= 1;
                    updateProgress();
                    setTimeout(function () { cooldown = false; }, COOLDOWN_MS);
                    if (step <= 0) {
                        setTimeout(release, COOLDOWN_MS + 60);
                    }
                    return true;
                }
            }

            function release() {
                if (!engaged) return;
                engaged = false;
                unlockScroll();
            }

            function isCentered() {
                var r = card.getBoundingClientRect();
                var mid = window.innerHeight / 2;
                return r.top < mid && r.bottom > mid;
            }

            function maybeEngage() {
                if (engaged || completed) return;
                if (Date.now() < suppressEngageUntil) return;
                if (isCentered()) {
                    engaged = true;
                    lockScroll();
                }
            }

            // Dwa niezależne mechanizmy wykrywania, że karta jest na środku ekranu —
            // zdarzenie "scroll" (tanie, zwykle wystarcza) ORAZ ciągłe odpytywanie
            // klatka po klatce jako zabezpieczenie na wypadek, gdyby przeglądarka
            // ograniczała częstotliwość zdarzeń scroll przy przewijaniu
            // bezwładnościowym (częste na telefonach). rAF sam w sobie jest
            // wstrzymywany, gdy karta przeglądarki jest w tle — nieistotne tutaj,
            // bo wtedy i tak nikt nie scrolluje.
            window.addEventListener('scroll', maybeEngage, { passive: true });
            function watchLoop() {
                maybeEngage();
                requestAnimationFrame(watchLoop);
            }
            requestAnimationFrame(watchLoop);
            maybeEngage(); // np. po odświeżeniu strony w trakcie przewinięcia

            // ── kółko myszy / trackpad ──
            window.addEventListener('wheel', function (e) {
                if (!engaged) return;
                e.preventDefault();
                tryAdvance(e.deltaY > 0 ? 1 : -1);
            }, { passive: false });

            // ── dotyk: jeden swipe (>22px) = jeden krok. Sprawdzamy `engaged` (flaga
            //    globalna, ustawiana przez scroll listener, a nie migawka z touchstart),
            //    więc nie ma znaczenia, gdzie na ekranie zaczyna się gest palcem. ──
            var touchY = null;
            window.addEventListener('touchstart', function (e) {
                touchY = e.touches[0].clientY;
            }, { passive: true });

            window.addEventListener('touchmove', function (e) {
                var y = e.touches[0].clientY;
                if (!engaged) { touchY = y; return; }
                e.preventDefault();
                if (touchY === null) { touchY = y; return; }
                var delta = touchY - y; // dodatnie = palec w górę = zamiar scrolla w dół
                if (Math.abs(delta) > 22) {
                    if (tryAdvance(delta > 0 ? 1 : -1)) touchY = y;
                }
            }, { passive: false });

            window.addEventListener('touchend', function () { touchY = null; }, { passive: true });

            updateProgress();
        })();
