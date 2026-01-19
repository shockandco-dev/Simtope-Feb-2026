
import React from 'react';
import { Button } from './Button';
import { 
  ClipboardCheck, Users, Zap, Activity, 
  Truck, Eye, PenTool, MessageSquare, 
  Award, Laptop, Search, Wrench, Clock
} from 'lucide-react';

export const DeploymentServicesPage: React.FC = () => {
  return (
    <div className="pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary">
      
      {/* 1. Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-surface to-brand-dark" />
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">IoT Hardware & Connectivity Testing</span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Put your IoT devices <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">to the test.</span>
            </h1>
            <p className="text-xl text-brand-text-secondary mb-8 leading-relaxed">
              You'd be mistaken to think deployments are as easy as putting a SIM card in and then sending your device out into the field. Look for an IoT partner that has strong logistics, SIM ordering processes, and manufacturing partners.
            </p>
            <Button size="lg">Talk to an IoT Expert</Button>
          </div>
        </div>
      </section>

      {/* 2. From Pilot to Deployment (3 Columns) */}
      <section className="py-20 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-brand-primary font-bold text-sm uppercase tracking-widest">IoT Deployment Experts</span>
                <h2 className="text-3xl font-bold mt-2">From pilot to successful deployment.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-brand-dark/50 border border-brand-border">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">IoT deployment support</h3>
                        <Users className="w-6 h-6 text-brand-accent" />
                    </div>
                    <p className="text-sm text-brand-text-secondary leading-relaxed">
                        Seamlessly integrating into your technical, operational, and support teams.
                    </p>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl bg-brand-dark/50 border border-brand-border">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">Low-risk proof of concept</h3>
                        <Zap className="w-6 h-6 text-brand-accent" />
                    </div>
                    <p className="text-sm text-brand-text-secondary leading-relaxed">
                        We look to reduce device onboarding friction and demonstrate real-world results.
                    </p>
                </div>

                <div className="flex flex-col gap-4 p-6 rounded-xl bg-brand-dark/50 border border-brand-border">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">Ongoing post-deployment</h3>
                        <Activity className="w-6 h-6 text-brand-accent" />
                    </div>
                    <p className="text-sm text-brand-text-secondary leading-relaxed">
                        Our deployment managers continue to help you scale your estate and ensure you achieve business objectives.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Detailed Timeline / Steps */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-accent to-brand-dark hidden md:block"></div>
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-border md:hidden"></div>

            <div className="space-y-16">
                {/* Item 1 */}
                <div className="relative md:grid md:grid-cols-2 gap-12 items-center group">
                    <div className="md:text-right pl-12 md:pl-0">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">Dedicated deployment support</h3>
                        <p className="text-brand-text-secondary text-sm leading-relaxed">
                            The implementation of an IoT project is complex. It is imperative to have a dedicated Deployment Services Manager to guide you through the challenges that are sure to arise.
                        </p>
                    </div>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-accent rounded-full border-4 border-brand-dark shadow-[0_0_10px_theme('colors.blue.500')]"></div>
                    <div className="hidden md:block pl-12">
                         {/* Empty for layout balance */}
                    </div>
                </div>

                {/* Item 2 */}
                <div className="relative md:grid md:grid-cols-2 gap-12 items-center group">
                    <div className="hidden md:block md:text-right pr-12">
                         {/* Empty for layout balance */}
                    </div>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-accent rounded-full border-4 border-brand-dark shadow-[0_0_10px_theme('colors.blue.500')]"></div>
                    <div className="pl-12">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">Real-time technical IoT support</h3>
                        <p className="text-brand-text-secondary text-sm leading-relaxed">
                            Our technical IoT experts guide you throughout the entire deployment engagement to ensure your journey from pilot to full commercial deployment is successful.
                        </p>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="relative md:grid md:grid-cols-2 gap-12 items-center group">
                    <div className="md:text-right pl-12 md:pl-0">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">Logistics and manufacturing efficiency</h3>
                        <p className="text-brand-text-secondary text-sm leading-relaxed">
                            From SIM ordering to dispatch, having SIMs in the right place at the right time is fundamental to the success of any IoT deployment. We work directly with your manufacturer.
                        </p>
                    </div>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-accent rounded-full border-4 border-brand-dark shadow-[0_0_10px_theme('colors.blue.500')]"></div>
                    <div className="hidden md:block pl-12">
                         {/* Empty for layout balance */}
                    </div>
                </div>

                {/* Item 4 */}
                <div className="relative md:grid md:grid-cols-2 gap-12 items-center group">
                    <div className="hidden md:block md:text-right pr-12">
                         {/* Empty for layout balance */}
                    </div>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-accent rounded-full border-4 border-brand-dark shadow-[0_0_10px_theme('colors.blue.500')]"></div>
                    <div className="pl-12">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">Operational visibility</h3>
                        <p className="text-brand-text-secondary text-sm leading-relaxed">
                            Without specialist knowledge, it can be hard to truly understand the status and efficiency of an IoT device estate. Count on us to proactively monitor your estate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Specialty IoT Services (Renamed from Bespoke) */}
      <section className="py-24 bg-brand-surface border-t border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-text-primary mb-16">Specialty IoT Services</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Service 1 */}
                  <div className="group bg-brand-dark p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-all duration-300">
                      <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <PenTool className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">Device Design</h3>
                      <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                          Bespoke IoT hardware design to ensure your idea gets to market on time and on budget.
                      </p>
                      <button className="text-xs font-bold text-brand-primary uppercase tracking-wider group-hover:text-brand-accent">Learn more</button>
                  </div>

                  {/* Service 2 */}
                  <div className="group bg-brand-dark p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-all duration-300">
                      <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <MessageSquare className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">Advisory Services</h3>
                      <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                          Specialist IoT consultancy to help you from device design to deployment strategy.
                      </p>
                      <button className="text-xs font-bold text-brand-primary uppercase tracking-wider group-hover:text-brand-accent">Learn more</button>
                  </div>

                  {/* Service 3 */}
                  <div className="group bg-brand-dark p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-all duration-300">
                      <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <Award className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">Certification Support</h3>
                      <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                          Advice and support to ensure your IoT devices meet global certification requirements.
                      </p>
                      <button className="text-xs font-bold text-brand-primary uppercase tracking-wider group-hover:text-brand-accent">Learn more</button>
                  </div>

                  {/* Service 4 */}
                  <div className="group bg-brand-dark p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-all duration-300">
                      <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <Laptop className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">Deployment Services</h3>
                      <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                          We manage your SIM's lifecycle, leaving you to focus on your core business.
                      </p>
                      <button className="text-xs font-bold text-brand-primary uppercase tracking-wider group-hover:text-brand-accent">Learn more</button>
                  </div>

                  {/* Service 5 */}
                  <div className="group bg-brand-dark p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-all duration-300">
                      <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <Search className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">Device Testing & Validation</h3>
                      <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                          Extensive IoT device testing so you know your device is ready for anything.
                      </p>
                      <button className="text-xs font-bold text-brand-primary uppercase tracking-wider group-hover:text-brand-accent">Learn more</button>
                  </div>

                  {/* Service 6 */}
                  <div className="group bg-brand-dark p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-all duration-300">
                      <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <Clock className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">Rapid Prototyping</h3>
                      <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                          Fast-track your IoT product from concept to a working prototype in just 90 days.
                      </p>
                      <button className="text-xs font-bold text-brand-primary uppercase tracking-wider group-hover:text-brand-accent">Learn more</button>
                  </div>

                   {/* Service 7 */}
                   <div className="group bg-brand-dark p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-all duration-300">
                      <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <Wrench className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">Technical Support</h3>
                      <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                          Ensure IoT project success with dedicated support for the lifetime of your connected devices.
                      </p>
                      <button className="text-xs font-bold text-brand-primary uppercase tracking-wider group-hover:text-brand-accent">Learn more</button>
                  </div>
                   {/* Service 8 - IoT Readiness (Added to fill grid based on screenshot style) */}
                   <div className="group bg-brand-dark p-8 rounded-xl border border-brand-border hover:border-brand-primary transition-all duration-300">
                      <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                          <ClipboardCheck className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">IoT Readiness Check</h3>
                      <p className="text-sm text-brand-text-secondary mb-4 leading-relaxed">
                          Measure the maturity of your IoT device and project readiness based on peers and best practice.
                      </p>
                      <button className="text-xs font-bold text-brand-primary uppercase tracking-wider group-hover:text-brand-accent">Learn more</button>
                  </div>

              </div>
          </div>
      </section>

      {/* 5. CTA Footer */}
      <section className="py-24 bg-brand-dark relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-widest mb-4">Ready to deploy?</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-8">Start your IoT journey with confidence</h3>
            <p className="text-brand-text-secondary text-lg mb-12 max-w-3xl mx-auto">
                Leverage our expertise to minimize risk and accelerate your time to market. From design to deployment, Simtope is your partner in connectivity.
            </p>
            <Button size="lg" className="shadow-xl shadow-brand-primary/20">
                Contact an Expert
            </Button>
         </div>
      </section>

    </div>
  );
};
