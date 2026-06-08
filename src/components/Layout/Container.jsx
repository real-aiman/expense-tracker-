import { motion } from 'framer-motion';
export const Container = ({ children }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
    className="relative z-10 w-full max-w-5xl bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl p-6 md:p-10 shadow-xl"
  >
    {children}
  </motion.div>
);