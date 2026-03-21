// ============================================================
   // JAVASCRIPT

   // 1. Scroll reveal — fades sections in as they enter the viewport.
  //  2. Active nav link — highlights the current section in the nav.

   // No external libraries required.
 // ============================================================ 
    
    // ---- Scroll Reveal ----------------------------------------
    // Watches for elements with class="reveal" and adds "visible"
    // once they scroll into view, triggering the CSS transition.
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after reveal so the animation only plays once
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el);
    });


    // ---- Active Nav Link Highlighting -------------------------
    // Adds an "active" style to whichever nav link matches the
    // section currently in view. Purely cosmetic.
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.style.color = '';
              if (link.getAttribute('href') === '#' + entry.target.id) {
                link.style.color = 'var(--accent)';
              }
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' } // Triggers when section is near the middle of the screen
    );

    sections.forEach((section) => navObserver.observe(section));

// Hamburger menu toggle
const hamburger   = document.getElementById('hamburger');
const navDropdown = document.getElementById('nav-dropdown');

hamburger.addEventListener('click', () => {
  const isOpen = navDropdown.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

function closeMenu() {
  navDropdown.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-label', 'Open menu');
}

// Close menu when tapping outside of it
document.addEventListener('click', (e) => {
  if (!navDropdown.contains(e.target) && !hamburger.contains(e.target)) {
    closeMenu();
  }
});