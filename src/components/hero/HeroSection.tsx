import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, BookOpen, ChevronDown } from 'lucide-react';
import { OrbitCarousel } from './OrbitCarousel';

export const HeroSection: React.FC = () => {
  // Staggered entrance animation variants for framer-motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
      },
    },
  };

  return (
    <section id="hero" className="relative bg-white text-slate-900 overflow-hidden pt-6 pb-8 lg:pt-14 lg:pb-16">
      {/* Subtle background ambient soft lighting */}
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] rounded-full bg-blue-50/70 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-[420px] h-[420px] rounded-full bg-slate-50/80 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: PENSA-KNUST INSPIRED TYPOGRAPHY & HERO COPY  */}
          {/* ========================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-center lg:text-left z-20"
          >
            {/* Eyebrow Pill (Exact PENSA-KNUST visual signature: • WELCOME TO THE FAMILY) */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>WELCOME TO THE FAMILY</span>
            </motion.div>

            {/* Main Headline (Bold, Clean, Capitalized with Golden Dot) */}
            <motion.div variants={itemVariants} className="space-y-1.5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0B1A3A] leading-[1.1] break-words">
                WELCOME TO <br className="hidden sm:block" />
                <span className="text-[#0B1A3A]">BUOHO DISTRICT</span>
                <span className="text-amber-500">.</span>
              </h1>
              <p className="text-xs sm:text-sm uppercase font-extrabold tracking-widest text-blue-900/80 pt-1">
                SON'S OF GOD. MARCH FORWARD
              </p>
            </motion.div>

            {/* Descriptive Body Text */}
            <motion.p variants={itemVariants} className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              The Church of Pentecost, Buoho District is a vibrant apostolic community where faith grows, lives are transformed, and believers are empowered. Our watchword is Son's of God. March Forward.
              <br />
              <span className="font-semibold text-slate-800 mt-1 block">
                You are welcome to fellowship with us
              </span>
            </motion.p>

            {/* Action Buttons (PENSA-KNUST Pill Buttons: Navy Solid & Clean White Outline) */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#worship"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm text-white bg-[#0B1A3A] hover:bg-[#152B5A] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Join Us This Sunday</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#ministries"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-sm text-[#0B1A3A] bg-white hover:bg-slate-50 border border-slate-200 shadow-xs hover:shadow-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Explore Ministries</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 3D JESUS & INFINITE ORBITING GALLERY LOOP   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
            <OrbitCarousel />
          </div>

        </div>
      </div>

      {/* ============================================================= */}
      {/* SMOOTH TRANSITION FADE-IN TO NEXT SECTION (Clean Visual Flow) */}
      {/* ============================================================= */}
      <div className="relative mt-12 sm:mt-20 pt-16 pb-8">
        {/* Multi-stop smooth gradient blend into the next potential section */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-slate-50/60 to-slate-100/90 pointer-events-none" />

        {/* Soft edge blur bar to eliminate any harsh borders */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

        {/* Minimalist scroll down indicator with subtle pulse */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-10 flex flex-col items-center justify-center text-center space-y-2.5"
        >
          <a
            href="#leadership-preview"
            className="group flex flex-col items-center gap-2 text-xs font-semibold text-slate-400 hover:text-blue-700 transition-colors"
          >
            <span className="tracking-widest uppercase text-[10px] font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
              Scroll To Explore
            </span>
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/90 shadow-sm flex items-center justify-center group-hover:border-blue-300 group-hover:shadow-md transition-all animate-bounce">
              <ChevronDown className="w-4 h-4 text-blue-600" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
