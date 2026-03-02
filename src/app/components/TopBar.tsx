import { motion } from 'motion/react';
import React from 'react';

interface TopBarProps {
  title: string;
  rightAction?: React.ReactNode;
}

export function TopBar({ title, rightAction }: TopBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between mb-12"
    >
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
      >
        {title}
      </motion.h1>

      {rightAction && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {rightAction}
        </motion.div>
      )}
    </motion.div>
  );
}