import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare,
  Clock,
  CheckCircle2,
  Send,
  Loader2
} from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const subjectLabels = {
      demo: 'Request a Demo',
      pricing: 'Pricing Inquiry',
      support: 'Technical Support',
      partnership: 'Partnership Opportunity',
      other: 'Other'
    };

    await base44.integrations.Core.SendEmail({
      to: formData.email,
      subject: `NextGrad Contact Form: ${subjectLabels[formData.subject] || 'General Inquiry'}`,
      body: `
New contact form submission from NextGrad website:

Name: ${formData.name}
Email: ${formData.email}
Institution: ${formData.institution || 'Not provided'}
Subject: ${subjectLabels[formData.subject] || 'Not specified'}

Message:
${formData.message}
      `.trim()
    });

    setLoading(false);
    setSubmitted(true);
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
              Get in Touch
            </h1>
            <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto">
              Have questions about NextGrad? Our team is here to help you find the perfect solution for your institution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">hello@nextgrad.edu</p>
                    <p className="text-slate-600">support@nextgrad.edu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+1 (888) 555-0123</p>
                    <p className="text-sm text-slate-500">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                    <p className="text-slate-600">
                      123 Innovation Drive<br />
                      Cambridge, MA 02142
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Response Time</h3>
                    <p className="text-slate-600">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
                <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>Live Chat Support</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>Help Center & Documentation</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
                    <MessageSquare className="h-4 w-4" />
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100">
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h2>
                    <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="Dr. Jane Smith"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="jane@university.edu"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution</Label>
                        <Input
                          id="institution"
                          placeholder="University of Example"
                          value={formData.institution}
                          onChange={(e) => setFormData({...formData, institution: e.target.value})}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select 
                          value={formData.subject}
                          onValueChange={(value) => setFormData({...formData, subject: value})}
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="What can we help you with?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="demo">Request a Demo</SelectItem>
                            <SelectItem value="pricing">Pricing Inquiry</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your needs..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          rows={5}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full bg-slate-900 hover:bg-slate-800 rounded-full h-14 text-base"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 mb-8">
                      <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Message Sent!</h3>
                    <p className="text-slate-600 mb-8 max-w-md mx-auto">
                      Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', institution: '', subject: '', message: '' });
                      }}
                      variant="outline"
                      className="rounded-full"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}