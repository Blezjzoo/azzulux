/* ── Mapa sekcji „Dlaczego u nas?" — dwa tryby ─────────────────────────────────
   Zastępuje map-animation.js (tamta mapa siedziała w kroku 4 i po 2,5 s wygaszała
   widok „szeroki" z lotniskami — czyli dokładnie tę informację, której szuka połowa
   odwiedzających: czy z Porto Torres da się zwiedzać wyspę).

   Tryb przełącza JEDNOCZEŚNIE mapę i listę pod nią — jedno źródło danych (ROWS)
   karmi obie. Domyślny tryb to „zwiedzać wyspę", bo ta grupa była dotąd nieobsłużona.

   Teksty biorą się z window.T (LANGS w booking.js), a applyT() woła
   window.renderPtMap() przy każdej zmianie języka.

   UWAGA techniczna: widoczność map przełączamy KLASĄ, nie właściwością .hidden —
   `hidden` należy do HTMLElement, a <svg> to SVGElement, więc `svg.hidden = true`
   tworzy zwykłą właściwość JS i nie ustawia atrybutu. Mapa by się nie przełączała.
*/
(function () {
    'use strict';

    /* Ikony w stylu reszty strony (24×24, stroke 1.6) — te same ścieżki,
       których używają pt-hi-row i sekcja atutów. */
    var ICONS = {
        plane: '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/>',
        beach: '<path d="M12 3v13"/><path d="M3 13a9 9 0 0 1 18 0z"/><path d="M12 16a2 2 0 0 1-2 2"/>',
        ruins: '<path d="M3 21h18"/><path d="M4 21V10"/><path d="M8 21V10"/><path d="M12 21V10"/><path d="M16 21V10"/><path d="M20 21V10"/><path d="M2 10l10-6 10 6"/>',
        grotto: '<path d="M4 21v-7a8 8 0 0 1 16 0v7"/><path d="M10 21v-5a2 2 0 0 1 4 0v5"/>',
        fork: '<path d="M6 2v7a2 2 0 0 0 4 0V2"/><path d="M8 9v13"/><path d="M17 2c-1.7 0-3 2-3 5s1 5 3 5"/><path d="M17 2v19"/>',
        cart: '<path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.8h7.6a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="9" cy="21" r="1"/><circle cx="18" cy="21" r="1"/>',
        cup: '<path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8z"/><path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 3c-.5 1 .5 1.5 0 3"/><path d="M12 3c-.5 1 .5 1.5 0 3"/>',
        boat: '<ellipse cx="8" cy="6" rx="2" ry="3"/><ellipse cx="16" cy="15" rx="2" ry="3"/><path d="M8 9v3"/><path d="M16 18v3"/>',
        slice: '<path d="M3 5l18 3-9 14z"/><circle cx="10" cy="10" r=".8"/><circle cx="14" cy="13" r=".8"/>'
    };

    /* Kolejność = rosnący czas dojazdu. Dzięki temu od razu widać, że wszystko
       istotne mieści się w ~50 minut, a dwie najdalsze pozycje są na końcu.
       `k` łączy wiersz z pinezką i trasą na mapie (atrybut data-k w index.html). */
    var ROWS = {
        wyspa: [
            { k: 'aho', i: 'plane',  tKey: 'ptmAho', tVal: 'ptvAho' },
            { k: 'cas', i: 'ruins',  tKey: 'ptmCas', tVal: 'ptvCas' },
            { k: 'pel', i: 'beach',  tKey: 'ptmPel', tVal: 'ptvPel' },
            { k: 'alg', i: 'ruins',  tKey: 'ptmAlgRow', tVal: 'ptvAlg' },
            { k: 'gro', i: 'grotto', tKey: 'ptmGro', tVal: 'ptvGro' },
            { k: 'olb', i: 'plane',  tKey: 'ptmOlb', tVal: 'ptvOlb' },
            { k: 'sme', i: 'beach',  tKey: 'ptmSme', tVal: 'ptvSme' },
            { k: 'mad', i: 'boat',   tKey: 'ptmMad', tVal: 'ptvMad' }
        ],
        okolica: [
            { k: 'res', i: 'fork',  tKey: 'ptmRes', tVal: 'ptvRes' },
            { k: 'kaw', i: 'cup',   tKey: 'ptmKaw', tVal: 'ptvKaw' },
            { k: 'lid', i: 'cart',  tKey: 'ptmLid', tVal: 'ptvLid' },
            { k: 'bal', i: 'beach', tKey: 'ptmBal', tVal: 'ptvBal' },
            { k: 'por', i: 'boat',  tKey: 'ptmPor', tVal: 'ptvPor' },
            { k: null,  i: 'slice', tKey: 'ptmObiad', tVal: 'ptvObiad' }
        ]
    };

    var mode = 'wyspa';

    function T() { return window.T || {}; }
    function txt(key, zapas) {
        var v = T()[key];
        return (v === undefined || v === null || v === '') ? zapas : v;
    }
    function $(id) { return document.getElementById(id); }

    function icon(name) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
               'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[name] + '</svg>';
    }

    function highlight(k, on) {
        var map = $('pt-map-' + mode);
        if (!map || !k) return;
        var el = map.querySelectorAll('[data-k="' + k + '"]');
        for (var n = 0; n < el.length; n++) el[n].classList.toggle('on', on);
    }

    /* Wartości oznaczone w LANGS jako niepotwierdzone dostają kropkowane podkreślenie
       — żeby było widać, które czasy pochodzą z szacunku, a nie z pomiaru. */
    var DO_POTWIERDZENIA = { cas: 1, pel: 1, sme: 1, mad: 1 };

    function renderList() {
        var box = $('pt-facts');
        if (!box) return;
        box.textContent = '';

        ROWS[mode].forEach(function (r) {
            var el = document.createElement(r.k ? 'button' : 'div');
            el.className = 'pt-fact';
            if (r.k && DO_POTWIERDZENIA[r.k]) el.setAttribute('data-check', '1');
            el.innerHTML = icon(r.i) + '<span class="pt-fact-name"></span><span class="pt-fact-val"></span>';
            el.querySelector('.pt-fact-name').textContent = txt(r.tKey, '');
            el.querySelector('.pt-fact-val').textContent = txt(r.tVal, '');

            if (r.k) {
                el.type = 'button';
                ['mouseenter', 'focus'].forEach(function (ev) {
                    el.addEventListener(ev, function () { highlight(r.k, true); });
                });
                ['mouseleave', 'blur'].forEach(function (ev) {
                    el.addEventListener(ev, function () { highlight(r.k, false); });
                });
            }
            box.appendChild(el);
        });

        var leg = $('pt-legend');
        if (leg) leg.innerHTML = txt(mode === 'wyspa' ? 'ptLegWyspa' : 'ptLegOkolica', '');
    }

    function setMode(m) {
        mode = m;
        ['wyspa', 'okolica'].forEach(function (x) {
            var tab = $('pt-tab-' + x);
            if (tab) tab.setAttribute('aria-selected', String(x === m));
            var map = $('pt-map-' + x);
            if (map) map.classList.toggle('is-off', x !== m);
        });
        var panel = $('pt-map-panel');
        if (panel) panel.setAttribute('aria-labelledby', 'pt-tab-' + m);
        renderList();

        if (window.AzzurroFunnel && typeof window.AzzurroFunnel.track === 'function') {
            window.AzzurroFunnel.track('Mapa_Tryb', { tryb: m });
        }
    }

    /* Teksty pinezek biorą się z tych samych kluczy co nazwy w liście —
       jedno źródło prawdy, żeby mapa i lista nie rozjechały się przy tłumaczeniu. */
    function renderPins() {
        [].concat(ROWS.wyspa, ROWS.okolica).forEach(function (r) {
            if (!r.k) return;
            var el = $('t-ptm-' + r.k);
            if (el) el.textContent = txt(r.tKey, el.textContent);
        });
    }

    window.renderPtMap = function () {
        renderPins();
        renderList();
    };

    function init() {
        ['wyspa', 'okolica'].forEach(function (x) {
            var tab = $('pt-tab-' + x);
            if (tab) tab.addEventListener('click', function () { setMode(x); });
        });
        window.renderPtMap();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
