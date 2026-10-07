import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sparkles, ZoomIn, X, Target, Globe, Flame } from 'lucide-react';
import { UpcomingEvents } from './UpcomingEvents';
import { getManagedImage } from '../../utils/imageManager';

export const WeeklyEventsSection: React.FC = () => {
  const flyerImage = getManagedImage('buoho_event_strategic_growth_flyer', '/images/events/strategic_growth_plan.jpg');
  const [previewFlyerOpen, setPreviewFlyerOpen] = useState(false);

  return (
    <section id="events" className="relative py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-amber-100/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: EVENTS AND ANNOUNCEMENT                   */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>THE CHURCH OF PENTECOST</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1A3A] tracking-tight leading-tight">
              Events and <br className="hidden sm:block" />
              <span className="text-blue-600">Announcement</span>
              <span className="text-amber-500">.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Stay informed with our 2026 Strategic Growth Plan evangelism challenge, worldwide outreach drives, and announcements across Buoho District.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-amber-50 px-4 py-2.5 rounded-2xl border border-amber-200 shadow-xs self-start md:self-end">
            <Flame className="w-4 h-4 text-amber-600 animate-pulse" />
            <span>800,000 Souls Evangelism Drive</span>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* SINGLE FEATURE CARD: 2026 STRATEGIC GROWTH PLAN           */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left: Event Flyer Image with Zoom Lightbox */}
            <div className="lg:col-span-5 relative bg-slate-900 min-h-[320px] sm:min-h-[420px] overflow-hidden group">
              <img
                src={flyerImage}
                alt="2026 Strategic Growth Plan Evangelism Event Flyer"
                className="w-full h-full object-cover object-center filter brightness-[0.98] transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/events/pemem_dawn_prayers.jpg';
                }}
              />

              {/* Bottom-Right: Zoom Preview Button */}
              <button
                onClick={() => setPreviewFlyerOpen(true)}
                title="View Full Flyer"
                className="absolute bottom-3 right-3 z-15 p-2 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition-all cursor-pointer border border-white/20"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              {/* Top-Left: Worldwide Church Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-900 shadow-md backdrop-blur-md">
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  COP Worldwide
                </span>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Bottom-Left Date Badge */}
              <div className="absolute bottom-3 left-3 z-10 text-white flex items-center gap-1.5 text-xs font-bold drop-shadow-md">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>September — December 2026</span>
              </div>
            </div>

            {/* Right: Event Details, Targets, and Action Plan */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-amber-700" />
                    <span>800,000 Souls Target</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                    Evangelism Mobilization
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1A3A] tracking-tight">
                    2026 Strategic Growth Plan
                  </h3>
                  <p className="text-blue-700 font-extrabold text-xs sm:text-sm uppercase tracking-wider mt-1">
                    The Church of Pentecost Worldwide Evangelism Challenge
                  </p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  An urgent evangelism call for all assemblies of The Church of Pentecost across the globe, challenging every member, ministry leader, and assembly in Buoho District to rise in radical soul winning. Together, our worldwide target is to win <strong className="text-slate-900">800,000 souls</strong> into the kingdom of God between September and December.
                </p>

                {/* Key Strategic Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Duration</span>
                    <span className="text-sm font-black text-slate-900">Sep – Dec 2026</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Global Goal</span>
                    <span className="text-sm font-black text-blue-700">800,000 Souls</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">District Lead</span>
                    <span className="text-sm font-black text-slate-900">Buoho District</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => setPreviewFlyerOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>View Strategic Flyer</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* UPCOMING DISTRICT ACTIVITIES LIST                         */}
        {/* ========================================================= */}
        <UpcomingEvents />

      </div>

      {/* ========================================================= */}
      {/* MODAL: FLYER LIGHTBOX ZOOM PREVIEW                        */}
      {/* ========================================================= */}
      <AnimatePresence>
        {previewFlyerOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full rounded-3xl overflow-hidden bg-slate-900 p-2 border border-slate-700"
            >
              <button
                onClick={() => setPreviewFlyerOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[3/4] max-h-[75vh] w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={flyerImage}
                  alt="2026 Strategic Growth Plan Event Flyer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 text-center text-white space-y-1">
                <h4 className="font-bold text-base">2026 Strategic Growth Plan</h4>
                <p className="text-xs text-amber-400">800,000 Souls Evangelism Challenge • The Church of Pentecost</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
