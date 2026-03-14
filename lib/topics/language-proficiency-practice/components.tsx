import React from 'react';
import { motion } from 'motion/react';

export const ProficiencyBox = ({ children, title }: { children: React.ReactNode, title?: string }) => (
  <div className="bg-white p-4 md:p-6 rounded-3xl md:border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] mb-6 md:mb-8 transform transition-transform hover:-translate-y-1">
    {title && (
      <div className="inline-block bg-[#F7D9C4] px-4 py-1 rounded-full text-slate-900 font-bold text-sm tracking-wider uppercase mb-4 border border-slate-900">
        {title}
      </div>
    )}
    <div className="text-lg font-medium text-slate-800 leading-relaxed font-sans">
      {children}
    </div>
  </div>
);

export const ErrorText = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    whileHover={{ backgroundColor: '#F2C6DE', scale: 1.05 }}
    className="inline-block px-1 rounded mx-1 cursor-pointer underline decoration-[#F2C6DE] decoration-4 underline-offset-2 font-bold transition-colors"
  >
    {children}
  </motion.span>
);
