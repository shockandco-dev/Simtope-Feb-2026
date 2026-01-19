
import React, { useState } from 'react';
import { Button } from './Button';
import { 
  Satellite, Smartphone, Signal, 
  Cpu, Zap, ChevronDown, ChevronUp, ArrowRight,
  Tractor, Mountain, Truck, Sprout, CloudRain
} from 'lucide-react';

export const SatellitePage: React.FC = () => {
  return (
    <div className="pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary">
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/20 via-brand-dark to-brand-dark" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Introducing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                Simtope Satellite
              </span>
            </h1>
            <p className="text-xl text-brand-text-secondary mb-8 leading-relaxed">
              Expand your IoT business into new geographies with the industry's first converged cellular and satellite IoT connectivity via a single eSIM. Reduced costs, increased uptime.
            </p>
            <div className="flex items-center gap-4 text-brand-text-secondary font-medium">
               <span>In partnership with leading NTN providers</span>
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 w-full max-w-md">
                <div className="aspect-square relative flex items-center justify-center">
                    <div className="w-64 h-64 border border-brand-primary/30 rounded-full animate-[spin_20s_linear_infinite] absolute"></div>
                    <div className="w-80 h-80 border border-brand-primary/20 rounded-full animate-[spin_30s_linear_infinite_reverse] absolute"></div>
                    <Satellite className="w-24 h-24 text-brand-text-primary absolute top-0 right-10 animate-float-slow" />
                    <Smartphone className="w-32 h-32 text-brand-primary absolute z-10" />
                    <Signal className="w-12 h-12 text-brand-accent absolute top-10 left-10 animate-pulse-slow" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-16">
            Unbreakable Uptime, Minimal Cost
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center mb-6 border border-brand-border group-hover:border-brand-primary transition-colors">
                <Signal className="w-8 h-8 text-brand-primary group-hover:animate-pulse" />
              </div>
              <h3 className="text-xl font-bold mb-3">Converged Stack</h3>
              <p className="text-brand-text-secondary leading-relaxed">
                Cellular and satellite connectivity on a single eSIM for uninterrupted IoT data flow.
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center mb-6 border border-brand-border group-hover:border-brand-primary transition-colors">
                <Zap className="w-8 h-8 text-brand-primary group-hover:animate-float-fast" />
              </div>
              <h3 className="text-xl font-bold mb-3">Unified Platform</h3>
              <p className="text-brand-text-secondary leading-relaxed">
                Managed via one platform across all network types, drastically lowering operational overhead.
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-brand-dark rounded-2xl flex items-center justify-center mb-6 border border-brand-border group-hover:border-brand-primary transition-colors">
                <Cpu className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hybrid Ready</h3>
              <p className="text-brand-text-secondary leading-relaxed">
                Compatible with 3GPP Rel 17 compliant hardware to minimize your bill of materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Datasheet Section */}
      <section className="py-24 bg-brand-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Future is Converged.</h2>
            <p className="text-brand-text-secondary text-lg mb-8 leading-relaxed">
              Don't let remote locations be dark zones. Simtope Satellite bridges the gap with seamless handover and a single billing plane.
            </p>
            <div className="space-y-4">
               {["Pole-to-Pole Coverage", "Single eSIM SKU", "LEO & GEO Support"].map((item, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                     <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                   </div>
                   <span className="font-medium">{item}</span>
                 </div>
               ))}
            </div>
            <div className="mt-10">
              <Button size="lg">Get the Satellite Datasheet</Button>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-brand-surface rounded-3xl border border-brand-border relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                  alt="Satellite Global View" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                   <p className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-2">Global Connectivity</p>
                   <h3 className="text-2xl font-bold">190+ Countries. Infinite Coverage.</h3>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Designed for the Edge</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseItem 
              icon={Truck} 
              title="Remote Logistics" 
              desc="Track high-value assets across deserts and oceans where cellular signals vanish." 
            />
            <UseCaseItem 
              icon={Mountain} 
              title="Resource Extraction" 
              desc="Monitor telemetry for oil, gas, and mining operations in the most remote terrains." 
            />
            <UseCaseItem 
              icon={Tractor} 
              title="Smart Agriculture" 
              desc="Connected livestock and machinery across vast rural acreages." 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const UseCaseItem: React.FC<{ icon: React.ElementType; title: string; desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="bg-brand-dark p-8 rounded-2xl border border-brand-border hover:border-brand-primary transition-all">
    <div className="w-12 h-12 bg-brand-surface rounded-xl flex items-center justify-center text-brand-primary mb-6">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-sm text-brand-text-secondary leading-relaxed">{desc}</p>
  </div>
);
