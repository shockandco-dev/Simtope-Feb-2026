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
        // 1. Show the menu
        navMenu.classList.remove('hidden');
        
        // 2. Force the background and layering (The Nuke Option)
        navMenu.style.setProperty('display', 'flex', 'important');
        navMenu.style.setProperty('flex-direction', 'column', 'important');
        navMenu.style.setProperty('position', 'fixed', 'important');
        navMenu.style.setProperty('top', '96px', 'important');
        navMenu.style.setProperty('left', '0', 'important');
        navMenu.style.setProperty('width', '100%', 'important');
        navMenu.style.setProperty('height', '100vh', 'important'); // Covers the whole screen
        navMenu.style.setProperty('background-color', '#0f172a', 'important'); // Solid Slate
        navMenu.style.setProperty('z-index', '999999', 'important'); // Highest possible priority
        navMenu.style.setProperty('padding', '2rem', 'important');
        
        // 3. Prevent clicking through to the page content
        document.body.style.overflow = 'hidden'; 
        
      } else {
        // Close Menu
        navMenu.classList.add('hidden');
        navMenu.style.cssText = ''; 
        document.body.style.overflow = ''; // Let the user scroll again
      }

    });
  }

  // --- 3. SMART SCROLLING HEADER ---
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
    }, { passive: true });
  }
});