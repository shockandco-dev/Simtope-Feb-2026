import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Button } from './Button';

interface HeaderProps {
  theme?: 'dark' | 'light';
}

export const Header: React.FC<HeaderProps> = ({ theme = 'dark' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoSrc = theme === 'dark' ? '/input_file_1.png' : '/input_file_0.png';

  const getPath = (label: string) => {
    switch (label) {
      case 'Satellite IoT': return '/satellite';
      case 'IoT SIM & eSIM': return '/iot-esim';
      case 'LPWA': return '/lpwa';
      case 'SIM Management': return '/sim-management';
      case 'Deployment Services': return '/deployment-services';
      case 'Company': return '/company';
      case '$0 Data Offer': return '/zero-data';
      case 'Home': return '/';
      default: return '/';
    }
  }

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-xl shadow-2xl border-b border-brand-border h-16' : 'bg-transparent h-24'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            <Link to="/" className="flex items-center cursor-pointer group">
              <img 
                key={logoSrc}
                src={logoSrc} 
                alt="Simtope" 
                className="h-10 sm:h-12 w-auto transition-opacity duration-300 group-hover:opacity-80 block object-contain"
                loading="eager"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group px-4">
                  {item.href ? (
                    <Link 
                      to={item.href}
                      className="flex items-center gap-1.5 py-2 text-xs font-bold uppercase tracking-widest text-brand-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button 
                      className="flex items-center gap-1.5 py-2 text-xs font-bold uppercase tracking-widest text-brand-text-secondary hover:text-brand-primary transition-colors"
                    >
                      {item.label}
                      {item.children && <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />}
                    </button>
                  )}

                  {item.children && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="w-64 bg-brand-surface border border-brand-border rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={getPath(child.label)}
                            className="w-full flex items-center justify-between px-4 py-3 text-sm text-brand-text-secondary hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all"
                          >
                            {child.label}
                            <ChevronRight className="w-3 h-3 opacity-50" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="pl-6 ml-6 border-l border-brand-border">
                <Link to="/contact">
                  <Button size="sm">Get Connected</Button>
                </Link>
              </div>
            </nav>

            <button className="lg:hidden p-2 text-brand-text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 pt-16 bg-[#94a3b8] z-40 animate-fade-in">
          <div className="p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link 
                    to={item.href}
                    className="w-full flex items-center justify-between py-4 text-lg font-bold border-b border-brand-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button 
                    onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-4 text-lg font-bold border-b border-brand-border"
                  >
                    {item.label}
                    {item.children && <ChevronDown className={expandedItem === item.label ? 'rotate-180' : ''} />}
                  </button>
                )}
                {item.children && expandedItem === item.label && (
                  <div className="bg-brand-surface/50 mt-2 rounded-xl p-2 animate-slide-up">
                    {item.children.map((child) => (
                      <Link 
                        key={child.label}
                        to={getPath(child.label)}
                        className="w-full text-left px-4 py-3 text-brand-text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-8">
              <Link to="/contact">
                <Button className="w-full" size="lg" onClick={() => setMobileMenuOpen(false)}>Get Connected</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
