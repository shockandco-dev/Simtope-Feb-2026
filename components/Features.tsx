import React from 'react';
import { STATS } from '../constants';
import { ShieldCheck, Zap, Globe2 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="platform" className="py-24 relative overflow-hidden bg-brand-surface border-y border-brand-border">
      <div className="absolute inset-0 bg-brand-dark/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-6">
              Command Your Connectivity <br/>
              <span className="text-brand-primary">From a Single Dashboard</span>
            </h2>
            <p className="text-brand-text-secondary mb-8 leading-relaxed">
              The Simtope CMP (Connectivity Management Platform) gives you granular control over your entire SIM estate. Monitor usage, set data caps, switch carriers, and troubleshoot in real-time.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-brand-text-primary font-semibold">Bank-Grade Security</h4>
                  <p className="text-sm text-brand-text-secondary mt-1">Private APNs, VPN tunnels, and IMEI locking to ensure your data never touches the public internet.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Zap className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-brand-text-primary font-semibold">Real-Time Provisioning</h4>
                  <p className="text-sm text-brand-text-secondary mt-1">Activate, suspend, or change rate plans instantly via API or portal.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Globe2 className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-brand-text-primary font-semibold">Multi-IMSI Logic</h4>
                  <p className="text-sm text-brand-text-secondary mt-1">Smart switching logic automatically connects to the strongest signal available, anywhere.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             {STATS.map((stat, idx) => (
               <div key={idx} className="bg-brand-dark/30 backdrop-blur border border-brand-border p-8 rounded-2xl text-center hover:bg-brand-dark/50 transition-colors">
                 <div className="text-4xl lg:text-5xl font-bold text-brand-text-primary mb-2">
                   {stat.value}<span className="text-brand-primary">{stat.suffix}</span>
                 </div>
                 <div className="text-sm text-brand-text-secondary uppercase tracking-wider font-medium">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};