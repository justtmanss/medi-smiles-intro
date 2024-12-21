import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
}

export function FeatureCard({ icon: Icon, title, description, iconColor, bgColor }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#4A4A4A]/10">
      <div className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-2 text-[#0F4C81]">{title}</h3>
      <p className="text-[#4A4A4A] font-roboto">{description}</p>
    </div>
  );
}