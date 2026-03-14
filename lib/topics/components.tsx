import React from 'react';
import { motion } from 'motion/react';

export const Highlight = ({ children, color = '#fde047' }: { children: React.ReactNode, color?: string }) => (
  <motion.span
    initial={{ backgroundColor: 'transparent' }}
    whileInView={{ backgroundColor: color }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="px-1 rounded font-semibold text-slate-900"
  >
    {children}
  </motion.span>
);

export const PassageBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#f8fafc] p-5 md:p-8 rounded-3xl md:border border-slate-200 text-slate-800 font-sans leading-relaxed mb-6 md:mb-8 text-base md:text-lg relative group">
    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <img src="/images/avatar.png" className="w-10 h-10 md:w-12 md:h-12 grayscale" alt="" />
    </div>
    {children}
  </div>
);

export const SentenceBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#f8fafc] p-4 md:p-6 rounded-2xl md:border-l-4 border-slate-900 text-slate-800 font-sans text-lg md:text-xl mb-6 italic relative overflow-hidden">
    <div className="flex gap-4 items-start">
      <img src="/images/avatar.png" className="w-6 h-6 md:w-8 md:h-8 object-contain shrink-0 mt-1" alt="" />
      <div>&quot;{children}&quot;</div>
    </div>
  </div>
);

export const RichText = ({ text }: { text: string }) => {
  if (!text) return null;
  
  // Split by underline tags first
  const parts = text.split(/(<u>.*?<\/u>)/g);
  
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('<u>') && part.endsWith('</u>')) {
          return <u key={index} className="decoration-slate-400 decoration-2 underline-offset-4">{part.replace(/<\/?u>/g, '')}</u>;
        }
        
        // Handle "Directions:" and "Questions X-Y:" triggers
        let content: (string | React.ReactNode)[] = [part];
        
        const directionsRegex = /(Directions:)/g;
        const questionsRegex = /(Questions \d+-\d+:)/g;
        
        if (directionsRegex.test(part)) {
          content = part.split(directionsRegex).map((s, i) => 
            s === 'Directions:' ? <strong key={`dir-${i}`} className="text-slate-900 font-black">{s}</strong> : s
          );
        } else if (questionsRegex.test(part)) {
          content = part.split(questionsRegex).map((s, i) => 
            questionsRegex.test(s) ? <strong key={`quest-${i}`} className="text-slate-900 font-black">{s}</strong> : s
          );
        }

        return <React.Fragment key={index}>{content}</React.Fragment>;
      })}
    </>
  );
};
