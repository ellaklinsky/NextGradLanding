import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Users, 
  FileSearch, 
  MessageSquare, 
  Shield,
  Zap,
  Target
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Intelligent algorithms analyze student profiles against thousands of graduate programs to find optimal fits.',
    color: 'bg-blue-500'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Data-driven insights on admission likelihood, scholarship opportunities, and program competitiveness.',
    color: 'bg-violet-500'
  },
  {
    icon: FileSearch,
    title: 'Application Tracking',
    description: 'Comprehensive dashboard to monitor student progress across multiple applications and deadlines.',
    color: 'bg-emerald-500'
  },
  {
    icon: MessageSquare,
    title: 'Smart Recommendations',
    description: 'Personalized suggestions for statement improvements, course prerequisites, and research opportunities.',
    color: 'bg-amber-500'
  },
  {
    icon: Users,
    title: 'Cohort Management',
    description: 'Efficiently manage hundreds of advisees with automated grouping and priority flagging.',
    color: 'bg-rose-500'
  },
  {
    icon: Shield,
    title: 'FERPA Compliant',
    description: 'Enterprise-grade security ensuring all student data remains protected and compliant.',
    color: 'bg-slate-700'
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Features</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Everything advisors need, in one place
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our comprehensive platform streamlines the graduate school advisory process, 
              helping you guide more students to success with less effort.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className={`inline-flex items-center justify-center h-14 w-14 rounded-2xl ${feature.color} mb-6`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 text-white">
            <Zap className="h-5 w-5 text-yellow-400" />
            <span className="font-medium">See how institutions improved outcomes by 40%</span>
            <Target className="h-5 w-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}