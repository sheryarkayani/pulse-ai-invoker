
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Soundwave from "@/components/Soundwave";
import PulseButton from "@/components/PulseButton";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import { Star, Mic, Clock, TrendingUp, Settings, Headphones, Phone, CalendarCheck, BadgeCheck, Bot, 
  ArrowUpRight, ExternalLink, FileCheck, Heart } from "lucide-react";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Soundwave size={20} color="#007BFF" />
                <span className="text-xl font-bold text-charcoal">Pulse</span>
              </motion.div>
            </div>
            <div className="hidden md:block">
              <nav className="flex items-center space-x-6">
                <motion.a 
                  href="#features" 
                  className="text-charcoal hover:text-electricBlue transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Features
                </motion.a>
                <motion.a 
                  href="#testimonials" 
                  className="text-charcoal hover:text-electricBlue transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Testimonials
                </motion.a>
                <motion.a 
                  href="#pricing" 
                  className="text-charcoal hover:text-electricBlue transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Pricing
                </motion.a>
                <PulseButton>Try Free for 14 Days</PulseButton>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.p 
              className="text-electricBlue text-sm font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              LIMITED BETA SPOTS AVAILABLE
            </motion.p>

            <motion.h1
              className="text-charcoal font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Automate Client Calls.<br />Cut No-Shows by 30%.
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-700 mb-4 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Pulse saves appointment businesses 5+ hours a week with voice AI.
            </motion.p>

            <motion.p
              className="text-gray-700 italic mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              The #1 Outbound Agent for Appointment Businesses
            </motion.p>

            <motion.div 
              className="mb-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Soundwave size={50} color="#007BFF" />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 15 
                } 
              }}
            >
              <PulseButton className="min-w-[200px]">
                Try Pulse Free for 14 Days
              </PulseButton>
              <PulseButton secondary>
                See a Demo
              </PulseButton>
            </motion.div>

            <motion.p
              className="text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              No credit card required
            </motion.p>
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section className="py-16 bg-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-charcoal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Early Results
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-electricBlue text-3xl sm:text-4xl font-bold mb-2">25%</p>
              <p className="text-xl font-semibold mb-1">No-Show Reduction</p>
              <p className="text-gray-600">in beta testing</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-electricBlue text-3xl sm:text-4xl font-bold mb-2">20+</p>
              <p className="text-xl font-semibold mb-1">Beta Users</p>
              <p className="text-gray-600">salons, gyms, tutors</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-electricBlue text-3xl sm:text-4xl font-bold mb-2">90%</p>
              <p className="text-xl font-semibold mb-1">Satisfaction</p>
              <p className="text-gray-600">from early users</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center mb-4 text-charcoal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Pulse?
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our voice AI technology automates the most time-consuming part of your business
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard 
              title="Reduce No-Shows" 
              description="Automated reminders and confirmations cut no-shows by 30%."
              icon={Phone}
              index={0}
            />
            
            <FeatureCard 
              title="Save Time" 
              description="Save 5+ hours a week by automating client calls."
              icon={Clock}
              index={1}
            />
            
            <FeatureCard 
              title="Grow Revenue" 
              description="Follow-ups and outreach campaigns drive repeat bookings."
              icon={TrendingUp}
              index={2}
            />
            
            <FeatureCard 
              title="Seamless Integration" 
              description="Works with booking systems like Square and Calendly."
              icon={Settings}
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-16 bg-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center mb-12 text-charcoal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Small Businesses
          </motion.h2>

          <motion.div 
            className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <Soundwave size={30} className="mr-4" />
              <div>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFC107" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg italic mb-4">
              "Pulse saved me 5 hours a week and cut my no-shows in half! The voice sounds so natural my clients think it's a real person."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold mr-4">
                S
              </div>
              <div>
                <p className="font-semibold text-charcoal">Sarah Johnson</p>
                <p className="text-gray-600 text-sm">Salon Owner</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="flex items-center justify-center text-gray-700 mb-2">
              <span className="font-bold text-lg mr-2">4.8/5</span>
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFC107" />
                ))}
              </span>
            </p>
            <p className="text-gray-600 text-sm">based on 20 reviews</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center mb-4 text-charcoal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple, Affordable Pricing
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the plan that best fits your business needs
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter Plan"
              price="$29"
              yearlyPrice="$299"
              features={[
                "200 calls/month",
                "Appointment reminders",
                "Confirmations",
                "Basic analytics",
                "Email support"
              ]}
              index={0}
            />
            
            <PricingCard
              title="Pro Plan"
              price="$49"
              yearlyPrice="$499"
              features={[
                "500 calls/month",
                "Appointment reminders",
                "Confirmations",
                "Follow-ups",
                "Outreach campaigns",
                "Advanced analytics",
                "Multi-language support",
                "Priority support"
              ]}
              index={1}
              isPopular={true}
            />
          </div>
          
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-gray-700 italic">
              Free Plan: 50 calls/month to get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center mb-6 text-charcoal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            A $100M+ Opportunity
          </motion.h2>

          <motion.p 
            className="text-center text-gray-700 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            1.5M appointment businesses in the U.S. lose 10–20% of revenue to no-shows. Pulse is here to fix that.
          </motion.p>

          <motion.p 
            className="text-center text-gray-600 italic text-sm max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Market size: $633M by 2026 (Market Research Future).
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold mb-6 text-charcoal"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get Started with Pulse
            </motion.h2>

            <motion.p 
              className="text-gray-700 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              No credit card required. Start automating your client calls today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
              className="inline-block"
            >
              <PulseButton className="min-w-[200px]">
                Try Pulse Free for 14 Days
              </PulseButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Soundwave size={20} color="#FFFFFF" className="mr-2" />
              <span className="text-xl font-bold">Pulse</span>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-white hover:underline transition-all duration-300">Home</a>
              <a href="#features" className="text-white hover:underline transition-all duration-300">Features</a>
              <a href="#pricing" className="text-white hover:underline transition-all duration-300">Pricing</a>
              <a href="#" className="text-white hover:underline transition-all duration-300">Contact</a>
              <a href="#" className="text-white hover:underline transition-all duration-300">Privacy</a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
            <p>Pulse © 2025 | Automate. Grow. Thrive.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
