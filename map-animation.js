(function () {
            var done = false;
            var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            var ALL_PATH_IDS = ['mapPathAlghero', 'mapPathOlbia', 'mapPathRest', 'mapPathLidl', 'mapPathScoglio', 'mapPathDolci', 'mapPathBalai'];
            var ALL_BADGE_IDS = ['mapBadgeAlghero', 'mapBadgeOlbia', 'mapBadgeRest', 'mapBadgeLidl', 'mapBadgeScoglio', 'mapBadgeDolci', 'mapBadgeBalai'];
            var ALL_DOT_IDS = ['mapDotAlghero', 'mapDotOlbia', 'mapDotRest', 'mapDotLidl', 'mapDotScoglio', 'mapDotDolci', 'mapDotBalai'];

            // Osoby z włączonym "ogranicz animacje" (prefers-reduced-motion) dostają od razu
            // gotowy, w pełni odsłonięty stan mapy — bez rysowania linii i zoomu.
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
                var wideGroup = document.getElementById('wideGroup');
                if (wideGroup) wideGroup.style.opacity = '0';
                var wrapper = document.getElementById('mapZoomWrapper');
                if (wrapper) wrapper.style.transform = 'scale(1)';
            }

            function runMapAnim() {
                if (done) return;
                done = true;

                if (reducedMotion) { showFinalStateInstantly(); return; }

                var wideSteps = [
                    { path: 'mapPathAlghero', badge: 'mapBadgeAlghero', dot: 'mapDotAlghero', delay: 100, dur: 900 },
                    { path: 'mapPathOlbia', badge: 'mapBadgeOlbia', dot: 'mapDotOlbia', delay: 300, dur: 1400 }
                ];

                var localSteps = [
                    { path: 'mapPathRest', badge: 'mapBadgeRest', dot: 'mapDotRest', delay: 80, dur: 380 },
                    { path: 'mapPathLidl', badge: 'mapBadgeLidl', dot: 'mapDotLidl', delay: 500, dur: 450 },
                    { path: 'mapPathScoglio', badge: 'mapBadgeScoglio', dot: 'mapDotScoglio', delay: 950, dur: 620 },
                    { path: 'mapPathDolci', badge: 'mapBadgeDolci', dot: 'mapDotDolci', delay: 1550, dur: 700 },
                    { path: 'mapPathBalai', badge: 'mapBadgeBalai', dot: 'mapDotBalai', delay: 2250, dur: 900 }
                ];

                function runStep(s) {
                    var p = document.getElementById(s.path);
                    var b = document.getElementById(s.badge);
                    var d = document.getElementById(s.dot);
                    if (!p) return;

                    var len = p.getTotalLength ? p.getTotalLength() : 600;
                    if (s.path === 'mapPathAlghero' || s.path === 'mapPathOlbia') len = 1000;
                    p.style.strokeDasharray = len;
                    p.style.strokeDashoffset = len;

                    setTimeout(function () {
                        p.style.transition = 'stroke-dashoffset ' + s.dur + 'ms cubic-bezier(0.35, 0, 0.3, 1)';
                        p.style.strokeDashoffset = '0';

                        setTimeout(function () {
                            // Grot strzałki dodajemy dopiero TERAZ, a nie od razu w SVG — inaczej
                            // marker-end renderuje się na końcu ścieżki natychmiast, niezależnie od
                            // animacji stroke-dashoffset, i przez chwilę "lata" w miejscu docelowym,
                            // zanim linia zdąży się tam dorysować.
                            p.setAttribute('marker-end', 'url(#mapArrow)');
                            if (b) b.style.opacity = '1';
                            if (d) {
                                d.style.transition = 'fill 0.3s, stroke 0.3s';
                                d.setAttribute('fill', 'rgba(201,168,76,0.4)');
                                d.setAttribute('stroke', '#c9a84c');
                            }
                        }, s.dur + 80);
                    }, s.delay);
                }

                // 1. Start wide animation
                wideSteps.forEach(runStep);

                // 2. Schedule zoom and local animation after wide elements finish and are read
                setTimeout(function () {
                    var wideGroup = document.getElementById('wideGroup');
                    if (wideGroup) wideGroup.style.opacity = '0';

                    var wrapper = document.getElementById('mapZoomWrapper');
                    if (wrapper) wrapper.style.transform = 'scale(1)';

                    setTimeout(function () {
                        localSteps.forEach(runStep);
                    }, 1300);
                }, 2500);
            }

            var card = document.getElementById('heroMapCard');
            if (card && 'IntersectionObserver' in window) {
                var obs = new IntersectionObserver(function (entries) {
                    if (entries[0].isIntersecting) { runMapAnim(); obs.disconnect(); }
                }, { threshold: 0.4 });
                obs.observe(card);
            } else if (card) {
                setTimeout(runMapAnim, 900);
            }
        })();
