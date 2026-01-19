
import React from 'react';
import { Button } from './Button';
import { 
  Globe, ShieldCheck, Cpu, Briefcase, 
  MapPin, Users, Target, Rocket 
} from 'lucide-react';

export const CompanyPage: React.FC = () => {
  return (
    <div className="pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary">
      
      {/* 1. Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-surface to-brand-dark" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">About Simtope</span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Architects of the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Connected Future</span>
          </h1>
          <p className="text-xl text-brand-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
            We are a premium B2B mobile network operator and distributor dedicated to solving the hardest connectivity challenges. 
            From soldered chips in industrial machinery to satellite uplinks in remote wilderness, we keep your business online.
          </p>
        </div>
      </section>

      {/* 2. Who We Are & What We Do */}
      <section className="py-20 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                    <p className="text-brand-text-secondary text-lg mb-6 leading-relaxed">
                        Simtope is a specialized connectivity partner with over 20 years of experience in the telecommunications sector. 
                        Headquartered with dual operations in the United States and Canada, we bridge the gap between complex cellular infrastructure and enterprise application.
                    </p>
                    <p className="text-brand-text-secondary text-lg leading-relaxed">
                        We don't just sell SIM cards; we engineer resilience. Our team of connectivity architects works alongside your engineers to design networks that survive vibration, temperature extremes, and signal-challenged environments.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-dark p-6 rounded-xl border border-brand-border">
                        <MapPin className="w-8 h-8 text-brand-primary mb-4" />
                        <h3 className="font-bold text-white">North American Roots</h3>
                        <p className="text-sm text-brand-text-secondary mt-2">Offices in Greentown, IN and Carp, ON serving a global client base.</p>
                    </div>
                    <div className="bg-brand-dark p-6 rounded-xl border border-brand-border">
                        <Users className="w-8 h-8 text-brand-primary mb-4" />
                        <h3 className="font-bold text-white">Expert Team</h3>
                        <p className="text-sm text-brand-text-secondary mt-2">Dedicated solution engineers, not just sales reps.</p>
                    </div>
                    <div className="bg-brand-dark p-6 rounded-xl border border-brand-border col-span-2">
                        <Globe className="w-8 h-8 text-brand-primary mb-4" />
                        <h3 className="font-bold text-white">Global Reach</h3>
                        <p className="text-sm text-brand-text-secondary mt-2">Connecting devices in 190+ countries through Tier-1 carrier partnerships.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="py-24 bg-brand-dark">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                 <p className="text-brand-text-secondary max-w-2xl mx-auto">
                     We simplify the complex. By aggregating multiple carrier networks and satellite feeds into a single management plane, we provide a unified connectivity experience.
                 </p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 <div className="bg-brand-surface p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-colors">
                     <Cpu className="w-10 h-10 text-brand-accent mb-6" />
                     <h3 className="text-xl font-bold text-white mb-3">Hardware Distribution</h3>
                     <p className="text-brand-text-secondary leading-relaxed">
                         Distributing industrial-grade SIM form factors (MFF2, 2FF-4FF) and certified radio modules ready for manufacturing.
                     </p>
                 </div>
                 <div className="bg-brand-surface p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-colors">
                     <ShieldCheck className="w-10 h-10 text-brand-accent mb-6" />
                     <h3 className="text-xl font-bold text-white mb-3">Network Operations</h3>
                     <p className="text-brand-text-secondary leading-relaxed">
                         Acting as a Mobile Network Operator (MNO) to provide secure private APNs, static IPs, and direct carrier routing.
                     </p>
                 </div>
                 <div className="bg-brand-surface p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-colors">
                     <Rocket className="w-10 h-10 text-brand-accent mb-6" />
                     <h3 className="text-xl font-bold text-white mb-3">Deployment Services</h3>
                     <p className="text-brand-text-secondary leading-relaxed">
                         Consulting on device design, certification, and logistics to ensure your product launches on time and scales without failure.
                     </p>
                 </div>
             </div>
         </div>
      </section>

      {/* 4. Who We Do It For */}
      <section className="py-24 bg-brand-surface border-t border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">Who We Do It For</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      { title: 'Enterprise IoT', desc: 'Large scale deployments requiring robust SLAs and security.' },
                      { title: 'Automotive', desc: 'Telematic solutions needing high-speed, low-latency roaming.' },
                      { title: 'Utilities', desc: 'Smart metering infrastructure requiring deep indoor penetration (NB-IoT).' },
                      { title: 'Agriculture', desc: 'Remote monitoring solutions leveraging hybrid satellite/cellular tech.' }
                  ].map((industry, i) => (
                      <div key={i} className="group relative overflow-hidden rounded-xl bg-brand-dark border border-brand-border p-6 hover:shadow-xl transition-all">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-brand-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>
                          <Target className="w-8 h-8 text-brand-text-primary mb-4" />
                          <h3 className="text-lg font-bold text-white mb-2">{industry.title}</h3>
                          <p className="text-sm text-brand-text-secondary">{industry.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 5. Values / Ethos */}
      <section className="py-24 bg-brand-dark">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <Briefcase className="w-12 h-12 text-brand-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
              <blockquote className="text-2xl font-light italic text-brand-text-secondary mb-8">
                  "Connectivity should never be the bottleneck. It should be the invisible, unbreakable thread that ties your innovation to the world."
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center gap-2 text-brand-text-primary font-bold">
                      <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                      Transparency
                  </div>
                  <div className="flex items-center gap-2 text-brand-text-primary font-bold">
                      <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                      Reliability
                  </div>
                  <div className="flex items-center gap-2 text-brand-text-primary font-bold">
                      <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                      Scalability
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};
