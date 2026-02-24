import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({ children, className = '', hover = false, glow = false }: CardProps) {
  const baseStyles = 'bg-[#121212] border border-[#222] rounded-3xl p-6 sm:p-8 transition-all duration-500 backdrop-blur-sm';
  const hoverStyles = hover ? 'hover:border-[#444] cursor-pointer group' : '';
  const glowStyles = glow ? 'hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]' : '';
  
  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className} relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
  
  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
}