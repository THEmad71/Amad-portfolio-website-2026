import { Outlet, useLocation } from 'react-router';
import { Sidebar } from './Sidebar';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Sidebar />
      <main className="lg:pl-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[1400px] mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-16 lg:py-12"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}