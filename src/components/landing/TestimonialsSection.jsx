import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AdvisorAI has transformed how our advising center operates. We've increased our student success rate while reducing advisor burnout significantly.",
    author: "Dr. Sarah Chen",
    role: "Director of Academic Advising",
    institution: "University of Michigan",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "The predictive analytics alone have saved countless hours. We can now focus on meaningful conversations rather than data gathering.",
    author: "James Rodriguez",
    role: "Senior Academic Advisor",
    institution: "Stanford University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    quote: "Implementation was seamless, and the support team went above and beyond. Our advisors were productive within the first week.",
    author: "Dr. Emily Watson",
    role: "Dean of Student Services",
    institution: "Duke University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Testimonials</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Trusted by leading institutions
            </h2>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-8 border border-slate-100"
            >
              <Quote className="h-10 w-10 text-blue-200 mb-6" />
              <p className="text-slate-700 leading-relaxed text-lg mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.institution}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 pt-16 border-t border-slate-100"
        >
          <p className="text-center text-sm text-slate-500 mb-10">Trusted by 200+ institutions nationwide</p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-50 grayscale">
            {['Harvard', 'Stanford', 'MIT', 'Yale', 'Princeton'].map((name) => (
              <div key={name} className="text-2xl font-bold text-slate-400 tracking-tight">
                {name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}