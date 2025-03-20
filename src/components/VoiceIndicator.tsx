
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
      <motion.div
        className="absolute inset-0 rounded-full bg-deepPurple bg-opacity-20"
        animate={{
          scale: active ? [1, 1.2, 1] : 1,
          opacity: active ? [0.3, 0.6, 0.3] : 0.3
        }}
        transition={{
          duration: 1.5,
          repeat: active ? Infinity : 0,
          repeatType: "loop"
        }}
      />
      <motion.div
        className="relative z-10 flex items-center justify-center rounded-full bg-deepPurple p-3"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ width: size, height: size }}
      >
        <Mic className="text-white" size={size/2} />
      </motion.div>
    </div>
  );
};

export default VoiceIndicator;
