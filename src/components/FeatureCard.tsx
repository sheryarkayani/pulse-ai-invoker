
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon, BadgeCheck } from "lucide-react";
import Soundwave from "./Soundwave";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
  showSoundwave?: boolean;
  trustIndicator?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  index = 0,
  showSoundwave = false,
  trustIndicator
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md hover-card-lift border border-lavender relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.5, 
          delay: 0.2 + (index * 0.1)
        }
      }}
    >
      {showSoundwave && (
        <div className="absolute -bottom-2 -right-2 opacity-10">
          <Soundwave size={80} color="#6C63FF" barCount={7} speed={2} />
        </div>
      )}
      <div className="bg-gradient-to-br from-lavender/20 to-transparent absolute top-0 left-0 right-0 h-24 -mx-6 -mt-6 rounded-t-lg z-0"></div>
      <motion.div 
        className="inline-flex items-center justify-center w-14 h-14 mb-4 text-deepPurple bg-lavender/50 rounded-full relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Icon size={30} strokeWidth={2} />
      </motion.div>
      <h3 className="text-lg font-bold mb-2 text-midnightBlue relative z-10">{title}</h3>
      <p className="text-darkText relative z-10 mb-4">{description}</p>
      
      {trustIndicator && (
        <div className="flex items-center mt-2 text-sm text-midnightBlue/80 font-medium">
          <BadgeCheck size={16} className="text-accentTeal mr-1.5" />
          <span>{trustIndicator}</span>
        </div>
      )}
    </motion.div>
  );
};

export default FeatureCard;
