
import React from "react";
import { motion } from "framer-motion";
import { AudioWaveform, Play } from "lucide-react";
import Soundwave from "./Soundwave";

interface VoiceMessageProps {
  message: string;
  duration?: string;
  isPlaying?: boolean;
  className?: string;
}

const VoiceMessage: React.FC<VoiceMessageProps> = ({ 
  message, 
  duration = "0:30", 
  isPlaying = false,
  className = ""
}) => {
  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-md p-4 max-w-md ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-3">
        <motion.div
          className="w-8 h-8 rounded-full bg-deepPurple flex items-center justify-center mr-2"
          whileHover={{ scale: 1.1 }}
        >
          {isPlaying ? (
            <AudioWaveform size={16} className="text-white" />
          ) : (
            <Play size={16} className="text-white" />
          )}
        </motion.div>
        <div className="flex-1 px-2">
          {isPlaying ? (
            <Soundwave size={30} color="#6C63FF" barCount={6} className="my-1" />
          ) : (
            <div className="h-[10px] bg-gray-200 rounded-full w-full">
              <div className="h-full bg-deepPurple rounded-full" style={{ width: "60%" }}></div>
            </div>
          )}
        </div>
        <span className="text-xs text-gray-500">{duration}</span>
      </div>
      <p className="text-darkText text-sm">{message}</p>
    </motion.div>
  );
};

export default VoiceMessage;
