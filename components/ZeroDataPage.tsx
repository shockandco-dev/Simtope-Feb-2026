import React from 'react';
import { Database, CalendarCheck, Cpu, ChevronRight } from 'lucide-react';

interface ZeroDataPageProps {
  onNavigate: (page: string) => void;
}

export const ZeroDataPage: React.FC<ZeroDataPageProps> = ({ onNavigate }) => {

  const FeatureCard: React.FC<{ icon: React.ElementType; title: string; body: string }> = ({ icon: Icon, title, body }) => (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 transition-all hover:border-blue-500/50 hover:shadow-lg">
      <div className="flex items-start">
        <div className="bg-slate-700 p-3 rounded-full mr-4">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-slate-400 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );

  const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
    <div className="border-t border-slate-700 py-6">
      <h4 className="font-semibold text-white text-lg mb-2">{question}</h4>
      <p className="text-slate-400">{answer}</p>
    </div>
  );

  return (
    <div className="bg-slate-900 text-slate-400 font-sans">
      {/* Hero Section */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-blue-600/10 text-blue-400 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Limited Time Offer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Carrier-Grade Connectivity. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              $0 Monthly Data Costs.
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-8">
            We are covering the data bill for new customers for their first 6 months. No hidden fees. Just pure connectivity.
          </p>
          <div className="flex justify-center items-center flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-500/20"
            >
              Claim Your 6-Month Credit
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-4 max-w-2xl mx-auto">*Offer valid for new customers only. Maximum $5,000 of data per month for 6 months, does not include voice or SMS, on a 12-month contract. Static IP extra.</p>
        </div>
      </section>

      {/* The Deal Grid */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">The Offer, Defined.</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon={Database}
              title="100% Data Credit"
              body="We credit your account for every MB of data used, up to $5,000 per month."
            />
            <FeatureCard 
              icon={CalendarCheck}
              title="6 Months of Runway"
              body="The credit applies automatically for your first 6 billing cycles. No rebate forms required."
            />
            <FeatureCard 
              icon={Cpu}
              title="Universal Compatibility"
              body="Valid for any standard or industrial SIM form factor (2FF, 3FF, 4FF, MFF2) on our Tier-1 networks."
            />
          </div>
        </div>
      </section>

      {/* The Manifesto */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-slate-800 p-8 sm:p-12 rounded-2xl border border-slate-700 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Why are we doing this?</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Switching connectivity providers is often a headache. We know that.
              <br/><br/>
              We are so confident that you will prefer our Hassle Free platform over your current carrier that we are willing to pay for your data just to get you to try it. We are removing the friction so you can experience the upgrade risk-free.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">Come for the $0 Data. Stay for the Control.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Hassle Free</h3>
                <p>No phone queues. No 'submit a ticket to activate a SIM.' You have total control over your fleet.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Self-Serve Command</h3>
                <p>Manage 10 to 1,000 SIMs from a single dashboard. Activate, pause, and monitor usage in real-time.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Shared Data Pools</h3>
                <p>Your low-usage devices cover your high-usage ones. No bill shock, just predictable billing.</p>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 h-.flex.flex-col.justify-center.items-center.min-h-_300px_">
              <div className="w-full max-w-sm">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-slate-300 font-medium">Live Usage</p>
                  <span className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded-full">● Live</span>
                </div>
                <div className="bg-slate-900/50 p-6 rounded-md">
                   <p className="text-sm text-slate-400 mb-1">Current Monthly Usage</p>
                   <p className="text-4xl font-bold text-white">$4,298</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Common Questions</h2>
          <div className="border-b border-slate-700">
            <FaqItem 
              question="What happens after 6 months?"
              answer="You seamlessly roll onto our standard agile pricing. We will notify you 30 days before the transition."
            />
            <FaqItem 
              question="Is there a lock-in contract?"
              answer="The terms of this offer require a 1 year contract. After that, it flips to a monthly contract."
            />
            <FaqItem 
              question="What if I exceed the $5,000/mo cap?"
              answer="You simply pay the standard rate for any data usage above the $5,000 credit."
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Stop overpaying for connectivity you can’t control.</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center mx-auto gap-2"
          >
            Get Started with $0 Data
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
