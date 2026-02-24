import { motion } from 'motion/react';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success';
  size?: 'sm' | 'md';
}

export function Tag({ children, variant = 'default', size = 'sm' }: TagProps) {
  const variants = {
    default: 'bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:border-[#333] hover:bg-[#222]',
    accent: 'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/20',
    success: 'bg-green-500/10 text-green-400 border border-green-500/20 hover:border-green-500/40 hover:bg-green-500/20',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
  };
  
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`inline-flex items-center rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]}`}
    >
      {children}
    </motion.span>
  );
}