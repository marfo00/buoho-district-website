import React from 'react';
import { Church, Shield, Heart, Compass, Target, Sparkles, BookOpen } from 'lucide-react';
import { CHURCH_INFO } from '../../data/galleryData';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-14 sm:py-20 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Church className="w-3.5 h-3.5" />
            <span>ABOUT BUOHO DISTRICT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1A3A] tracking-tight">
            An Apostolic District <br />
            <span className="text-blue-600">Son's of God. March Forward</span>
            <span className="text-amber-500">.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            The Church of Pentecost, Buoho District is an apostolic family of believers in the Ashanti Region dedicated to intense prayer, church planting, holistic discipleship, and evangelistic soul winning under the pastoral leadership of District Pastor Thomas Appiah.
          </p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1A3A]">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To raise Christ-centered believers who manifest kingdom authority in church, career, and community. Mobilizing all members across Buoho District for the 2026 Strategic Growth Plan to win souls and establish them in the faith.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-[#0B1A3A]">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be an empowered, holy, and missionary-minded district possessing nations for Jesus Christ. Under our watchword “Son's of God. March Forward,” we aggressively declare Christ and advance God's kingdom.
            </p>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1A3A] text-white space-y-6">
          <h3 className="text-2xl font-black text-white text-center">Core Pillars of Faith</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <BookOpen className="w-6 h-6 text-amber-400 mx-auto" />
              <h4 className="font-bold text-base">Sound Doctrine</h4>
              <p className="text-xs text-slate-300">Grounded in the uncompromised Word of God and apostolic teachings.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Shield className="w-6 h-6 text-blue-400 mx-auto" />
              <h4 className="font-bold text-base">Fervent Prayer</h4>
              <p className="text-xs text-slate-300">Daily and weekly prayer altars contending for personal and national breakthroughs.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <Heart className="w-6 h-6 text-rose-400 mx-auto" />
              <h4 className="font-bold text-base">Christian Love</h4>
              <p className="text-xs text-slate-300">Genuine fellowship where every visitor becomes cherished family.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
