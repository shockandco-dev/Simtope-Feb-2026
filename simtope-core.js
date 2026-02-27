document.addEventListener('DOMContentLoaded', () => {
  // --- 1. THEME TOGGLE ---
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

  // --- 2. MOBILE MENU TOGGLE (Bulletproof Inline Styles) ---
  const mobileBtn = document.querySelector('header button.lg\\:hidden');
  const navMenu = document.querySelector('header nav');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      const isHidden = navMenu.classList.contains('hidden');
      
      if (isHidden) {
        // Open Menu
        navMenu.classList.remove('hidden');
        
        // Bypass Tailwind completely for guaranteed positioning
        navMenu.style.cssText = `
          display: flex !important;
          flex-direction: column !important;
          position: absolute !important;
          top: 96px !important; /* Exact height of the h-24 header */
          left: 0 !important;
          width: 100% !important;
          background-color: rgb(15, 23, 42) !important; /* Dark slate background */
          padding: 1.5rem !important;
          gap: 1.5rem !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5) !important;
        `;
        
        // Wipe the horizontal desktop spacing
        Array.from(navMenu.children).forEach(child => {
          child.style.margin = '0 !important';
        });
        
      } else {
        // Close Menu
        navMenu.classList.add('hidden');
        navMenu.style.cssText = ''; // Wipes inline styles
        Array.from(navMenu.children).forEach(child => {
          child.style.margin = '';
        });
      }
    });
  }

  // --- 3. SMART SCROLLING HEADER (Bulletproof Inline Styles) ---
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  if (header) {
    // Ensure smooth sliding animation
    header.style.transition = 'transform 0.4s ease-in-out, background-color 0.4s ease-in-out';
    
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      // Solid background when scrolled down
      if (currentScrollY > 20) {
        header.style.backgroundColor = 'rgb(15, 23, 42)';
        header.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      } else {
        header.style.backgroundColor = 'transparent';
        header.style.borderBottom = 'none';
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down -> slide up out of view
        header.style.transform = 'translateY(-100%)';
        
        // Auto-close menu if open
        if (navMenu && !navMenu.classList.contains('hidden') && window.innerWidth < 1024) {
          mobileBtn.click();
        }
      } else {
        // Scrolling up -> slide down into view
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    },