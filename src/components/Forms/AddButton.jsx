import { motion } from 'framer-motion';
export const AddButton = () => (
  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-3 rounded-xl shadow-lg">
    Add Expense
  </motion.button>
);