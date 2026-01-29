import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { base44 } from '@/api/base44Client';
import { 
  Target, 
  Heart, 
  Lightbulb, 
  Users, 
  Award, 
  ArrowRight,
  GraduationCap,
  Globe,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Every feature we build is designed to help more students reach their graduate school dreams.'
  },
  {
    icon: Heart,
    title: 'Advisor-First',
    description: 'We partner closely with advisors to understand their challenges and build tools that truly help.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We leverage cutting-edge AI responsibly to enhance human judgment, not replace it.'
  },
  {
    icon: Users,
    title: 'Equity',
    description: 'We believe every student deserves access to quality guidance, regardless of their background.'
  }
];





export default function About() {
  const [team, setTeam] = useState([
    {
      name: 'Harsh Yallampalli',
      role: 'Co-Founder',
      bio: 'Passionate about transforming graduate school advising through technology.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
    },
    {
      name: 'Ella Klinsky',
      role: 'Co-Founder',
      bio: 'Dedicated to empowering advisors and helping students reach their full potential.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop'
    }
  ]);

  useEffect(() => {
    const loadTeamPhotos = async () => {
      const photos = await base44.entities.TeamPhoto.list();
      if (photos.length > 0) {
        setTeam(prevTeam => prevTeam.map(member => {
          const photo = photos.find(p => p.member_name === member.name);
          return photo ? { ...member, image: photo.photo_url } : member;
        }));
      }
    };
    loadTeamPhotos();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/50 to-violet-100/50 rounded-full blur-3xl opacity-50" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">About Us</span>
              <h1 className="mt-4 text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                Empowering the advisors who shape futures
              </h1>
              <p className="mt-8 text-xl text-slate-600 leading-relaxed">
                We believe that behind every successful graduate student is a dedicated advisor. 
                NextGrad exists to amplify the impact of these unsung heroes in higher education.
              </p>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: GraduationCap, value: '50K+', label: 'Students Placed' },
              { icon: Users, value: '200+', label: 'Partner Institutions' },
              { icon: Globe, value: '15', label: 'Countries' },
              { icon: TrendingUp, value: '94%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-slate-100 mb-4">
                  <stat.icon className="h-6 w-6 text-slate-700" />
                </div>
                <div className="text-4xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Our Story</h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                NextGrad was founded by Harsh Yallmpalli and Ella Klinsky, who experienced firsthand 
                the frustrations of academic advising from both sides of the table.
              </p>
              <p>
                As students, they watched great candidates struggle to succeed, not because they 
                lacked talent, but because they lacked guidance. As they learned more about 
                higher education, they discovered that advisors were spending countless hours 
                on mundane administrative tasks that technology could easily handle.
              </p>
              <p>
                This dual perspective sparked a vision: what if we could free advisors from 
                repetitive work so they could focus on what really matters, helping students 
                reach their full potential? NextGrad was built to bridge this gap, empowering 
                advisors with intelligent tools while ensuring no student falls through the cracks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Our Values</h2>
              <p className="mt-4 text-lg text-slate-600">The principles that guide everything we do</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-50 mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Leadership Team</h2>
              <p className="mt-4 text-lg text-slate-600">Meet the people driving our mission forward</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 text-center shadow-sm border border-slate-100"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-2xl mx-auto mb-6 object-cover"
                />
                <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-amber-100 mb-6">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recognized Excellence</h2>
            <p className="text-lg text-slate-600 mb-8">
              We're honored to be recognized by leading organizations in education technology
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 font-semibold">
              {['EdTech Breakthrough Award 2023', 'EDUCAUSE Innovation Award', 'Inc. 5000 Fastest Growing'].map((award) => (
                <span key={award} className="px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm">
                  {award}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              Join us in transforming higher education
            </h2>
            <p className="text-xl text-slate-400 mb-10">
              Whether you're an institution looking to empower your advisors or a talented 
              individual wanting to make an impact, we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={createPageUrl('Pricing')}>
                <Button size="lg" className="bg-white hover:bg-slate-100 text-slate-900 rounded-full px-8 h-14">
                  Explore Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 border-slate-700 text-slate-900 bg-white hover:bg-slate-100">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}