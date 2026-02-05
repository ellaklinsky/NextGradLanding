import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Compass, GraduationCap, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link to={createPageUrl('Home')} className="flex items-center gap-2.5 mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center relative">
                <Compass className="h-5 w-5 text-white mt-1" />
                <GraduationCap className="h-4 w-4 text-white absolute top-1" />
              </div>
              <span className="text-xl font-semibold tracking-tight">NextGrad</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering academic advisors with AI-driven insights to guide students toward their graduate school dreams.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <Link to={createPageUrl('About')} className="text-slate-400 hover:text-white transition-colors text-sm">About us</Link>
            <Link to={createPageUrl('Contact')} className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">FERPA Compliance</a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NextGrad. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}