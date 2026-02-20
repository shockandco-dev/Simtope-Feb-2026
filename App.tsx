import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sun, Moon } from 'lucide-react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export type PageType = 'home' | 'satellite' | 'iot-esim' | 'lpwa' | 'sim-management' | 'deployment-services' | 'contact' | 'company' | 'zero-data';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navigateTo = (page: PageType, elementId?: string) => {
    const cleanPath = page === 'home' ? '/' : `/${page}`;
    navigate(cleanPath);
    
    setTimeout(() => {
      if (elementId) {
        const el = document.getElementById(elementId);
        if (el) {
          const offset = 100;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  const isHomeOrZero = location.pathname === '/' || location.pathname === '/zero-data';

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text-primary transition-colors duration-500 overflow-x-hidden">
      <Header onNavigate={navigateTo} theme={theme} />
      {!isHomeOrZero && (
        <div className="relative mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img 
              src="https://raw.githubusercontent.com/shockandco-dev/Simtope-Jan-15/main/assets/zero-dollars-for-6-months-with-Simtope-leaderboard.png" 
              alt="Zero Dollars for 6 months with Simtope" 
              className="w-full" 
            />
          </div>
        </div>
      )}
      <main className="relative">
        <Outlet context={{ onNavigate: navigateTo }} />
      </main>
      
      <Footer onNavigate={navigateTo} theme={theme} />
      
      {/* Theme Toggle */}
      <button 
        onClick={toggleTheme}
        className="fixed bottom-6 left-6 z-50 p-4 bg-brand-surface/80 backdrop-blur-md border border-brand-border text-brand-text-primary rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Sun className="w-6 h-6 text-amber-400" /> : <Moon className="w-6 h-6 text-brand-primary" />}
      </button>
    </div>
  );
};

export default App;