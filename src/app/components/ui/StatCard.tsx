import { Card } from "./Card";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: string;
}

export function StatCard({
  icon: Icon,
  label,
  value,
  trend,
}: StatCardProps) {
  return (
    <Card className="flex items-center gap-4 hover:border-[#333] transition-all duration-300 group cursor-pointer">
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="p-4 bg-[#1a1a1a] rounded-2xl border border-[#2a2a2a] group-hover:border-[#333] transition-all duration-300"
      >
        <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
      </motion.div>
      <div className="flex-1">
        <p className="text-sm text-gray-500 mb-1">{label}</p>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white"
        >
          {value}
        </motion.p>
        {trend && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs text-green-400 mt-1 flex items-center gap-1"
          >
            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↗
            </motion.span>
            {trend}
          </motion.p>
        )}
      </div>
    </Card>
  );
}