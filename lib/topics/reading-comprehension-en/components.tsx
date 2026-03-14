import React from 'react';

export const ReadingPassage = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white p-5 md:p-8 rounded-3xl md:border border-slate-200 text-slate-800 font-serif leading-relaxed mb-6 md:mb-8 text-base md:text-lg shadow-sm">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-[#F2C6DE] rounded-full flex items-center justify-center shrink-0">
        <img src="/images/avatar.png" className="w-8 h-8 object-contain" alt="" />
      </div>
      <div className="pt-2">
        {children}
      </div>
    </div>
  </div>
);
