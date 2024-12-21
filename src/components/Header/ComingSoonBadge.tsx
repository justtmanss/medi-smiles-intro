import React from 'react';
import { Timer } from 'lucide-react';

export function ComingSoonBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-[#F9F6EF] px-4 py-2 rounded-full mb-8">
      <Timer className="w-4 h-4 text-[#0F4C81]" />
      <span className="text-[#0F4C81] font-medium">Coming Soon</span>
    </div>
  );
}