// Derma Companion - Essential functionality without analytics tracking
(function () {
  // Jahr im Footer setzen, falls vorhanden
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile Menü-Funktionalität
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
      const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('nav-open');
      mobileMenuToggle.classList.toggle('menu-open');
    });

    // Menü schließen beim Klick auf Nav-Links
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('nav-open');
        mobileMenuToggle.classList.remove('menu-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Menü schließen beim Klick außerhalb
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mainNav.classList.remove('nav-open');
        mobileMenuToggle.classList.remove('menu-open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Seitenspezifische Logik
  const isLanding = /index\.html$|\/$/.test(location.pathname) || location.pathname === '';
  const isCapture = /capture\.html$/.test(location.pathname);

  if (isCapture) {
    const form = document.getElementById('email-form');
    const note = document.getElementById('form-note');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = (document.getElementById('email') || {}).value || '';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          if (note) {
            note.textContent = 'Bitte gib eine gültige E‑Mail ein.';
            note.style.color = '#dc2626';
          }
          return;
        }
        // E-Mail-Einreichung (ohne Tracking)
        if (note) {
          note.textContent = 'Danke! Wir melden uns zum Start.';
          note.style.color = 'var(--accent)';
        }
        form.reset();
      });
    }
  }

  // Doctors email form functionality
  const doctorsForm = document.getElementById('doctors-email-form');
  const doctorsNote = document.getElementById('doctors-form-note');
  if (doctorsForm) {
    doctorsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = (document.getElementById('doctors-email') || {}).value || '';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (doctorsNote) {
          doctorsNote.textContent = 'Bitte gib eine gültige E‑Mail ein.';
          doctorsNote.style.color = '#dc2626';
        }
        return;
      }
      // Doctors email submission (ohne Tracking)
      if (doctorsNote) {
        doctorsNote.textContent = 'Vielen Dank! Wir informieren Sie über die nächsten Schritte.';
        doctorsNote.style.color = 'var(--accent)';
      }
      doctorsForm.reset();
    });
  }
})();