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

    // ── 2. Patch goStep2 — wejście do kalendarza ──
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
