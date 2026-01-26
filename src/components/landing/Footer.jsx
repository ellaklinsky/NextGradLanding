import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Compass, GraduationCap, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
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

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link to={createPageUrl('Home')} className="text-slate-400 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link to={createPageUrl('Pricing')} className="text-slate-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Integrations</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Security</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to={createPageUrl('About')} className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><Link to={createPageUrl('Contact')} className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">FERPA Compliance</a></li>
            </ul>
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