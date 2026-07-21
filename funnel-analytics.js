(function() {
    const BACKEND_URL = 'https://script.google.com/macros/s/AKfycbyXqRvEqbUY_YnfcP4fxjH-3bfUs_JcKHB5CcCDp8JA-ypBRXKsqpczWufWIZBfrFvE/exec';

    function generateSessionId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    let sessionData = JSON.parse(localStorage.getItem('azzurro_funnel_session')) || null;

    const utmSource = getQueryParam('utm_source');
    const refParam = getQueryParam('ref');
    const referrer = document.referrer;

    let source = 'Direct';
    if (utmSource) {
        source = utmSource;
    } else if (refParam) {
        source = refParam;
    } else if (referrer && !referrer.includes(window.location.hostname)) {
        try { source = new URL(referrer).hostname; } catch(e) { source = referrer; }
    }

    if (!sessionData || utmSource || refParam) {
        sessionData = {
            sessionId: generateSessionId(),
            source: source,
            startTime: new Date().toISOString(),
            stages: []
        };
        localStorage.setItem('azzurro_funnel_session', JSON.stringify(sessionData));
    }

    function trackStage(stageName, details) {
        details = details || {};
        const eventData = {
            sessionId: sessionData.sessionId,
            source: sessionData.source,
            stage: stageName,
            timestamp: new Date().toISOString(),
            details: details
        };

        sessionData.stages.push(eventData);
        localStorage.setItem('azzurro_funnel_session', JSON.stringify(sessionData));

        fetch(BACKEND_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(eventData)
        }).catch(function(err) { console.error('Błąd śledzenia:', err); });
    }

    window.AzzurroFunnel = {
        track: trackStage,
        getSession: function() { return sessionData; }
    };

    // ── 1. PageView z datą i dniem tygodnia ──
    window.addEventListener('load', function() {
        var now = new Date();
        trackStage('PageView', {
            path: window.location.pathname,
            visitDate: now.toISOString().substring(0, 10),
            dayOfWeek: now.toLocaleDateString('pl-PL', { weekday: 'long' })
        });
    });

    // ── 2. Krok 4 (podsumowanie) — wejście/wyjście, scroll, widoczność CTA, sekcje ──
    //
    // Jedno źródło prawdy o tym, czy krok 4 jest aktualnie widoczny: MutationObserver
    // na atrybucie class elementu #s4. Dzięki temu śledzenie działa niezależnie od tego,
    // JAKA funkcja w index.html chowa/pokazuje krok (goBack, przyciski wstecz w historii
    // przeglądarki przez popstate, itd.) — bez potrzeby łatania każdej z osobna.
    //
    // UWAGA: widoczność CTA/sekcji liczymy przez zwykłe getBoundingClientRect (nie
    // IntersectionObserver) — na realnym ruchu (w większości przeglądarki wbudowane w appkę
    // Facebook/Instagram na iOS/Androidzie) IntersectionObserver nie dawał wiarygodnych wyników
    // (nie odpalał się nawet u ~64% sesji, które faktycznie kliknęły CTA — te przeglądarki mają
    // niepełne/niestabilne wsparcie tego API). getBoundingClientRect działa wszędzie.
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            var s4 = document.getElementById('s4');
            if (!s4) return;

            var step4EntryTime = null;
            var step4MaxScroll = 0;
            var ctaSeen = { gorna: false, dolna: false };
            var sectionsSeen = {};
            var scrollMilestonesSeen = {};
            var step4ScrollListener = null;
            var scrollRafPending = false;

            var WATCH_TARGETS = [
                { selector: '#rezerwuj-wrap', kind: 'cta', key: 'gorna' },
                { selector: '#btn-messenger', kind: 'cta', key: 'dolna' },
                { selector: '.inclusions', kind: 'section', key: 'cena_zawiera' },
                { selector: '.highlights', kind: 'section', key: 'atuty' },
                { selector: '.cin-badge', kind: 'section', key: 'cin' },
                { selector: '.reviews-section', kind: 'section', key: 'opinie' },
                { selector: '.hero-map-wrap', kind: 'section', key: 'mapa' },
                { selector: '.faq-section', kind: 'section', key: 'faq' }
            ];

            function secSinceEntry() {
                return step4EntryTime ? Math.round((Date.now() - step4EntryTime) / 1000) : null;
            }

            function currentVisibleStep() {
                for (var n = 1; n <= 4; n++) {
                    var el = document.getElementById('s' + n);
                    if (el && !el.classList.contains('hidden')) return n;
                }
                return null;
            }

            function isInViewport(el) {
                var r = el.getBoundingClientRect();
                var vh = window.innerHeight || document.documentElement.clientHeight;
                // element (przynajmniej częściowo) na ekranie i ma realny rozmiar (nie display:none)
                return r.bottom > 0 && r.top < vh && (r.width > 0 || r.height > 0);
            }

            function markCtaSeen(key) {
                if (!step4EntryTime || ctaSeen[key]) return;
                ctaSeen[key] = true;
                trackStage('Krok4_CTA_Widoczne', { pozycja: key, afterSec: secSinceEntry() });
            }

            function checkVisibility() {
                if (!step4EntryTime || s4.classList.contains('hidden')) return;
                WATCH_TARGETS.forEach(function(t) {
                    if (t.kind === 'cta' ? ctaSeen[t.key] : sectionsSeen[t.key]) return;
                    var el = document.querySelector(t.selector);
                    if (!el || !isInViewport(el)) return;
                    if (t.kind === 'cta') {
                        markCtaSeen(t.key);
                    } else {
                        sectionsSeen[t.key] = true;
                        trackStage('Krok4_Sekcja_Widoczna', { sekcja: t.key, afterSec: secSinceEntry() });
                    }
                });
            }

            function startStep4Tracking() {
                step4EntryTime = Date.now();
                step4MaxScroll = 0;
                ctaSeen = { gorna: false, dolna: false };
                sectionsSeen = {};
                scrollMilestonesSeen = {};

                if (step4ScrollListener) window.removeEventListener('scroll', step4ScrollListener);
                step4ScrollListener = function() {
                    if (scrollRafPending) return;
                    scrollRafPending = true;
                    requestAnimationFrame(function() {
                        scrollRafPending = false;
                        if (s4.classList.contains('hidden')) return;
                        var rect = s4.getBoundingClientRect();
                        var s4Height = s4.offsetHeight || 1;
                        var scrolled = Math.max(0, -rect.top);
                        var pct = Math.min(100, Math.round(scrolled / s4Height * 100));
                        if (pct > step4MaxScroll) step4MaxScroll = pct;
                        [25, 50, 75, 100].forEach(function(m) {
                            if (pct >= m && !scrollMilestonesSeen[m]) {
                                scrollMilestonesSeen[m] = true;
                                trackStage('Krok4_Scroll_Milestone', { pct: m, afterSec: secSinceEntry() });
                            }
                        });
                        checkVisibility();
                    });
                };
                window.addEventListener('scroll', step4ScrollListener, { passive: true });

                trackStage('Wejscie_Krok4', {});

                // sprawdź OD RAZU, bez czekania na scroll — górne CTA jest zwykle widoczne
                // natychmiast po wejściu na krok 4, bez żadnego przewijania; requestAnimationFrame
                // czeka na to, aż przeglądarka faktycznie odmaluje layout po zdjęciu "hidden"
                requestAnimationFrame(function() { requestAnimationFrame(checkVisibility); });
            }

            function endStep4Tracking(reason) {
                if (!step4EntryTime) return;
                var timeSec = Math.round((Date.now() - step4EntryTime) / 1000);
                trackStage('Opuszczenie_Krok4', {
                    reason: reason || 'nawigacja',
                    timeOnStep: timeSec,
                    maxScrollPct: step4MaxScroll,
                    ctaGornaWidoczna: ctaSeen.gorna,
                    ctaDolnaWidoczna: ctaSeen.dolna,
                    sekcjeZobaczone: Object.keys(sectionsSeen)
                });
                step4EntryTime = null;
                if (step4ScrollListener) { window.removeEventListener('scroll', step4ScrollListener); step4ScrollListener = null; }
            }

            // ── wejście/wyjście: jedno źródło prawdy — zmiana klasy "hidden" na #s4 ──
            var wasHidden = s4.classList.contains('hidden');
            var s4ClassObserver = new MutationObserver(function() {
                var isHidden = s4.classList.contains('hidden');
                if (isHidden && !wasHidden) {
                    // CTA (WhatsApp/Messenger) nie zmienia kroku — ten branch łapie wyłącznie
                    // powrót do wcześniejszego kroku (przyciskiem "Zmień..." albo cofnięciem w przeglądarce)
                    var target = currentVisibleStep();
                    endStep4Tracking(target ? ('powrot_do_kroku_' + target) : 'nawigacja');
                } else if (!isHidden && wasHidden) {
                    startStep4Tracking();
                }
                wasHidden = isHidden;
            });
            s4ClassObserver.observe(s4, { attributes: true, attributeFilter: ['class'] });

            // jeśli krok 4 jest już widoczny w momencie inicjalizacji (np. powrót przez historię przeglądarki)
            if (!wasHidden) startStep4Tracking();

            // ── dowód "na pewno widział" wprost z kliknięcia — w fazie CAPTURE, czyli ZANIM
            // odpali się własny onclick przycisku (openMessenger/openWhatsApp), które od razu
            // wysyłają Opuszczenie_Krok4. Bez tego, przy bardzo szybkim kliknięciu (a to właśnie
            // robią najbardziej zdecydowani, konwertujący użytkownicy) checkVisibility() z
            // requestAnimationFrame mógł nie zdążyć się wykonać przed nawigacją do WhatsAppa —
            // stąd raport widział "CTA niewidoczne" nawet u realnych konwersji.
            document.addEventListener('click', function(e) {
                var btn = e.target.closest('.btn-messenger, .btn-whatsapp');
                if (!btn) return;
                var isTop = !!btn.closest('#rezerwuj-wrap');
                markCtaSeen(isTop ? 'gorna' : 'dolna');
            }, true);

            // ── kliknięcie CTA kończy pomiar z właściwym powodem, zanim otworzy się WhatsApp/Messenger ──
            ['openMessenger', 'openWhatsApp'].forEach(function(fn) {
                if (typeof window[fn] === 'function') {
                    var _origFn = window[fn];
                    window[fn] = function() {
                        endStep4Tracking('klikniecie_cta');
                        return _origFn.apply(this, arguments);
                    };
                }
            });

            // ── zamknięcie/opuszczenie strony ──
            // beforeunload samo w sobie jest zawodne na mobile (zwłaszcza przeglądarki wbudowane
            // w appki typu Facebook/Instagram często go w ogóle nie odpalają) — pagehide i
            // visibilitychange są zalecanym, dużo bardziej niezawodnym sygnałem na tych platformach.
            // endStep4Tracking() jest bezpieczne do wywołania wielokrotnie/z kilku źródeł na to samo
            // opuszczenie (pierwsze wywołanie zeruje step4EntryTime, kolejne są no-opem).
            window.addEventListener('beforeunload', function() {
                endStep4Tracking('zamkniecie_strony');
            });
            window.addEventListener('pagehide', function() {
                endStep4Tracking('zamkniecie_strony');
            });
            document.addEventListener('visibilitychange', function() {
                if (document.visibilityState === 'hidden') {
                    endStep4Tracking('zamkniecie_strony');
                }
            });

        }, 1500);
    });

    // ── 3. Patch goStep2 — wejście do kalendarza ──
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            if (typeof window.goStep2 === 'function') {
                var _orig = window.goStep2;
                window.goStep2 = function() {
                    trackStage('Wejscie_Kalendarz', {
                        adults: window.adults || null,
                        kids: window.kids || null
                    });
                    return _orig.apply(this, arguments);
                };
            }
        }, 1500);
    });

    // ── 4. Patch dayClick — śledzenie wybranych dat ──
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            if (typeof window.dayClick === 'function') {
                var _origDay = window.dayClick;
                window.dayClick = function(dk) {
                    var result = _origDay.apply(this, arguments);
                    setTimeout(function() {
                        var start = window.selStart || null;
                        var end   = window.selEnd   || null;
                        if (start && !end) {
                            trackStage('Data_CheckIn', { checkIn: start });
                        } else if (start && end) {
                            var nights = Math.round(
                                (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)
                            );
                            trackStage('Data_CheckOut', {
                                checkIn:  start,
                                checkOut: end,
                                nights:   nights
                            });
                        }
                    }, 50);
                    return result;
                };
            }
        }, 1500);
    });

    // ── 5. Patch selectOpt — realny wybór apartamentu (przycisk "Wybierz" ma stopPropagation,
    //      więc globalny nasłuchiwacz kliknięć niżej NIGDY go nie widzi — trzeba złapać u źródła) ──
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            if (typeof window.selectOpt === 'function') {
                var _origSelect = window.selectOpt;
                window.selectOpt = function(o, div) {
                    if (o && !o.unavail) {
                        trackStage('Wybor_Apartamentu', { id: o.id, name: o.name });
                    }
                    return _origSelect.apply(this, arguments);
                };
            }
        }, 1500);
    });

    // ── 6. Kliknięcia przycisków / elementów w całym lejku ──
    document.addEventListener('click', function(e) {
        var target = e.target.closest(
            'button, .step, .aopt, .btn-back, .faq-q, .reviews-btn, #btn-waitlist'
        );
        if (!target) return;

        var actionName = null;
        var details = {};

        if (target.classList.contains('btn-messenger')) {
            actionName = 'Klikniecie_Messenger';
        } else if (target.classList.contains('btn-whatsapp')) {
            actionName = 'Klikniecie_WhatsApp';
        } else if (target.classList.contains('btn-main') && target.id === 'btn1') {
            actionName = 'Zatwierdzenie_Krok1';
        } else if (target.id === 'btn-waitlist') {
            actionName = 'Klikniecie_Waitlist'; // sygnał niezdecydowania — "jeszcze nie teraz"
        } else if (target.classList.contains('btn-back')) {
            actionName = 'Klikniecie_Wstecz';
            var m = (target.getAttribute('onclick') || '').match(/goBack\((\d+)\)/);
            details.doKroku = m ? Number(m[1]) : null;
        } else if (target.classList.contains('faq-q')) {
            actionName = 'Klikniecie_FAQ';
            var qSpan = target.querySelector('span');
            details.pytanie = qSpan ? qSpan.textContent.trim() : '';
            // nasłuchiwacz na document odpala się PO inline onclick="faqToggle(this)" (bąbelkowanie),
            // więc klasa "open" tu odzwierciedla już nowy stan po przełączeniu
            details.otwarte = !!(target.closest('.faq-item') && target.closest('.faq-item').classList.contains('open'));
        } else if (target.classList.contains('reviews-btn')) {
            actionName = 'Klikniecie_Opinie_Nawigacja';
            details.kierunek = target.id === 'rev-prev' ? 'poprzednia' : 'nastepna';
        } else if (target.classList.contains('step')) {
            actionName = 'Nawigacja_Krok';
            details.krok = target.id || null;
        } else if (target.classList.contains('aopt')) {
            var aname = target.querySelector('.aname');
            actionName = 'Rozwiniecie_Apartamentu'; // rozwinięcie karty — NIE jest to wybór (ten łapie patch selectOpt)
            details.name = aname ? aname.innerText.trim() : 'Nieznany';
        } else if (target.classList.contains('cin-copy-btn')) {
            actionName = 'Klikniecie_CIN';
            details.akcja = 'kopiuj';
        } else if (target.classList.contains('cin-verify-btn')) {
            actionName = 'Klikniecie_CIN';
            details.akcja = 'sprawdz';
        } else if (target.onclick) {
            var clickStr = target.onclick.toString();
            if (clickStr.includes('openInfoMessenger')) actionName = 'Info_Messenger';
            if (clickStr.includes('openInfoWhatsApp'))  actionName = 'Info_WhatsApp';
        }

        if (actionName) {
            if (details.text === undefined) details.text = target.innerText ? target.innerText.trim().substring(0, 50) : '';
            trackStage(actionName, details);
        }
    });

})();
