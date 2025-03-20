
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, SkipBack, SkipForward, Download } from "lucide-react";
import WaveformVisualizer from "./WaveformVisualizer";

interface AudioPlayerProps {
  title?: string;
  subtitle?: string;
  duration?: string;
  className?: string;
  variant?: "minimal" | "standard" | "premium";
  demoMode?: boolean;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title = "Voice Sample",
  subtitle = "AI Voice",
  duration = "0:30",
  className = "",
  variant = "standard",
  demoMode = true
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    // For demo mode, animate the progress bar
    if (demoMode && !isPlaying) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 1;
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          setProgress(0);
        }
      }, 300); // Update every 300ms for a 30-second demo (100 steps)
    }
  };
  
  // Format time from seconds
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Calculate current time based on progress
  const getCurrentTime = () => {
    const durationParts = duration.split(':');
    const totalSeconds = 
      parseInt(durationParts[0]) * 60 + 
      (durationParts.length > 1 ? parseInt(durationParts[1]) : 0);
    
    return formatTime((progress / 100) * totalSeconds);
  };
  
  // Minimal variant
  if (variant === "minimal") {
    return (
      <div className={`flex items-center ${className}`}>
        <motion.button
          className="w-10 h-10 rounded-full bg-deepPurple flex items-center justify-center shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
        >
          {isPlaying ? 
            <Pause size={18} className="text-white" /> : 
            <Play size={18} className="text-white ml-1" />
          }
        </motion.button>
        
        <div className="ml-3 flex-1">
          <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-deepPurple" 
              style={{ width: `${progress}%` }}
              initial={{ width: "0%" }}
            />
          </div>
        </div>
        
        <span className="ml-3 text-xs text-charcoal/70 min-w-[35px]">
          {isPlaying ? getCurrentTime() : duration}
        </span>
      </div>
    );
  }
  
  // Premium variant
  if (variant === "premium") {
    return (
      <div className={`bg-white rounded-lg shadow-md border border-lavender/40 p-4 ${className}`}>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-medium text-midnightBlue">{title}</h3>
            <p className="text-sm text-charcoal/70">{subtitle}</p>
          </div>
          
          <motion.button
            className="p-2 rounded-full hover:bg-deepPurple/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} className="text-deepPurple" />
          </motion.button>
        </div>
        
        <div className="flex justify-center mb-4">
          {isPlaying ? (
            <WaveformVisualizer 
              isActive={true} 
              color="#6C63FF" 
              size="md" 
              variant="circular" 
            />
          ) : (
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-deepPurple/10">
              <Volume2 size={32} className="text-deepPurple" />
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-charcoal/70">
            {isPlaying ? getCurrentTime() : "0:00"}
          </span>
          <span className="text-xs text-charcoal/70">{duration}</span>
        </div>
        
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-gradient-to-r from-deepPurple to-accentTeal" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex items-center justify-center space-x-4">
          <motion.button
            className="p-2 rounded-full hover:bg-deepPurple/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SkipBack size={20} className="text-midnightBlue" />
          </motion.button>
          
          <motion.button
            className="w-12 h-12 rounded-full bg-deepPurple flex items-center justify-center shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
          >
            {isPlaying ? 
              <Pause size={20} className="text-white" /> : 
              <Play size={20} className="text-white ml-1" />
            }
          </motion.button>
          
          <motion.button
            className="p-2 rounded-full hover:bg-deepPurple/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SkipForward size={20} className="text-midnightBlue" />
          </motion.button>
        </div>
      </div>
    );
  }
  
  // Standard variant (default)
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-lavender/30 p-3 ${className}`}>
      <div className="flex items-center mb-3">
        <motion.button
          className="w-10 h-10 rounded-full bg-deepPurple flex items-center justify-center shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
        >
          {isPlaying ? 
            <Pause size={18} className="text-white" /> : 
            <Play size={18} className="text-white ml-1" />
          }
        </motion.button>
        
        <div className="ml-3">
          <p className="text-sm font-medium text-midnightBlue">{title}</p>
          <p className="text-xs text-charcoal/70">{subtitle}</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <span className="text-xs text-charcoal/70 mr-2">
          {isPlaying ? getCurrentTime() : "0:00"}
        </span>
        
        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden mx-1">
          <motion.div 
            className="h-full bg-deepPurple" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <span className="text-xs text-charcoal/70 ml-2">{duration}</span>
      </div>
      
      {isPlaying && (
        <div className="mt-3 flex justify-center">
          <WaveformVisualizer isActive={true} color="#6C63FF" size="sm" />
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
