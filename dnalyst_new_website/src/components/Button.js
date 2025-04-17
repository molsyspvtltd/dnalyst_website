import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="bg-burnt text-white px-6 py-3 rounded-full shadow hover:bg-opacity-90 transition inline-flex items-center gap-2 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2"
      >
        {/* Animated text loop */}
        <motion.span
          animate={{ x: [0, -10, 0] }} // Moves left and returns
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {text}
        </motion.span>

        <ArrowRight size={18} />
      </motion.div>
    </Link>
  );
};

export default Button;
