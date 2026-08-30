        (function () {
            var done = false;

            function runMapAnim() {
                if (done) return;
                done = true;

                var wideSteps = [
                    { path: 'mapPathAlghero', badge: 'mapBadgeAlghero', dot: 'mapDotAlghero', delay: 100, dur: 1200 },
                    { path: 'mapPathOlbia', badge: 'mapBadgeOlbia', dot: 'mapDotOlbia', delay: 300, dur: 2000 }
                ];

                var localSteps = [
                    { path: 'mapPathRest', badge: 'mapBadgeRest', dot: 'mapDotRest', delay: 100, dur: 450 },
                    { path: 'mapPathLidl', badge: 'mapBadgeLidl', dot: 'mapDotLidl', delay: 700, dur: 550 },
                    { path: 'mapPathScoglio', badge: 'mapBadgeScoglio', dot: 'mapDotScoglio', delay: 1350, dur: 780 },
                    { path: 'mapPathDolci', badge: 'mapBadgeDolci', dot: 'mapDotDolci', delay: 2230, dur: 880 },
                    { path: 'mapPathBalai', badge: 'mapBadgeBalai', dot: 'mapDotBalai', delay: 3210, dur: 1150 }
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
                    }, 1500);
                }, 3300);
            }

            var card = document.getElementById('heroMapCard');
            if (card && 'IntersectionObserver' in window) {
                var obs = new IntersectionObserver(function (entries) {
                    if (entries[0].isIntersecting) { runMapAnim(); obs.disconnect(); }
                }, { threshold: 0.6 });
                obs.observe(card);
            } else if (card) {
                setTimeout(runMapAnim, 900);
            }
        })();
