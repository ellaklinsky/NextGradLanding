import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

import { Calendar, HelpCircle, ArrowRight } from 'lucide-react';
import PricingCard from '@/components/pricing/PricingCard';
import MeetingModal from '@/components/pricing/MeetingModal';

const plans = [
  {
    name: 'Small College',
    description: 'For institutions with fewer than 5,000 students',
    price: '$10,000',
    period: '/year',
    billing: '3,100 students avg. served',
    cta: 'Schedule a Demo'
  },
  {
    name: 'Mid-Size',
    description: 'For institutions with 5,000-15,000 students',
    price: '$30,000',
    period: '/year',
    billing: '500 students avg. served',
    cta: 'Schedule a Demo',
    popular: true
  },
  {
    name: 'Large',
    description: 'For institutions with more than 15,000 students',
    price: '$150,000',
    period: '/year',
    billing: '450 students avg. served',
    cta: 'Schedule a Demo'
  }
];

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees for any of our plans. We also provide free onboarding and training for your team.'
  },
  {
    question: 'What happens when I exceed my student limit?',
    answer: "We'll notify you when you're approaching your limit and help you upgrade to a plan that fits your needs."
  },
  {
    question: 'Do you offer discounts for non-profits?',
    answer: 'Yes, we offer special pricing for non-profit educational institutions. Contact us to learn more.'
  }
];

export default function Pricing() {
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setMeetingModalOpen(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the plan that fits your institution's size.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6 items-start">
            {plans.map((plan, index) => (
              <PricingCard 
                key={plan.name} 
                plan={plan} 
                index={index}
                onSelectPlan={handleSelectPlan}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Meet with Rep CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 text-center"
          >
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-100 mb-6">
              <Calendar className="h-7 w-7 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Schedule a call with our team to discuss your institution's needs and get a personalized recommendation.
            </p>
            <Button 
              onClick={() => {
                setSelectedPlan(null);
                setMeetingModalOpen(true);
              }}
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 rounded-full px-8 h-14 text-base"
            >
              Meet with a Representative
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MeetingModal 
        open={meetingModalOpen} 
        onOpenChange={setMeetingModalOpen}
        selectedPlan={selectedPlan}
      />
    </div>
  );
}