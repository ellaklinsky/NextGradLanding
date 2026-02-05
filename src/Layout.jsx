import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @font-face {
          font-family: 'Greta Grotesk';
          src: url('https://drive.google.com/uc?export=download&id=1f6JdU9jG6J69mngi5-xYwbKXtCcnslJo') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        
        body {
          font-family: 'Greta Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}