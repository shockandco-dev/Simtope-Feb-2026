document.addEventListener('DOMContentLoaded', () => {
  // 1. INJECT GLOBAL CSS (The "Nuke" Option)
  const style = document.createElement('style');
  style.innerHTML = `
    /* Force the mobile nav to be a solid, high-priority layer */
    .mobile-menu-active {
      display: flex !important;
      flex-direction: column !important;
      position: fixed !important;
      top: 96px !important;
      left: 0 !important;
      width: 100% !important;
      height: 100vh !important;
      background-color: #0f172a !important; /* Solid Slate 900 */
      z-index: 999999 !important;
      padding: 2rem !important;
      overflow-y: auto !important;
    }
    /* Stop the background from scrolling when menu is open */
    .no-scroll { overflow: hidden !important; }
    
    /* Ensure dropdowns inside the menu don't flicker */
    header nav div, header nav ul {
      background-color: #0f172a !important;
    }
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
    header.style.transition = 'transform 0.4s ease, background-color 0.4s ease';
    window.addEventListener('scroll', () => {
      const current = window.scrollY;
      
      // Background logic
      if (current > 50) {
        header.style.backgroundColor = '#0f172a';
        header.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      } else {
        header.style.backgroundColor = 'transparent';
        header.style.borderBottom = 'none';
      }

      // Hide/Show logic
      if (current > lastScrollY && current > 150) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
      lastScrollY = current;
    }, { passive: true });
  }
});