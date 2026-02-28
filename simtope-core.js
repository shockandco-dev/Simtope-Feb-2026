document.addEventListener('DOMContentLoaded', () => {
  // 1. INJECT GLOBAL CSS (The Master Stylesheet)
  const style = document.createElement('style');
  style.innerHTML = `
    /* --- DESKTOP DROPDOWN FIXES --- */
    /* 1. Force Dropdowns to the absolute front layer and give them a solid background */
    header .group > div, 
    header nav .absolute {
      z-index: 999999 !important; /* Forces it ON TOP of the primary menu and page */
      background-color: #0f172a !important; /* Solid Slate 900 */
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.8) !important;
    }
    
    /* 2. Bridge the "Hover Gap" so the menu doesn't disappear when the mouse moves down */
    header .group {
      padding-bottom: 24px !important; 
      margin-bottom: -24px !important;
    }

    /* --- MOBILE MENU FIXES --- */
    .mobile-menu-active {
      display: flex !important;
      flex-direction: column !important;
      position: fixed !important;
      top: 96px !important;
      left: 0 !important;
      width: 100% !important;
      height: 100vh !important;
      background-color: #0f172a !important;
      z-index: 999999 !important;
      padding: 2rem !important;
      overflow-y: auto !important;
    }
    .no-scroll { overflow: hidden !important; }
  `;
  document.head.appendChild(style);

  // 2. MOBILE MENU TOGGLE
  const mobileBtn = document.querySelector('header button.lg\\:hidden');
  const navMenu = document.querySelector('header nav');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isActive = navMenu.classList.toggle('mobile-menu-active');
      navMenu.classList.toggle('hidden', !isActive);
      document.body.classList.toggle('no-scroll', isActive);
    });
  }

  // 3. SMART SCROLLING HEADER
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  if (header) {
    // Ensure the header itself has a high layer priority, but lower than the dropdowns
    header.style.zIndex = '999998'; 
    header.style.transition = 'transform 0.4s ease, background-color 0.4s ease';
    
    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      
      // Solid background when scrolled down
      if (current > 50) {
        header.style.backgroundColor = '#0f172a';
        header.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      } else {
        header.style.backgroundColor = 'transparent';
        header.style.borderBottom = 'none';
      }

      // Hide on scroll down, show on scroll up
      if (current > lastScrollY && current > 150) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
      lastScrollY = current;
    }, { passive: true });
  }

  // 4. THEME TOGGLE
  const themeBtn = document.querySelector('button[aria-label="Toggle Theme"]');
  if (themeBtn) {
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('theme-light');
    }
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('theme-light');
      const isLight = document.body.classList.contains('theme-light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }
});