(function () {
    var vp = null;
    // Wideo NIE odtwarza się automatycznie — czeka na kliknięcie (heroVpStart), które je odmutowuje i uruchamia
    var vpPlaying = false;
    var vpMuted = true;
    var vpReady = false;

    function initVp() {
        var iframe = document.getElementById('hero-vimeo-iframe');
        if (!iframe || typeof Vimeo === 'undefined') return;

        vp = new Vimeo.Player(iframe);
        vpReady = true;

        // sync ikon do stanu początkowego (wstrzymane, wyciszone)
        updatePlayIcons();
        updateMuteIcons();

        // Odsłoń wideo (fade-in) dopiero gdy faktycznie zaczyna grać —
        // do tego czasu widać rozmyty poster zamiast czarnego kwadratu.
        var revealed = false;
        function revealVideo() {
            if (revealed) return;
            revealed = true;
            iframe.classList.add('vp-loaded');
        }
        vp.on('play', revealVideo);

        vp.on('play', function () {
            vpPlaying = true;
            updatePlayIcons();
            var overlay = document.getElementById('hero-vp-overlay');
            if (overlay) { overlay.classList.add('vp-hidden'); overlay.classList.add('vp-started'); }
        });

        vp.on('pause', function () {
            vpPlaying = false;
            updatePlayIcons();
            // show overlay with play button when paused
            var overlay = document.getElementById('hero-vp-overlay');
            if (overlay) overlay.classList.remove('vp-hidden');
        });

        // loop=1 → ended nie odpali, ale zostawiamy jako safety
        vp.on('ended', function () {
            vpPlaying = false;
            updatePlayIcons();
            var prog = document.getElementById('hero-vp-progress');
            if (prog) { prog.value = 0; updateProgressFill(prog); }
        });

        vp.on('timeupdate', function (data) {
            var prog = document.getElementById('hero-vp-progress');
            if (prog && data.duration > 0) {
                prog.value = (data.seconds / data.duration) * 100;
                updateProgressFill(prog);
            }
        });

        // HDR celowo wyłączone (brak "hdr" w atrybucie allow iframe) — odtwarzanie w HDR/Dolby Vision
        // powodowało cykliczne, krótkie czarne miganie (przełączanie trybu SDR/HDR ekranu ~co 1s,
        // niezależnie od stanu play/pauza). Wymuszenie SDR eliminuje ten efekt.
    }

    function updatePlayIcons() {
        var pi = document.getElementById('hero-vp-play-icon');
        var pa = document.getElementById('hero-vp-pause-icon');
        if (!pi || !pa) return;
        pi.style.display = vpPlaying ? 'none' : 'block';
        pa.style.display = vpPlaying ? 'block' : 'none';
    }

    function updateMuteIcons() {
        var mi = document.getElementById('hero-vp-muted-icon');
        var si = document.getElementById('hero-vp-sound-icon');
        if (!mi || !si) return;
        mi.style.display = vpMuted ? 'block' : 'none';
        si.style.display = vpMuted ? 'none' : 'block';
    }

    function updateProgressFill(input) {
        var pct = ((input.value - input.min) / (input.max - input.min)) * 100;
        input.style.background =
            'linear-gradient(to right, rgba(255,255,255,0.85) ' + pct + '%, rgba(255,255,255,0.22) ' + pct + '%)';
    }

    window.heroVpToggle = function () {
        if (!vpReady) { initVp(); return; }
        if (vpPlaying) { vp.pause(); } else { vp.play(); }
    };

    // Kliknięcie w overlay "Kliknij, aby zobaczyć lokalizację" — odmutowuje i startuje wideo w jednym ruchu
    window.heroVpStart = function () {
        if (!vpReady) { initVp(); return; }
        vpMuted = false;
        vp.setVolume(1);
        updateMuteIcons();
        vp.play();
    };

    window.heroVpMute = function () {
        if (!vpReady) return;
        vpMuted = !vpMuted;
        vp.setVolume(vpMuted ? 0 : 1);
        updateMuteIcons();
    };

    window.heroVpSeek = function (val) {
        if (!vpReady) return;
        var prog = document.getElementById('hero-vp-progress');
        updateProgressFill(prog);
        vp.getDuration().then(function (dur) {
            vp.setCurrentTime(dur * val / 100);
        });
    };

    // init when Vimeo script has loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initVp);
    } else {
        initVp();
    }
})();
