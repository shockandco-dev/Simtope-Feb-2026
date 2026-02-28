document.addEventListener('DOMContentLoaded', () => {
  // 1. INJECT GLOBAL CSS
  const style = document.createElement('style');
  style.innerHTML = `
    /* --- TAILWIND JIT RESPONSIVE FIX FOR IMAGES --- */
    @media (min-width: 768px) {
      .md\\:hidden { display: none !important; }
      .md\\:block { display: block !important; }
    }

    /* --- DESKTOP DROPDOWN FIXES --- */
    @media (min-width: 1024px) {
      header .group {
        padding-bottom: 12px !important; 
        margin-bottom: -12px !important;
      }
      header nav .group .absolute > div {
        z-index: 999999 !important;
        background-color: #0f172a !important;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.8) !important;
      }
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
    
    /* The "Invisible Box" Fix for Mobile Accordions */
    @media (max-width: 1023px) {
      /* Crush the gap completely by default */
      .mobile-menu-active .group .absolute {
        display: none !important; 
        position: relative !important;
        top: 0 !important;
        opacity: 1 !important;
        visibility: visible !important;
        transform: none !important;
        padding-top: 0.5rem !important;
      }
      
      /* Open the accordion when JS adds this class */
      .mobile-menu-active .group.mobile-open .absolute {
        display: block !important;
      }
      
      /* Blend the open links naturally into the slate background */
      .mobile-menu-active .group .absolute > div {
        background-color: transparent !important;
        box-shadow: none !important;
        border: none !important;
        padding: 0 0 0 1rem !important;
      }
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

  // 2.5 MOBILE ACCORDION LOGIC
  const dropdownParents = document.querySelectorAll('header nav .group');
  dropdownParents.forEach(parent => {
    parent.addEventListener('click', (e) => {
      // Only fire this behavior on mobile/tablet screens
      if (window.innerWidth < 1024) {
        parent.classList.toggle('mobile-open');
      }
    });
  });

  // 3. SMART SCROLLING HEADER
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  if (header) {
    header.style.zIndex = '999998'; 
    header.style.transition = 'transform 0.4s ease, background-color 0.4s ease';
    
    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      if (current > 50) {
        header.style.backgroundColor = '#0f172a';
        header.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      } else {
        header.style.backgroundColor = 'transparent';
        header.style.borderBottom = 'none';
      }

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