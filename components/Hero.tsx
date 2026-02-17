import React from 'react';
import { Button } from './Button';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onConnect?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onConnect }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-brand-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(59,130,246,0.15),transparent_60%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
              Tier-1 Network Status: Active
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-brand-text-primary">
              The IIoT and Commercial <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary">
                Connectivity Provider.
              </span>
            </h1>
            
            <p className="text-xl text-brand-text-secondary max-w-xl leading-relaxed font-medium">
              The easiest way to manage mobile data for your workforce and devices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group text-xl px-10" onClick={onConnect}>
                Explore Solutions
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

            <div className="pt-12 flex flex-wrap gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-brand-text-primary">190+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary">Countries</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-brand-text-primary">100%</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary">Uptime SLA</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-brand-text-primary">MFF2</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-text-secondary">Industrial Std</span>
               </div>
            </div>
          </div>

          <div className="relative group">
             <img 
               src="https://raw.githubusercontent.com/shockandco-dev/Simtope-Jan-15/main/assets/zero-data-offer.png"
               alt="Simtope Connectivity Stack"
               className="relative z-10 w-full max-w-xl mx-auto"
             />
          </div>
        </div>
      </div>
    </section>
  );
};