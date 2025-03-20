
import React from "react";
import { motion } from "framer-motion";
import { Bot, User, Check, Clock } from "lucide-react";
import WaveformVisualizer from "./WaveformVisualizer";

interface AIConversationBubbleProps {
  message: string;
  type: "ai" | "user";
  status?: "sending" | "sent" | "received" | "speaking";
  timestamp?: string;
  className?: string;
}

const AIConversationBubble: React.FC<AIConversationBubbleProps> = ({
  message,
  type = "ai",
  status = "sent",
  timestamp = "Just now",
  className = ""
}) => {
  const isAI = type === "ai";
  
  // Variants for smooth animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const bubbleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.2, delay: 0.1 }
    }
  };

  // Status indicator components
  const StatusIndicator = () => {
    switch (status) {
      case "sending":
        return <Clock size={12} className="text-charcoal/60" />;
      case "sent":
        return <Check size={12} className="text-charcoal/60" />;
      case "received":
        return <Check size={12} className="text-accentTeal" />;
      case "speaking":
        return isAI ? 
          <WaveformVisualizer size="sm" isActive={true} color="#6C63FF" /> : 
          null;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className={`flex ${isAI ? 'justify-start' : 'justify-end'} w-full ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={`max-w-[80%] ${isAI ? 'pr-12' : 'pl-12'}`}>
        <div className="flex items-start gap-2">
          {isAI && (
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-deepPurple flex items-center justify-center">
                <Bot size={16} className="text-white" />
              </div>
            </div>
          )}
          
          <div className="flex-1">
            <motion.div
              variants={bubbleVariants}
              className={`rounded-2xl p-3 ${
                isAI 
                  ? 'bg-lightGray border border-lavender/30 text-charcoal' 
                  : 'bg-deepPurple text-white'
              }`}
            >
              <p className="text-sm">{message}</p>
              
              {status === "speaking" && isAI && (
                <div className="mt-2">
                  <WaveformVisualizer 
                    size="sm" 
                    isActive={true} 
                    color={isAI ? "#6C63FF" : "#FFFFFF"} 
                  />
                </div>
              )}
            </motion.div>
            
            <div className={`flex items-center text-xs mt-1 text-charcoal/60 ${
              isAI ? 'justify-start' : 'justify-end'
            }`}>
              <span>{timestamp}</span>
              <span className="mx-1">•</span>
              <div className="flex items-center">
                <StatusIndicator />
              </div>
            </div>
          </div>
          
          {!isAI && (
            <div className="flex-shrink-0 mt-1">
              <div className="w-8 h-8 rounded-full bg-deepPurple/10 flex items-center justify-center">
                <User size={16} className="text-deepPurple" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AIConversationBubble;
