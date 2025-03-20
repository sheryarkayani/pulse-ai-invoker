
import React from "react";
import { motion } from "framer-motion";

interface SoundwaveProps {
  className?: string;
  color?: string;
  size?: number;
  barCount?: number;
  speed?: number;
  amplitude?: number;
}

const Soundwave: React.FC<SoundwaveProps> = ({ 
  className = "", 
  color = "#6C63FF", 
  size = 60,
  barCount = 5,
  speed = 1.5,
  amplitude = 0.7
}) => {
  const barVariants = {
    initial: { scaleY: 0.3, opacity: 0.7 },
    animate: (i: number) => ({
      scaleY: [0.3, amplitude, 0.3],
      opacity: [0.7, 1, 0.7],
      transition: {
        repeat: Infinity,
        repeatType: "reverse" as const,
        duration: speed,
        delay: i * 0.1,
        ease: "easeInOut"
      }
    })
  };

  return (
    <div className={`flex items-center justify-center h-${size/15} ${className}`}>
      <div className="flex items-center space-x-1">
        {[...Array(barCount)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={barVariants}
            initial="initial"
            animate="animate"
            style={{
              backgroundColor: color,
              width: size/15,
              height: size/3,
              borderRadius: 2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Soundwave;
