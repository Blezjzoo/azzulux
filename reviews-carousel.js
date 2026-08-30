(function() {
    var track = document.getElementById('reviews-track');
    var counter = document.getElementById('rev-counter');
    if (!track) return;
    var total = track.querySelectorAll('.review-card').length;
    var current = 0;

    function go(idx) {
        current = (idx + total) % total;
        var w = document.getElementById('reviews-wrap').offsetWidth;
        track.style.transform = 'translateX(-' + (current * w) + 'px)';
        if (counter) counter.textContent = (current + 1) + ' / ' + total;
    }

    document.getElementById('rev-prev').addEventListener('click', function() { go(current - 1); });
    document.getElementById('rev-next').addEventListener('click', function() { go(current + 1); });

    window.addEventListener('resize', function() { go(current); });
})();
