'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ScrollDownButton() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      onClick={scrollToContent}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 transform rounded-full bg-cream/20 p-4 backdrop-blur-sm transition-colors hover:bg-cream/30"
      initial={{ y: 0 }}
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <ChevronDown className="h-6 w-6 text-red" />
    </motion.button>
  );
}