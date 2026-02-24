import { motion } from 'motion/react';

interface FilterChipsProps {
  options: string[];
  active: string;
  onChange: (option: string) => void;
}

export function FilterChips({ options, active, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <motion.button
          key={option}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(option)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            active === option
              ? 'bg-white text-black'
              : 'bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] hover:border-[#333] hover:text-white'
          }`}
        >
          {option}
        </motion.button>
      ))}
    </div>
  );
}
