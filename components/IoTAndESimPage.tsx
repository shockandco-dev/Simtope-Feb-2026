
import React from 'react';
import { Button } from './Button';
import { 
  Smartphone, Cpu, Globe, 
  BarChart3, Wifi, Layers, Zap,
  Server, Lock
} from 'lucide-react';

interface IoTAndESimPageProps {
  onConnect?: () => void;
}

export const IoTAndESimPage: React.FC<IoTAndESimPageProps> = ({ onConnect }) => {
  return (
    <div className="pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-surface to-brand-dark" />
        {/* Abstract Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Seamless IoT Connectivity. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Unrivaled Multi-Network Power.</span>
            </h1>
            <p className="text-xl text-brand-text-secondary mb-8 leading-relaxed">
              Deploy, manage, and scale your connected devices globally with our flexible SIM and eSIM solutions, backed by tier-one carriers across North America and beyond. Get started today with the adaptable <strong>Simp Tri-SIM</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
               <Button variant="primary" size="lg" onClick={onConnect}>Contact Sales</Button>
            </div>
          </div>
          
          <div className="flex justify-center relative perspective-[1000px]">
             {/* 3D Card Visual Placeholder */}
             <div className="relative w-72 h-96 bg-gradient-to-tr from-slate-900 to-slate-800 rounded-2xl border border-brand-primary/30 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-y-0 transition-transform duration-700 flex flex-col items-center justify-between p-6 group">
                <div className="w-full flex justify-between items-start">
                    <div className="w-12 h-8 bg-brand-primary/20 rounded-md"></div>
                    <Cpu className="w-8 h-8 text-brand-accent" />
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="w-32 h-24 bg-gradient-to-br from-amber-200 to-amber-500 rounded-lg shadow-inner mb-4 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 border-t-2 border-b-2 border-amber-600/20 opacity-50"></div>
                        <div className="w-20 h-16 border-2 border-amber-700/50 rounded flex items-center justify-center">
                            <span className="text-amber-900 font-bold text-xs tracking-widest">SIMTOPE</span>
                        </div>
                    </div>
                    <h3 className="text-white font-bold tracking-widest text-xl">SIMP TRI-SIM</h3>
                </div>
                <div className="w-full text-right">
                    <div className="text-xs text-brand-text-secondary">5G / LTE-M / NB-IoT</div>
                </div>
             </div>
             
             {/* Floating Background Elements */}
             <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-primary/20 blur-2xl rounded-full"></div>
             <div className="absolute bottom-10 -left-10 w-32 h-32 bg-brand-accent/10 blur-3xl rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 2. Simp Tri-SIM Introduction */}
      <section className="py-20 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">
                    Introducing the Simp Tri-SIM: <span className="text-brand-primary">Adaptable by Design</span>
                </h2>
                <p className="text-brand-text-secondary">
                    We understand that logistics and hardware standardization are critical to scaling IoT. Our <strong>Simp Tri-SIM</strong> is our version of the world's most versatile IoT SIM card, engineered to streamline your deployment process.
                </p>
            </div>
            
            <h3 className="text-xl font-bold text-center mb-8 uppercase tracking-widest text-brand-text-secondary">Why Choose the Simp Tri-SIM?</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-brand-dark p-6 rounded-xl border border-brand-border hover:border-brand-primary transition-colors">
                    <Layers className="w-10 h-10 text-brand-accent mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Ultimate Flexibility</h4>
                    <p className="text-brand-text-secondary text-sm">
                        This card provides all three standard SIM form factors (<strong>2FF, 3FF, 4FF</strong>) in a single punch-out card, allowing you to use one SKU across various hardware types.
                    </p>
                </div>
                <div className="bg-brand-dark p-6 rounded-xl border border-brand-border hover:border-brand-primary transition-colors">
                    <Cpu className="w-10 h-10 text-brand-accent mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Built for M2M</h4>
                    <p className="text-brand-text-secondary text-sm">
                        Optimized for Machine-to-Machine communication, providing durable, reliable data transmission in diverse industrial and remote environments.
                    </p>
                </div>
                <div className="bg-brand-dark p-6 rounded-xl border border-brand-border hover:border-brand-primary transition-colors">
                    <Zap className="w-10 h-10 text-brand-accent mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Plug-and-Play Activation</h4>
                    <p className="text-brand-text-secondary text-sm">
                        Pre-provisioned and ready for immediate deployment, reducing your time-to-market.
                    </p>
                </div>
                <div className="bg-brand-dark p-6 rounded-xl border border-brand-border hover:border-brand-primary transition-colors">
                    <Globe className="w-10 h-10 text-brand-accent mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">Global Access</h4>
                    <p className="text-brand-text-secondary text-sm">
                        The foundation for our multi-network roaming capabilities, ensuring your devices stay connected wherever they travel.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Coverage Section */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
            <div>
                <h2 className="text-3xl font-bold mb-6">
                    Unrivaled North American & Global Coverage
                </h2>
                
                <p className="text-brand-text-secondary mb-6 leading-relaxed">
                   Don't rely on a single carrier. Our connectivity platform automatically manages network switching to ensure your device is always using the strongest available signal. We offer unparalleled redundancy through direct partnerships with leading carriers.
                </p>

                <p className="text-brand-text-secondary mb-8 leading-relaxed">
                   Your devices benefit from robust, redundant coverage across the United States and Canada, including access to:
                </p>

                {/* Carrier List */}
                <div className="grid grid-cols-2 gap-4 mb-12">
                     <div className="flex items-center gap-3 bg-brand-surface p-3 rounded-lg border border-brand-border hover:border-brand-primary transition-colors group">
                        <div className="w-28 h-20 flex items-center justify-center bg-white rounded px-4 py-2 shrink-0">
                             <img src="https://www.freeiconspng.com/uploads/verizon-logo-png-1.png" alt="Verizon" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-white text-lg">Verizon</span>
                     </div>
                     <div className="flex items-center gap-3 bg-brand-surface p-3 rounded-lg border border-brand-border hover:border-brand-primary transition-colors group">
                        <div className="w-28 h-20 flex items-center justify-center bg-white rounded px-4 py-2 shrink-0">
                             <img src="https://simtope.com/_assets/media/0b9d1fecd75255ca3527771141ee642a.png" alt="AT&T" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-white text-lg">AT&T</span>
                     </div>
                     <div className="flex items-center gap-3 bg-brand-surface p-3 rounded-lg border border-brand-border hover:border-brand-primary transition-colors group">
                        <div className="w-28 h-20 flex items-center justify-center bg-white rounded px-4 py-2 shrink-0">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Rogers_logo.svg/2560px-Rogers_logo.svg.png" alt="Rogers" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-white text-lg">Rogers</span>
                     </div>
                     <div className="flex items-center gap-3 bg-brand-surface p-3 rounded-lg border border-brand-border hover:border-brand-primary transition-colors group">
                        <div className="w-28 h-20 flex items-center justify-center bg-white rounded px-4 py-2 shrink-0">
                             <img src="https://1000logos.net/wp-content/uploads/2021/09/Telus-Symbol.png" alt="Telus" className="w-full h-full object-contain" />
                        </div>
                        <span className="font-bold text-white text-lg">Telus</span>
                     </div>
                </div>

                {/* Connectivity Advantage Table */}
                <div className="overflow-hidden rounded-xl border border-brand-border">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-brand-surface">
                            <tr>
                                <th className="p-4 text-white font-bold border-b border-brand-border">Feature</th>
                                <th className="p-4 text-white font-bold border-b border-brand-border">Your Connectivity Advantage</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-border bg-brand-dark/50">
                            <tr>
                                <td className="p-4 font-medium text-brand-primary">Multi-Network Redundancy</td>
                                <td className="p-4 text-brand-text-secondary text-sm">Automatic, seamless failover between multiple carriers ensures continuous data flow.</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-brand-primary">Optimized Roaming</td>
                                <td className="p-4 text-brand-text-secondary text-sm">Intelligent algorithms manage the connection, optimizing for both signal strength and cost efficiency.</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-brand-primary">Future-Proof Technology</td>
                                <td className="p-4 text-brand-text-secondary text-sm">Supports 2G, 3G, 4G LTE, LTE-M, and NB-IoT networks to meet the needs of any deployment.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-[600px] bg-brand-surface rounded-2xl border border-brand-border overflow-hidden flex items-center justify-center group">
                 <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"></div>
                 {/* Decorative Pulse Points */}
                 <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                 <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500 rounded-full"></div>
                 
                 <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-300"></div>
                 <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-blue-500 rounded-full"></div>

                 <div className="text-center z-10 p-8 bg-brand-dark/90 backdrop-blur rounded-xl border border-brand-border shadow-2xl">
                    <Globe className="w-12 h-12 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white">Global Coverage Map</h3>
                    <p className="text-sm text-brand-text-secondary mt-2">Connecting 190+ Countries</p>
                 </div>
            </div>
        </div>
      </section>

      {/* 4. Form Factors */}
      <section id="form-factors" className="py-24 bg-brand-surface">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold mb-4">SIM and eSIM Form Factors</h2>
                 <p className="text-brand-text-secondary max-w-2xl mx-auto">
                     Choose the physical format that best suits your device's architecture and environmental needs, all managed through the same unified platform.
                 </p>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 {/* Plastic SIM */}
                 <div className="bg-brand-dark p-8 rounded-xl border border-brand-border shadow-lg flex flex-col">
                     <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 border border-brand-border">
                         <Smartphone className="w-6 h-6 text-brand-primary" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Simp Tri-SIM (Plastic)</h3>
                     <p className="text-brand-text-secondary text-sm mb-6 flex-grow">
                         A standard, removable plastic card supporting 2FF, 3FF, and 4FF sizes.
                     </p>
                     <div className="pt-4 border-t border-brand-border">
                         <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">Ideal Use Case</span>
                         <p className="text-xs text-brand-text-secondary mt-1">Proof-of-Concept, field testing, and devices with accessible SIM slots.</p>
                     </div>
                 </div>

                 {/* MFF2 Chip */}
                 <div className="bg-brand-dark p-8 rounded-xl border border-brand-border shadow-lg flex flex-col">
                     <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 border border-brand-border">
                         <Cpu className="w-6 h-6 text-brand-primary" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">MFF2 Chip SIM (eSIM)</h3>
                     <p className="text-brand-text-secondary text-sm mb-6 flex-grow">
                         A durable, soldering-ready chip designed for permanent integration into your PCB.
                     </p>
                     <div className="pt-4 border-t border-brand-border">
                         <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">Ideal Use Case</span>
                         <p className="text-xs text-brand-text-secondary mt-1">Automotive applications, rugged industrial assets, and high-vibration environments.</p>
                     </div>
                 </div>

                 {/* Remote Provisioning */}
                 <div className="bg-brand-dark p-8 rounded-xl border border-brand-border shadow-lg flex flex-col">
                     <div className="w-12 h-12 bg-brand-surface rounded-lg flex items-center justify-center mb-6 border border-brand-border">
                         <Wifi className="w-6 h-6 text-brand-primary" />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">Remote Provisioning</h3>
                     <p className="text-brand-text-secondary text-sm mb-6 flex-grow">
                         Over-the-air (OTA) capabilities that allow you to change connectivity profiles and update carrier settings without physical access.
                     </p>
                     <div className="pt-4 border-t border-brand-border">
                         <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">Ideal Use Case</span>
                         <p className="text-xs text-brand-text-secondary mt-1">Long-term global deployments and inaccessible devices (e.g., smart meters).</p>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* 5. Connectivity Management Platform */}
      <section className="py-24 bg-brand-dark border-y border-brand-border relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent -z-10"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
             <div>
                 <h2 className="text-3xl font-bold text-brand-text-primary mb-6">Connectivity Management Platform</h2>
                 <p className="text-brand-text-secondary mb-10 text-lg">
                     Gaining control over your fleet is as important as the connectivity itself. Our unified platform provides the tools you need to manage the entire lifecycle of your SIMs.
                 </p>
                 
                 <div className="space-y-8">
                     <div className="flex gap-4">
                         <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-surface flex items-center justify-center text-brand-accent border border-brand-border">
                             <BarChart3 className="w-6 h-6" />
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-white">Real-Time Monitoring</h4>
                             <p className="text-sm text-brand-text-secondary mt-1">View data usage, session details, and connectivity status for every single device in your fleet.</p>
                         </div>
                     </div>
                     <div className="flex gap-4">
                         <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-surface flex items-center justify-center text-brand-accent border border-brand-border">
                             <Zap className="w-6 h-6" />
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-white">Usage Control</h4>
                             <p className="text-sm text-brand-text-secondary mt-1">Set data limits, customize alerts, and automate actions to prevent bill shock and control costs.</p>
                         </div>
                     </div>
                     <div className="flex gap-4">
                         <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-surface flex items-center justify-center text-brand-accent border border-brand-border">
                             <Lock className="w-6 h-6" />
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-white">Security Features</h4>
                             <p className="text-sm text-brand-text-secondary mt-1">Implement VPNs and private network access to ensure your device data is transmitted securely and privately.</p>
                         </div>
                     </div>
                     <div className="flex gap-4">
                         <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-surface flex items-center justify-center text-brand-accent border border-brand-border">
                             <Server className="w-6 h-6" />
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-white">Simple API Integration</h4>
                             <p className="text-sm text-brand-text-secondary mt-1">Leverage our robust APIs to integrate connectivity management directly into your existing IoT application or cloud platform.</p>
                         </div>
                     </div>
                 </div>
             </div>
             
             <div className="relative">
                 {/* Dashboard Graphic Placeholder */}
                 <div className="bg-brand-surface rounded-xl shadow-2xl border border-brand-border overflow-hidden aspect-[4/3] relative group">
                     {/* Header Bar */}
                     <div className="h-12 bg-brand-dark border-b border-brand-border flex items-center px-4 gap-2">
                         <div className="w-3 h-3 rounded-full bg-red-500"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     </div>
                     {/* Content Simulation */}
                     <div className="p-6 grid grid-cols-3 gap-4">
                         <div className="col-span-2 h-32 bg-brand-dark/50 rounded-lg animate-pulse"></div>
                         <div className="col-span-1 h-32 bg-brand-dark/50 rounded-lg animate-pulse"></div>
                         <div className="col-span-3 h-48 bg-brand-dark/50 rounded-lg mt-4 flex items-center justify-center">
                             <span className="text-brand-text-secondary font-mono text-xs">LIVE DATA STREAM</span>
                         </div>
                     </div>
                     
                     <div className="absolute inset-0 bg-brand-primary/5 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                 </div>
             </div>
         </div>
      </section>

      {/* 6. Why Choose Simp Table */}
      <section className="py-24 bg-brand-surface">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-bold text-center mb-12">Why Choose Simp for IoT Connectivity?</h2>
             
             <div className="overflow-hidden rounded-xl border border-brand-border shadow-lg">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-brand-dark">
                        <tr>
                            <th className="p-5 text-white font-bold border-b border-brand-border w-1/3">Feature</th>
                            <th className="p-5 text-white font-bold border-b border-brand-border">Your Advantage</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border bg-brand-dark/30">
                        <tr>
                            <td className="p-5 font-bold text-brand-primary">Centralized Management</td>
                            <td className="p-5 text-brand-text-secondary text-sm leading-relaxed">Monitor usage, set alerts, and manage the lifecycle of every SIM card in one unified portal.</td>
                        </tr>
                        <tr>
                            <td className="p-5 font-bold text-brand-primary">Dedicated Support</td>
                            <td className="p-5 text-brand-text-secondary text-sm leading-relaxed">Expert engineering teams ready to assist with deployment and integration.</td>
                        </tr>
                        <tr>
                            <td className="p-5 font-bold text-brand-primary">Cost Optimization</td>
                            <td className="p-5 text-brand-text-secondary text-sm leading-relaxed">Flexible, tiered data plans designed to align with your project’s scale and consumption patterns.</td>
                        </tr>
                    </tbody>
                </table>
             </div>
         </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-blue-900 text-white border-t border-brand-border">
          <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-4xl font-bold mb-6">Launch Your Project Faster.</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                  Start building with the Simp Tri-SIM and our powerful platform today. Get the reliable, scalable connectivity your project demands.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 w-full sm:w-auto" onClick={onConnect}>
                      Contact Sales
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
};
