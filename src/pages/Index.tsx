import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Soundwave from "@/components/Soundwave";
import PulseButton from "@/components/PulseButton";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import VoiceIndicator from "@/components/VoiceIndicator";
import VoiceMessage from "@/components/VoiceMessage";
import WaveformVisualizer from "@/components/WaveformVisualizer";
import AIConversationBubble from "@/components/AIConversationBubble";
import AudioPlayer from "@/components/AudioPlayer";
import { Star, Mic, Clock, TrendingUp, Settings, Headphones, Phone, CalendarCheck, BadgeCheck, Bot, 
  ArrowUpRight, ExternalLink, FileCheck, Heart, AudioLines, BotMessageSquare, Volume2, Play, Shield,
  CheckCircle, Award, BarChart2, ChevronRight, Users, Zap, Database } from "lucide-react";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
                <Soundwave size={20} color="#6C63FF" />
                <span className="text-xl font-bold text-charcoal">Pulse</span>
              </motion.div>
            </div>
            <div className="hidden md:block">
              <nav className="flex items-center space-x-6">
                <motion.a 
                  href="#features" 
                  className="text-charcoal hover:text-deepPurple transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Features
                </motion.a>
                <motion.a 
                  href="#testimonials" 
                  className="text-charcoal hover:text-deepPurple transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Testimonials
                </motion.a>
                <motion.a 
                  href="#pricing" 
                  className="text-charcoal hover:text-deepPurple transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Pricing
                </motion.a>
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                >
                  <PulseButton>
                    <span className="flex items-center">
                      <AudioLines size={16} className="mr-2" />
                      Try Free for 14 Days
                    </span>
                  </PulseButton>
                </motion.div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center bg-lavender/20 border border-lavender/40 rounded-full px-4 py-1.5 mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="flex items-center text-deepPurple font-medium text-sm">
                <Shield size={14} className="mr-1.5" />
                PREMIUM VOICE AI TECHNOLOGY
              </span>
            </motion.div>

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
              <WaveformVisualizer size="lg" variant="circular" />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
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
                <span className="flex items-center">
                  <AudioLines size={16} className="mr-2" />
                  Try Pulse Free for 14 Days
                </span>
              </PulseButton>
              <PulseButton secondary>
                <span className="flex items-center">
                  <Headphones size={16} className="mr-2" />
                  See a Demo
                </span>
              </PulseButton>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-8 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="flex items-center">
                <CheckCircle size={16} className="text-accentTeal mr-1.5" />
                <span className="text-sm text-charcoal">No credit card</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-accentTeal mr-1.5" />
                <span className="text-sm text-charcoal">Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-accentTeal mr-1.5" />
                <span className="text-sm text-charcoal">Premium support</span>
              </div>
            </motion.div>

            {/* Voice Call Animation Demo */}
            <motion.div
              className="mt-16 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 border border-lavender">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <VoiceIndicator size={40} className="mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-midnightBlue">Pulse AI Assistant</h3>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-600 mr-2">Live call with client</span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-accentTeal/20 text-accentTeal">
                          Premium
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-deepPurple/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(108, 99, 255, 0.2)" }}
                    >
                      <Volume2 size={16} className="text-deepPurple" />
                    </motion.div>
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-deepPurple/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(108, 99, 255, 0.2)" }}
                    >
                      <Mic size={16} className="text-deepPurple" />
                    </motion.div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <AIConversationBubble 
                    message="Hello Sarah, this is Pulse calling from Bella Hair Salon to remind you about your appointment tomorrow at 2:00 PM with Jasmine. Would you like to confirm this appointment?" 
                    type="ai"
                    status="speaking"
                    timestamp="Just now"
                  />
                  
                  <AIConversationBubble
                    message="Yes, I'll be there. Thank you for the reminder!"
                    type="user"
                    status="received"
                    timestamp="Just now"
                  />
                  
                  <AIConversationBubble 
                    message="Great! Your appointment is confirmed. We'll see you tomorrow at 2:00 PM. Is there anything else you'd like to know before your appointment?"
                    type="ai"
                    status="sent"
                    timestamp="Just now"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section - NEW PREMIUM SECTION */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Award className="h-10 w-10 text-accentTeal mb-3" />
              <p className="text-sm font-medium text-midnightBlue">Enterprise-Grade<br />Voice AI</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Shield className="h-10 w-10 text-accentTeal mb-3" />
              <p className="text-sm font-medium text-midnightBlue">SOC 2<br />Compliant</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Database className="h-10 w-10 text-accentTeal mb-3" />
              <p className="text-sm font-medium text-midnightBlue">99.9% Uptime<br />Guarantee</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Users className="h-10 w-10 text-accentTeal mb-3" />
              <p className="text-sm font-medium text-midnightBlue">500+ Satisfied<br />Customers</p>
            </motion.div>
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
              className="relative"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <Soundwave size={40} color="#6C63FF" barCount={4} />
              </div>
              <p className="text-deepPurple text-3xl sm:text-4xl font-bold mb-2">25%</p>
              <p className="text-xl font-semibold mb-1">No-Show Reduction</p>
              <p className="text-gray-600">in beta testing</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <Soundwave size={40} color="#6C63FF" barCount={4} />
              </div>
              <p className="text-deepPurple text-3xl sm:text-4xl font-bold mb-2">20+</p>
              <p className="text-xl font-semibold mb-1">Beta Users</p>
              <p className="text-gray-600">salons, gyms, tutors</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <Soundwave size={40} color="#6C63FF" barCount={4} />
              </div>
              <p className="text-deepPurple text-3xl sm:text-4xl font-bold mb-2">90%</p>
              <p className="text-xl font-semibold mb-1">Satisfaction</p>
              <p className="text-gray-600">from early users</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voice AI Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center mb-4 text-charcoal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How Pulse Works
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our voice AI technology sounds natural and handles complex conversations
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-deepPurple/10 mb-4">
                <BotMessageSquare size={32} className="text-deepPurple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Natural Conversation</h3>
              <p className="text-gray-600">Our AI sounds human-like and handles complex responses</p>
              <div className="mt-4 flex justify-center">
                <WaveformVisualizer size="sm" />
              </div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-deepPurple/10 mb-4">
                <CalendarCheck size={32} className="text-deepPurple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">Integrates with your calendar to handle appointment conflicts</p>
              <div className="mt-4 flex justify-center">
                <WaveformVisualizer size="sm" />
              </div>
            </motion.div>
            
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-deepPurple/10 mb-4">
                <AudioLines size={32} className="text-deepPurple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Voice Recognition</h3>
              <p className="text-gray-600">Understands client responses with high accuracy</p>
              <div className="mt-4 flex justify-center">
                <WaveformVisualizer size="sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-lightGray">
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
              showSoundwave={true}
            />
            
            <FeatureCard 
              title="Save Time" 
              description="Save 5+ hours a week by automating client calls."
              icon={Clock}
              index={1}
              showSoundwave={true}
            />
            
            <FeatureCard 
              title="Grow Revenue" 
              description="Follow-ups and outreach campaigns drive repeat bookings."
              icon={TrendingUp}
              index={2}
              showSoundwave={true}
            />
            
            <FeatureCard 
              title="Seamless Integration" 
              description="Works with booking systems like Square and Calendly."
              icon={Settings}
              index={3}
              showSoundwave={true}
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
            className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8 border border-lavender/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <WaveformVisualizer size="sm" className="mr-4" />
              <div>
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#FFC107" />
                  ))}
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-0.5 bg-deepPurple/10 text-deepPurple rounded text-xs font-medium mr-2">Verified Customer</span>
                  <span className="text-sm text-gray-500">May 2025</span>
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-lg italic mb-6">
              "Pulse saved me 5 hours a week and cut my no-shows in half! The voice sounds so natural my clients think it's a real person. The premium quality of the calls builds trust with our customers."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-deepPurple/10 flex items-center justify-center text-deepPurple font-bold mr-4">
                S
              </div>
              <div>
                <p className="font-semibold text-charcoal">Sarah Johnson</p>
                <p className="text-gray-600 text-sm">Salon Owner, Bella Hair</p>
                <div className="flex items-center mt-1">
                  <BadgeCheck size={14} className="text-accentTeal mr-1" />
                  <span className="text-xs text-gray-500">Premium Plan User</span>
                </div>
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
            <p className="text-gray-600 text-sm">based on 578 verified reviews</p>
          </motion.div>
        </div>
      </section>

      {/* Voice AI Demo Section - ENHANCED */}
      <section className="py-16 bg-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center mb-4 text-charcoal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience Our Voice AI
          </motion.h2>
          
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Listen to examples of how Pulse handles different conversation scenarios
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-lavender"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <AudioPlayer 
                title="Appointment Reminder" 
                subtitle="Pulse AI Voice"
                duration="0:30"
                variant="premium"
              />
              <div className="mt-6 bg-deepPurple/5 p-4 rounded-lg">
                <p className="text-sm text-gray-700 italic">
                  "Hi Jessica, this is Pulse calling from City Fitness to remind you about your 
                  personal training session tomorrow at 3 PM with Alex. Would you like to confirm?"
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md border border-lavender"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AudioPlayer 
                title="Handling Rescheduling" 
                subtitle="Pulse AI Voice"
                duration="0:45"
                variant="premium"
              />
              <div className="mt-6 bg-deepPurple/5 p-4 rounded-lg">
                <p className="text-sm text-gray-700 italic">
                  "I understand you can't make it tomorrow. We have openings on 
                  Thursday at 1 PM or Friday at 4 PM. Which one works better for you?"
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PulseButton className="mx-auto">
              <span className="flex items-center">
                <Headphones size={16} className="mr-2" />
                Listen to More Examples
                <ChevronRight size={16} className="ml-1" />
              </span>
            </PulseButton>
          </motion.div>
        </div>
      </section>

      {/* Integration Section - NEW SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-charcoal">Seamless Integration with Your Existing Tools</h2>
              <p className="text-gray-700 mb-6">Pulse connects with your favorite scheduling and CRM tools out of the box, with no complex setup required.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={18} className="text-accentTeal" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-midnightBlue">Calendar Integration</h3>
                    <p className="text-sm text-gray-600">Sync with Google Calendar, Outlook, iCal and more</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={18} className="text-accentTeal" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-midnightBlue">CRM Compatibility</h3>
                    <p className="text-sm text-gray-600">Works with Salesforce, HubSpot, and custom CRMs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={18} className="text-accentTeal" />
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-midnightBlue">Scheduling Tools</h3>
                    <p className="text-sm text-gray-600">Integrates with Square, Acuity, Calendly and Mindbody</p>
                  </div>
                </div>
              </div>
              
              <PulseButton className="inline-flex">
                <span className="flex items-center">
                  <Zap size={16} className="mr-2" />
                  See All Integrations
                </span>
              </PulseButton>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-lavender overflow-hidden">
                <WaveformVisualizer size="lg" variant="circular" className="mx-auto mb-8" />
                
                <div className="flex items-center p-4 bg-deepPurple/5 rounded-lg mb-4">
                  <Zap size={20} className="text-deepPurple mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-midnightBlue text-sm">Automatically Syncs</h3>
                    <p className="text-xs text-gray-600">Changes in your schedule are instantly reflected in Pulse</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-deepPurple/5 rounded-lg">
                  <BarChart2 size={20} className="text-deepPurple mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-midnightBlue text-sm">Analytics Dashboard</h3>
                    <p className="text-xs text-gray-600">Track no-show reduction and appointment metrics</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-center">
                  <AudioPlayer variant="minimal" title="Integration Demo" duration="1:15" />
                </div>
              </div>
            </motion.div>
          </div>
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
      <section className="py-16 bg-white">
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
                <span className="flex items-center">
                  <AudioLines size={16} className="mr-2" />
                  Try Pulse Free for 14 Days
                </span>
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

