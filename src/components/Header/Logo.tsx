import React from 'react';
import { Activity } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-[#0F4C81]" />
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
        <span className="font-playfair text-[#0F4C81]">Medi</span>
        <span className="font-playfair text-[#0F3D38]">Smiles</span>
      </h1>
    </div>
  );
}