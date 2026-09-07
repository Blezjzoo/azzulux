/* ──────────────────────────────────────────────────────────────
   Sekcja „Dlaczego u nas" (Porto Torres) — wideo w tle.

   Scenariusz: wejście w sekcję (scrollem albo przyciskiem „Dlaczego u nas?")
   → wideo startuje w tle, leci kilka sekund czyste → tło lekko ciemnieje
   i wjeżdża tekst → wideo leci dalej w pętli.

   Zasady bezpieczeństwa:
   • tekst chowamy dopiero z JS (klasa pt-armed) — bez JS sekcja wygląda jak dotąd,
   • gdyby Vimeo nie wystartowało, po FAILSAFE tekst pokazuje się mimo wszystko,
   • przy prefers-reduced-motion wideo w ogóle nie rusza, tekst jest od razu.
   ────────────────────────────────────────────────────────────── */
(function () {
    var REVEAL_DELAY = 5000;   // ile wideo leci czyste, zanim ruszy przyciemnienie i kaskada tekstu
    var FAILSAFE = 9000;   // awaryjne odsłonięcie tekstu, gdy player nie ruszy

    var sec = document.getElementById('pt-section');
    var iframe = sec && sec.querySelector('.pt-video-frame');
    if (!sec || !iframe) return;

    function reveal() { sec.classList.add('pt-revealed'); }

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { reveal(); return; }

    sec.classList.add('pt-armed');

    var srcSet = false, player = null, revealTimer = null, failArmed = false, playing = false;

    function loadFrame() {
        if (srcSet) return;
        srcSet = true;
        iframe.src = iframe.getAttribute('data-src');

        if (typeof Vimeo === 'undefined') return;   // bez SDK zostaje sam failsafe
        try {
            player = new Vimeo.Player(iframe);
            player.on('play', function () {
                playing = true;
                sec.classList.add('pt-playing');
                if (!revealTimer) revealTimer = setTimeout(reveal, REVEAL_DELAY);
            });
            player.on('pause', function () { playing = false; });
        } catch (e) { /* zostaje failsafe */ }
    }

    function safe(p) { if (p && typeof p.catch === 'function') p.catch(function () { }); }

    // Failsafe uzbrajamy dopiero przy pierwszej próbie odtworzenia, czyli gdy widz
    // naprawdę jest w sekcji. Uzbrojony przy samym preloadzie odsłoniłby tekst
    // komuś, kto stoi jeszcze na hero.
    function armFailsafe() {
        if (failArmed) return;
        failArmed = true;
        setTimeout(reveal, FAILSAFE);
    }

    function play() {
        armFailsafe();
        if (player && !playing) safe(player.play());
    }
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
