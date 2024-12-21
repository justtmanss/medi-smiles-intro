import React from 'react';
import { Heart, Sparkles, Mail } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <FeatureCard
        icon={Heart}
        title="Compassionate Care"
        description="Putting your well-being first with personalized healthcare solutions."
        iconColor="text-[#0F4C81]"
        bgColor="bg-[#F9F6EF]"
      />
      <FeatureCard
        icon={Sparkles}
        title="Innovation First"
        description="Leveraging cutting-edge technology for better health outcomes."
        iconColor="text-[#0F3D38]"
        bgColor="bg-[#F9F6EF]"
      />
      <FeatureCard
        icon={Mail}
        title="Stay Updated"
        description="Be the first to know when we launch our revolutionary services."
        iconColor="text-[#EBCE71]"
        bgColor="bg-[#F9F6EF]"
      />
    </div>
  );
}