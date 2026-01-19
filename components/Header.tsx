import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Button } from './Button';
import { PageType } from '../App';

// Import the logos so Vite processes them correctly for the build
import logoLight from '../input_file_0.png';
import logoDark from '../input_file_1.png';

interface HeaderProps {
  onNavigate: (page: PageType, elementId?: string) => void;
  theme?: 'dark' | 'light';
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, theme = 'dark' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, label: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    switch (label) {
      case 'Satellite IoT': onNavigate('satellite'); break;
      case 'IoT SIM & eSIM': onNavigate('iot-sim'); break;
      case 'LPWA': onNavigate('lpwa'); break;
      case 'SIM Management': onNavigate('sim-management'); break;
      case 'Deployment Services': onNavigate('deployment-services'); break;
      case 'Company': onNavigate('company'); break;
      case 'Home': onNavigate('home'); break;
      default: onNavigate('home');
    }
  };

  const logoSrc = theme === 'dark' ? logoDark : logoLight;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-dark/90 backdrop-blur-xl shadow-2xl border-b border-brand-border h-16' : 'bg-transparent h-24'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <img 
              key={logoSrc}
              src={logoSrc} 
              alt="Simtope" 
              className="h-10 sm:h-12 w-auto transition-opacity duration-300 group-hover:opacity-80 block object-contain"
              loading="eager"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group px-4">
                <button 
                  onClick={(e) => !item.children && handleLinkClick(e, item.label)}
                  className="flex items-center gap-1.5 py-2 text-xs font-bold uppercase tracking-widest text-brand-text-secondary hover:text-brand-primary transition-colors"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />}
                </button>

                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-64 bg-brand-surface border border-brand-border rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={(e) => handleLinkClick(e, child.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-sm text-brand-text-secondary hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all"
                        >
                          {child.label}
                          <ChevronRight className="w-3 h-3 opacity-50" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pl-6 ml-6 border-l border-brand-border">
              <Button size="sm" onClick={() => onNavigate('contact')}>Get Connected</Button>
            </div>
          </nav>

          <button className="lg:hidden p-2 text-brand-text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-brand-dark/95 backdrop-blur-2xl z-40 animate-fade-in">
          <div className="p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <button 
                  onClick={() => item.children ? setExpandedItem(expandedItem === item.label ? null : item.label) : handleLinkClick({} as any, item.label)}
                  className="w-full flex items-center justify-between py-4 text-lg font-bold border-b border-brand-border"
                >
                  {item.label}
                  {item.children && <ChevronDown className={expandedItem === item.label ? 'rotate-180' : ''} />}
                </button>
                {item.children && expandedItem === item.label && (
                  <div className="bg-brand-surface/50 mt-2 rounded-xl p-2 animate-slide-up">
                    {item.children.map((child) => (
                      <button 
                        key={child.label}
                        onClick={(e) => handleLinkClick(e, child.label)}
                        className="w-full text-left px-4 py-3 text-brand-text-secondary"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-8">
              <Button className="w-full" size="lg" onClick={() => onNavigate('contact')}>Get Connected</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
