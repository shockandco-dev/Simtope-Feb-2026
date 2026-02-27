document.addEventListener('DOMContentLoaded', () => {
  // --- 1. THEME TOGGLE ---
  const themeBtn = document.querySelector('button[aria-label="Toggle Theme"]');
  if (themeBtn) {
    // Remember the user's choice across pages
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('theme-light');
    }

    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('theme-light');
      // Save preference to local storage
      const isLight = document.body.classList.contains('theme-light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

  // --- 2. MOBILE MENU TOGGLE ---
  const mobileBtn = document.querySelector('header button.lg\\:hidden');
  const navMenu = document.querySelector('header nav');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      // Toggle the classes to turn the horizontal nav into a vertical mobile dropdown
      navMenu.classList.toggle('hidden');
      navMenu.classList.toggle('absolute');
      navMenu.classList.toggle('top-24');
      navMenu.classList.toggle('left-0');
      navMenu.classList.toggle('w-full');
      navMenu.classList.toggle('bg-brand-dark');
      navMenu.classList.toggle('flex-col');
      navMenu.classList.toggle('p-6');
      navMenu.classList.toggle('border-b');
      navMenu.classList.toggle('border-brand-border');
      navMenu.classList.toggle('z-50');
    });
  }
});