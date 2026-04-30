(function() {
    // URL backendu z Google Apps Script. 
    // UWAGA: Należy podmienić ten URL po wdrożeniu skryptu backend.gs
    const BACKEND_URL = 'TWOJ_APPS_SCRIPT_WEB_APP_URL';
    
    function generateSessionId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }
    
    let sessionData = JSON.parse(localStorage.getItem('azzurro_funnel_session')) || null;
    
    // Sprawdzanie źródła ruchu
    const utmSource = getQueryParam('utm_source');
    const refParam = getQueryParam('ref');
    const referrer = document.referrer;
    
    let source = 'Direct';
    if (utmSource) {
        source = utmSource;
    } else if (refParam) {
        source = refParam;
    } else if (referrer && !referrer.includes(window.location.hostname)) {
        try {
            source = new URL(referrer).hostname;
        } catch(e) {
            source = referrer;
        }
    }

    // Nowa sesja jeśli nowe źródło
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
        
        if (BACKEND_URL && BACKEND_URL !== 'TWOJ_APPS_SCRIPT_WEB_APP_URL') {
            fetch(BACKEND_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventData)
            }).catch(err => console.error('Błąd śledzenia:', err));
        } else {
            console.log("Trackowane w lejku:", eventData);
        }
    }
    
    window.AzzurroFunnel = {
        track: trackStage,
        getSession: () => sessionData
    };

    // Auto-track PageView
    window.addEventListener('load', () => {
        trackStage('PageView', { path: window.location.pathname });
    });

    // Delegacja zdarzeń do śledzenia kliknięć na etapy lejka
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button, .step, .aopt');
        if (!target) return;
        
        let actionName = null;
        
        if (target.classList.contains('btn-messenger')) actionName = 'Klikniecie_Messenger';
        else if (target.classList.contains('btn-whatsapp')) actionName = 'Klikniecie_WhatsApp';
        else if (target.classList.contains('btn-main') && target.id === 'btn1') actionName = 'Zatwierdzenie_Krok1';
        else if (target.classList.contains('step')) actionName = 'Nawigacja_Krok_' + target.id;
        else if (target.classList.contains('aopt')) {
            const h3 = target.querySelector('h3');
            actionName = 'Wybor_Apartamentu_' + (h3 ? h3.innerText : 'Nieznany');
        }
        else if (target.onclick) {
            const clickStr = target.onclick.toString();
            if (clickStr.includes('openInfoMessenger')) actionName = 'Info_Messenger';
            if (clickStr.includes('openInfoWhatsApp')) actionName = 'Info_WhatsApp';
            if (clickStr.includes('goStep2')) actionName = 'Przejscie_Krok2';
        }
        
        if (actionName) {
            trackStage(actionName, { text: target.innerText ? target.innerText.trim().substring(0, 30) : '' });
        }
    });
})();
