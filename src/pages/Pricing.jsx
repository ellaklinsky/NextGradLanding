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
    cta: 'Schedule a Demo'
  },
  {
    name: 'Mid-Size',
    description: 'For institutions with 5,000-15,000 students',
    price: '$30,000',
    period: '/year',
    cta: 'Schedule a Demo',
    popular: true
  },
  {
    name: 'Large',
    description: 'For institutions with more than 15,000 students',
    price: '$150,000',
    period: '/year',
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
    question: 'Are there additional costs to personalize it for my school?',
    answer: 'No, we will work with advisors to make criteria, class planning, and the interface perfect for your school at no additional cost.'
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
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 to-violet-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-400/30 to-orange-400/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
              Simple, transparent pricing
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Find the Right Plan CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-violet-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 lg:p-12 shadow-xl border border-blue-100 text-center"
          >
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 mb-6">
              <Calendar className="h-7 w-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Find the right plan for your institution
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Schedule a call with our team to discuss your institution's needs and get a personalized recommendation.
            </p>
            <Button 
              onClick={() => window.open('https://calendly.com/applynextgrad/30min', '_blank')}
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:from-blue-700 hover:via-violet-700 hover:to-pink-700 text-white rounded-full px-8 h-14 text-base shadow-lg"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl p-6 border border-blue-100"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="h-6 w-6 text-violet-600 flex-shrink-0 mt-0.5" />
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