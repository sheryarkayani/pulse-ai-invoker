
import React from "react";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";

interface VoiceIndicatorProps {
  active?: boolean;
  size?: number;
  className?: string;
}

const VoiceIndicator: React.FC<VoiceIndicatorProps> = ({ 
  active = true, 
  size = 48,
  className = "" 
}) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {active && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full bg-deepPurple bg-opacity-10"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-deepPurple bg-opacity-15"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.2
            }}
          />
        </>
      )}
      <motion.div
        className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-deepPurple to-deepPurple/90 p-3 shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ width: size, height: size }}
        initial={{ boxShadow: "0 4px 12px rgba(108, 99, 255, 0.2)" }}
        animate={active ? {
          boxShadow: ["0 4px 12px rgba(108, 99, 255, 0.2)", "0 4px 20px rgba(108, 99, 255, 0.4)", "0 4px 12px rgba(108, 99, 255, 0.2)"]
        } : {}}
        transition={{ duration: 2, repeat: active ? Infinity : 0, repeatType: "loop" }}
      >
        <Mic className="text-white" size={size/2} />
      </motion.div>
    </div>
  );
};

export default VoiceIndicator;
