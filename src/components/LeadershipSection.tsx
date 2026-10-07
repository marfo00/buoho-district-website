import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Shield, Award, Sparkles, Heart, Quote, Church } from 'lucide-react';
import { getManagedImage } from '../utils/imageManager';

interface LeadershipSectionProps {
  storageKey?: string;
  isStandalonePage?: boolean;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = () => {
  const pastorImage = getManagedImage('buoho_pastor_thomas_appiah_photo', '/images/leadership/pastor_thomas_appiah.jpg');

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="leadership" className="relative py-20 lg:py-28 bg-[#0B1A3A] text-white overflow-hidden border-t border-blue-950">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: LEADERSHIP SPOTLIGHT                      */}
        {/* ========================================================= */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="space-y-3 max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>LEADERSHIP SPOTLIGHT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              District <span className="text-blue-400">Leadership</span>
              <span className="text-amber-400">.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Meet our shepherd and servant of God guiding The Church of Pentecost, Buoho District in evangelism, prayer, sound apostolic doctrine, and the 2026 Strategic Growth Plan.
            </p>
          </div>

          {/* Quick Pillar Highlights */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-slate-200 shadow-xs flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              Pastoral Care
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-slate-200 shadow-xs flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              Buoho District Presbytery
            </span>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* SINGLE DISTRICT PASTOR SPOTLIGHT CARD                     */}
        {/* ========================================================= */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-4xl mx-auto rounded-3xl bg-[#102450]/90 border border-blue-800/80 shadow-2xl hover:border-blue-400/80 transition-all duration-500 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Left: Pastor's Photo */}
            <div className="md:col-span-5 relative bg-slate-900 min-h-[380px] md:min-h-[460px] flex flex-col justify-between overflow-hidden group">
              <img
                src={pastorImage}
                alt="Pastor Thomas Appiah - District Pastor, Buoho District"
                className="absolute inset-0 w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/gallery/sharing_love.jpg';
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102450] via-transparent to-black/40 pointer-events-none" />

              {/* Top-Left: Role Pill */}
              <div className="relative z-10 p-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-blue-600 text-white shadow-md backdrop-blur-md">
                  <Church className="w-3.5 h-3.5 text-amber-300" />
                  District Pastor
                </span>
              </div>
            </div>

            {/* Right: Pastor Thomas Appiah Details, Vision & Quote */}
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs font-bold uppercase tracking-wider">
                  <span>The Church of Pentecost</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Buoho District</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                    Pastor Thomas Appiah
                  </h3>
                  <p className="text-amber-400 font-extrabold text-sm sm:text-base mt-1">
                    District Pastor & Minister-in-Charge
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Anointed shepherd, teacher of the Word, and servant of God presiding over The Church of Pentecost, Buoho District. Fervently dedicated to apostolic doctrine, church planting, holistic growth, and mobilizing the district behind the 2026 Strategic Growth Plan.
                </p>

                {/* District Motto & Scripture Box */}
                <div className="p-4 rounded-2xl bg-blue-950/70 border border-blue-800/80 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-wider">
                    <Quote className="w-4 h-4" />
                    <span>District Watchword</span>
                  </div>
                  <p className="text-sm font-bold text-white italic">
                    “Son's of God. March Forward — possessing nations and declaring Christ with supernatural power.”
                  </p>
                </div>
              </div>

              {/* Pastoral Focus Highlights (Removed 2026 growth goal as requested) */}
              <div className="pt-4 border-t border-blue-900/60 grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-extrabold text-white block">District Assemblies</span>
                  <span className="text-[11px] text-blue-300">Buoho Central & Assemblies</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-extrabold text-white block">Sunday Service</span>
                  <span className="text-[11px] text-blue-300">9:00 AM – 12:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Presbytery & Ministries Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#102450]/60 border border-blue-800/40 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span>Buoho District Presbytery & Ministry Executives</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Working hand-in-hand with Pastor Thomas Appiah to shepherd local assemblies, youth fellowship, women's movement, PEMEM, and children's ministries.
            </p>
          </div>

          <a
            href="#ministries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
          >
            <span>Explore District Ministries</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
