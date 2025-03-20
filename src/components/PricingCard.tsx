
import React from "react";
import { motion } from "framer-motion";
import PulseButton from "./PulseButton";

interface PricingCardProps {
  title: string;
  price: string;
  yearlyPrice: string;
  features: string[];
  index?: number;
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  yearlyPrice,
  features, 
  index = 0,
  isPopular = false
}) => {
  return (
    <motion.div
      className={`bg-white p-6 rounded-lg shadow hover-card-lift ${isPopular ? 'border-2 border-deepPurple' : 'border border-lavender'}`}
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
      {isPopular && (
        <div className="absolute top-0 right-0 -mt-3 -mr-3">
          <span className="bg-deepPurple text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-midnightBlue">{title}</h3>
      
      <div className="mb-4">
        <span className="text-3xl font-bold text-deepPurple">{price}</span>
        <span className="text-darkText">/month</span>
        <p className="text-sm text-gray-500">or {yearlyPrice}/year</p>
      </div>
      
      <div className="mb-6">
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <svg className="w-5 h-5 text-accentTeal flex-shrink-0 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-darkText">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <PulseButton>
        Get Started
      </PulseButton>
    </motion.div>
  );
};

export default PricingCard;
