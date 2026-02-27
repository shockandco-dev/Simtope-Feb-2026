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

  // --- 2. MOBILE MENU TOGGLE (Fixed Positioning) ---
  const mobileBtn = document.querySelector('header button.lg\\:hidden');
  const navMenu = document.querySelector('header nav');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('hidden');
      navMenu.classList.toggle('fixed'); // Locks it to the viewport
      navMenu.classList.toggle('top-24'); // Snaps it right below the h-24 header
      navMenu.classList.toggle('left-0');
      navMenu.classList.toggle('w-full');
      navMenu.classList.toggle('bg-brand-dark');
      navMenu.classList.toggle('flex-col');
      navMenu.classList.toggle('items-start'); // Aligns links to the left
      navMenu.classList.toggle('p-6');
      navMenu.classList.toggle('border-b');
      navMenu.classList.toggle('border-brand-border');
      navMenu.classList.toggle('max-h-[calc(100vh-6rem)]'); // Prevents long menus from breaking the screen
      navMenu.classList.toggle('overflow-y-auto');
    });
  }

  // --- 3. SMART SCROLLING HEADER ---
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      // Add a solid background to the header when you start scrolling
      if (currentScrollY > 20) {
        header.classList.replace('bg-transparent', 'bg-brand-dark');
        header.classList.add('border-b', 'border-brand-border', 'shadow-lg');
      } else {
        header.classList.replace('bg-brand-dark', 'bg-transparent');
        header.classList.remove('border-b', 'border-brand-border', 'shadow-lg');
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down -> pull header out of view
        header.classList.add('-translate-y-full');
        
        // Auto-close mobile menu if it's open so it doesn't float weirdly
        if (navMenu && !navMenu.classList.contains('hidden') && window.innerWidth < 1024) {
          mobileBtn.click(); 
        }
      } else {
        // Scrolling up -> drop header back into view
        header.classList.remove('-translate-y-full');
      }
      
      lastScrollY = currentScrollY;
    }, { passive: true });
  }
});