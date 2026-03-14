import React from 'react';

export const SanaysayCard = ({ children, title, author }: { children: React.ReactNode, title?: string, author?: string }) => (
  <div className="bg-[#f8fafc] p-5 md:p-8 rounded-3xl md:border border-[#C6DEF1] text-slate-800 font-sans leading-relaxed mb-6 md:mb-8 text-base md:text-lg relative overflow-hidden">
    <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#C6DEF1]/30 rounded-full blur-2xl"></div>
    {title && <h4 className="font-bold text-2xl mb-2 text-slate-900">{title}</h4>}
    {author && <p className="text-sm text-slate-500 mb-6 italic">Isinulat ni: {author}</p>}
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export const TulaBox = ({ children, title }: { children: React.ReactNode, title?: string }) => (
  <div className="bg-white p-5 md:p-8 rounded-3xl md:border-2 border-dashed border-[#F2C6DE] text-slate-800 font-serif leading-relaxed mb-6 md:mb-8 shadow-sm">
    {title && <h4 className="font-bold text-xl mb-4 text-center text-slate-900 tracking-wide">{title}</h4>}
    <div className="flex flex-col items-center text-center italic text-lg opacity-90">
      {children}
    </div>
  </div>
);
