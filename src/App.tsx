import React from 'react';
import { Logo } from './components/Header/Logo';
import { ComingSoonBadge } from './components/Header/ComingSoonBadge';
import { EmailForm } from './components/EmailSignup/EmailForm';
import { FeatureGrid } from './components/Features/FeatureGrid';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F6EF] via-white to-[#FFC1C1]/10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81]/5 to-[#0F3D38]/5 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-12 sm:pb-16">
          <div className="text-center relative z-10">
            <ComingSoonBadge />
            <div className="flex justify-center mb-6">
              <Logo />
            </div>
            
            <p className="text-xl md:text-2xl text-[#4A4A4A] max-w-3xl mx-auto mb-8 sm:mb-12 font-roboto px-4">
              Revolutionizing healthcare with compassion and innovation.
              We're crafting the future of personalized medical care.
            </p>

            <EmailForm />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <FeatureGrid />
      </div>

      <Footer />
    </div>
  );
}

export default App;