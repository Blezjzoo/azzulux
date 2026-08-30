        /* ============================================================
           TRANSLATIONS
        ============================================================ */
        var LANGS = {
            pl: {
                h1: 'Sprawdź<br><em>dostępność</em>',
                tagline: 'Wybierz skład grupy i daty pobytu',
                step1: 'Goście', step2: 'Daty', step3: 'Apartament', step4: 'Podsumowanie',
                s1label: 'Krok 1 z 4', s1title: 'Kto przyjeżdża?',
                s1sub: '',
                s2label: 'Krok 2 z 4', s2title: 'Zaznacz datę przyjazdu, a następnie datę wyjazdu.',
                s2sub: '',
                s3label: 'Krok 3 z 4', s3title: 'Wybierz apartament', s4label: 'Krok 4 z 4', s4title: 'Podsumowanie rezerwacji',
                s3sub: '',
                adultsLbl: 'Liczba dorosłych gości', kidsLbl: 'Dzieci do lat 12',
                adDescDef: '1–11 gości', kdDescDef: 'Wybierz liczbę dzieci',
                btn1: 'Dalej', back1: 'Zmień skład grupy', back2: 'Zmień daty', back3: 'Zmień apartament',
                loading: 'Ładowanie...',
                legFree: 'Dostępny', legBusy: 'Zarezerwowany', legSel: 'Twój pobyt',
                minStay: '⚠ Lipiec i sierpień: minimalny pobyt 5 nocy',
                minWarn: '⚠ W lipcu i sierpniu minimalny pobyt wynosi 5 nocy. Wybierz co najmniej 5 nocy.',
                hintArrival: 'Wybierz datę przyjazdu', hintDepart: 'Zaznacz datę wyjazdu.',
                hintBusy: 'Wybrany termin jest zajęty we wszystkich apartamentach.',
                hintAlt: 'Zajęte. W tym dniu dostępne: ',
                hintBusyDay: 'Zajęte we wszystkich apartamentach.',
                hintAltRange: 'Wybrany termin jest zajęty. Dostępne w tym czasie: ',
                legHalf: 'Inne apartamenty dostępne',
                btnChangeApt: 'Zmień apartament',
                alertOtherApts: 'W tym terminie dostępne są inne apartamenty:',
                sumTitle: 'Podsumowanie rezerwacji', sumDate: 'Pobyt', sumNights: 'Liczba nocy', sumApt: 'Apartament',
                sumKids: 'Dostawki', sumTotal: 'Łącznie', sumDeposit: '+ Kaucja zwrotna',
                depositNote: 'Kaucja jest pobierana przy zameldowaniu i zwracana w całości po wymeldowaniu — nie jest wliczona w cenę pobytu.',
                inclTitle: 'Co zawiera cena?', incl1: 'Ręczniki i pościel', incl2: 'Sprzątanie końcowe', incl3: 'Bez opłaty klimatycznej', incl4: 'Pralka do dyspozycji',
                hlTitle: 'Dlaczego warto wybrać nas?',
                hl1: '25 minut od lotniska Alghero (Porto Torres)',
                hl2: '5 minut spacerem do plaży',
                hl3: 'Centrum miasta — kawiarnie, restauracje i sklepy tuż pod ręką',
                hl4: 'Bezpłatny parking przy obiekcie',
                hl5: 'Transfer z/na lotnisko — zaprzyjaźniony taksówkarz odbierze i odwiezie gości na życzenie (55€ w jedną stronę, do 4 osób)',
                cinTitle: 'Legalny wynajem krótkoterminowy we Włoszech',
                cinText: 'Nasz obiekt jest oficjalnie zarejestrowany i posiada włoski numer CIN nadany przez Ministerstwo Turystyki. Każdy gość jest zgłaszany do odpowiednich organów zgodnie z włoskim prawem — rezerwuj bez obaw.',
                cinBtn: 'Sprawdź CIN', cinCopy: 'Kopiuj',
                btnReserve: 'Rezerwuj', btnMsg: 'Rezerwuj przez Messenger', btnWa: 'Rezerwuj przez WhatsApp', contactNote: '1 klik i wysyłasz gotową wiadomość (bez pisania).',
                btnInfo: 'Dowiedz się więcej', popupTitle: 'Skontaktuj się z nami', popupSub: 'Wybierz aplikację, przez którą chcesz napisać', popupBtnMsg: 'Messenger', popupBtnWa: 'WhatsApp', popupCancel: 'Anuluj',
                optFor: 'Dostępne opcje dla', adult1: ' gościa', adults: ' gości', kid1: ' dostawka', kids: ' dostawki',
                calA1: ' gość', calAN: ' gości', calK1: ' dostawka', calKN: ' dostawki',
                apt1: 'Apartament nr 1', apt2: 'Apartament nr 2', apt3: 'Apartament nr 3',
                apt12: 'Apt 1 + Apt 2', apt13: 'Apt 1 + Apt 3', apt23: '2 apartamenty — do 6 osób', aptL: '3 apartamenty — do 8 osób',
                t1a: 'dla 2 osób', t1b: 'taras na dachu', t3a: 'dla 2 osób', t3b: 'z tarasem',
                t2a: 'dla 4 osób', t2b: 'z balkonem', t12a: 'dla 2+4 osób', t12b: 'Apt 2 z balkonem', t13a: 'dla 2+2 osób', t13b: 'Apt 3 z tarasem',
                t23a: 'Apt 2 z balkonem + Apt 3 z tarasem', tL: 'Apt 1 + Apt 2 + Apt 3',
                bed1: '+ 1 dostawka', bedN: '+ {n} dostawki', orLbl: '— lub —',
                months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
                wdays: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'],
                adDesc1: ' gość', adDesc2: ' gości', adDescN: ' gości',
                kdPre: 'maks. ', kdBed1: ' dostawka w apartamencie', kdBedN: ' dostawki w apartamencie', kdFor: '',
                n1: ' noc', n2: ' noce', n5: ' nocy',
                mHi: 'Dzień dobry,', mInt: 'jestem zainteresowany/a ', mIn: ' w terminie ',
                mFrom: ' od ', mG: ' liczba gości: ', mAsk: '. Proszę o informacje dotyczące rezerwacji.',
                mPrice: ' Wyliczona cena za ten pobyt: ',
                errLoad: 'Nie udało się wczytać kalendarza. Odśwież stronę i spróbuj ponownie.',
                tipText: 'Wskazówka: rodzina 2+1? Wybierz 2 gości i 1 dostawkę — to tańsza opcja niż rezerwacja większego apartamentu dla 3 osób. Jeśli dziecko woli własne łóżko, wybierz po prostu 3 gości.',
                selectBtn: 'Sprawdź cenę →',
                gatePeek: 'Zerknij, jak wygląda apartament',
                salesTitle: 'Poczuj prawdziwie włoski klimat',
                sf1: 'Samo centrum Porto Torres',
                sf2: 'Starożytne wykopaliska i Bazylika',
                sf3: '5 min do plaży Balai, blisko La Pelosa',
                sf4: 'Mniej turystów, lokalna atmosfera',
                sc1t: 'Krystaliczna woda i rajskie plaże',
                sc1d: 'Zaledwie 5 minut od apartamentów znajdziesz przepiękną plażę Balai. To również idealna baza wypadowa na słynną La Pelosa!',
                sc2t: 'Odkryj prawdziwą Sardynię',
                sc2d: 'Mieszkaj w samym centrum Porto Torres. Odkrywaj starożytne rzymskie wykopaliska, monumentalną Bazylikę i ciesz się autentycznym włoskim życiem bez tłumów turystów.',
                btnUp: '↑ Wróć na górę i sprawdź termin',
                bestValue: 'Najkorzystniejsza opcja', sofa: 'kanapa',
                heroVpUnmute: 'Kliknij, aby zobaczyć lokalizację',
                copyToastMsg: 'Wiadomość skopiowana — jeśli czat otworzy się pusty, po prostu ją wklej.',
                mhTitle: 'Zaraz otworzy się Messenger',
                mhText: 'Twoja wiadomość jest już skopiowana. Messenger czasem otwiera się z kilkusekundowym opóźnieniem — to normalne, po prostu <strong>poczekaj chwilę</strong>, aż wczyta się czat z nami.',
                mhDemoCaption: 'Jeśli okno czatu będzie puste, przytrzymaj pole tekstowe i wybierz „Wklej".',
                mhTip: '💡 Jeśli zamiast czatu z nami zobaczysz listę rozmów, zaczekaj kilka sekund, a czat z nami się rozpocznie.',
                mhConfirm: 'Rozumiem, otwórz Messenger',
                mhPaste: 'Wklej',
                mixAlertInfo: 'Mamy apartamenty w tym lub podobnym terminie.<br>Skontaktuj się z nami, a dobierzemy najlepszą opcję!',
                mixBtnMsg: 'Napisz na Messenger',
                mixBtnWa: 'Napisz na WhatsApp',
                mMixTxt: ' Jesteśmy zainteresowani pobytem w terminie {dates}. Dostępność pokazuje różne apartamenty w tym czasie. Proszę o kontakt i propozycję.',
                lmTitle: 'Oferta Last Minute!',
                lmSub: 'Wolne terminy w bieżącym miesiącu dostępne od zaraz — rezerwuj szybko i skorzystaj z tych dat!',
                lmSumTitle: 'Oferta Last Minute!',
                lmSumSub: 'Wybrany termin jest dostępny od zaraz. Zarezerwuj szybko — te daty mogą zniknąć w każdej chwili!',
                priceCheckHint: 'Aby sprawdzić cenę — wybierz ilość osób i terminy pobytu'
            },
            en: {
                h1: 'Check<br><em>availability</em>',
                tagline: 'Tell us who\'s coming and when',
                step1: 'Guests', step2: 'Dates', step3: 'Apartment', step4: 'Summary',
                s1label: 'Step 1 of 4', s1title: 'Who\'s coming?',
                s1sub: '',
                s2label: 'Step 2 of 4', s2title: 'Select your check-in date, then your check-out date.',
                s2sub: '',
                s3label: 'Step 3 of 4', s3title: 'Choose your apartment', s4label: 'Step 4 of 4', s4title: 'Booking summary',
                s3sub: '',
                adultsLbl: 'Adults', kidsLbl: 'Children (up to 12 yrs)',
                adDescDef: '1–11 guests', kdDescDef: 'Select number of children',
                btn1: 'Continue', back1: 'Change guests', back2: 'Change dates', back3: 'Change apartment',
                loading: 'Loading...',
                legFree: 'Available', legBusy: 'Already booked', legSel: 'Your stay',
                minStay: '⚠ July & August: minimum stay is 5 nights',
                minWarn: '⚠ A minimum stay of 5 nights applies in July and August. Please select at least 5 nights.',
                hintArrival: 'Select your check-in date', hintDepart: 'Select departure date.',
                hintBusy: 'The selected period is booked in all apartments.',
                hintAlt: 'Booked. Available on this date: ',
                hintBusyDay: 'Fully booked in all apartments.',
                hintAltRange: 'Dates booked. Available for this period: ',
                legHalf: 'Other apartments available',
                btnChangeApt: 'Change apartment',
                alertOtherApts: 'Other apartments are available during this period:',
                sumTitle: 'Booking summary', sumDate: 'Stay', sumNights: 'Nights', sumApt: 'Apartment',
                sumKids: 'Extra beds', sumTotal: 'Total', sumDeposit: '+ Refundable security deposit',
                depositNote: 'The security deposit is collected at check-in and fully refunded at check-out — it is not included in the accommodation price.',
                inclTitle: "What's included", incl1: 'Towels and bed linen', incl2: 'End-of-stay cleaning', incl3: 'No tourist tax', incl4: 'Washing machine available',
                hlTitle: 'Why stay with us?',
                hl1: '25 minutes from Alghero Airport (Porto Torres)',
                hl2: '5-minute walk to the beach',
                hl3: 'Right in the heart of the city — cafés, restaurants and shops on your doorstep',
                hl4: 'Free parking on site',
                hl5: 'Airport transfers available — our trusted taxi driver will pick you up and drop you off on request (55€ one way, up to 4 people)',
                cinTitle: 'Officially registered holiday rental in Italy',
                cinText: 'Our property is officially registered and holds the Italian identification number (CIN), issued by the Ministry of Tourism. Every guest is reported to the relevant authorities in accordance with Italian law — book with complete confidence.',
                cinBtn: 'Verify CIN', cinCopy: 'Copy',
                btnReserve: 'Book now', btnMsg: 'Message us on Messenger', btnWa: 'Message us on WhatsApp', contactNote: "We'll get back to you quickly and sort out all the details.",
                btnInfo: 'Learn more', popupTitle: 'Contact us', popupSub: 'Choose the app you want to write through', popupBtnMsg: 'Messenger', popupBtnWa: 'WhatsApp', popupCancel: 'Cancel',
                optFor: 'Available options for', adult1: ' guest', adults: ' guests', kid1: ' extra bed', kids: ' extra beds',
                calA1: ' guest', calAN: ' guests', calK1: ' extra bed', calKN: ' extra beds',
                apt1: 'Apartment No. 1', apt2: 'Apartment No. 2', apt3: 'Apartment No. 3',
                apt12: 'Apt 1 + Apt 2', apt13: 'Apt 1 + Apt 3', apt23: '2 apartments — up to 6 guests', aptL: '3 apartments — up to 8 guests',
                t1a: 'for 2 guests', t1b: 'rooftop terrace', t3a: 'for 2 guests', t3b: 'with terrace',
                t2a: 'for 4 guests', t2b: 'with balcony', t12a: 'for 2+4 guests', t12b: 'Apt 2 with balcony', t13a: 'for 2+2 guests', t13b: 'Apt 3 with terrace',
                t23a: 'Apt 2 with balcony + Apt 3 with terrace', tL: 'Apt 1 + Apt 2 + Apt 3',
                bed1: '+ 1 extra bed', bedN: '+ {n} extra beds', orLbl: '— or —',
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                wdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                adDesc1: ' guest', adDesc2: ' guests', adDescN: ' guests',
                kdPre: 'max. ', kdBed1: ' extra bed in the apartment', kdBedN: ' extra beds in the apartment', kdFor: '',
                n1: ' night', n2: ' nights', n5: ' nights',
                mHi: 'Hello,', mInt: "I'm interested in ", mIn: ' from ',
                mFrom: ' from ', mG: ', number of guests: ', mAsk: '. Could you please send me booking details?',
                mPrice: ' Estimated price for this stay: ',
                errLoad: 'Could not load the calendar. Please refresh the page and try again.',
                tipText: 'Tip: travelling as 2+1? Choose 2 guests and 1 extra bed — better value than a larger apartment for 3. If your child prefers their own proper bed, just select 3 guests.',
                selectBtn: 'Select →',
                gatePeek: 'Take a peek at the apartment',
                salesTitle: 'Experience authentic Italian charm',
                sf1: 'Right in the heart of Porto Torres',
                sf2: 'Ancient ruins and the Basilica',
                sf3: '5 min to Balai beach, near La Pelosa',
                sf4: 'Fewer tourists, local atmosphere',
                sc1t: 'Crystal-clear waters and paradise beaches',
                sc1d: 'Just 5 minutes from the apartments you\'ll find the stunning Balai beach — and it\'s also the perfect base for a trip to the famous La Pelosa!',
                sc2t: 'Discover the real Sardinia',
                sc2d: 'Stay right in the centre of Porto Torres. Explore ancient Roman ruins, the magnificent Basilica, and enjoy authentic Italian life away from the tourist crowds.',
                btnUp: '↑ Back to top — check availability',
                bestValue: 'Best value', sofa: 'sofa bed',
                heroVpUnmute: 'Click to see the location',
                copyToastMsg: 'Message copied — if the chat opens empty, just paste it.',
                mhTitle: 'Messenger is about to open',
                mhText: 'Your message is already copied. Messenger sometimes takes a few seconds to open — that\'s normal, just <strong>wait a moment</strong> for the chat with us to load.',
                mhDemoCaption: 'If the chat opens empty, press and hold the text field and choose "Paste".',
                mhTip: '💡 If you see your conversation list instead of a chat with us, just wait a few seconds and the chat with us will start.',
                mhConfirm: 'Got it, open Messenger',
                mhPaste: 'Paste',
                mixAlertInfo: 'We have apartments available across this or similar dates.<br>Contact us so we can arrange the best option for you!',
                mixBtnMsg: 'Message on Messenger',
                mixBtnWa: 'Message on WhatsApp',
                mMixTxt: ' We are interested in staying between {dates}. The availability shows a mix of apartments. Please contact us with a proposal.',
                heroWhy: 'Why us?', luxuryText: 'High standard · Close to the beach',
                ptEyebrow: 'Sardinia, unfiltered',
                ptHeading: 'Which location<br>in Sardinia is<br><em>best?</em>',
                ptP1: 'Everyone will naturally promote their own place... But the truth is that <strong>it all depends on what matters most to you.</strong>',
                ptP2: "Many towns in northern Sardinia are typical tourist resorts. In winter everything is closed — shops, restaurants, bars. They open only in summer, specifically for tourists. Prices are higher, quality is often lower... because you're a tourist.",
                ptP3: "No car? Sometimes you can't even buy bread without driving to a shop. <strong>Alghero, Olbia?</strong> Great — if you enjoy crowds and inflated prices.",
                ptP4: "That's why <strong>the best places are the ones nobody talks about.</strong> That's where you can feel the real magic of Sardinia.",
                ptP5: '<strong>Porto Torres</strong> is the perfect example. Life goes on here all year round, so you have access to everything you need.',
                ptHi1: 'Restaurants — <strong>1 minute</strong> walk',
                ptHi2: 'Lidl — <strong>3 minutes</strong> walk',
                ptHi3: 'Cafes, bars and restaurants — literally <strong>50 metres</strong>',
                ptHi4: 'Beach — <strong>5 minutes</strong> and you are by the water',
                ptHi5: 'Harbour, free beaches and a <strong>beautiful promenade</strong> along the coast — cliffs and charming coves',
                ptHi6: 'Real family-run restaurants — local prices, not tourist prices. From just <strong>4.5€</strong>',
                ptClosing: 'Porto Torres is the perfect place if you want to relax<br>and feel the real Sardinian way of life.',
                sc1Alt: 'Beach in Sardinia', sc2Alt: 'Italian town',
                mapEyebrow: '✦ &nbsp; nearby attractions &nbsp; ✦',
                mapRestTitle: '🍝 Restaurants', mapRestTime: '1 min',
                mapLidlTime: '3 min', mapScoglioTime: '5 min walk', mapDolciTime: '8 min walk', mapBalaiTime: '20 min walk',
                mapSeaLabel: 'S E A',
                mapAlgheroTitle: '✈️ Alghero Airport', mapAlgheroTime: '25 min drive',
                mapOlbiaTitle: '✈️ Olbia Airport', mapOlbiaTime: '1h 15m drive',
                mapFoot: 'Porto Torres · Sardinia',
                faqTitle: 'Frequently asked questions',
                faqQ1: 'Do you rent cars? Can you recommend any car rental companies?',
                faqA1: 'We recommend <a href="https://discovercars.com" target="_blank" rel="noopener">discovercars.com</a> — a comparison site for all available rental companies. You can pick up the car straight at the airport, so it is very convenient. We have used this site in many countries across Europe and Asia and everything has always gone smoothly. It is worth checking the credit/debit card requirements, because rental prices can vary depending on the type of card you have.',
                faqQ2: 'Is airport transfer available?',
                faqA2: 'Our trusted taxi driver offers transfers from Alghero Airport for 55 euro one way for up to 4 people.',
                faqQ3: 'Do you have an iron? A washing machine?',
                faqA3: 'Yes — all guests have access to a shared washing machine and iron.',
                faqQ4: 'Is parking included?',
                faqA4: 'There is a large free parking area right next to our building.',
                faqQ5: 'Which floor is the apartment on?',
                faqA5: 'Our building has one upper floor. There are commercial premises on the ground floor and our apartments upstairs. There is nobody else in the building apart from our guests.',
                faqQ6: 'Do you organise tours?',
                faqA6: 'We recommend <a href="https://www.getyourguide.com" target="_blank" rel="noopener">getyourguide.com</a> — a marketplace for tours across Sardinia, a bit like Booking for activities. You can check the detailed itinerary, dates and prices for trips all over the island there.',
                photo: 'Photo',
                lmTitle: 'Last Minute offer!',
                lmSub: 'Dates available this month — book now before they are gone!',
                lmSumTitle: 'Last Minute offer!',
                lmSumSub: 'Your selected dates are available right now. Book quickly — these dates could go at any time!',
                priceCheckHint: 'To check the price — select the number of guests and your dates'
            }
        };

        /* ── safe helpers ── */
        function $id(id) { return document.getElementById(id); }
        function setTxt(id, v) { var e = $id(id); if (e) e.textContent = v; }
        function setHtml(id, v) { var e = $id(id); if (e) e.innerHTML = v; }
        function setAttr(id, attr, v) { var e = $id(id); if (e) e.setAttribute(attr, v); }

        /* ── state ── */
        var urlLang = new URLSearchParams(window.location.search).get('lang');
        var lang = (urlLang && LANGS[urlLang]) ? urlLang : 'pl';
        var T = LANGS[lang];
        var adults = 0, kids = 0, selOpt = null, cy, cm, cache = null, selStart = null, selEnd = null;
        var calLoading = false; // Added calLoading state

        var PRICES = { 1: { 4: 85, 5: 95, 6: 105, 7: 115, 8: 135, 9: 105, 10: 85 }, 2: { 4: 90, 5: 120, 6: 140, 7: 160, 8: 175, 9: 120, 10: 90 }, 3: { 4: 80, 5: 90, 6: 100, 7: 110, 8: 130, 9: 100, 10: 80 } };
        var KIDS_PRICE = 5;
        var DEPOSIT = { 1: 200, 2: 300, 3: 500 };
        var MIN_STAY_NIGHTS = 5;
        var GCAL_ID = "azzurro.luxurybutique@gmail.com";
        var GCAL_KEY = "AIzaSyCKBgPEZjqvwWDXKR__oc9rgLqX_YVndgM";

        /* ── language ── */
        function setLang(l) {
            lang = l; T = LANGS[l];
            document.documentElement.lang = l;
            document.querySelectorAll('.lang-btn').forEach(function (b) { b.classList.toggle('active', b.textContent.toLowerCase() === l); });
            applyT();
            if (adults > 0) refreshDescs();
            var s2 = $id('s2'), s3 = $id('s3'), s4 = $id('s4');
            if (s2 && !s2.classList.contains('hidden')) refreshS2();
            if (s3 && !s3.classList.contains('hidden')) { renderCal(); updateHint(); updateMinNote(); updateSummary(); }
            if (s4 && !s4.classList.contains('hidden')) renderSummaryS4();
        }

        function applyT() {
            setHtml('hdr-h1', T.h1);
            setTxt('hdr-tagline', T.tagline);
            setTxt('t-step1', T.step1); setTxt('t-step2', T.step2); setTxt('t-step3', T.step3); setTxt('t-step4', T.step4 || '');
            setTxt('t-s1label', T.s1label); setTxt('t-s1title', T.s1title); setTxt('t-s1sub', T.s1sub);
            setTxt('t-adults-lbl', T.adultsLbl); setTxt('t-kids-lbl', T.kidsLbl);
            setTxt('t-price-check-text', T.priceCheckHint || 'Aby sprawdzić cenę — wybierz ilość osób i terminy pobytu');
            setTxt('t-btn1', T.btn1);
            setTxt('t-s2label', T.s2label); setTxt('t-s2title', T.s2title); setTxt('t-s2sub', T.s2sub);
            setTxt('t-back1', T.back1);
            setTxt('t-s3label', T.s3label); setTxt('t-s3title', T.s3title); setTxt('t-s4label', T.s4label || ''); setTxt('t-s4title', T.s4title || '');
            setTxt('t-back2', T.back2); setTxt('t-back3', T.back3 || ''); setTxt('t-back3-top', T.back3 || '');
            setTxt('t-loading', T.loading);
            setTxt('t-sum-title', T.sumTitle);
            setTxt('t-incl-title', T.inclTitle);
            setTxt('t-incl1', T.incl1); setTxt('t-incl2', T.incl2); setTxt('t-incl3', T.incl3); setTxt('t-incl4', T.incl4 || T.incl4);
            setTxt('t-hl-title', T.hlTitle);
            setTxt('t-hl1', T.hl1); setTxt('t-hl2', T.hl2); setTxt('t-hl3', T.hl3); setTxt('t-hl4', T.hl4); setTxt('t-hl5', T.hl5);
            setTxt('t-cin-title', T.cinTitle); setTxt('t-cin-text', T.cinText);
            setTxt('t-cin-btn', T.cinBtn || 'Sprawdź CIN');
            setTxt('t-cin-copy-lbl', T.cinCopy || 'Kopiuj');
            setTxt('t-btn-reserve', T.btnReserve || 'Rezerwuj'); setTxt('t-btn-msg', T.btnMsg); setTxt('t-btn-wa', T.btnWa || 'WhatsApp'); setTxt('t-contact-note', T.contactNote);
            setTxt('t-btn-info', T.btnInfo || 'Dowiedz się więcej');
            setTxt('t-popup-title', T.popupTitle || 'Skontaktuj się z nami');
            setTxt('t-popup-sub', T.popupSub || 'Wybierz aplikację, przez którą chcesz napisać');
            setTxt('t-popup-btn-msg', T.popupBtnMsg || 'Messenger');
            setTxt('t-popup-btn-wa', T.popupBtnWa || 'WhatsApp');
            setTxt('t-popup-cancel', T.popupCancel || 'Anuluj');
            setTxt('t-mh-title', T.mhTitle || 'Zaraz otworzy się Messenger');
            setHtml('t-mh-text', T.mhText || 'Twoja wiadomość jest już skopiowana. Messenger czasem otwiera się z kilkusekundowym opóźnieniem — to normalne, po prostu <strong>poczekaj chwilę</strong>, aż wczyta się czat z nami.');
            setTxt('t-mh-demo-caption', T.mhDemoCaption || 'Jeśli okno czatu będzie puste, przytrzymaj pole tekstowe i wybierz „Wklej".');
            setTxt('t-mh-tip', T.mhTip || '💡 Jeśli zamiast czatu z nami zobaczysz listę rozmów, zaczekaj kilka sekund, a czat z nami się rozpocznie.');
            setTxt('t-mh-confirm', T.mhConfirm || 'Rozumiem, otwórz Messenger');
            setTxt('t-mh-paste', T.mhPaste || 'Wklej');
            if (adults === 0) { setTxt('ad-desc', T.adDescDef); setTxt('kd-desc', T.kdDescDef); }
            setTxt('t-tip-text', T.tipText);
            setTxt('t-sales-title', T.salesTitle || 'Poczuj prawdziwie włoski klimat');
            setTxt('t-sf1', T.sf1); setTxt('t-sf2', T.sf2); setTxt('t-sf3', T.sf3);
            setTxt('t-sf4', T.sf4 || 'Mniej turystów, lokalna atmosfera');
            setTxt('t-sc1-t', T.sc1t || 'Krystaliczna woda i rajskie plaże');
            setTxt('t-sc1-d', T.sc1d || 'Zaledwie 5 minut od apartamentów znajdziesz przepiękną plażę Balai. To również idealna baza wypadowa na słynną La Pelosa!');
            setTxt('t-sc2-t', T.sc2t || 'Odkryj prawdziwą Sardynię');
            setTxt('t-sc2-d', T.sc2d || 'Mieszkaj w samym centrum Porto Torres. Odkrywaj starożytne rzymskie wykopaliska, monumentalną Bazylikę i ciesz się autentycznym włoskim życiem bez tłumów turystów.');
            setAttr('t-sc1-img', 'alt', T.sc1Alt || 'Plaża na Sardynii');
            setAttr('t-sc2-img', 'alt', T.sc2Alt || 'Włoskie miasteczko');
            setTxt('t-btn-up', T.btnUp || '\u2191 Wróć na górę i sprawdź termin');
            setHtml('cal-mix-text', T.mixAlertInfo || 'Mamy apartamenty w tym lub podobnym terminie.<br>Skontaktuj się z nami, a dobierzemy najlepszą opcję!');
            setTxt('cal-mix-btn-msg', T.mixBtnMsg || 'Napisz na Messenger');
            setTxt('cal-mix-btn-wa', T.mixBtnWa || 'Napisz na WhatsApp');
            setTxt('t-btnChangeApt', T.btnChangeApt);
            setTxt('t-hero-cta', T.heroCta || 'Sprawdź dostępność');
            setTxt('t-hero-why', T.heroWhy || 'Dlaczego u nas?');
            setTxt('t-hero-vp-unmute', T.heroVpUnmute || 'Kliknij, aby zobaczyć lokalizację');
            setTxt('t-luxury-text', T.luxuryText || 'Wysoki standard · Blisko plaży');
            setTxt('t-pt-eyebrow', T.ptEyebrow || 'Sardynia bez retuszu');
            setHtml('t-pt-heading', T.ptHeading || 'Jaka lokalizacja<br>na Sardynii jest<br><em>najlepsza?</em>');
            setHtml('t-pt-p1', T.ptP1 || 'Każdy oczywiście będzie reklamował „swoje" miejsce… Ale prawda jest taka, że <strong>wszystko zależy od tego, na czym Ci zależy.</strong>');
            setHtml('t-pt-p2', T.ptP2 || 'Wiele miast na północy to typowo turystyczne miejscowości. Zimą wszystko jest zamknięte — sklepy, restauracje, bary. Otwierają się tylko latem, specjalnie dla turystów. Wiadomo — ceny wyższe, jakość często słabsza… bo jesteś turystą.');
            setHtml('t-pt-p3', T.ptP3 || 'Bez auta? Często nawet nie kupisz bułek. Do sklepu trzeba dojechać. <strong>Alghero, Olbia?</strong> Fajnie — jeśli lubisz tłumy i wygórowane ceny.');
            setHtml('t-pt-p4', T.ptP4 || 'Dlatego <strong>najlepsze miejsca to te, o których nie jest głośno.</strong> To właśnie tam możesz poczuć prawdziwą magię Sardynii.');
            setHtml('t-pt-p5', T.ptP5 || '<strong>Porto Torres</strong> to idealny przykład. Tu życie toczy się cały rok — dlatego masz dostęp do wszystkiego, co potrzebne.');
            setHtml('t-pt-hi1', T.ptHi1 || 'Restauracje — <strong>1 minuta</strong> spacerem');
            setHtml('t-pt-hi2', T.ptHi2 || 'Lidl — <strong>3 minuty</strong> spacerem');
            setHtml('t-pt-hi3', T.ptHi3 || 'Kawiarnie, bary, restauracje — dosłownie <strong>50 metrów</strong>');
            setHtml('t-pt-hi4', T.ptHi4 || 'Plaża — <strong>5 minut</strong> i jesteś nad wodą');
            setHtml('t-pt-hi5', T.ptHi5 || 'Port, darmowe plaże i <strong>piękny deptak</strong> wzdłuż wybrzeża — klify i urocze zatoczki');
            setHtml('t-pt-hi6', T.ptHi6 || 'Prawdziwe, rodzinne restauracje — ceny dla lokalnych, nie turystów. Nawet od <strong>4,5€</strong>');
            setHtml('t-pt-closing', T.ptClosing || 'Porto Torres to idealne miejsce, jeśli chcesz odpocząć<br>i poczuć prawdziwy, sardyński klimat życia.');
            setHtml('t-map-eyebrow', T.mapEyebrow || '✦ &nbsp; bliskość atrakcji &nbsp; ✦');
            setTxt('t-map-rest-title', T.mapRestTitle || '🍝 Restauracje');
            setTxt('t-map-rest-time', T.mapRestTime || '1 min');
            setTxt('t-map-lidl-time', T.mapLidlTime || '3 min');
            setTxt('t-map-scoglio-time', T.mapScoglioTime || '5 min spaceru');
            setTxt('t-map-dolci-time', T.mapDolciTime || '8 min spaceru');
            setTxt('t-map-balai-time', T.mapBalaiTime || '20 min spaceru');
            setTxt('t-map-sea-label', T.mapSeaLabel || 'M A R E');
            setTxt('t-map-alghero-title', T.mapAlgheroTitle || '✈️ Lotnisko Alghero');
            setTxt('t-map-alghero-time', T.mapAlgheroTime || '25 min jazdy');
            setTxt('t-map-olbia-title', T.mapOlbiaTitle || '✈️ Lotnisko Olbia');
            setTxt('t-map-olbia-time', T.mapOlbiaTime || '1h 15m jazdy');
            setTxt('t-map-foot-text', T.mapFoot || 'Porto Torres · Sardegna');
            setTxt('t-faq-title', T.faqTitle || 'Najczęstsze pytania');
            setTxt('t-faq-q1', T.faqQ1 || 'Czy wynajmują państwo auta? Czy macie do polecenia wypożyczalnie aut?');
            setHtml('t-faq-a1', T.faqA1 || 'Polecamy stronę <a href="https://discovercars.com" target="_blank" rel="noopener">discovercars.com</a> — to porównywarka wszystkich dostępnych wypożyczalni. Auta można odebrać od razu na lotnisku, więc jest wygodnie bez ciągania się. Korzystaliśmy z tej strony w wielu krajach Europy oraz Azji i zawsze jest wszystko w porządku. Warto zwracać uwagę na kartę kredytową/debetową, bo są różnice w cenie wynajmu ze względu na rodzaj posiadanej karty.');
            setTxt('t-faq-q2', T.faqQ2 || 'Czy jest możliwy transfer lotniskowy?');
            setHtml('t-faq-a2', T.faqA2 || 'Nasz zaprzyjaźniony taksówkarz wykonuje transfery z lotniska Alghero w cenie 55 euro w jedną stronę do 4 osób.');
            setTxt('t-faq-q3', T.faqQ3 || 'Czy jest u Państwa żelazko? Pralka?');
            setHtml('t-faq-a3', T.faqA3 || 'Tak — dla wszystkich gości dostępna jest wspólna pralka i żelazko.');
            setTxt('t-faq-q4', T.faqQ4 || 'Czy jest parking w cenie?');
            setHtml('t-faq-a4', T.faqA4 || 'Obok naszej kamienicy znajduje się duży, bezpłatny parking.');
            setTxt('t-faq-q5', T.faqQ5 || 'Na którym piętrze jest mieszkanie?');
            setHtml('t-faq-a5', T.faqA5 || 'Nasza kamienica składa się z jednego piętra. Na dole są lokale usługowe, a na górze nasze mieszkania. W kamienicy nie ma nikogo więcej poza naszymi gośćmi.');
            setTxt('t-faq-q6', T.faqQ6 || 'Czy organizują Państwo wycieczki?');
            setHtml('t-faq-a6', T.faqA6 || 'Polecamy stronę <a href="https://www.getyourguide.com" target="_blank" rel="noopener">getyourguide.com</a> — pośrednik wszystkich dostępnych wycieczek (coś jak Booking dla noclegów) na Sardynii. Można tam obejrzeć dokładny plan, terminy i ceny wycieczek odbywających się na całej wyspie.');
            buildLegend(); updateMinNote();
            var mw = $id('min-warn'); if (mw) mw.textContent = T.minWarn;
            updateHint();
            setTxt('t-lm-title', T.lmTitle || 'Oferta Last Minute!');
            setTxt('t-lm-sub', T.lmSub || 'Wolne terminy w bieżącym miesiącu dostępne od zaraz!');
            if (!calLoading && $id('cal-ml').textContent !== '-') {
                renderCal();
                var lh = $id('legHalf'); if (lh) lh.textContent = T.legHalf;
            }
        }

        function buildLegend() {
            var l = $id('cal-legend'); if (!l) return;
            l.innerHTML = '<div class="li"><div class="ld" style="background:var(--free-bg);border:1px solid #a5d6a7"></div>' + T.legFree + '</div>'
                + '<div class="li" id="legHalf" style="display:none"><div class="ld" style="background:linear-gradient(135deg, var(--busy) 50%, #4caf50 50%)"></div>' + (T.legHalf || 'Inne dostępne') + '</div>'
                + '<div class="li"><div class="ld" style="background:var(--busy)"></div>' + T.legBusy + '</div>'
                + '<div class="li"><div class="ld" style="background:var(--sel)"></div>' + T.legSel + '</div>';
        }

        function buildWdays() {
            buildWdaysInto('wdays-row-1');
            buildWdaysInto('wdays-row-2');
        }

        /* ── counter descs ── */
        function refreshDescs() {
            if (adults > 0) {
                var adSuffix = adults === 1 ? T.adDesc1 : (T.adDesc2 && adults >= 2 && adults <= 4 ? T.adDesc2 : T.adDescN);
                setTxt('ad-desc', adults + adSuffix);
                setTxt('kd-desc', '');
            } else { setTxt('ad-desc', T.adDescDef); setTxt('kd-desc', T.kdDescDef); }
        }

        function getPrice(n, mo) { return (PRICES[n] && PRICES[n][mo]) ? PRICES[n][mo] : 60; }
        function getDayPrice(apts, mo) { var t = 0; apts.forEach(function (n) { t += getPrice(n, mo); }); return t; }

        /* ── step 1 ── */
        function chA(d) {
            adults = Math.max(0, adults + d);
            if (adults + kids > 11) adults = 11 - kids;
            setTxt('av', adults);
            $id('am').disabled = adults <= 0; $id('ap').disabled = adults + kids >= 11;
            var kr = $id('krow');
            if (adults > 0) { kr.classList.remove('disabled'); $id('km').disabled = kids <= 0; $id('kp').disabled = adults + kids >= 11; }
            else kr.classList.add('disabled');
            refreshDescs();
            $id('btn1').disabled = adults <= 0;
        }
        function chK(d) {
            kids = Math.max(0, kids + d);
            if (adults + kids > 11) kids = 11 - adults;
            setTxt('kv', kids); $id('km').disabled = kids <= 0; $id('kp').disabled = adults + kids >= 11;
            $id('ap').disabled = adults + kids >= 11;
            refreshDescs();
        }

        /* ── step 2 ── */
        function buildOpts(a, k) {
            var total = a + k;
            var opts = [];
            // AP 1: base 2, max 3
            if (total >= 1 && total <= 3) {
                opts.push({ id: '1', apts: [1], name: T.apt1, tags: [T.t1b], mk: Math.max(0, total - 2), group: 1 });
            }
            // AP 3: base 2, max 3
            if (total >= 1 && total <= 3) {
                opts.push({ id: '3', apts: [3], name: T.apt3, tags: [T.t3b], mk: Math.max(0, total - 2), group: 2 });
            }
            // AP 2: base 4, max 5
            if (total >= 4 && total <= 5) {
                opts.push({ id: '2', apts: [2], name: T.apt2, tags: [T.t2b], mk: Math.max(0, total - 4), group: 1 });
            }
            // AP 1+3: base 4, max 6
            if (total >= 4 && total <= 6) {
                opts.push({ id: '13', apts: [1, 3], name: T.apt13, tags: [T.t13b], mk: Math.max(0, total - 4), group: total <= 4 ? 2 : 1 });
            }
            // AP 1+2: base 6, max 8
            if (total >= 5 && total <= 8) {
                opts.push({ id: '12', apts: [1, 2], name: T.apt12, tags: [T.t12b], mk: Math.max(0, total - 6), group: 1 });
            }
            // AP 2+3: base 6, max 8
            if (total >= 5 && total <= 8) {
                opts.push({ id: '23', apts: [2, 3], name: T.apt23, tags: [], mk: Math.max(0, total - 6), group: 2 });
            }
            // AP 1+2+3: base 8, max 11
            if (total >= 7 && total <= 11) {
                opts.push({ id: 'L', apts: [1, 2, 3], name: T.aptL, tags: [], mk: Math.max(0, total - 8), group: 1 });
            }

            opts.forEach(function (o) {
                if (o.mk > 0) o.tags.push(o.mk === 1 ? T.bed1 : T.bedN.replace('{n}', o.mk));
                o.unavail = false;
            });
            return opts;
        }

        /* ── apartment photos config ──
           Zdjęcia hostowane na GitHub (przez CDN jsDelivr — szybsze i stabilniejsze niż Google Drive).
           PHOTO_BASE zostanie podmieniony na finalny adres po wgraniu folderu `images/` do repozytorium. */
        var PHOTO_BASE = 'https://cdn.jsdelivr.net/gh/Blezjzoo/azzulux-assets@main/images/';
        var APT_PHOTOS = {
            1: [
                PHOTO_BASE + 'apt1/1.webp',
                PHOTO_BASE + 'apt1/2.webp',
                PHOTO_BASE + 'apt1/3.webp',
                PHOTO_BASE + 'apt1/4.webp',
                PHOTO_BASE + 'apt1/5.webp',
                PHOTO_BASE + 'apt1/6.webp',
                PHOTO_BASE + 'apt1/7.webp',
                PHOTO_BASE + 'apt1/8.webp'
            ],
            2: [
                PHOTO_BASE + 'apt2/1.webp',
                PHOTO_BASE + 'apt2/2.webp',
                PHOTO_BASE + 'apt2/3.webp',
                PHOTO_BASE + 'apt2/4.jpg',
                PHOTO_BASE + 'apt2/5.webp',
                PHOTO_BASE + 'apt2/6.webp'
            ],
            3: [
                PHOTO_BASE + 'apt3/1.webp',
                PHOTO_BASE + 'apt3/2.jpg',
                PHOTO_BASE + 'apt3/3.webp',
                PHOTO_BASE + 'apt3/4.jpg',
                PHOTO_BASE + 'apt3/5.webp',
                PHOTO_BASE + 'apt3/6.jpg'
            ]
        };

        var HERO_PHOTO_URLS = [
            PHOTO_BASE + 'apt3/3.webp',
            PHOTO_BASE + 'apt3/1.webp',
            PHOTO_BASE + 'apt2/6.webp',
            PHOTO_BASE + 'apt2/1.webp',
            PHOTO_BASE + 'apt2/2.webp',
            PHOTO_BASE + 'hero/1.webp',
            PHOTO_BASE + 'hero/2.webp'
        ];

        /* ── wstępne pobieranie zdjęć apartamentów (krok 3) w tle ──
           Dzięki temu gdy użytkownik dotrze do kroku 3, zdjęcia są już w cache
           przeglądarki i pojawiają się natychmiast, zamiast dopiero się ładować. */
        (function preloadAptPhotos() {
            var urls = [].concat(APT_PHOTOS[1], APT_PHOTOS[2], APT_PHOTOS[3]);
            function start() {
                urls.forEach(function (url) {
                    var img = new Image();
                    img.src = url;
                });
            }
            if (window.requestIdleCallback) requestIdleCallback(start, { timeout: 1500 });
            else if (document.readyState === 'complete') start();
            else window.addEventListener('load', start);
        })();

        /* ── hero slideshow ── */
        (function () {
            function shuffle(arr, avoidFirst) {
                for (var i = arr.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
                }
                // jeśli pierwsze zdjęcie nowego cyklu = ostatnie poprzedniego, zamień z drugim
                if (avoidFirst && arr[0] === avoidFirst && arr.length > 1) {
                    var tmp2 = arr[0]; arr[0] = arr[1]; arr[1] = tmp2;
                }
                return arr;
            }

            var shuffledPhotos = shuffle(HERO_PHOTO_URLS.slice());
            var container = document.getElementById('hero-slideshow');
            if (!container || !shuffledPhotos.length) return;

            var slides = [];
            shuffledPhotos.forEach(function (url, idx) {
                var div = document.createElement('div');
                div.className = 'hero-slide' + (idx === 0 ? ' active' : '');
                // Tylko pierwsze zdjecie ladowane od razu - reszta lazily przed pokazaniem
                if (idx === 0) div.style.backgroundImage = 'url(' + url + ')';
                container.appendChild(div);
                slides.push(div);
            });

            var current = 0;
            function next() {
                var lastPhoto = shuffledPhotos[current];
                slides[current].classList.remove('active');
                current = (current + 1) % slides.length;

                // koniec cyklu - re-shuffle unikajac powtorzenia z ostatnim
                if (current === 0) {
                    shuffle(shuffledPhotos, lastPhoto);
                    slides.forEach(function (s, i) {
                        if (s.style.backgroundImage) {
                            s.style.backgroundImage = 'url(' + shuffledPhotos[i] + ')';
                        }
                    });
                }

                // Zaladuj tlo slajdu dopiero gdy ma byc pokazany
                if (!slides[current].style.backgroundImage) {
                    slides[current].style.backgroundImage = 'url(' + shuffledPhotos[current] + ')';
                }
                slides[current].classList.add('active');

                // preload kolejnego
                var nextIdx = (current + 1) % slides.length;
                var img = new Image();
                img.src = shuffledPhotos[nextIdx];
            }
            setInterval(next, 4500);
        })();

        /* ── step click navigation ── */
        function stepClick(n) { /* step 4 not clickable */
            _userInteracted = true;
            var s1done = $id('i1') && $id('i1').classList.contains('done');
            var s2done = $id('i2') && $id('i2').classList.contains('done');
            scrollToSteps();
            if (n === 1) {
                if (!$id('s1').classList.contains('hidden')) return;
                goBack(1);
            } else if (n === 2) {
                if (s1done) {
                    if (!$id('s2').classList.contains('hidden')) return;
                    goBack(2);
                }
            } else if (n === 3) {
                if (s2done) {
                    if (!$id('s3').classList.contains('hidden')) return;
                    goBack(3);
                }
            }
        }

        /* ── ikony cech apartamentu (linearne SVG zamiast emotek) ── */
        var META_ICONS = {
            persons: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V21"/><circle cx="9.5" cy="8.5" r="3.5"/><path d="M21 21v-1.5a4 4 0 0 0-2.8-3.83"/><path d="M15.5 4.17a3.5 3.5 0 0 1 0 6.66"/></svg>',
            bedrooms: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6"/><path d="M3 13v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"/><path d="M3 18v2"/><path d="M21 18v2"/><path d="M3 18h18"/></svg>',
            kitchen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="13" r="7"/><path d="M17 10h5"/><path d="M4.5 9.5c1-2 3-3.5 5.5-3.5"/></svg>',
            bathroom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 4-5 6.5-5 9a5 5 0 0 0 10 0c0-2.5-2-5-5-9z"/></svg>',
            aircon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M4.5 6.5l15 11"/><path d="M19.5 6.5l-15 11"/></svg>',
            balcony: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h18"/><path d="M5 8v13"/><path d="M9 8v13"/><path d="M13 8v13"/><path d="M17 8v13"/><path d="M21 8v13"/><path d="M3 21h18"/></svg>',
            terrace: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21c0-8 5-15 14-16-1 9-8 14-14 16z"/><path d="M8 18c2-3 5-6 9-9"/></svg>',
            sofa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/><path d="M3 12h18v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4z"/><path d="M5 17v3"/><path d="M19 17v3"/></svg>'
        };
        META_ICONS.extrabed = META_ICONS.bedrooms;

        var APT_META = {
            1: [{ icon: '👥', key: 'persons', n: 2 }, { icon: '🛏️', key: 'bedrooms', n: 1 }, { icon: '🍳', key: 'kitchen' }, { icon: '🚿', key: 'bathroom' }, { icon: '❄️', key: 'aircon' }],
            2: [{ icon: '👥', key: 'persons', n: 4 }, { icon: '🛏️', key: 'bedrooms', n: 2 }, { icon: '🍳', key: 'kitchen' }, { icon: '🏖️', key: 'balcony' }, { icon: '🚿', key: 'bathroom' }, { icon: '❄️', key: 'aircon' }],
            3: [{ icon: '👥', key: 'persons', n: 2 }, { icon: '🛏️', key: 'bedrooms', n: 1 }, { icon: '🍳', key: 'kitchen' }, { icon: '🌿', key: 'terrace' }, { icon: '🚿', key: 'bathroom' }, { icon: '❄️', key: 'aircon' }]
        };

        var META_LABELS = {
            pl: { persons: ['osoba', 'osoby', 'osób'], bedrooms: ['sypialnia', 'sypialnie', 'sypialni'], bathroom: 'łazienka', bathrooms: 'łazienki', balcony: 'balkon', terrace: 'taras', aircon: 'klimatyzacja', kitchen: 'aneks kuchenny', sofa: 'kanapa', extrabed: 'dostawka' },
            en: { persons: ['person', 'people', 'people'], bedrooms: ['bedroom', 'bedrooms', 'bedrooms'], bathroom: 'bathroom', bathrooms: 'bathrooms', balcony: 'balcony', terrace: 'terrace', aircon: 'air conditioning', kitchen: 'kitchenette', sofa: 'sofa bed', extrabed: 'extra bed' }
        };

        function metaLabel(item) {
            var ml = META_LABELS[lang] || META_LABELS['pl'];
            if (item.key === 'persons' || item.key === 'bedrooms') {
                var n = item.n, forms = ml[item.key];
                var form = n === 1 ? forms[0] : (n >= 2 && n <= 4 ? forms[1] : forms[2]);
                return n + ' ' + form;
            }
            if (item.key === 'bathroom') {
                var n2 = item.n || 1;
                if (n2 > 1) return n2 + ' ' + ml.bathrooms;
                return ml[item.key] || item.key;
            }
            if (item.key === 'sofa') return ml.sofa || 'sofa';
            if (item.key === 'extrabed') {
                var ml2 = META_LABELS[lang] || META_LABELS['pl'];
                return (item.n > 1 ? item.n + ' ' : '+ ') + (ml2.extrabed || 'extra bed');
            }
            return ml[item.key] || item.key;
        }

        var dotCls = { 1: 'p', 2: 't', 3: 'b' };
        var _galReg = {}; var _galN = 0;

        function buildGallery(aptIds) {
            var photos = [];
            var maxPer = 99;
            aptIds.forEach(function (id) {
                (APT_PHOTOS[id] || []).slice(0, maxPer).forEach(function (url) { photos.push(url); });
            });
            if (!photos.length) return '';

            var rk = 'r' + (++_galN);
            _galReg[rk] = photos;

            var slides = photos.map(function (url, i) {
                return '<div class="apt-gallery-slide"><img data-src="' + url + '" alt="' + (T.photo || 'Zdjęcie') + ' ' + (i + 1) + '" loading="lazy"></div>';
            }).join('');

            var dots = photos.length > 1 ? photos.map(function (_, i) {
                return '<div class="gal-dot' + (i === 0 ? ' active' : '') + '" onclick="galJump(this,' + i + ',event)"></div>';
            }).join('') : '';

            var navBtns = photos.length > 1
                ? '<button class="gal-prev" onclick="galMove(this,-1,event)">&#8249;</button><button class="gal-next" onclick="galMove(this,1,event)">&#8250;</button>'
                : '';

            return '<div class="apt-gallery" data-idx="0" data-rk="' + rk + '">'
                + '<div class="apt-gallery-inner">'
                + '<div class="apt-gallery-track">' + slides + '</div>'
                + navBtns
                + (dots ? '<div class="gal-dots">' + dots + '</div>' : '')
                + '</div>'
                + '</div>';
        }

        function buildMeta(aptIds) {
            var meta = [];
            if (aptIds.length === 1) {
                meta = APT_META[aptIds[0]] || [];
            } else {
                var totalPpl = 0, totalBed = 0, totalBath = 0;
                var extras = {};
                aptIds.forEach(function (id) {
                    var m = APT_META[id] || [];
                    m.forEach(function (item) {
                        if (item.key === 'persons') totalPpl += item.n;
                        else if (item.key === 'bedrooms') totalBed += item.n;
                        else if (item.key === 'bathroom') totalBath++;
                        else extras[item.key] = item;
                    });
                });
                meta.push({ icon: '👥', key: 'persons', n: totalPpl });
                if (totalBed > 0) meta.push({ icon: '🛏️', key: 'bedrooms', n: totalBed });
                if (totalBath > 0) meta.push({ icon: '🚿', key: 'bathroom', n: totalBath });
                Object.keys(extras).forEach(function (k) { meta.push(extras[k]); });
            }
            if (!meta.length) return '';
            var items = meta.map(function (m) {
                return '<div class="apt-meta-item"><span class="apt-meta-icon">' + (META_ICONS[m.key] || m.icon) + '</span>' + metaLabel(m) + '</div>';
            }).join('');
            return '<div class="apt-meta">' + items + '</div>';
        }

        function galMove(btn, dir, e) {
            e && e.stopPropagation();
            var gallery = btn.closest('.apt-gallery');
            galGoTo(gallery, (parseInt(gallery.dataset.idx) + dir));
        }
        function galJump(dot, idx, e) {
            e && e.stopPropagation();
            galGoTo(dot.closest('.apt-gallery'), idx);
        }
        function galGoTo(gallery, idx, skipCount) {
            var track = gallery.querySelector('.apt-gallery-track');
            var slides = track.querySelectorAll('.apt-gallery-slide');
            var n = slides.length;
            idx = ((idx % n) + n) % n;
            gallery.dataset.idx = idx;
            var w = gallery.offsetWidth;
            track.style.transform = w ? 'translateX(-' + (idx * w) + 'px)' : 'translateX(-' + (idx * 100) + '%)';
            [idx, (idx + 1) % n].forEach(function (i) {
                var img = slides[i].querySelector('img[data-src]');
                if (img) { img.src = img.dataset.src; img.removeAttribute('data-src'); img.onload = function () { img.classList.add('loaded'); }; }
            });
            var dots = gallery.querySelectorAll('.gal-dot');
            dots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });

            if (!skipCount) {
                if (!gallery._viewedSlides) gallery._viewedSlides = {};
                gallery._viewedSlides[idx] = true;
                updateGalGate(gallery);
            }
        }

        /* ── wymuszenie przejrzenia WSZYSTKICH zdjęć przed "Sprawdź cenę" (pierwsze zdjęcie się nie liczy,
           więc trzeba tyle razy nacisnąć/przewinąć ile jest zdjęć) ── */
        function galRequiredViews(gallery) {
            var n = gallery.querySelectorAll('.apt-gallery-slide').length;
            if (n <= 1) return 0;
            return n;
        }
        function galViewedCount(gallery) {
            return gallery._viewedSlides ? Object.keys(gallery._viewedSlides).length : 0;
        }
        function galGateOk(gallery) {
            if (!gallery) return true;
            return galViewedCount(gallery) >= galRequiredViews(gallery);
        }
        function updateGalGate(gallery) {
            var card = gallery.closest('.aopt');
            var btn = card && card.querySelector('.btn-select');
            if (!btn) return;
            var required = galRequiredViews(gallery);
            var viewed = galViewedCount(gallery);
            var pct = required > 0 ? Math.min(100, Math.round(viewed / required * 100)) : 100;
            btn.style.setProperty('--fill-pct', pct + '%');
            if (viewed >= required && !btn.classList.contains('gate-ready-shown')) {
                btn.classList.add('gate-ready-shown', 'ready-pulse');
                galHideToast(btn);
                setTimeout(function () {
                    btn.classList.remove('ready-pulse');
                    btn.classList.add('ready-loop');
                }, 1000);
            }
        }
        function galShakeBtn(btn) {
            btn.classList.remove('shake'); void btn.offsetWidth; btn.classList.add('shake');
            setTimeout(function () { btn.classList.remove('shake'); }, 460);
        }
        /* dymek zostaje widoczny bez znikania, aż przycisk wypełni się w 100% na zielono */
        function galShowToast(btn, text) {
            var arow = btn.closest('.arow');
            if (!arow) return;
            var toast = arow.querySelector('.gal-gate-toast');
            if (!toast) {
                toast = document.createElement('div');
                toast.className = 'gal-gate-toast';
                arow.appendChild(toast);
            }
            toast.textContent = text;
            toast.classList.add('show');
        }
        function galHideToast(btn) {
            var arow = btn.closest('.arow');
            var toast = arow && arow.querySelector('.gal-gate-toast');
            if (toast) toast.classList.remove('show');
        }
        function galGateWarn(gallery, btn) {
            galShakeBtn(btn);

            var nav = gallery.querySelectorAll('.gal-prev, .gal-next');
            nav.forEach(function (n) { n.classList.remove('nav-hint'); void n.offsetWidth; n.classList.add('nav-hint'); });
            setTimeout(function () { nav.forEach(function (n) { n.classList.remove('nav-hint'); }); }, 3400);

            galShowToast(btn, T.gatePeek || 'Zerknij, jak wygląda apartament');
        }
        /* dla osób, które nie zauważają strzałek nawigacji — sam przycisk "Sprawdź cenę"
           zaczyna przesuwać zdjęcia po drugim kliknięciu, dopóki nie obejrzy się kompletu */
        function galAutoAdvance(gallery, btn) {
            galShakeBtn(btn);
            var idx = parseInt(gallery.dataset.idx) || 0;
            galGoTo(gallery, idx + 1);
        }
        function initGallery(gallery) {
            var inner = gallery.querySelector('.apt-gallery-inner');
            var track = gallery.querySelector('.apt-gallery-track');
            var slides = track.querySelectorAll('.apt-gallery-slide');
            if (slides[0]) {
                var img = slides[0].querySelector('img[data-src]');
                if (img) { img.src = img.dataset.src; img.removeAttribute('data-src'); img.onload = function () { img.classList.add('loaded'); }; }
            }
            galGoTo(gallery, parseInt(gallery.dataset.idx) || 0, true);
            var startX = 0, startY = 0, moving = false, locked = false;
            inner.addEventListener('touchstart', function (e) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
                moving = false; locked = false;
            }, { passive: true });
            inner.addEventListener('touchmove', function (e) {
                if (locked) return;
                var dx = e.touches[0].clientX - startX;
                var dy = e.touches[0].clientY - startY;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 12) return;
                if (!moving) {
                    if (Math.abs(dy) >= Math.abs(dx)) { locked = true; return; }
                    moving = true;
                }
                e.preventDefault();
            }, { passive: false });
            inner.addEventListener('touchend', function (e) {
                if (!moving) return;
                var dx = e.changedTouches[0].clientX - startX;
                if (Math.abs(dx) > 30) galGoTo(gallery, parseInt(gallery.dataset.idx) + (dx < 0 ? 1 : -1));
            }, { passive: true });
        }

        function selectOpt(o, div) {
            if (o.unavail) return;
            document.querySelectorAll('.aopt').forEach(function (c) { c.classList.remove('sel'); });
            div.classList.add('sel');
            selOpt = o;
            setTimeout(goStep4, 240);
        }

        function buildChips(aptIds, opt) {
            var meta = [];
            if (aptIds.length === 1) {
                meta = (APT_META[aptIds[0]] || []).slice();
            } else {
                var totalPpl = 0, totalBed = 0, totalBath = 0;
                var extras = {};
                aptIds.forEach(function (id) {
                    var m = APT_META[id] || [];
                    m.forEach(function (item) {
                        if (item.key === 'persons') totalPpl += item.n;
                        else if (item.key === 'bedrooms') totalBed += item.n;
                        else if (item.key === 'bathroom') totalBath++;
                        else extras[item.key] = item;
                    });
                });
                meta.push({ icon: '👥', key: 'persons', n: totalPpl });
                if (totalBed > 0) meta.push({ icon: '🛏️', key: 'bedrooms', n: totalBed });
                if (totalBath > 0) meta.push({ icon: '🚿', key: 'bathroom', n: totalBath });
                Object.keys(extras).forEach(function (k) { meta.push(extras[k]); });
            }
            /* override person count (e.g. apt1 shown for 3 guests) */
            if (opt && opt.overridePersons) {
                meta = meta.map(function (item) {
                    return item.key === 'persons' ? { icon: item.icon, key: 'persons', n: opt.overridePersons } : item;
                });
            }
            /* add sofa chip */
            if (opt && opt.hasSofa) {
                meta.push({ icon: '🛋️', key: 'sofa' });
            }
            /* add extra-bed chip only when mk > 0 */
            if (opt && typeof opt.mk !== 'undefined' && opt.mk > 0) {
                meta.push({ icon: '🛏️', key: 'extrabed', n: opt.mk, extraBedChip: true });
            }
            return meta.map(function (m) {
                var cls = m.extraBedChip ? ' extra-bed' : '';
                return '<span class="aopt-chip' + cls + '"><span class="aopt-chip-icon">' + (META_ICONS[m.key] || m.icon) + '</span>' + metaLabel(m) + '</span>';
            }).join('');
        }

        function toggleApt(div) {
            var wasOpen = div.classList.contains('open');
            // close all
            document.querySelectorAll('#apt-list .aopt.open').forEach(function (d) {
                d.classList.remove('open');
            });
            if (!wasOpen) {
                div.classList.add('open');
                // init gallery when first opened
                var gallery = div.querySelector('.apt-gallery');
                if (gallery && !gallery.dataset.inited) {
                    initGallery(gallery);
                    gallery.dataset.inited = '1';
                }
                setTimeout(function () {
                    div.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        }

        function makeCard(o) {
            var div = document.createElement('div');
            div.className = 'aopt' + (o.unavail ? ' unavail' : '');
            div.setAttribute('data-t', o.id);

            var dots = o.apts.map(function (n) { return '<span class="adot ' + dotCls[n] + '"></span>'; }).join('');
            var chips = buildChips(o.apts, o);
            var badgeHtml = o.badge ? '<span class="apt-badge">&#11088; ' + o.badge + '</span>' : '';
            var tags = o.tags.map(function (t) {
                var isK = t.indexOf('dostawka') !== -1 || t.indexOf('dostawki') !== -1 || t.indexOf('extra bed') !== -1 || t.indexOf('Zustellbett') !== -1 || t.indexOf('lit suppl') !== -1;
                return '<span class="atag' + (isK ? ' kids' : '') + '">' + t + '</span>';
            }).join('');

            var galleryHtml = buildGallery(o.apts);

            div.innerHTML =
                '<div class="abar"></div>'
                + '<div class="aopt-header">'
                + '<div class="aopt-header-left">'
                + '<div class="adots">' + dots + '</div>'
                + '<div class="aopt-name-wrap">'
                + '<div class="aname">' + o.name + '</div>'
                + '<div class="aopt-chips">' + chips + '</div>'
                + (badgeHtml ? '<div>' + badgeHtml + '</div>' : '')
                + '</div>'
                + '</div>'
                + '<span class="aopt-chevron">&#8964;</span>'
                + '</div>'
                + '<div class="aopt-body">'
                + '<div class="aopt-body-inner">'
                + galleryHtml
                + '<div class="ainner">'
                + '<div class="arow">'
                + '<div class="adots">' + dots + '</div>'
                + '<div class="aname">' + o.name + '</div>'
                + '<button class="btn-select" data-sel="1">' + T.selectBtn + '</button>'
                + '</div>'
                + (tags ? '<div class="atags">' + tags + '</div>' : '')
                + '</div>'
                + '</div>'
                + '</div>';

            /* header click = toggle */
            div.querySelector('.aopt-header').addEventListener('click', function (e) {
                if (o.unavail) return;
                toggleApt(div);
            });

            /* select button */
            div.querySelector('.btn-select').addEventListener('click', function (e) {
                e.stopPropagation();
                var gallery = div.querySelector('.apt-gallery');
                var btn = this;
                if (gallery && !galGateOk(gallery)) {
                    if (!gallery._peekShown) {
                        gallery._peekShown = true;
                        galGateWarn(gallery, btn);
                    } else {
                        galAutoAdvance(gallery, btn);
                        /* nawet po obejrzeniu ostatniego zdjęcia i wypełnieniu przycisku na 100%
                           NIE przechodzimy dalej automatycznie — wymagane jest jeszcze jedno,
                           osobne kliknięcie (gate jest już spełniony, więc trafi w gałąź poniżej) */
                    }
                    return;
                }
                selectOpt(o, div);
            });

            return div;
        }

        function renderOptList() {
            var opts = buildOpts(adults, kids);

            /* Calculate price for each option to allow sorting */
            var nights = 1;
            if (selStart && selEnd) {
                var sDate = pD4(selStart), eDate = pD4(selEnd);
                nights = Math.round((eDate - sDate) / (1000 * 60 * 60 * 24));
                if (nights <= 0) nights = 1;
            }

            opts.forEach(function (o) {
                o.totalPrice = 0;
                if (selStart && selEnd) {
                    var sDate = pD4(selStart);
                    var c = new Date(sDate);
                    var aptTotal = 0;
                    for (var i = 0; i < nights; i++) {
                        aptTotal += getDayPrice(o.apts, c.getMonth() + 1);
                        c.setDate(c.getDate() + 1);
                    }
                    o.totalPrice = aptTotal + ((o.mk || 0) * KIDS_PRICE * nights);
                } else {
                    o.totalPrice = getDayPrice(o.apts, new Date().getMonth() + 1) + ((o.mk || 0) * KIDS_PRICE);
                }
            });

            /* Oznacz zajęte w wybranych datach */
            if (selStart && selEnd && cache) {
                var sDate = pD4(selStart), eDate = pD4(selEnd);
                opts.forEach(function (o) {
                    if (o.unavail) return;
                    var cur = new Date(sDate);
                    while (cur <= eDate) {
                        var bl = cache[dkey(cur)] || [];
                        if (o.apts.some(function (a) { return bl.indexOf(a) !== -1; })) { o.unavail = true; break; }
                        cur.setDate(cur.getDate() + 1);
                    }
                });
            }

            /* Sort by price (cheapest first) */
            opts.sort(function(a, b) {
                if (a.unavail && !b.unavail) return 1;
                if (!a.unavail && b.unavail) return -1;
                return a.totalPrice - b.totalPrice;
            });

            /* Mark the best value */
            var firstAvail = opts.find(function(o) { return !o.unavail; });
            if (firstAvail) {
                firstAvail.badge = T.bestValue || 'Najkorzystniejsza opcja';
            }

            var total = adults + kids;
            var sub = T.optFor + ' ' + total + (total === 1 ? T.adult1 : T.adults);
            if (selStart && selEnd) {
                sub += ' · ' + fmtDate(pD4(selStart)) + ' – ' + fmtDate(pD4(selEnd));
            }
            setTxt('s3sub', sub + ':');

            var list = $id('apt-list'); list.innerHTML = '';
            var cards = [];
            opts.forEach(function (o) {
                var card = makeCard(o);
                list.appendChild(card);
                if (!o.unavail) cards.push(card);
            });
            /* auto-open first available card */
            if (cards.length > 0) {
                toggleApt(cards[0]);
            }
        }

        /* ── Historia kroków – Android "wstecz" ── */
        var _currentStep = 1;

        function _pushStepState(step) {
            if (history.pushState) {
                history.pushState({ step: step }, '', '');
            }
            _currentStep = step;
        }

        window.addEventListener('popstate', function (e) {
            var step = (e.state && e.state.step) ? e.state.step : 1;
            _currentStep = step;
            if (step === 1) { _showStep1(); }
            else if (step === 2) { _showStep2(); }
            else if (step === 3) { _showStep3(); }
            else if (step === 4) { _showStep4(); }
        });

        /* Wewnętrzne funkcje wyświetlające kroki BEZ pushState (używane przez popstate) */
        function _showStep1() {
            show('s1'); hide('s2'); hide('s3'); hide('s4'); mkActive(1);
            scrollToSteps();
        }
        function _showStep2() {
            show('s2'); hide('s1'); hide('s3'); hide('s4'); mkDone(1); mkActive(2); scrollToSteps();
            var now = new Date(); cy = now.getFullYear(); cm = now.getMonth();
            var previewOpt = buildPreviewOpt();
            selOpt = previewOpt;
            $id('cal-hdr').className = 'cal-hdr cM';
            setTxt('cal-name', T.s2title);
            var total = adults + kids;
            setTxt('cal-desc', total + (total === 1 ? T.calA1 : T.calAN));
            $id('cal-features').innerHTML = '';
            buildLegend(); updateHint(); updateMinNote();
            var mw = $id('min-warn'); if (mw) mw.textContent = T.minWarn;
            showSt(T.loading, false);
            if (cache !== null) { renderCal(); updateLmBanner(); } else fetchIcal();
        }
        function _showStep3() {
            renderOptList(); show('s3'); hide('s2'); hide('s1'); hide('s4'); mkDone(2); mkActive(3); setTimeout(initAllGalleries, 10); scrollToSteps();
        }
        function _showStep4() {
            if (!selOpt) { _showStep3(); return; }
            show('s4'); hide('s3'); hide('s2'); hide('s1'); mkDone(3); mkActive(4); scrollToSteps();
            renderSummaryS4();
        }

        function goStep2() {
            if (!adults) return;
            _userInteracted = true;
            _pushStepState(2);
            _showStep2();
        }

        /* Tworzy wirtualną opcję obejmującą WSZYSTKIE apartamenty dostępne dla tej grupy.
           Dzień jest "zajęty" tylko gdy zajęty we wszystkich z nich. */
        function buildPreviewOpt() {
            var opts = buildOpts(adults, kids);
            var allApts = [];
            opts.forEach(function (o) {
                if (!o.unavail) o.apts.forEach(function (a) { if (allApts.indexOf(a) === -1) allApts.push(a); });
            });
            if (!allApts.length) allApts = [1, 2, 3];
            return { id: '_preview', apts: allApts, name: T.s2title, tags: [], mk: 0 };
        }

        function goStep3() {
            _pushStepState(3);
            _showStep3();
        }
        function goStep4() {
            if (!selOpt) return;
            _pushStepState(4);
            _showStep4();
        }
        function renderSummaryS4() {
            var sumDiv = document.getElementById('summary');
            var sumBody = document.getElementById('sum-body');
            if (!sumDiv || !sumBody || !selOpt || !selStart || !selEnd) return;
            var s = pD4(selStart), e = pD4(selEnd);
            var nights = Math.round((e - s) / (1000 * 60 * 60 * 24));
            if (nights <= 0) return;
            var sApts = selOpt.apts, totalApt = 0;
            var c = new Date(s);
            for (var i = 0; i < nights; i++) { totalApt += getDayPrice(sApts, c.getMonth() + 1); c.setDate(c.getDate() + 1); }
            var silentBedNights = (selOpt && selOpt.silentBed) ? KIDS_PRICE * nights : 0;
            var totalKids = kids * KIDS_PRICE * nights, total = totalApt + totalKids + silentBedNights, kaucja = DEPOSIT[sApts.length] || 200;
            var rows = '';
            rows += '<div class="sum-row"><span class="sum-label">' + T.sumApt + '</span><span class="sum-val">' + selOpt.name + '</span></div>';
            rows += '<div class="sum-row"><span class="sum-label">' + T.sumDate + '</span><span class="sum-val">' + fmtDate(s) + ' → ' + fmtDate(e) + '</span></div>';
            rows += '<div class="sum-row"><span class="sum-label">' + T.sumNights + '</span><span class="sum-val">' + nights + '</span></div>';
            rows += '<div class="sum-row"><span class="sum-label">' + T.sumApt + ' (' + T.sumNights.toLowerCase() + ': ' + nights + ')</span><span class="sum-val">' + totalApt + '€</span></div>';
            if (totalKids > 0) rows += '<div class="sum-row"><span class="sum-label">' + T.sumKids + ' (' + kids + ' × ' + KIDS_PRICE + '€ × ' + nights + ')</span><span class="sum-val">' + totalKids + '€</span></div>';
            rows += '<div class="sum-row total"><span class="sum-label">' + T.sumTotal + '</span><span class="sum-val">' + total + '€</span></div>';
            rows += '<div class="sum-row kaucja"><span class="sum-label">' + T.sumDeposit + '</span><span class="sum-val">' + kaucja + '€</span></div>';
            rows += '<div class="kaucja-note">' + T.depositNote + '</div>';
            var now2 = new Date(); now2.setHours(0, 0, 0, 0);
            var isLm = (s.getFullYear() === now2.getFullYear() && s.getMonth() === now2.getMonth());
            if (isLm) {
                rows += '<div class="sum-lm-badge"><span class="sum-lm-badge-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg></span><div><div class="sum-lm-badge-title">' + (T.lmSumTitle || 'Oferta Last Minute!') + '</div><div class="sum-lm-badge-sub">' + (T.lmSumSub || 'Wybrany termin jest dostępny od zaraz. Zarezerwuj szybko!') + '</div></div></div>';
            }
            sumBody.innerHTML = rows;
            sumDiv.classList.remove('hidden');
        }
        function refreshS2() { renderOptList(); initAllGalleries(); }
        function initAllGalleries() {
            document.querySelectorAll('#apt-list .aopt.open .apt-gallery').forEach(function (g) {
                if (!g.dataset.inited) { initGallery(g); g.dataset.inited = '1'; }
            });
        }

        /* goStep3 — lista apartamentów (po wyborze dat) */

        /* ── iCal ── */
        function fetchIcal() {
            calLoading = true;
            showSt(T.loading, false);
            var now = new Date();
            var tMin = new Date(now.getFullYear(), now.getMonth() - 1, 1).toISOString();
            var tMax = new Date(now.getFullYear() + 2, 0, 1).toISOString();
            var url = 'https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(GCAL_ID) + '/events?key=' + GCAL_KEY + '&singleEvents=true&maxResults=500&timeMin=' + encodeURIComponent(tMin) + '&timeMax=' + encodeURIComponent(tMax);
            var x = new XMLHttpRequest();
            x.open('GET', url, true); x.timeout = 12000;
            x.onload = function () {
                calLoading = false;
                if (x.status === 200) {
                    try { cache = parseGcal(JSON.parse(x.responseText)); renderCal(); }
                    catch (e) { showSt(T.errLoad, true); }
                } else { showSt(T.errLoad, true); }
            };
            x.onerror = function () { calLoading = false; showSt(T.errLoad, true); };
            x.ontimeout = function () { calLoading = false; showSt(T.errLoad, true); };
            x.send();
        }
        /* checkinDays / checkoutDays: {dateKey: [aptNums]} — do wykrywania dni rotacyjnych */
        var checkinDays = {}, checkoutDays = {};
        function parseGcal(data) {
            var ev = {};
            checkinDays = {}; checkoutDays = {};
            (data.items || []).forEach(function (item) {
                var sum = (item.summary || '').toLowerCase();
                var ap = detApt(sum);
                if (!ap.length) return;
                var ds, de;
                if (item.start.date) { ds = item.start.date.replace(/-/g, ''); de = item.end.date.replace(/-/g, ''); }
                else { ds = item.start.dateTime.replace(/-/g, '').replace(/T.*/, '') + 'T000000Z'; de = item.end.dateTime.replace(/-/g, '').replace(/T.*/, '') + 'T000000Z'; }
                /* środkowe dni rezerwacji → busy */
                expandR(ds, de).forEach(function (d) { if (!ev[d]) ev[d] = []; ap.forEach(function (n) { if (ev[d].indexOf(n) === -1) ev[d].push(n); }); });
                /* zapamiętaj dzień check-in i check-out dla każdego apartamentu */
                var allDay = ds.indexOf('T') === -1;
                var sDate = pD(ds);
                var eDate = pD(de);
                if (sDate) {
                    var ciKey = dkey(sDate);
                    if (!checkinDays[ciKey]) checkinDays[ciKey] = [];
                    ap.forEach(function (n) { if (checkinDays[ciKey].indexOf(n) === -1) checkinDays[ciKey].push(n); });
                }
                if (eDate) {
                    /* dla all-day events Google Calendar end = dzień po ostatnim, więc cofamy o 1 */
                    var coDate = new Date(eDate); if (allDay) coDate.setDate(coDate.getDate() - 1);
                    var coKey = dkey(coDate);
                    if (!checkoutDays[coKey]) checkoutDays[coKey] = [];
                    ap.forEach(function (n) { if (checkoutDays[coKey].indexOf(n) === -1) checkoutDays[coKey].push(n); });
                }
            });
            /* Dni rotacyjne: checkout + checkin tego samego apartamentu w tym samym dniu → dodaj do ev jako zajęty */
            Object.keys(checkoutDays).forEach(function (dk) {
                var coApts = checkoutDays[dk];
                var ciApts = checkinDays[dk] || [];
                coApts.forEach(function (n) {
                    if (ciApts.indexOf(n) !== -1) {
                        /* ten apartament ma tego dnia wyjazd I przyjazd → cały dzień zajęty */
                        if (!ev[dk]) ev[dk] = [];
                        if (ev[dk].indexOf(n) === -1) ev[dk].push(n);
                    }
                });
            });
            return ev;
        }
        function detApt(s) { var f = []; if (/1/.test(s)) f.push(1); if (/2/.test(s)) f.push(2); if (/3/.test(s)) f.push(3); return f; }
        function expandR(ds, de) { var r = [], s = pD(ds), e = pD(de); if (!s) return r; var allDay = ds.indexOf('T') === -1; if (!e || e <= s) { r.push(dkey(s)); return r; } var c = new Date(s); c.setDate(c.getDate() + 1); var last = new Date(e); last.setDate(last.getDate() - (allDay ? 2 : 1)); while (c <= last) { r.push(dkey(c)); c.setDate(c.getDate() + 1); } return r; }
        function pD(s) { if (!s) return null; var y = +s.substr(0, 4), mo = +s.substr(4, 2) - 1, d = +s.substr(6, 2); return (isNaN(y) || isNaN(mo) || isNaN(d)) ? null : new Date(y, mo, d); }
        function pD4(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
        function dkey(d) { return d.getFullYear() + '-' + p2(d.getMonth() + 1) + '-' + p2(d.getDate()); }
        function p2(n) { return n < 10 ? '0' + n : '' + n; }

        /* ── render calendar ── */
        function buildWdaysInto(containerId) {
            var w = $id(containerId); if (!w) return;
            w.innerHTML = '';
            T.wdays.forEach(function (d) { var e = document.createElement('div'); e.className = 'wday'; e.textContent = d; w.appendChild(e); });
        }

        function renderMonthInto(year, month, containerId) {
            var container = $id(containerId); if (!container) return;
            container.innerHTML = '';
            var today = new Date(), tk = dkey(today);
            var first = new Date(year, month, 1), last = new Date(year, month + 1, 0);
            var off = (first.getDay() + 6) % 7;
            for (var e = 0; e < off; e++) { var emp = document.createElement('div'); emp.className = 'day'; container.appendChild(emp); }
            var isPreviewMode = (selOpt.id === '_preview');
            var sApts = selOpt.apts, moNum = month + 1;
            var hasHalf = false;
            for (var d = 1; d <= last.getDate(); d++) {
                var dk = year + '-' + p2(month + 1) + '-' + p2(d);
                var dt = new Date(year, month, d);
                var past = dt < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                var busyList = cache[dk] || [];
                var isBusy;
                if (isPreviewMode) {
                    var avOpts = buildOpts(adults, kids).filter(function (o) { return !o.unavail; });
                    isBusy = avOpts.length > 0 && avOpts.every(function (o) {
                        return o.apts.some(function (n) { return busyList.indexOf(n) !== -1; });
                    });
                } else {
                    isBusy = sApts.some(function (n) { return busyList.indexOf(n) !== -1; });
                }
                var cell = document.createElement('div');
                cell.className = 'day' + (past ? ' past' : isBusy ? ' busy' : ' free');
                if (!past && dk === tk) cell.classList.add('today');
                var numEl = document.createElement('div'); numEl.className = 'day-num'; numEl.textContent = d; cell.appendChild(numEl);
                if (!past && !isBusy) {
                    if (!isPreviewMode) {
                        var silentK = (selOpt && selOpt.silentBed) ? 1 : 0;
                        var dayP = getDayPrice(sApts, moNum) + ((kids + silentK) * KIDS_PRICE);
                        var prEl = document.createElement('div');
                        prEl.className = 'day-price';
                        prEl.textContent = dayP + '€';
                        cell.appendChild(prEl);
                    }
                    var tkTime = new Date();
                    tkTime.setHours(0, 0, 0, 0);
                    var isSameMonth = (dt.getMonth() === tkTime.getMonth() && dt.getFullYear() === tkTime.getFullYear());
                    if (isSameMonth) {
                        cell.classList.add('lm-day');
                        var lmEl = document.createElement('div');
                        lmEl.className = 'day-last-minute';
                        lmEl.textContent = 'oferta last minute';
                        cell.appendChild(lmEl);
                    }
                }
                if (!past && !isBusy) {
                    if (dk === selStart && dk === selEnd) cell.classList.add('sel-start', 'sel-end');
                    else if (dk === selStart) cell.classList.add('sel-start');
                    else if (dk === selEnd) cell.classList.add('sel-end');
                    else if (selStart && selEnd && dk > selStart && dk < selEnd) cell.classList.add('in-range');
                    else if (selStart && !selEnd && dk > selStart) cell.classList.add('in-range');
                    cell.setAttribute('data-key', dk);
                    cell.onclick = function () { dayClick(this.getAttribute('data-key')); };
                } else if (!past && isBusy) {
                    var k = dk;
                    var myBl = cache[k] || [];
                    var myOpts = buildOpts(adults, kids);
                    var fNames = [];
                    myOpts.forEach(function (o) {
                        if (!o.unavail && o.id !== selOpt.id && o.apts.every(function (a) { return myBl.indexOf(a) === -1; })) {
                            fNames.push(o.name);
                        }
                    });
                    if (fNames.length > 0) {
                        cell.classList.add('half');
                        hasHalf = true;
                    }
                    cell.setAttribute('data-key', dk);
                    cell.onclick = function () {
                        var currKey = this.getAttribute('data-key');
                        var currBl = cache[currKey] || [];
                        var currOpts = buildOpts(adults, kids);
                        var currNames = [];
                        currOpts.forEach(function (o) {
                            if (!o.unavail && o.id !== selOpt.id && o.apts.every(function (a) { return currBl.indexOf(a) === -1; })) {
                                currNames.push(o.name);
                            }
                        });
                        if (currNames.length > 0) {
                            showCalAlert(currNames);
                        } else {
                            updateHint(T.hintBusyDay || 'Zajęte we wszystkich apartamentach.');
                        }
                        setTimeout(function () { if (!selEnd) updateHint(); }, 4000);
                    };
                }
                container.appendChild(cell);
            }
            return hasHalf;
        }

        function renderCal() {
            $id('cstatus').style.display = 'none'; $id('cgrid').style.display = 'block';

            // Month 1 = cy/cm, Month 2 = next month
            var cy2 = cm === 11 ? cy + 1 : cy;
            var cm2 = cm === 11 ? 0 : cm + 1;

            setTxt('cal-ml', T.months[cm] + ' ' + cy + ' – ' + T.months[cm2] + ' ' + cy2);
            setTxt('cal-month-title-1', T.months[cm] + ' ' + cy);
            setTxt('cal-month-title-2', T.months[cm2] + ' ' + cy2);

            buildWdaysInto('wdays-row-1');
            buildWdaysInto('wdays-row-2');

            var h1 = renderMonthInto(cy, cm, 'cdays-1');
            var h2 = renderMonthInto(cy2, cm2, 'cdays-2');
            var hasHalf = h1 || h2;

            var lh = $id('legHalf'); if (lh) lh.style.display = hasHalf ? 'flex' : 'none';
            updateSummary(); updateMinNote(); updateLmBanner();
        }

        /* Gdy data przyjazdu wypadnie w drugim (prawym) widocznym miesiącu,
           kalendarz sam przesuwa widok o miesiąc do przodu, żeby od razu było
           widać kolejny miesiąc na wybór daty wyjazdu — z płynną animacją. */
        function animateCalMonthShift(steps) {
            var wrap = document.querySelector('#cgrid .cal-months-wrap');
            if (!wrap) return false;
            wrap.classList.remove('cal-slide-next'); void wrap.offsetWidth;
            wrap.classList.add('cal-slide-next');
            setTimeout(function () {
                cm += steps;
                while (cm > 11) { cm -= 12; cy++; }
                while (cm < 0) { cm += 12; cy--; }
                renderCal();
            }, 230);
            setTimeout(function () { wrap.classList.remove('cal-slide-next'); }, 520);
            return true;
        }

        function showCalAlert(aptsObj) {
            var h = $id('cal-hint'); if (h) h.style.display = 'none';
            var alertBox = $id('cal-alert');
            var alertText = $id('cal-alert-text');
            if (alertBox && alertText) {
                alertText.innerHTML = (T.alertOtherApts || 'W tym terminie dostępne są inne apartamenty:') + '<br><b>' + aptsObj.join(', ') + '</b>';
                alertBox.style.display = 'flex';
            }
        }

        function hideCalAlert() {
            var alertBox = $id('cal-alert');
            if (alertBox) alertBox.style.display = 'none';
            var mixBox = $id('cal-mix-alert');
            if (mixBox) mixBox.style.display = 'none';
        }

        function changeApt() {
            hideCalAlert();
            goBack(2);
        }

        function dayClick(dk) {
            hideCalAlert();
            if (!selStart || selEnd) { selStart = dk; selEnd = null; updateHint(T.hintDepart); }
            else {
                if (dk <= selStart) { selStart = dk; selEnd = null; updateHint(T.hintDepart); }
                else {
                    var sApts = selOpt.apts;
                    var isPreview = (selOpt.id === '_preview');
                    var ok;
                    if (isPreview) {
                        /* W trybie podglądu: zakres OK jeśli JAKIKOLWIEK apt jest w całości wolny */
                        var opts = buildOpts(adults, kids);
                        ok = opts.some(function (o) {
                            if (o.unavail) return false;
                            var c2 = new Date(pD4(selStart));
                            var eD2 = pD4(dk);
                            while (c2 <= eD2) {
                                var bl2 = cache[dkey(c2)] || [];
                                if (o.apts.some(function (n) { return bl2.indexOf(n) !== -1; })) return false;
                                c2.setDate(c2.getDate() + 1);
                            }
                            return true;
                        });
                    } else {
                        ok = true;
                        var c = new Date(pD4(selStart));
                        var eD = pD4(dk);
                        while (c <= eD) { var bl = cache[dkey(c)] || []; if (sApts.some(function (n) { return bl.indexOf(n) !== -1; })) { ok = false; break; } c.setDate(c.getDate() + 1); }
                    }
                    if (!ok) {
                        var origStart = selStart;

                        var isMixedFree = false;
                        if (isPreview) {
                            isMixedFree = true;
                            var cM = new Date(pD4(origStart));
                            var eDM = pD4(dk);
                            while (cM <= eDM) {
                                var dayBlM = cache[dkey(cM)] || [];
                                var optsM = buildOpts(adults, kids).filter(function (o) { return !o.unavail; });
                                var dayHasFreeOpt = optsM.some(function (o) {
                                    return !o.apts.some(function (n) { return dayBlM.indexOf(n) !== -1; });
                                });
                                if (!dayHasFreeOpt) { isMixedFree = false; break; }
                                cM.setDate(cM.getDate() + 1);
                            }
                        }

                        if (isMixedFree) {
                            selEnd = dk; updateHint('');
                            renderCal();
                            var mixBox = $id('cal-mix-alert');
                            if (mixBox) { mixBox.style.display = 'flex'; }
                            return;
                        }

                        selStart = dk; selEnd = null;
                        var sDate = pD4(origStart), eDate = pD4(dk);
                        var opts2 = buildOpts(adults, kids);
                        var freeNames = [];
                        opts2.forEach(function (o) {
                            if (o.unavail) return;
                            var isFreeSeq = true;
                            var cur = new Date(sDate);
                            while (cur <= eDate) {
                                var dayBl = cache[dkey(cur)] || [];
                                if (o.apts.some(function (a) { return dayBl.indexOf(a) !== -1; })) { isFreeSeq = false; break; }
                                cur.setDate(cur.getDate() + 1);
                            }
                            if (isFreeSeq) freeNames.push(o.name);
                        });
                        if (freeNames.length > 0) {
                            showCalAlert(freeNames);
                        } else {
                            updateHint(T.hintBusy);
                        }
                    }
                    else {
                        selEnd = dk; updateHint('');
                        renderCal();
                        /* Sprawdź minimum pobytu PRZED przejściem do apartamentów */
                        var sD = pD4(selStart), eD2 = pD4(dk);
                        var nightsChk = Math.round((eD2 - sD) / (1000 * 60 * 60 * 24));
                        var sMo = sD.getMonth() + 1, eMo = eD2.getMonth() + 1;
                        /* min-stay: jeśli start LUB koniec pobytu w lipcu/sierpniu → min 5 nocy */
                        var isMinMoStrict = (sMo === 7 || sMo === 8 || eMo === 7 || eMo === 8);
                        /* Wyjątek: luka między rezerwacjami — jeśli dzień przed startem ORAZ dzień po końcu są zajęte,
                           to jest "orphan gap" i zasada minimum nie obowiązuje */
                        if (isMinMoStrict && cache) {
                            var gapDayBefore = new Date(sD); gapDayBefore.setDate(gapDayBefore.getDate() - 1);
                            var gapDayAfter  = new Date(eD2); gapDayAfter.setDate(gapDayAfter.getDate() + 1);
                            var busyBefore = !!(cache[dkey(gapDayBefore)] && cache[dkey(gapDayBefore)].length > 0);
                            var busyAfter  = !!(cache[dkey(gapDayAfter)]  && cache[dkey(gapDayAfter)].length  > 0);
                            if (busyBefore && busyAfter) isMinMoStrict = false;
                        }
                        if (isMinMoStrict && nightsChk < MIN_STAY_NIGHTS) {
                            var warn2 = $id('min-warn');
                            if (warn2) { warn2.textContent = T.minWarn; warn2.style.display = 'block'; }
                            return; /* NIE przechodź dalej */
                        }
                        /* Obie daty wybrane — przejdź do wyboru apartamentu */
                        setTimeout(goStep3, 400);
                        return;
                    }
                }
            }

            /* data przyjazdu wybrana w drugim widocznym miesiącu — przesuń widok do przodu */
            if (selStart && !selEnd) {
                var sd = pD4(selStart);
                var vy2 = cm === 11 ? cy + 1 : cy;
                var vm2 = cm === 11 ? 0 : cm + 1;
                if (sd.getFullYear() === vy2 && sd.getMonth() === vm2 && animateCalMonthShift(1)) {
                    return;
                }
            }
            renderCal();
        }

        function updateHint(msg) {
            var h = $id('cal-hint'); if (!h) return;
            if (msg !== undefined) { h.textContent = msg || ''; h.style.display = msg ? '' : 'none'; return; }
            if (!selStart) { h.textContent = T.hintArrival; h.style.display = ''; }
            else if (!selEnd) { h.textContent = T.hintDepart; h.style.display = ''; }
            else h.style.display = 'none';
        }

        function updateMinNote() {
            var n = $id('min-stay-note'); if (!n) return;
            var cm2 = (cm + 1) % 12;
            if (cm + 1 === 7 || cm + 1 === 8 || cm2 + 1 === 7 || cm2 + 1 === 8) { n.textContent = T.minStay; n.style.display = 'block'; }
            else n.style.display = 'none';
        }

        /* ── summary ── (summary rendering moved to step 4 / renderSummaryS4) */
        function updateSummary() {
            var warn = $id('min-warn');
            if (!selStart || !selEnd || !selOpt || selOpt.id === '_preview') { if (warn) warn.style.display = 'none'; return; }
            var s = pD4(selStart), e = pD4(selEnd);
            var nights = Math.round((e - s) / (1000 * 60 * 60 * 24));
            if (nights <= 0) { if (warn) warn.style.display = 'none'; return; }
            var isMinMo = (s.getMonth() + 1 === 7 || s.getMonth() + 1 === 8 || e.getMonth() + 1 === 7 || e.getMonth() + 1 === 8);
            /* Wyjątek: orphan gap — luka między rezerwacjami zwalnia z minimum */
            if (isMinMo && cache) {
                var smDayBefore = new Date(s); smDayBefore.setDate(smDayBefore.getDate() - 1);
                var smDayAfter  = new Date(e); smDayAfter.setDate(smDayAfter.getDate() + 1);
                var smBusyBefore = !!(cache[dkey(smDayBefore)] && cache[dkey(smDayBefore)].length > 0);
                var smBusyAfter  = !!(cache[dkey(smDayAfter)]  && cache[dkey(smDayAfter)].length  > 0);
                if (smBusyBefore && smBusyAfter) isMinMo = false;
            }
            if (isMinMo && nights < MIN_STAY_NIGHTS) { if (warn) { warn.textContent = T.minWarn; warn.style.display = 'block'; } return; }
            if (warn) warn.style.display = 'none';
        }


        function fmtDate(d) { return p2(d.getDate()) + '.' + p2(d.getMonth() + 1) + '.' + d.getFullYear(); }
        function chMonth(d) {
            cm += d;
            while (cm > 11) { cm -= 12; cy++; }
            while (cm < 0) { cm += 12; cy--; }
            if (cache) renderCal(); updateMinNote(); updateLmBanner();
        }

        function updateLmBanner() {
            var banner = $id('lm-banner'); if (!banner) return;
            var now = new Date();
            var isCurrentMonth = (cy === now.getFullYear() && cm === now.getMonth());
            if (isCurrentMonth) banner.classList.add('visible');
            else banner.classList.remove('visible');
        }
        function showSt(msg, err) { $id('cgrid').style.display = 'none'; var se = $id('cstatus'); se.style.display = 'block'; se.innerHTML = err ? '<p class="err">&#9888; ' + msg + '</p>' : '<div class="spinner"></div>' + msg; }

        /* ── navigation ── */
        var _userInteracted = false; /* guard – nie scrolluj przy pierwszym ładowaniu strony */
        function show(id) {
            $id(id).classList.remove('hidden');
            if (id === 's1') setDistractionsVisible(true);
            else if (id === 's2' || id === 's3' || id === 's4') setDistractionsVisible(false);
        }
        function hide(id) { $id(id).classList.add('hidden'); }
        function setDistractionsVisible(visible) {
            var header = $id('site-header');
            var pt = document.querySelector('.pt-section');
            if (header) header.classList.toggle('hidden', !visible);
            if (pt) pt.classList.toggle('hidden', !visible);
        }
        function mkActive(n) { var e = $id('i' + n); e.classList.remove('done'); e.classList.add('active'); }
        function mkDone(n) { var e = $id('i' + n); e.classList.remove('active'); e.classList.add('done'); $id('sn' + n).textContent = '\u2713'; }
        function resetI(n) { var e = $id('i' + n); e.classList.remove('done', 'active'); e.querySelector('.snum').textContent = n; }
        function scrollToSteps() {
            if (!_userInteracted) return; /* nie scrolluj przy pierwszym renderze */
            var el = $id('steps'); if (el) { var top = el.getBoundingClientRect().top + window.pageYOffset - 12; window.scrollTo({ top: top, behavior: 'auto' }); }
        }
        function goBack(step) {
            _userInteracted = true;
            if (step === 1) { show('s1'); hide('s2'); hide('s3'); hide('s4'); mkActive(1); resetI(2); resetI(3); resetI(4); scrollToSteps(); }
            else if (step === 2) {
                /* Wróć do kalendarza (krok 2) — zachowaj wybrane daty, zresetuj selOpt do podglądu */
                selOpt = buildPreviewOpt();
                show('s2'); hide('s3'); hide('s4'); mkActive(2); resetI(3); resetI(4);
                if (cache !== null) renderCal(); else fetchIcal();
                initAllGalleries(); scrollToSteps();
            }
            else if (step === 3) { show('s3'); hide('s4'); mkActive(3); resetI(4); refreshS2(); scrollToSteps(); }
        }

        /* ── messenger ── */
        function calcTotalForMsg(s, e, nights) {
            var sApts = selOpt.apts, totalApt = 0;
            var c = new Date(s);
            for (var i = 0; i < nights; i++) { totalApt += getDayPrice(sApts, c.getMonth() + 1); c.setDate(c.getDate() + 1); }
            var mkCount = (selOpt && selOpt.mk) ? selOpt.mk : 0;
            var totalKids = mkCount * KIDS_PRICE * nights;
            return totalApt + totalKids;
        }
        /* ── otwieranie Messenger/WhatsApp — zoptymalizowane pod przeglądarkę wbudowaną w appkę
           Facebooka/Instagrama (u nas to niemal cały ruch, skoro trafik jest z grup na FB) ──

           Dwa problemy, które to rozwiązuje:
           1) window.open(url, '_blank') potrafi być zawodne w przeglądarce wbudowanej w appkę —
              zamiast oddać sterowanie natywnej aplikacji Messenger/WhatsApp, czasem otwiera link
              w ograniczonym, wewnętrznym podglądzie appki, który wolno się ładuje i słabo obsługuje
              m.me/wa.me. Nawigacja przez location.href jest w tym środowisku dużo bardziej
              niezawodna (to standardowe zachowanie zalecane dla in-app browserów).
           2) Parametr ?text= w m.me/wa.me, który ma wypełniać treść wiadomości, nie jest oficjalnie
              gwarantowany przez Meta i w praktyce bywa zawodny — stąd "wiadomość rzadko się tworzy".
              Dlatego DODATKOWO kopiujemy treść do schowka i pokazujemy komunikat, żeby użytkownik
              mógł ją wkleić ręcznie, jeśli czat otworzy się pusty. */
        function isEmbeddedBrowser() {
            var ua = navigator.userAgent || '';
            return /FBAN|FBAV|FB_IAB|Instagram|Line\//i.test(ua);
        }
        function legacyCopyToClipboard(text) {
            try {
                var ta = document.createElement('textarea');
                ta.value = text;
                ta.style.position = 'fixed';
                ta.style.top = '-9999px';
                ta.style.left = '-9999px';
                document.body.appendChild(ta);
                ta.focus();
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            } catch (e) { /* nieudane kopiowanie nie jest krytyczne — link i tak się otworzy */ }
        }
        function copyMsgToClipboard(text) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).catch(function () { legacyCopyToClipboard(text); });
            } else {
                legacyCopyToClipboard(text);
            }
        }
        var _copyToastTimer = null;
        function showCopyToast() {
            var toast = document.getElementById('contact-copy-toast');
            if (!toast) {
                toast = document.createElement('div');
                toast.id = 'contact-copy-toast';
                toast.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%) translateY(16px);'
                    + 'background:#1a4a5c;color:#fff;padding:12px 18px;border-radius:12px;'
                    + 'font-family:"DM Sans",sans-serif;font-size:13px;line-height:1.4;max-width:88vw;'
                    + 'text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.3);z-index:99999;'
                    + 'opacity:0;transition:opacity .3s ease, transform .3s ease;pointer-events:none;';
                document.body.appendChild(toast);
            }
            toast.textContent = T.copyToastMsg || 'Wiadomość skopiowana — jeśli czat otworzy się pusty, po prostu ją wklej.';
            requestAnimationFrame(function () {
                toast.style.opacity = '1';
                toast.style.transform = 'translateX(-50%) translateY(0)';
            });
            clearTimeout(_copyToastTimer);
            _copyToastTimer = setTimeout(function () {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(-50%) translateY(16px)';
            }, 4000);
        }
        function goToContact(url, msg) {
            if (msg) copyMsgToClipboard(msg);
            showCopyToast();
            if (isEmbeddedBrowser()) {
                window.location.href = url;
            } else {
                window.open(url, '_blank', 'noopener');
            }
        }

        /* ── Messenger Help Modal ──
           Messenger jest zdecydowanie mniej przewidywalny niż WhatsApp (patrz komentarz przy
           goToContact) — dlatego zamiast samego cichego toasta, dla Messengera pokazujemy pełny,
           prosty do zrozumienia popup z animacją "przytrzymaj i wklej", zanim w ogóle otworzymy
           czat. Wiadomość kopiujemy do schowka już w momencie otwarcia popupu (to wciąż bezpośrednia
           reakcja na kliknięcie użytkownika, więc kopiowanie działa niezawodnie). */
        var _pendingMessengerUrl = null;
        function showMessengerHelp(url, msg) {
            _pendingMessengerUrl = url;
            if (msg) copyMsgToClipboard(msg);
            var overlay = document.getElementById('messenger-help-overlay');
            if (overlay) overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        window.closeMessengerHelp = function () {
            var overlay = document.getElementById('messenger-help-overlay');
            if (overlay) overlay.classList.remove('open');
            document.body.style.overflow = '';
        };
        window.confirmMessengerOpen = function () {
            var url = _pendingMessengerUrl;
            window.closeMessengerHelp();
            if (!url) return;
            if (isEmbeddedBrowser()) {
                window.location.href = url;
            } else {
                window.open(url, '_blank', 'noopener');
            }
        };

        function openMessenger() {
            var msg = T.mHi;
            if (selOpt) {
                var aptName = selOpt.name;
                var osoby = adults + (adults === 1 ? T.calA1 : T.calAN);
                if (kids > 0) osoby += ', ' + kids + (kids === 1 ? T.calK1 : T.calKN);
                if (selStart && selEnd) {
                    var s = pD4(selStart), e = pD4(selEnd);
                    var nights = Math.round((e - s) / (1000 * 60 * 60 * 24));
                    var ns = nights === 1 ? '1' + T.n1 : (nights < 5 ? nights + T.n2 : nights + T.n5);
                    var total = calcTotalForMsg(s, e, nights);
                    msg = T.mHi + ' ' + T.mInt + aptName + T.mIn + fmtDate(s) + ' - ' + fmtDate(e) + ' (' + ns + '),' + T.mG + osoby + '.' + T.mPrice + total + '€.' + T.mAsk;
                } else if (selStart) {
                    msg = T.mHi + ' ' + T.mInt + aptName + T.mFrom + fmtDate(pD4(selStart)) + ',' + T.mG + osoby + T.mAsk;
                } else {
                    msg = T.mHi + ' ' + T.mInt + aptName + ',' + T.mG + osoby + T.mAsk;
                }
            }
            if (typeof fbq === 'function') fbq('track', 'Lead', {content_name: 'Messenger'});
            showMessengerHelp('https://m.me/azzurrosardegna?text=' + encodeURIComponent(msg), msg);
        }

        /* ── whatsapp ── */
        function openWhatsApp() {
            var msg = T.mHi;
            if (selOpt) {
                var aptName = selOpt.name;
                var osoby = adults + (adults === 1 ? T.calA1 : T.calAN);
                if (kids > 0) osoby += ', ' + kids + (kids === 1 ? T.calK1 : T.calKN);
                if (selStart && selEnd) {
                    var s = pD4(selStart), e = pD4(selEnd);
                    var nights = Math.round((e - s) / (1000 * 60 * 60 * 24));
                    var ns = nights === 1 ? '1' + T.n1 : (nights < 5 ? nights + T.n2 : nights + T.n5);
                    var total = calcTotalForMsg(s, e, nights);
                    msg = T.mHi + ' ' + T.mInt + aptName + T.mIn + fmtDate(s) + ' - ' + fmtDate(e) + ' (' + ns + '),' + T.mG + osoby + '.' + T.mPrice + total + '€.' + T.mAsk;
                } else if (selStart) {
                    msg = T.mHi + ' ' + T.mInt + aptName + T.mFrom + fmtDate(pD4(selStart)) + ',' + T.mG + osoby + T.mAsk;
                } else {
                    msg = T.mHi + ' ' + T.mInt + aptName + ',' + T.mG + osoby + T.mAsk;
                }
            }
            if (typeof fbq === 'function') fbq('track', 'Lead', {content_name: 'WhatsApp'});
            goToContact('https://wa.me/48728703663?text=' + encodeURIComponent(msg), msg);
        }

        /* ── messenger & whatsapp for mixed availability ── */
        function openMessengerMix() {
            var msg = T.mHi + (T.mMixTxt || ' Jesteśmy zainteresowani pobytem w terminie {dates}. Dostępność pokazuje różne apartamenty w tym czasie. Proszę o kontakt i propozycję.').replace('{dates}', fmtDate(pD4(selStart)) + ' - ' + fmtDate(pD4(selEnd)));
            if (typeof fbq === 'function') fbq('track', 'Lead', {content_name: 'Messenger'});
            showMessengerHelp('https://m.me/azzurrosardegna?text=' + encodeURIComponent(msg), msg);
        }
        function openWhatsAppMix() {
            var msg = T.mHi + (T.mMixTxt || ' Jesteśmy zainteresowani pobytem w terminie {dates}. Dostępność pokazuje różne apartamenty w tym czasie. Proszę o kontakt i propozycję.').replace('{dates}', fmtDate(pD4(selStart)) + ' - ' + fmtDate(pD4(selEnd)));
            if (typeof fbq === 'function') fbq('track', 'Lead', {content_name: 'WhatsApp'});
            goToContact('https://wa.me/48728703663?text=' + encodeURIComponent(msg), msg);
        }

        /* ── Dowiedz się więcej popup ── */
        function buildInfoMsg() {
            var mAskInfo = (lang === 'en') ? '. Could you please send me more information?' : '. Proszę więcej informacji.';
            var msg = T.mHi;
            if (selOpt) {
                var aptName = selOpt.name;
                var osoby = adults + (adults === 1 ? T.calA1 : T.calAN);
                if (kids > 0) osoby += ', ' + kids + (kids === 1 ? T.calK1 : T.calKN);
                if (selStart && selEnd) {
                    var s = pD4(selStart), e = pD4(selEnd);
                    var nights = Math.round((e - s) / (1000 * 60 * 60 * 24));
                    var ns = nights === 1 ? '1' + T.n1 : (nights < 5 ? nights + T.n2 : nights + T.n5);
                    var total = calcTotalForMsg(s, e, nights);
                    msg = T.mHi + ' ' + T.mInt + aptName + T.mIn + fmtDate(s) + ' - ' + fmtDate(e) + ' (' + ns + '),' + T.mG + osoby + '.' + T.mPrice + total + '€.' + mAskInfo;
                } else if (selStart) {
                    msg = T.mHi + ' ' + T.mInt + aptName + T.mFrom + fmtDate(pD4(selStart)) + ',' + T.mG + osoby + mAskInfo;
                } else {
                    msg = T.mHi + ' ' + T.mInt + aptName + ',' + T.mG + osoby + mAskInfo;
                }
            }
            return msg;
        }
        function openInfoPopup() {
            document.getElementById('app-choice-popup').classList.add('open');
        }
        function closeInfoPopup(e) {
            if (e.target === document.getElementById('app-choice-popup')) {
                document.getElementById('app-choice-popup').classList.remove('open');
            }
        }
        function openInfoMessenger() {
            document.getElementById('app-choice-popup').classList.remove('open');
            var msg = buildInfoMsg();
            if (typeof fbq === 'function') fbq('track', 'Lead', {content_name: 'Messenger'});
            showMessengerHelp('https://m.me/azzurrosardegna?text=' + encodeURIComponent(msg), msg);
        }
        function openInfoWhatsApp() {
            document.getElementById('app-choice-popup').classList.remove('open');
            var msg = buildInfoMsg();
            if (typeof fbq === 'function') fbq('track', 'Lead', {content_name: 'WhatsApp'});
            goToContact('https://wa.me/48728703663?text=' + encodeURIComponent(msg), msg);
        }

        /* ── lightbox ── */
        var lbPhotos = [], lbIdx = 0;
        function lbOpen(photos, idx) {
            lbPhotos = photos; lbIdx = idx;
            lbShow();
            document.getElementById('lightbox').classList.add('open');
            document.body.style.overflow = 'hidden';
        }
        function lbClose() {
            document.getElementById('lightbox').classList.remove('open');
            document.body.style.overflow = '';
        }
        function lbShow() {
            var img = document.getElementById('lb-img');
            var spin = document.getElementById('lb-spinner');
            img.style.opacity = '0'; spin.style.display = 'block';
            img.onload = function () { spin.style.display = 'none'; img.style.opacity = '1'; };
            img.onerror = function () { spin.style.display = 'none'; img.style.opacity = '1'; };
            img.src = lbPhotos[lbIdx];
            document.getElementById('lb-counter').textContent = (lbIdx + 1) + ' / ' + lbPhotos.length;
            document.getElementById('lb-prev').style.display = lbPhotos.length > 1 ? '' : 'none';
            document.getElementById('lb-next').style.display = lbPhotos.length > 1 ? '' : 'none';
        }
        function lbMove(dir, e) { e && e.stopPropagation(); lbIdx = ((lbIdx + dir) % lbPhotos.length + lbPhotos.length) % lbPhotos.length; lbShow(); }
        function lbBgClick(e) { if (e.target === document.getElementById('lightbox')) lbClose(); }
        document.addEventListener('keydown', function (e) {
            var lb = document.getElementById('lightbox');
            if (!lb.classList.contains('open')) return;
            if (e.key === 'Escape') lbClose();
            else if (e.key === 'ArrowRight') lbMove(1);
            else if (e.key === 'ArrowLeft') lbMove(-1);
        });
        (function () {
            var sx = 0;
            document.getElementById('lightbox').addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
            document.getElementById('lightbox').addEventListener('touchend', function (e) {
                var dx = e.changedTouches[0].clientX - sx;
                if (Math.abs(dx) > 40) lbMove(dx < 0 ? 1 : -1);
            }, { passive: true });
        })();

        /* ── CIN popup ── */
        var CIN_CODE = 'IT090058C2000T3650';
        var CIN_URL = 'https://bdsr.ministeroturismo.gov.it/ricerca-cin';

        function openCinPopup() {
            var url = CIN_URL + '?cin=' + encodeURIComponent(CIN_CODE);
            window.open(url, '_blank', 'noopener');
        }

        function copyCin(btn) {
            var fullCin = CIN_CODE;
            var lbl = btn.querySelector('#t-cin-copy-lbl') || btn.querySelector('span');
            var okText = (lang === 'en') ? 'Copied!' : 'Skopiowano!';
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(fullCin).then(function () {
                    btn.classList.add('copied');
                    if (lbl) lbl.textContent = okText;
                    setTimeout(function () {
                        btn.classList.remove('copied');
                        if (lbl) lbl.textContent = (lang === 'en') ? 'Copy' : 'Kopiuj';
                    }, 2000);
                });
            } else {
                var ta = document.createElement('textarea');
                ta.value = fullCin;
                ta.style.position = 'fixed'; ta.style.opacity = '0';
                document.body.appendChild(ta); ta.focus(); ta.select();
                try { document.execCommand('copy'); } catch (e) { }
                document.body.removeChild(ta);
                btn.classList.add('copied');
                if (lbl) lbl.textContent = okText;
                setTimeout(function () {
                    btn.classList.remove('copied');
                    if (lbl) lbl.textContent = (lang === 'en') ? 'Copy' : 'Kopiuj';
                }, 2000);
            }
        }

        function closeCinPopup() { }
        function cinBgClick() { }

        /* ── FAQ ── */
        function faqToggle(item) {
            var isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(function (el) { if (el !== item) el.classList.remove('open'); });
            if (isOpen) item.classList.remove('open');
            else item.classList.add('open');
        }

        /* ── init ── */

        document.querySelectorAll('.lang-btn').forEach(function (b) { b.classList.toggle('active', b.textContent.toLowerCase() === lang); });
        applyT();

        /* Zapisz bazowy stan kroku 1 w historii – "wstecz" na kroku 1 opuści stronę,
           na każdym kolejnym kroku cofnie o jeden krok */
        if (history.replaceState) {
            history.replaceState({ step: 1 }, '');
        }
