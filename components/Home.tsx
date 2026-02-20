
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Hero } from './Hero';
import { Services } from './Services';
import { Features } from './Features';
import { Process } from './Process';
import { Contact } from './Contact';
import { PageType } from '../App';

type OutletContextType = {
  onNavigate: (page: PageType, elementId?: string) => void;
};

export const Home: React.FC = () => {
  const { onNavigate } = useOutletContext<OutletContextType>();

  return (
    <div className="animate-fade-in space-y-0">
      <Hero onConnect={() => onNavigate('contact', 'contact-form')} />
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
        <Services />
      </div>
      <Features />
      <Process />
      <Contact />
    </div>
  );
};
