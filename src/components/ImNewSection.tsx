import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles, Compass, MessageSquare, Share2, Heart, Users, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { ImNewFunnelModal } from './funnel/ImNewFunnelModal';

export const ImNewSection: React.FC = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);
  const [fluencaModalOpen, setFluencaModalOpen] = useState(false);
  const [defaultPref, setDefaultPref] = useState<'physical' | 'online' | null>(null);

  const handleOpenFunnel = (pref?: 'physical' | 'online') => {
    setDefaultPref(pref || null);
    setFunnelOpen(true);
  };

  return (
    <section id="im-new" className="relative py-20 lg:py-28 bg-white text-slate-900 overflow-hidden border-t border-slate-100">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-50/80 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full bg-amber-50/70 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>I'M NEW HERE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1A3A] tracking-tight">
            Find the right experience <br className="hidden sm:inline" />
            <span className="text-blue-600">for you</span>
            <span className="text-amber-500">.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            No matter where you are, whether attending our physical sanctuary or connecting with brethren on our Christian social platform Fluenca, you have a family in Buoho District.
          </p>
        </div>

        {/* ========================================================= */}
        {/* TWO EXPERIENCE CARDS: PHYSICAL CAMPUS & JOIN FLUENCA      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Card 1: Physical Campus (Buoho Central & Assemblies) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5 }}
            onClick={() => handleOpenFunnel('physical')}
            className="group relative rounded-3xl p-8 sm:p-10 bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-blue-400 hover:bg-white transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold tracking-wider uppercase">
                  Sanctuary
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1A3A] tracking-tight group-hover:text-blue-700 transition-colors">
                  Physical Campus
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  Worship with us in person at Buoho Central or our district assemblies. Experience apostolic prayer, spirit-filled worship, sound doctrine, and warm family fellowship.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-1 text-xs font-semibold text-slate-500">
                <span className="text-slate-800 font-bold">Sunday Service:</span>
                <span>• 9:00 AM – 12:00 PM</span>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-extrabold text-[#0B1A3A] uppercase tracking-wider group-hover:text-blue-600 flex items-center gap-1.5">
                <span>Plan Your Visit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-[11px] font-bold text-slate-400">Buoho Central Auditorium</span>
            </div>
          </motion.div>

          {/* Card 2: Join Fluenca (Tailored Christian Social Media for Buoho District) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onClick={() => setFluencaModalOpen(true)}
            className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-indigo-50/60 via-purple-50/40 to-slate-50 border border-purple-200/90 shadow-sm hover:shadow-2xl hover:border-purple-400 hover:bg-white transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
                  <Share2 className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-black tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                  <span>Church Social Media</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1A3A] tracking-tight group-hover:text-purple-700 transition-colors">
                  Join Fluenca
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                  Fluenca is our dedicated church social media platform built specifically for Buoho District. It functions like social media, but tailored for Christian discipleship, testimony sharing, and spiritual growth.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-1 text-xs font-semibold text-slate-600">
                <span className="text-purple-900 font-bold">Fluenca Features:</span>
                <span>• Daily Word, Devotionals & Testimony Sharing</span>
                <span>• Prayer Feeds & Discipleship Discussion Circles</span>
                <span>• Connect with Believers Across Buoho Assemblies</span>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-purple-200/80 flex items-center justify-between">
              <span className="text-xs font-extrabold text-purple-700 uppercase tracking-wider group-hover:text-purple-900 flex items-center gap-1.5">
                <span>Explore Fluenca Platform</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="text-[11px] font-bold text-purple-500">Built for Christian Growth</span>
            </div>
          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* DIRECT CTA BUTTON TO LAUNCH THE AUDIT FUNNEL              */}
        {/* ========================================================= */}
        <div className="mt-14 text-center">
          <button
            onClick={() => handleOpenFunnel()}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-extrabold text-sm text-white bg-[#0B1A3A] hover:bg-[#152B5A] shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>I'm New Here — Connect With Buoho District</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Onboarding Funnel Modal */}
      <ImNewFunnelModal
        isOpen={funnelOpen}
        onClose={() => setFunnelOpen(false)}
        defaultPreference={defaultPref}
      />

      {/* Fluenca Church Social Media Modal */}
      <AnimatePresence>
        {fluencaModalOpen}
        {fluencaModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl rounded-3xl bg-white border border-purple-200 shadow-2xl p-6 sm:p-8 text-slate-900 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setFluencaModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#0B1A3A]">Fluenca</h3>
                    <p className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                      Church Social Media • Buoho District
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 text-slate-700 text-sm leading-relaxed space-y-2">
                  <p className="font-semibold text-purple-950">
                    Welcome to Fluenca — built specifically for The Church of Pentecost, Buoho District!
                  </p>
                  <p className="text-xs text-slate-600">
                    Fluenca works like your favorite social media network, but every post, group, and feature is geared to accelerate Christian growth, wholesome fellowship, and disciple-making.
                  </p>
                </div>

                {/* Feature Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Heart className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-slate-900">Testimony Feed</h4>
                      <p className="text-slate-500 text-[11px]">Share and rejoice over answered prayers across our assemblies.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <MessageSquare className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-slate-900">Apostolic Discussions</h4>
                      <p className="text-slate-500 text-[11px]">Daily scriptures, sermon reflections, and youth connect.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Users className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-slate-900">Ministry Circles</h4>
                      <p className="text-slate-500 text-[11px]">PEMEM, Women, Youth, and Evangelism cell groups.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-extrabold text-slate-900">Clean Christian Space</h4>
                      <p className="text-slate-500 text-[11px]">Pure, uplifting atmosphere safe for believers and youth.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      setFluencaModalOpen(false);
                      handleOpenFunnel('online');
                    }}
                    className="w-full sm:flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs uppercase tracking-wider text-center shadow-md transition-all cursor-pointer"
                  >
                    Join Fluenca Community
                  </button>

                  <button
                    onClick={() => setFluencaModalOpen(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
