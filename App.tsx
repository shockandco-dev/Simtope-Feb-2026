import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { SatellitePage } from './components/SatellitePage';
import { IoTAndESimPage } from './components/IoTAndESimPage';
import { LPWAPage } from './components/LPWAPage';
import { SimManagementPage } from './components/SimManagementPage';
import { DeploymentServicesPage } from './components/DeploymentServicesPage';
import { ContactPage } from './components/ContactPage';
import { CompanyPage } from './components/CompanyPage';
import { ZeroDataPage } from './components/ZeroDataPage';
import { Sun, Moon } from 'lucide-react';

export type PageType = 'home' | 'satellite' | 'iot-sim' | 'lpwa' | 'sim-management' | 'deployment-services' | 'contact' | 'company' | 'zero-data';

const BASE_PATH = '';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(BASE_PATH, '').replace('/', '') as PageType || 'home';
      setCurrentPage(path);
    };

    window.addEventListener('popstate', handlePopState);
    
    const initialPath = window.location.pathname.replace(BASE_PATH, '').replace('/', '') as PageType;
    if (initialPath && ['satellite', 'iot-sim', 'lpwa', 'sim-management', 'deployment-services', 'contact', 'company', 'zero-data'].includes(initialPath)) {
      setCurrentPage(initialPath);
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
    setCurrentPage(page);
    
    const cleanPath = page === 'home' ? '/' : `/${page}`;
    const urlPath = `${BASE_PATH}${cleanPath}`;
    window.history.pushState({ page }, '', urlPath);
    
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

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={navigateTo} />;
      case 'satellite': return <SatellitePage />;
      case 'iot-sim': return <IoTAndESimPage onConnect={() => navigateTo('contact', 'contact-form')} />;
      case 'lpwa': return <LPWAPage onConnect={() => navigateTo('contact', 'contact-form')} />;
      case 'sim-management': return <SimManagementPage onConnect={() => navigateTo('contact', 'contact-form')} />;
      case 'deployment-services': return <DeploymentServicesPage />;
      case 'contact': return <ContactPage />;
      case 'company': return <CompanyPage />;
      case 'zero-data': return <ZeroDataPage onNavigate={navigateTo} />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text-primary transition-colors duration-500 overflow-x-hidden">
      <Header onNavigate={navigateTo} theme={theme} />
      {currentPage !== 'home' && currentPage !== 'zero-data' && (
        <div className="relative mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img src="assets/zero-dollars-for-6-months-with-Simtope-leaderboard.png" alt="Zero Dollars for 6 months with Simtope" className="w-full" />
          </div>
        </div>
      )}
      <main className="relative">
        {renderPage()}
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