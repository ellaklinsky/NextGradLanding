import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Database, Trash2, Key } from 'lucide-react';

export default function FERPACompliance() {
  const complianceItems = [
    {
      icon: Lock,
      title: 'Data Security and Encryption',
      points: [
        'All student records are encrypted both in transit (using HTTPS/TLS) and at rest (in databases and cloud storage)',
        'Secure infrastructure with firewalls and regular vulnerability scans to prevent unauthorized access',
        'Industry-standard security protocols protect all Personally Identifiable Information (PII)'
      ]
    },
    {
      icon: Key,
      title: 'Access Controls',
      points: [
        'Strict access controls ensure data is only accessible to authorized school officials',
        'Data is used exclusively for authorized educational purposes',
        'Role-based permissions limit data access to only what is necessary'
      ]
    },
    {
      icon: Database,
      title: 'Data Usage and Privacy',
      points: [
        'Student data is used solely for legitimate educational purposes',
        'We restrict re-disclosure of student information in compliance with FERPA regulations',
        'Clear policies govern how student information is collected, stored, and utilized'
      ]
    },
    {
      icon: Trash2,
      title: 'Data Retention and Destruction',
      points: [
        'Established policies for secure deletion of student data when no longer needed',
        'Data is destroyed securely at the end of contracts with educational institutions',
        'Clear retention schedules ensure compliance with institutional and legal requirements'
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-100 mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              FERPA Compliance
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              NextGrad is fully compliant with the Family Educational Rights and Privacy Act (FERPA), 
              ensuring the highest standards of student data protection and privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 border border-blue-100"
          >
            <div className="flex items-start gap-4">
              <FileCheck className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our FERPA Commitment</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  As a software vendor serving educational institutions, NextGrad operates as a "school official" 
                  under FERPA regulations. We treat student data with the highest level of security and implement 
                  strict access controls to protect Personally Identifiable Information (PII) from education records.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Our platform ensures that student data is used only for authorized educational purposes and 
                  restricts re-disclosure in accordance with FERPA requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Details */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How We Ensure Compliance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our comprehensive approach to FERPA compliance protects student privacy at every level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
              >
                <item.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0 mt-2" />
                      <span className="text-slate-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Questions About Our FERPA Compliance?
            </h2>
            <p className="text-slate-600 mb-6">
              Our team is here to address any questions or concerns about how we protect student data 
              and ensure compliance with federal privacy regulations.
            </p>
            <a 
              href="mailto:applynextgrad@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}