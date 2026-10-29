// Footer year
document.getElementById('yr').textContent = new Date().getFullYear();

// Contact form: client-side validation, then opens the visitor's email app.
// Change MY_EMAIL to your address. (A static page can't send email by itself.)
var MY_EMAIL = 'you@example.com';

document.getElementById('cf').addEventListener('submit', function (ev) {
  ev.preventDefault();
  var n = document.getElementById('n');
  var e = document.getElementById('e');
  var m = document.getElementById('m');
  var st = document.getElementById('st');
  var ok = true;

  function check(el, bad, msg) {
    el.nextElementSibling.textContent = bad ? msg : '';
    if (bad) ok = false;
  }

  check(n, n.value.trim().length < 2, 'Please enter your name.');
  check(e, !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.value.trim()), 'Please enter a valid email.');
  check(m, m.value.trim().length < 10, 'Message should be at least 10 characters.');

  if (!ok) { st.textContent = ''; return; }

  st.className = 'ok';
  st.textContent = 'Thanks! Opening your email app…';
  window.location.href = 'mailto:' + MY_EMAIL +
    '?subject=' + encodeURIComponent('Portfolio message from ' + n.value.trim()) +
    '&body=' + encodeURIComponent(m.value.trim() + '\n\nFrom: ' + n.value.trim() + ' (' + e.value.trim() + ')');
});
