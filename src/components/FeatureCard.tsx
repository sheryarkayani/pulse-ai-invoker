
import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, index = 0 }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow hover-card-lift"
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
      <motion.div 
        className="inline-flex items-center justify-center w-12 h-12 mb-4 text-electricBlue"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Icon size={30} strokeWidth={2} />
      </motion.div>
      <h3 className="text-lg font-bold mb-2 text-charcoal">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
