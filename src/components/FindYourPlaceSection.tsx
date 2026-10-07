import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Users, MapPin, Share2, MessageCircle } from 'lucide-react';
import { ImNewFunnelModal } from './funnel/ImNewFunnelModal';

export const FindYourPlaceSection: React.FC = () => {
  const [funnelOpen, setFunnelOpen] = useState(false);

  return (
    <section id="find-your-place" className="relative py-20 lg:py-28 bg-[#0B1A3A] text-white overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-400/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>FIND YOUR PLACE</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Ready to Join <br />
          <span className="text-amber-400">The Family?</span>
        </h2>

        {/* User's Exact Copy */}
        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
          Connect with The Church of Pentecost, Buoho District today and become part of a family dedicated to Christ, apostolic prayer, and radical soul winning. Whether visiting our physical assemblies or connecting on Fluenca, we have a place for you.
        </p>

        {/* Pillar badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-300 pt-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Buoho Central Auditorium</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15">
            <Share2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Fluenca Christian Social</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15">
            <Heart className="w-3.5 h-3.5 text-amber-400" />
            <span>Son's of God. March Forward</span>
          </span>
        </div>

        {/* Primary CTA Button: Connect Now */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setFunnelOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider text-[#0B1A3A] bg-amber-400 hover:bg-amber-300 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Connect Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/233240000000?text=Hello%20The%20Church%20of%20Pentecost%2C%20Buoho%20District%2C%20I%20would%20like%20to%20connect%20with%20the%20church!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

      {/* Onboarding Funnel Modal */}
      <ImNewFunnelModal
        isOpen={funnelOpen}
        onClose={() => setFunnelOpen(false)}
      />
    </section>
  );
};
