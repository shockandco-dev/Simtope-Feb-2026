import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-4">Engineered for Enterprise</h2>
          <p className="text-brand-text-secondary max-w-2xl mx-auto">
            Choose the form factor and connectivity protocol that fits your hardware architecture.
            Scalable, secure, and ready for deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative bg-brand-surface p-6 rounded-2xl border border-brand-border hover:border-brand-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col"
            >
              <div className="w-12 h-12 bg-brand-dark/50 rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-brand-text-primary mb-3">{service.title}</h3>
              <p className="text-brand-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-brand-text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-brand-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};