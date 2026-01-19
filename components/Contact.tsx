import React, { useState } from 'react';
import { Button } from './Button';
import { submitToSpreadsheet } from '../services/formService';
import { Loader2, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
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
      
      // Keep success message visible for longer
      setTimeout(() => {
        setSubmitted(false);
      }, 8000);
    } catch (err) {
      setError('Connection timeout. Please check your network or email sales@simtope.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-text-primary mb-4">Partner with Simtope</h2>
            <p className="text-brand-text-secondary">
              Our regional specialists are ready to architect your global connectivity solution.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-10 rounded-xl text-center animate-fade-in flex flex-col items-center">
              <CheckCircle className="w-16 h-16 mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold mb-2">Request Synced</h3>
              <p className="text-lg text-brand-text-secondary">Your data has been securely posted to our project management sheet. A representative will contact you shortly.</p>
              <Button variant="outline" className="mt-6 border-green-500/30 text-green-400" onClick={() => setSubmitted(false)}>Send another request</Button>
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
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-brand-text-secondary mb-2">Project Details</label>
                <textarea id="projectDetails" name="projectDetails" rows={4} disabled={isSubmitting} className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all disabled:opacity-50" placeholder="Tell us about your hardware or scaling requirements..."></textarea>
              </div>
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-md text-sm animate-pulse">
                  {error}
                </div>
              )}

              <div className="flex justify-end">
                <Button type="submit" size="lg" className="w-full md:w-auto min-w-[220px]" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                      Uploading Data...
                    </>
                  ) : 'Submit'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};