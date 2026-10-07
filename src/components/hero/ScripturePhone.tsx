import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Radio, Volume2 } from 'lucide-react';

interface ScripturePhoneProps {
  className?: string;
}

export const ScripturePhone: React.FC<ScripturePhoneProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-[210px] sm:w-[240px] select-none rounded-[36px] p-2 bg-gradient-to-b from-slate-200 via-white to-slate-200 shadow-2xl shadow-blue-900/15 ring-1 ring-slate-900/10 backdrop-blur-lg transform transition-transform duration-500 hover:scale-[1.03] ${className}`}
    >
      {/* Outer rim metal edge */}
      <div className="absolute inset-0 rounded-[36px] border border-slate-300 pointer-events-none" />

      {/* Phone screen container */}
      <div className="relative rounded-[30px] overflow-hidden bg-gradient-to-b from-[#0B1A3A] via-[#102450] to-[#0B1A3A] p-3.5 border border-slate-800 flex flex-col justify-between aspect-[9/16] text-white shadow-inner">
        {/* Notch / Dynamic Island */}
        <div className="flex items-center justify-between w-full pt-0.5 px-2 text-[10px] text-slate-300 font-medium">
          <span>9:41</span>
          <div className="w-14 h-3 bg-black rounded-full mx-auto ring-1 ring-white/10" />
          <div className="flex items-center gap-1 text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>5G</span>
          </div>
        </div>

        {/* Ambient glow inside phone */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-36 h-36 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Branding */}
        <div className="relative z-10 text-center pt-2">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/20 text-blue-200 text-[9px] font-bold tracking-wider uppercase mb-1">
            <Sparkles className="w-2.5 h-2.5 text-amber-300" />
            <span>APOSTOLIC WORSHIP</span>
          </div>
          <div className="text-[12px] font-black text-white tracking-wider">
            BUOHO DISTRICT
          </div>
          <p className="text-[9px] text-blue-200/80 font-medium">
            The Church of Pentecost
          </p>
        </div>

        {/* Center Sanctuary Screen / Audio Stream Preview */}
        <div className="relative z-10 my-auto text-center px-2 py-3 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-md shadow-lg">
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md mb-2">
            <Sparkles className="w-6 h-6 text-amber-300" />
          </div>
          <div className="text-[11px] font-bold text-white tracking-wide">
            Son's of God. March Forward
          </div>
          <div className="flex items-center justify-center gap-1 text-[9px] text-amber-300 font-semibold mt-1">
            <Volume2 className="w-3 h-3" />
            <span>Apostolic Fellowship</span>
          </div>

          {/* Animated Audio Equalizer Bars */}
          <div className="flex items-center justify-center gap-1 mt-2.5 h-4">
            {[40, 75, 55, 90, 60, 85, 45].map((height, i) => (
              <motion.span
                key={i}
                animate={{ scaleY: [0.3, 1, 0.4] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8 + i * 0.1,
                  ease: 'easeInOut',
                }}
                style={{ height: `${height}%` }}
                className="w-1 bg-gradient-to-t from-blue-400 to-amber-300 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between px-2 text-slate-300 text-xs">
          <span className="flex items-center gap-1 text-rose-400 font-bold text-[9px]">
            <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
            <span>Join Fellowship</span>
          </span>
          <span className="text-[9px] text-slate-400 font-medium">buoho.cop</span>
        </div>

        {/* Home bar */}
        <div className="w-16 h-1 bg-white/40 rounded-full mx-auto mt-2" />
      </div>
    </div>
  );
};
