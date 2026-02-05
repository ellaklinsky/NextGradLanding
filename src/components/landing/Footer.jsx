import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Compass, GraduationCap, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <div className="text-center">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2.5 mb-6 justify-center">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center relative">
                <Compass className="h-5 w-5 text-white mt-1" />
                <GraduationCap className="h-4 w-4 text-white absolute top-1" />
              </div>
              <span className="text-xl font-semibold tracking-tight">NextGrad</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Empowering academic advisors with AI-driven insights to guide students toward their graduate school dreams.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-6 w-full max-w-2xl">
            <Link to={createPageUrl('About')} className="flex-1 text-center bg-slate-800 hover:bg-slate-700 text-white transition-colors py-4 px-8 rounded-lg font-medium">About us</Link>
            <Link to={createPageUrl('Contact')} className="flex-1 text-center bg-slate-800 hover:bg-slate-700 text-white transition-colors py-4 px-8 rounded-lg font-medium">Contact</Link>
            <Link to={createPageUrl('FERPACompliance')} className="flex-1 text-center bg-slate-800 hover:bg-slate-700 text-white transition-colors py-4 px-8 rounded-lg font-medium">FERPA Compliance</Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} NextGrad. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:applynextgrad@gmail.com" className="text-slate-500 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}