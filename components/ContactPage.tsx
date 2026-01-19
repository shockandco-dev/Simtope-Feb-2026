import React, { useState } from 'react';
import { Button } from './Button';
import { MapPin, Phone, Loader2 } from 'lucide-react';
import { submitToSpreadsheet } from '../services/formService';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await submitToSpreadsheet(data);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset(); 

      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    } catch (err) {
      setError('Unable to submit. Please check your connection or contact sales@simtope.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary">
       {/* Hero Section */}
       <section className="py-20 bg-brand-surface border-b border-brand-border relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-primary/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Simtope</h1>
             <p className="text-xl text-brand-text-secondary max-w-2xl mx-auto">
               We're here to help you architect the perfect connectivity solution. Reach out to our regional offices or send us a direct inquiry.
             </p>
          </div>
       </section>

       {/* Offices Section */}
       <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                 {/* US Office */}
                 <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border hover:border-brand-primary transition-all duration-300 shadow-lg group">
                    <div className="flex items-start gap-6">
                        <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-blue-500 border border-brand-border group-hover:bg-blue-500/10 transition-colors shrink-0">
                            <MapPin className="w-7 h-7" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">US Office</h2>
                            <address className="not-italic text-brand-text-secondary space-y-1 mb-6 text-lg">
                                <p>1429 Meadows Court</p>
                                <p>Greentown, IN, USA</p>
                            </address>
                            <a href="tel:+18003810826" className="flex items-center gap-3 text-brand-text-primary hover:text-brand-accent transition-colors font-medium text-lg">
                                <Phone className="w-5 h-5" />
                                <span>(800) 381-0826</span>
                            </a>
                        </div>
                    </div>
                 </div>

                 {/* Canadian Office */}
                 <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border hover:border-brand-primary transition-all duration-300 shadow-lg group">
                    <div className="flex items-start gap-6">
                        <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-red-500 border border-brand-border group-hover:bg-red-500/10 transition-colors shrink-0">
                            <MapPin className="w-7 h-7" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Canadian Office</h2>
                            <address className="not-italic text-brand-text-secondary space-y-1 mb-6 text-lg">
                                <p>129 John Cavanaugh</p>
                                <p>Carp, ON, CA</p>
                            </address>
                            <a href="tel:+18002688628" className="flex items-center gap-3 text-brand-text-primary hover:text-brand-accent transition-colors font-medium text-lg">
                                <Phone className="w-5 h-5" />
                                <span>(800) 268-8628</span>
                            </a>
                        </div>
                    </div>
                 </div>
             </div>
          </div>
       </section>

       {/* Form Section */}
       <section id="contact-form" className="py-24 bg-brand-dark border-t border-brand-border relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-brand-text-primary mb-4">Partner with Simtope</h2>
                <p className="text-brand-text-secondary">
                  Our data-driven consultation process starts here. Your request will be instantly synced to our project queue.
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-8 rounded-lg text-center animate-fade-in">
                  <h3 className="text-2xl font-bold mb-2">Data Synced</h3>
                  <p className="text-lg">Your consultation request has been successfully logged. We will reach out within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-brand-text-secondary mb-2">Full Name</label>
                      <input id="fullName" name="fullName" type="text" required disabled={isSubmitting} className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-2">Company Email</label>
                      <input id="email" name="email" type="email" required disabled={isSubmitting} className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50" placeholder="john@company.com" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-brand-text-secondary mb-2">Company Name</label>
                      <input id="companyName" name="companyName" type="text" required disabled={isSubmitting} className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50" placeholder="Tech Industries Ltd" />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-brand-text-secondary mb-2">Interest</label>
                      <select id="interest" name="interest" disabled={isSubmitting} className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50">
                        <option value="eSIM Deployment">eSIM Deployment</option>
                        <option value="Industrial MFF2">Industrial MFF2</option>
                        <option value="Satellite Connectivity">Satellite Connectivity</option>
                        <option value="Distributor Partnership">Distributor Partnership</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-brand-text-secondary mb-2">Project Details</label>
                    <textarea id="projectDetails" name="projectDetails" rows={4} disabled={isSubmitting} className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50" placeholder="Tell us about your estimated volume..."></textarea>
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm font-medium">{error}</p>
                  )}

                  <div className="flex justify-end">
                    <Button type="submit" size="lg" className="w-full md:w-auto min-w-[200px]" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : 'Request Consultation'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
       </section>
    </div>
  );
};