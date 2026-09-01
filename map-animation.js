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

            // Osoby z włączonym "ogranicz animacje" (prefers-reduced-motion) dostają od razu
            // gotowy, w pełni odsłonięty stan mapy — bez rysowania linii, zoomu i bez
            // przechwytywania scrolla (poniższy mechanizm "krok na swipe" w ogóle się nie uruchamia).
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
               Gdy karta z mapą dojedzie do środka ekranu, scroll strony się zatrzymuje
               ("przypina" kartę na miejscu) i każde kolejne przewinięcie/swipe w dół
               odsłania JEDNĄ z 5 porcji animacji zamiast przewijać stronę dalej.
               Swipe w górę cofa poprzednią porcję. Dopiero po 5. kroku (albo cofnięciu
               do 0) scroll strony wraca do normy i można pojechać dalej / wrócić wyżej. */

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
            var step = 0;       // ile porcji już odsłonięto (0..TOTAL)
            var cooldown = false; // blokada na czas trwania animacji jednego kroku, żeby jeden swipe = jeden krok
            var COOLDOWN_MS = 620;

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

            function updateProgress() {
                if (!progressEl) return;
                var dots = progressEl.children;
                for (var i = 0; i < dots.length; i++) {
                    dots[i].classList.toggle('filled', i < step);
                }
            }

            // direction: 1 = wchodzimy do przodu (odsłaniamy krok), -1 = cofamy się (chowamy krok)
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

            function tryAdvance(dir) {
                if (cooldown) return false;
                if (dir === 1) {
                    if (step >= TOTAL) return false; // gotowe — puszczamy scroll dalej w dół
                    cooldown = true;
                    applyStep(1);
                    step += 1;
                    updateProgress();
                    setTimeout(function () { cooldown = false; }, COOLDOWN_MS);
                    return true;
                } else {
                    if (step <= 0) return false; // nic do cofnięcia — puszczamy scroll dalej w górę
                    cooldown = true;
                    applyStep(-1);
                    step -= 1;
                    updateProgress();
                    setTimeout(function () { cooldown = false; }, COOLDOWN_MS);
                    return true;
                }
            }

            function isEngaged() {
                var r = card.getBoundingClientRect();
                var mid = window.innerHeight / 2;
                return r.top < mid && r.bottom > mid;
            }

            // ── kółko myszy / trackpad ──
            window.addEventListener('wheel', function (e) {
                if (!isEngaged()) return;
                var dir = e.deltaY > 0 ? 1 : -1;
                if (dir === 1 && step >= TOTAL) return;
                if (dir === -1 && step <= 0) return;
                e.preventDefault();
                tryAdvance(dir);
            }, { passive: false });

            // ── dotyk (telefon/tablet): jeden swipe = jeden krok, niezależnie od tego,
            //    jak daleko przesunie się palec — trzymamy zdarzenie, aż palec się podniesie ──
            var touchStartY = null, touchConsumed = false, touchBlocking = false;
            window.addEventListener('touchstart', function (e) {
                touchStartY = isEngaged() ? e.touches[0].clientY : null;
                touchConsumed = false;
                touchBlocking = false;
            }, { passive: true });

            window.addEventListener('touchmove', function (e) {
                if (touchStartY === null) return;
                if (!isEngaged()) { touchStartY = null; return; }
                var y = e.touches[0].clientY;
                var delta = touchStartY - y; // dodatnie = palec w górę = zamiar scrolla w dół
                var dir = delta > 0 ? 1 : -1;
                if (dir === 1 && step >= TOTAL) return;  // koniec animacji — puszczamy naturalny scroll
                if (dir === -1 && step <= 0) return;

                if (!touchConsumed) {
                    if (Math.abs(delta) > 22) {
                        e.preventDefault();
                        touchConsumed = tryAdvance(dir);
                        touchBlocking = true;
                    } else {
                        // ruch za mały, żeby liczyć się jako swipe — i tak nie dajemy
                        // stronie "pełznąć" w trakcie decydowania
                        e.preventDefault();
                    }
                } else if (touchBlocking) {
                    e.preventDefault();
                }
            }, { passive: false });

            window.addEventListener('touchend', function () {
                touchStartY = null; touchConsumed = false; touchBlocking = false;
            }, { passive: true });

            updateProgress();
        })();
