
import React from 'react';
import { Hammer, Rocket, Settings, TrendingUp } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: Hammer,
      label: 'BUILD',
      title: 'ARCHITECT IOT EXCELLENCE',
      description: 'Designing the optimal framework tailored to achieve your outcomes.'
    },
    {
      icon: Rocket,
      label: 'DEPLOY',
      title: 'MOBILIZE YOUR VISION',
      description: 'Delivering your IoT solutions to target markets without friction.'
    },
    {
      icon: Settings,
      label: 'MANAGE',
      title: 'FUTURE-PROOF YOUR SOLUTION',
      description: 'Optimizing your solution for efficiency and longevity.'
    },
    {
      icon: TrendingUp,
      label: 'SCALE',
      title: 'ACCELERATE GROWTH',
      description: 'Expanding your capabilities, reach and impact.'
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-brand-border">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-surface via-brand-dark to-brand-dark pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-text-primary mb-6 tracking-tight">
            ENABLING END-TO-END <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              IOT SOLUTIONS
            </span>
          </h2>
          <p className="text-brand-text-secondary max-w-3xl mx-auto text-lg leading-relaxed">
            Simplify your IoT journey with Simtope. From concept to scale, we help you focus on driving 
            meaningful outcomes while we handle the complexities of IoT deployment.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-border to-transparent -z-10 opacity-50" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* Icon */}
              <div className="w-24 h-24 rounded-2xl bg-brand-surface/80 backdrop-blur-sm border border-brand-border flex items-center justify-center mb-8 shadow-xl shadow-black/10 group-hover:border-amber-500/50 group-hover:bg-brand-surface transition-all duration-300 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <step.icon className="w-10 h-10 text-brand-primary group-hover:text-amber-400 transition-colors duration-300" strokeWidth={1.5} />
              </div>

              {/* Step Label */}
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-amber-500 tracking-widest uppercase">{step.label}</h3>
              </div>

              {/* Title */}
              <h4 className="text-brand-text-primary font-extrabold text-sm mb-4 uppercase tracking-wider h-10 flex items-center justify-center">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-brand-text-secondary text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
