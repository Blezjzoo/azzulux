/* ──────────────────────────────────────────────────────────────
   Sekcja „Dlaczego u nas" (Porto Torres) — wideo w tle.

   Scenariusz: zjazd do sekcji → wideo startuje w tle i leci czyste,
   na środku ekranu czeka przycisk „Dlaczego u nas?" → kliknięcie →
   przyciemnienie zjeżdża od góry do dołu, tekst wchodzi kaskadą,
   przycisk gaśnie → wideo leci dalej w pętli.

   Zasady bezpieczeństwa:
   • tekst chowamy dopiero z JS (klasa pt-armed) — bez JS sekcja
     wygląda normalnie, a przycisk w ogóle się nie pokazuje,
   • odsłonięcie nie zależy od Vimeo — gdyby player nie ruszył,
     przycisk i tak odsłania treść,
   • przy prefers-reduced-motion wideo nie rusza, tekst jest od razu.
   ────────────────────────────────────────────────────────────── */
(function () {
    var sec = document.getElementById('pt-section');
    var iframe = sec && sec.querySelector('.pt-video-frame');
    var btn = sec && sec.querySelector('#pt-reveal-btn');
    if (!sec || !iframe || !btn) return;   // bez przycisku nie chowamy treści

    function reveal() { sec.classList.add('pt-revealed'); }

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { reveal(); return; }

    sec.classList.add('pt-armed');
    btn.addEventListener('click', reveal);

    var srcSet = false, player = null, playing = false;

    function loadFrame() {
        if (srcSet) return;
        srcSet = true;
        iframe.src = iframe.getAttribute('data-src');

        if (typeof Vimeo === 'undefined') return;   // wideo to dodatek, przycisk działa i bez SDK
        try {
            player = new Vimeo.Player(iframe);
            player.on('play', function () {
                playing = true;
                sec.classList.add('pt-playing');
            });
            player.on('pause', function () { playing = false; });
        } catch (e) { /* zostaje sam przycisk */ }
    }

    function safe(p) { if (p && typeof p.catch === 'function') p.catch(function () { }); }
    function play() { if (player && !playing) safe(player.play()); }
    function pause() { if (player && playing) safe(player.pause()); }

    // Ile sekcji faktycznie widać — liczone w pikselach względem okna, nie w procentach:
    // sekcja bywa wyższa od ekranu i próg procentowy potrafi nigdy nie zaskoczyć.
    function visiblePx() {
        var r = sec.getBoundingClientRect();
        return Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0);
    }

    var thresholds = [];
    for (var i = 0; i <= 20; i++) thresholds.push(i / 20);

    var io = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
            if (!entries[i].isIntersecting) { pause(); continue; }
            loadFrame();                                    // rootMargin → iframe ładuje się chwilę przed wejściem
            var vis = visiblePx();
            if (vis >= Math.min(320, window.innerHeight * 0.45)) play();
            else if (vis <= 0) pause();                     // w zasięgu rootMargin, ale już poza ekranem
        }
    }, { threshold: thresholds, rootMargin: '300px 0px' });

    io.observe(sec);
})();
