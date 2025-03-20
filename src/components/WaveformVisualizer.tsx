
import React from "react";
import { motion } from "framer-motion";

interface WaveformVisualizerProps {
  isActive?: boolean;
  color?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "circular" | "linear";
}

const WaveformVisualizer: React.FC<WaveformVisualizerProps> = ({
  isActive = true,
  color = "#6C63FF",
  className = "",
  size = "md",
  variant = "linear"
}) => {
  // Size mappings
  const sizeMap = {
    sm: { width: 80, height: variant === "circular" ? 80 : 40, barCount: 12 },
    md: { width: 120, height: variant === "circular" ? 120 : 60, barCount: 20 },
    lg: { width: 200, height: variant === "circular" ? 200 : 80, barCount: 32 }
  };

  const { width, height, barCount } = sizeMap[size];
  
  // Create array for the bars
  const bars = Array.from({ length: barCount });
  
  // Function to generate random amplitude values (for demo purposes)
  const getRandomAmplitude = () => isActive ? Math.random() * 0.8 + 0.2 : 0.15;
  
  if (variant === "circular") {
    return (
      <div className={`relative flex items-center justify-center ${className}`} style={{ width, height }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          <g transform={`translate(${width/2}, ${height/2})`}>
            {bars.map((_, i) => {
              const angle = (i / barCount) * Math.PI * 2;
              const barLength = isActive ? 
                width * 0.3 * getRandomAmplitude() : 
                width * 0.15;
              
              const x1 = Math.cos(angle) * (width * 0.2);
              const y1 = Math.sin(angle) * (height * 0.2);
              const x2 = Math.cos(angle) * (width * 0.2 + barLength);
              const y2 = Math.sin(angle) * (height * 0.2 + barLength);
              
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={color}
                  strokeWidth={3}
                  strokeLinecap="round"
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  animate={isActive ? {
                    opacity: [0.5, 1, 0.5],
                    scale: [0.9, 1, 0.9],
                    strokeWidth: [2, 3, 2]
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: isActive ? Infinity : 0,
                    delay: i * 0.05,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className={`flex items-end justify-center space-x-1 ${className}`} style={{ width, height }}>
      {bars.map((_, i) => {
        const amplitude = getRandomAmplitude();
        
        return (
          <motion.div
            key={i}
            className="rounded-full"
            style={{
              backgroundColor: color,
              width: Math.max(width / barCount - 2, 2),
              height: 4
            }}
            animate={isActive ? {
              height: [4, height * amplitude, 4],
              opacity: [0.3, 0.8, 0.3]
            } : {}}
            transition={{
              duration: 1.2,
              repeat: isActive ? Infinity : 0,
              delay: i * 0.04,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

export default WaveformVisualizer;
