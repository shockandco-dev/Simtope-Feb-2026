import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  theme?: 'dark' | 'light';
}

export const Footer: React.FC<FooterProps> = ({ theme = 'dark' }) => {
  const logoSrc = theme === 'dark' ? '/input_file_1.png' : '/input_file_0.png';

  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4 cursor-pointer group">
              <img key={logoSrc} src={logoSrc} alt="Simtope" className="h-8 w-auto transition-opacity group-hover:opacity-80 object-contain" loading="lazy" />
            </Link>
            <p className="text-brand-text-secondary text-sm leading-relaxed">
              Global Tier-1 connectivity aggregator for the IoT generation. Enabling devices to talk in 190+ countries.
            </p>
          </div>
          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li><Link to="/iot-sim" className="hover:text-brand-primary transition-colors text-left">eSIM for Enterprise</Link></li>
              <li><Link to="/iot-sim" className="hover:text-brand-primary transition-colors text-left">Industrial SIMs</Link></li>
              <li><Link to="/satellite" className="hover:text-brand-primary transition-colors text-left">Satellite IoT</Link></li>
              <li><Link to="/deployment-services" className="hover:text-brand-primary transition-colors text-left">Private LTE/5G</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li><Link to="/company" className="hover:text-brand-primary transition-colors text-left">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li><a href="mailto:sales@simtope.com" className="hover:text-brand-primary transition-colors">sales@simtope.com</a></li>
              <li><a href="tel:+18002688628" className="hover:text-brand-primary transition-colors">(800) 268-8628</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-text-secondary">
          <p>© {new Date().getFullYear()} Simtope Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
