
import React from "react";
import { motion } from "framer-motion";

interface PulseButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  secondary?: boolean;
  animated?: boolean;
}

const PulseButton: React.FC<PulseButtonProps> = ({
  children,
  onClick,
  className = "",
  secondary = false,
  animated = false
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md px-6 py-3 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-deepPurple focus:ring-offset-2";
  
  const primaryClasses = "bg-deepPurple text-white hover:bg-deepPurple/90 hover:scale-105 shadow-sm";
  const secondaryClasses = "text-deepPurple hover:underline";
  
  const combinedClasses = `${baseClasses} ${secondary ? secondaryClasses : primaryClasses} ${className}`;

  return animated ? (
    <motion.button
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: secondary ? 1 : 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5 } 
      }}
    >
      {children}
    </motion.button>
  ) : (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default PulseButton;
