        (function () {
            var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            var card = document.getElementById('heroMapCard');
            var spacer = document.getElementById('mapPinSpacer');
            var wrapper = document.getElementById('mapZoomWrapper');
            var wideGroup = document.getElementById('wideGroup');
            var progressEl = document.getElementById('mapProgress');
            if (!card || !wrapper || !spacer) return;

            var ALL_PATH_IDS = ['mapPathAlghero', 'mapPathOlbia', 'mapPathRest', 'mapPathLidl', 'mapPathScoglio', 'mapPathDolci', 'mapPathBalai'];
            var ALL_BADGE_IDS = ['mapBadgeAlghero', 'mapBadgeOlbia', 'mapBadgeRest', 'mapBadgeLidl', 'mapBadgeScoglio', 'mapBadgeDolci', 'mapBadgeBalai'];
            var ALL_DOT_IDS = ['mapDotAlghero', 'mapDotOlbia', 'mapDotRest', 'mapDotLidl', 'mapDotScoglio', 'mapDotDolci', 'mapDotBalai'];

            // Osoby z włączonym "ogranicz animacje" dostają od razu gotowy, w pełni
            // odsłonięty stan mapy — bez rysowania linii, zoomu i bez "korytarza" scrolla
            // (spacer wraca do position:static, karta zachowuje się jak zwykły blok).
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
                spacer.classList.add('no-pin');
            }

            if (reducedMotion) { showFinalStateInstantly(); return; }

            /* ── Krok po kroku, w stylu "Apple scrollytelling" ──────────────────────
               #mapPinSpacer jest wysoki na 5 "ekranów" scrolla; #mapPinSticky trzyma
               kartę na środku ekranu przez position:sticky (natywny mechanizm
               przeglądarki — nic tu nie "łapie" scrolla i nie woła preventDefault,
               więc działa identycznie kółkiem myszy, trackpadem i palcem, niezależnie
               od tego, gdzie na stronie zaczyna się gest). Pozycja scrolla wewnątrz
               tego korytarza mówi nam wprost, który z 5 kroków ma być odsłonięty. */

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
            var currentStep = 0; // ile porcji jest aktualnie odsłoniętych (0..TOTAL)

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

            function setStepState(idx, revealed) {
                var s = STEPS[idx];
                if (!s) return;
                if (revealed) {
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
                    dots[i].classList.toggle('filled', i < currentStep);
                }
            }

            function computeTargetStep() {
                var rect = spacer.getBoundingClientRect();
                var runway = rect.height - window.innerHeight;
                if (runway <= 0) return TOTAL;
                var scrolled = -rect.top;
                var progress = scrolled / runway;
                if (progress < 0) progress = 0;
                if (progress > 1) progress = 1;
                var t = Math.floor(progress * TOTAL + 1e-6);
                if (t < 0) t = 0;
                if (t > TOTAL) t = TOTAL;
                return t;
            }

            function checkStep() {
                var target = computeTargetStep();
                if (target !== currentStep) {
                    if (target > currentStep) {
                        for (var i = currentStep; i < target; i++) setStepState(i, true);
                    } else {
                        for (var j = currentStep - 1; j >= target; j--) setStepState(j, false);
                    }
                    currentStep = target;
                    updateProgress();
                }
            }

            // Ciągłe odpytywanie klatka po klatce (requestAnimationFrame), zamiast polegania
            // wyłącznie na zdarzeniu "scroll" — to ten sam, sprawdzony wzorzec co w
            // scrollytellingu na stronach Apple: działa identycznie niezależnie od tego, czy
            // przeglądarka/urządzenie generuje zdarzenia scroll gęsto, rzadko, czy z opóźnieniem
            // przy przewijaniu bezwładnościowym (moment scrolling na telefonach).
            function loop() {
                checkStep();
                requestAnimationFrame(loop);
            }
            requestAnimationFrame(loop);
        })();
