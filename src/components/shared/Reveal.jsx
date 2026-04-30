"use client";

import { motion } from "framer-motion";

const Reveal = ({
  children,
  className = "",
  delay = 0,
  y = 20,
  duration = 0.45,
  once = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
