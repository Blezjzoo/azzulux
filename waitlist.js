(function() {
  var BACKEND_URL = 'https://script.google.com/macros/s/AKfycbyXqRvEqbUY_YnfcP4fxjH-3bfUs_JcKHB5CcCDp8JA-ypBRXKsqpczWufWIZBfrFvE/exec';
  var selectedDays = null;
  var PL_MONTHS = ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'];

  // Lista "orientacyjny miesiąc pobytu" — zawsze bieżący miesiąc + 9 kolejnych, liczone od dziś (nigdy się nie dezaktualizuje)
  function populateWaitlistMonths() {
    var sel = document.getElementById('wl-month');
    if (!sel) return;
    var now = new Date();
    var opts = '<option value="">— wybierz —</option>';
    for (var i = 0; i < 9; i++) {
      var d = new Date(now.getFullYear(), now.getMonth() + i, 1);
      var val = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
      opts += '<option value="' + val + '">' + PL_MONTHS[d.getMonth()] + ' ' + d.getFullYear() + '</option>';
    }
    sel.innerHTML = opts;
  }

  window.openWaitlistModal = function() {
    var overlay = document.getElementById('waitlist-overlay');
    populateWaitlistMonths();
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (window.AzzurroFunnel) window.AzzurroFunnel.track('Waitlist_Otwarcie', {});
  };

  window.closeWaitlistModal = function() {
    document.getElementById('waitlist-overlay').style.display = 'none';
    document.body.style.overflow = '';
  };

  window.selectReminder = function(btn) {
    document.querySelectorAll('.wl-remind-btn').forEach(function(b) {
      b.style.background = '#f7f3ed';
      b.style.borderColor = '#d8eef5';
      b.style.color = '#1a4a5c';
      b.style.fontWeight = '400';
    });
    btn.style.background = '#1a4a5c';
    btn.style.borderColor = '#1a4a5c';
    btn.style.color = 'white';
    btn.style.fontWeight = '600';
    selectedDays = parseInt(btn.getAttribute('data-days'));
  };

  window.submitWaitlist = function() {
    var name  = document.getElementById('wl-name').value.trim();
    var email = document.getElementById('wl-email').value.trim();
    var month = document.getElementById('wl-month').value;
    var errorEl = document.getElementById('wl-error');

    errorEl.style.display = 'none';

    if (!name) { showError('Podaj imię.'); return; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('Podaj poprawny adres email.'); return; }
    if (!month) { showError('Wybierz orientacyjny miesiąc.'); return; }
    if (!selectedDays) { showError('Wybierz kiedy mamy Ci przypomnieć.'); return; }

    var submitBtn = document.getElementById('wl-submit');
    submitBtn.textContent = 'Zapisuję…';
    submitBtn.disabled = true;

    var remindDate = new Date();
    remindDate.setDate(remindDate.getDate() + selectedDays);

    var payload = {
      action: 'waitlist',
      name: name,
      email: email,
      month: month,
      remindDays: selectedDays,
      remindDate: remindDate.toISOString().substring(0, 10),
      timestamp: new Date().toISOString(),
      source: (window.AzzurroFunnel ? window.AzzurroFunnel.getSession().source : 'Direct'),
      sessionId: (window.AzzurroFunnel ? window.AzzurroFunnel.getSession().sessionId : '')
    };

    fetch(BACKEND_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function() {
      // no-cors nie zwraca odpowiedzi — traktujemy jako sukces
      document.getElementById('wl-confirm-email').textContent = email;
      document.getElementById('waitlist-form').style.display = 'none';
      document.getElementById('waitlist-success').style.display = 'block';
      if (window.AzzurroFunnel) window.AzzurroFunnel.track('Waitlist_Zapis', { remindDays: selectedDays, month: month });
    }).catch(function() {
      showError('Błąd połączenia. Spróbuj jeszcze raz.');
      submitBtn.textContent = 'Zapisz mnie';
      submitBtn.disabled = false;
    });
  };

  function showError(msg) {
    var el = document.getElementById('wl-error');
    el.textContent = msg;
    el.style.display = 'block';
  }

  // Zamknij po kliknięciu tła
  document.getElementById('waitlist-overlay').addEventListener('click', function(e) {
    if (e.target === this) window.closeWaitlistModal();
  });
})();
