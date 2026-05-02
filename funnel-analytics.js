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

    // ── 2. Patch goStep4 — wejście na ostatnią stronę (podsumowanie) ──
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {

            // Patch _showStep4 lub goStep4
            var _origStep4 = window._showStep4 || window.goStep4;
            var step4EntryTime = null;
            var step4MaxScroll = 0;
            var step4ScrollListener = null;
            var step4CtaVisible = false;

            function startStep4Tracking() {
                step4EntryTime = Date.now();
                step4MaxScroll = 0;
                step4CtaVisible = false;

                // Scroll tracking na kroku 4
                if (step4ScrollListener) window.removeEventListener('scroll', step4ScrollListener);
                step4ScrollListener = function() {
                    var s4 = document.getElementById('s4');
                    if (!s4 || s4.classList.contains('hidden')) return;
                    var rect = s4.getBoundingClientRect();
                    var s4Height = s4.offsetHeight || 1;
                    var scrolled = Math.max(0, -rect.top);
                    var pct = Math.min(100, Math.round(scrolled / s4Height * 100));
                    if (pct > step4MaxScroll) step4MaxScroll = pct;

                    // Czy CTA (btn-messenger/btn-whatsapp) jest widoczne
                    var cta = document.getElementById('btn-messenger');
                    if (cta) {
                        var cr = cta.getBoundingClientRect();
                        if (cr.top < window.innerHeight && cr.bottom > 0 && !step4CtaVisible) {
                            step4CtaVisible = true;
                            trackStage('Krok4_CTA_Widoczne', {});
                        }
                    }
                };
                window.addEventListener('scroll', step4ScrollListener, { passive: true });

                trackStage('Wejscie_Krok4', {});
            }

            // Zapisz czas i scroll gdy użytkownik opuszcza krok 4
            function endStep4Tracking(reason) {
                if (!step4EntryTime) return;
                var timeSec = Math.round((Date.now() - step4EntryTime) / 1000);
                trackStage('Opuszczenie_Krok4', {
                    reason: reason || 'nawigacja',
                    timeOnStep: timeSec,
                    maxScrollPct: step4MaxScroll,
                    ctaSeen: step4CtaVisible
                });
                step4EntryTime = null;
            }

            if (typeof window._showStep4 === 'function') {
                var _orig4 = window._showStep4;
                window._showStep4 = function() {
                    startStep4Tracking();
                    return _orig4.apply(this, arguments);
                };
            } else if (typeof window.goStep4 === 'function') {
                var _orig4b = window.goStep4;
                window.goStep4 = function() {
                    startStep4Tracking();
                    return _orig4b.apply(this, arguments);
                };
            }

            // Patch openMessenger i openWhatsApp — żeby wiedzieć że kliknął CTA będąc na kroku 4
            ['openMessenger', 'openWhatsApp'].forEach(function(fn) {
                if (typeof window[fn] === 'function') {
                    var _origFn = window[fn];
                    window[fn] = function() {
                        endStep4Tracking('klikniecie_cta');
                        return _origFn.apply(this, arguments);
                    };
                }
            });

            // Patch nawigacji wstecz (showStep)
            if (typeof window.showStep === 'function') {
                var _origShow = window.showStep;
                window.showStep = function(step) {
                    if (step !== 4) endStep4Tracking('powrot_do_kroku_' + step);
                    return _origShow.apply(this, arguments);
                };
            }

            // Zamknięcie strony
            window.addEventListener('beforeunload', function() {
                endStep4Tracking('zamkniecie_strony');
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

    // ── 3. Patch dayClick — śledzenie wybranych dat ──
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
                            // format YYYY-MM-DD — prosta różnica dat
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

    // ── 4. Kliknięcia przycisków ──
    document.addEventListener('click', function(e) {
        var target = e.target.closest('button, .step, .aopt');
        if (!target) return;

        var actionName = null;
        var details = {};

        if (target.classList.contains('btn-messenger')) {
            actionName = 'Klikniecie_Messenger';
        } else if (target.classList.contains('btn-whatsapp')) {
            actionName = 'Klikniecie_WhatsApp';
        } else if (target.classList.contains('btn-main') && target.id === 'btn1') {
            actionName = 'Zatwierdzenie_Krok1';
        } else if (target.classList.contains('step')) {
            actionName = 'Nawigacja_Krok_' + target.id;
        } else if (target.classList.contains('aopt')) {
            var h3 = target.querySelector('h3');
            actionName = 'Wybor_Apartamentu_' + (h3 ? h3.innerText.trim() : 'Nieznany');
        } else if (target.onclick) {
            var clickStr = target.onclick.toString();
            if (clickStr.includes('openInfoMessenger')) actionName = 'Info_Messenger';
            if (clickStr.includes('openInfoWhatsApp'))  actionName = 'Info_WhatsApp';
        }

        if (actionName) {
            details.text = target.innerText ? target.innerText.trim().substring(0, 50) : '';
            trackStage(actionName, details);
        }
    });

})();
