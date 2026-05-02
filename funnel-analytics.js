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
    if (utmSource) source = utmSource;
    else if (refParam) source = refParam;
    else if (referrer && !referrer.includes(window.location.hostname)) {
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

    function trackStage(stageName, details = {}) {
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
        }).catch(err => console.error('Błąd śledzenia:', err));
    }

    window.AzzurroFunnel = {
        track: trackStage,
        getSession: () => sessionData
    };

    // ── 1. PageView z datą wejścia ──
    window.addEventListener('load', () => {
        const now = new Date();
        trackStage('PageView', {
            path: window.location.pathname,
            dayOfWeek: now.toLocaleDateString('pl-PL', { weekday: 'long' }),
            visitDate: now.toISOString().substring(0, 10)  // YYYY-MM-DD
        });
    });

    // ── 2. Patch goStep2 — śledzenie wejścia do kalendarza ──
    document.addEventListener('DOMContentLoaded', () => {
        // Czekamy aż strona załaduje swoje funkcje
        setTimeout(() => {
            if (typeof window.goStep2 === 'function') {
                const _originalGoStep2 = window.goStep2;
                window.goStep2 = function() {
                    // Pobierz liczbę gości z formularza (zmienna globalna strony)
                    const adults = window.adults || null;
                    const kids = window.kids || null;
                    trackStage('Wejscie_Kalendarz', {
                        adults: adults,
                        kids: kids
                    });
                    return _originalGoStep2.apply(this, arguments);
                };
            }
        }, 1500);
    });

    // ── 3. Patch dayClick — śledzenie zaznaczonych dat ──
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (typeof window.dayClick === 'function') {
                const _originalDayClick = window.dayClick;
                window.dayClick = function(dk) {
                    const result = _originalDayClick.apply(this, arguments);
                    // Po kliknięciu odczytaj stan z globalnych zmiennych strony
                    setTimeout(() => {
                        const start = window.selStart || null;
                        const end = window.selEnd || null;
                        if (start && !end) {
                            // Wybrano check-in
                            trackStage('Data_CheckIn', { checkIn: start });
                        } else if (start && end) {
                            // Wybrano pełny zakres
                            const nights = Math.round(
                                (new Date(end.slice(0,4), end.slice(4,6)-1, end.slice(6,8)) -
                                 new Date(start.slice(0,4), start.slice(4,6)-1, start.slice(6,8)))
                                / (1000*60*60*24)
                            );
                            trackStage('Data_CheckOut', {
                                checkIn: start,
                                checkOut: end,
                                nights: nights
                            });
                        }
                    }, 50);
                    return result;
                };
            }
        }, 1500);
    });

    // ── 4. Kliknięcia przycisków (Messenger, WhatsApp, apartamenty) ──
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button, .step, .aopt');
        if (!target) return;

        let actionName = null;
        let details = {};

        if (target.classList.contains('btn-messenger')) {
            actionName = 'Klikniecie_Messenger';
        } else if (target.classList.contains('btn-whatsapp')) {
            actionName = 'Klikniecie_WhatsApp';
        } else if (target.classList.contains('btn-main') && target.id === 'btn1') {
            actionName = 'Zatwierdzenie_Krok1';
        } else if (target.classList.contains('step')) {
            actionName = 'Nawigacja_Krok_' + target.id;
        } else if (target.classList.contains('aopt')) {
            const h3 = target.querySelector('h3');
            actionName = 'Wybor_Apartamentu_' + (h3 ? h3.innerText.trim() : 'Nieznany');
        }

        if (actionName) {
            details.text = target.innerText ? target.innerText.trim().substring(0, 50) : '';
            trackStage(actionName, details);
        }
    });
})();
