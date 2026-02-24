import { forwardRef } from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0b0b0b] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
    
    const variants = {
      primary: 'bg-white text-black hover:bg-gray-100 focus:ring-white shadow-lg shadow-white/20 hover:shadow-xl hover:shadow-white/30',
      secondary: 'bg-[#1a1a1a] text-white border border-[#2a2a2a] hover:bg-[#222] hover:border-[#444] focus:ring-[#333] backdrop-blur-sm',
      ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-[#1a1a1a]',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';