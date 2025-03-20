
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Soundwave from "./Soundwave";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
  showSoundwave?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  index = 0,
  showSoundwave = false
}) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow hover-card-lift border border-lavender relative overflow-hidden"
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
      <motion.div 
        className="inline-flex items-center justify-center w-12 h-12 mb-4 text-deepPurple relative z-10"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Icon size={30} strokeWidth={2} />
      </motion.div>
      <h3 className="text-lg font-bold mb-2 text-midnightBlue relative z-10">{title}</h3>
      <p className="text-darkText relative z-10">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
