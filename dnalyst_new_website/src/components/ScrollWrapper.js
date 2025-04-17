import React from "react";
import { motion } from "framer-motion";

export default function ScrollWrapper({ children, delay = 0, yOffset = 50 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
