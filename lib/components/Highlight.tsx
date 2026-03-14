import React from 'react';
import { motion } from 'motion/react';

export const Highlight = ({ children, color = '#fde047' }: { children: React.ReactNode, color?: string }) => (
  <motion.span
    initial={{ backgroundColor: 'transparent' }}
    whileInView={{ backgroundColor: color }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="px-1 rounded font-semibold"
  >
    {children}
  </motion.span>
);
