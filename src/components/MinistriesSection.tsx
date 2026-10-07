import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, BookOpen } from 'lucide-react';
import { useChurchLogo } from '../utils/logoState';
import { getManagedImage } from '../utils/imageManager';

interface FellowshipItem {
  id: string;
  title: string;
  categoryTag: string;
  defaultImage: string;
  description: string;
  fullCaption: string;
  theme?: string;
  hashtag: string;
  isNew?: boolean;
}

const UPDATE_CARDS: FellowshipItem[] = [
  {
    id: 'youth-week-2026',
    title: 'Buoho Youth Ministry',
    categoryTag: 'Youth Ministry',
    defaultImage: '/images/ministries/youth_week.jpg',
    description: 'Youth across Buoho District gathering for spiritual revival, apostolic teaching, vibrant praise, and radical evangelism.',
    fullCaption: 'Under the district watchword “Son\'s of God. March Forward,” the youth of Buoho District gather in fervent prayer, holy consecration, and soul-winning passion across our local assemblies. #BuohoDistrict',
    theme: 'Son\'s of God. March Forward',
    hashtag: '#BuohoDistrict',
    isNew: true,
  },
  {
    id: 'womens-week-2026',
    title: 'Women’s Movement',
    categoryTag: 'Women Ministry',
    defaultImage: '/images/ministries/womens_week.png',
    description: 'Women unleashed to transform homes, local assemblies, and society through intensive intercession and godly leadership.',
    fullCaption: 'In Buoho District, our mothers and sisters are channels of divine grace, praying for the 2026 Strategic Growth Plan and setting a godly standard for our families and community. #BuohoDistrict',
    theme: 'Women Unleashed for Kingdom Glory',
    hashtag: '#BuohoDistrict',
    isNew: true,
  },
  {
    id: 'children-week-2026',
    title: 'Children’s Ministry',
    categoryTag: 'Children Ministry',
    defaultImage: '/images/ministries/children_week.jpg',
    description: "Raising the next generation of kingdom champions across Buoho District. Rooted in God's Word from childhood.",
    fullCaption: "Raising the next generation of kingdom champions in Buoho District. Rooted in God's Word, growing in wisdom and stature, and shining brightly as ambassadors of Jesus Christ. #BuohoDistrict",
    theme: 'Kingdom Champions of Christ',
    hashtag: '#BuohoDistrict',
    isNew: true,
  },
];

export const MinistriesSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FellowshipItem | null>(null);
  const { logo } = useChurchLogo();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="ministries" className="relative py-20 lg:py-28 bg-[#F8FAFC] text-slate-900 overflow-hidden border-t border-slate-200/80">
      {/* Background subtle light ambient effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-amber-100/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: CURRENT UPDATES, NEWS & EVENTS            */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="space-y-3 max-w-2xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>CURRENT UPDATES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1A3A] tracking-tight">
              News and <span className="text-blue-600">Events</span>
              <span className="text-amber-500">.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore our current updates, ministry rallies, and apostolic gatherings across The Church of Pentecost, Buoho District.
            </p>
          </div>

          {/* Quick Indicator */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-xs self-start md:self-end">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Tap card to view details</span>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* 3 CSS GRID CARDS (MINISTRIES & CURRENT UPDATES)           */}
        {/* ========================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {UPDATE_CARDS.map((item) => {
            const cardImg = getManagedImage(`buoho_ministry_${item.id}`, item.defaultImage);

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-[28px] p-3.5 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 w-full min-w-0"
              >
                <div className="min-w-0">
                  {/* Top Image Preview with Rounded Bezel & Badges */}
                  <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden bg-slate-900">
                    <img
                      src={cardImg}
                      alt={item.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02] transition-transform duration-500 ease-out group-hover:scale-106"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/gallery/sharing_love.jpg';
                      }}
                    />

                    {/* Top-Left Pill Badge: • New */}
                    {item.isNew && (
                      <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-extrabold text-slate-800 flex items-center gap-1.5 shadow-sm z-10">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>New</span>
                      </div>
                    )}

                    {/* Subtle dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Title & Category Tag */}
                  <div className="flex items-center justify-between gap-2 mt-4 px-1 min-w-0">
                    <h3 className="font-extrabold text-[15px] sm:text-base text-slate-900 truncate group-hover:text-blue-600 transition-colors min-w-0 flex-1">
                      {item.title}
                    </h3>
                    <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-bold">
                      {item.categoryTag}
                    </span>
                  </div>

                  {/* Description Text with Clean Ellipsis Clamp */}
                  <p className="text-xs text-slate-500 mt-2 px-1 line-clamp-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer (Church Logo + District Tag) */}
                <div className="flex items-center justify-between pt-3.5 mt-4 border-t border-slate-100 text-xs px-1 gap-2 min-w-0">
                  <div className="flex items-center gap-2 min-w-0 truncate">
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-white border border-slate-200 p-0.5 flex items-center justify-center shrink-0">
                      <img
                        src={logo}
                        alt="Buoho District Logo"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/gallery/logo_full.jpg';
                        }}
                      />
                    </div>
                    <span className="font-bold text-slate-800 text-xs truncate">Buoho District</span>
                  </div>

                  <span className="text-[11px] font-semibold text-blue-600">
                    View Details →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* ========================================================= */}
      {/* DETAILED CARD MODAL                                       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl my-auto rounded-3xl bg-white border border-slate-200 shadow-2xl p-5 sm:p-8 text-slate-900 max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                {/* Active Photo Display */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={getManagedImage(`buoho_ministry_${selectedItem.id}`, selectedItem.defaultImage)}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover transition-all duration-300"
                  />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0F172A] text-white text-xs font-bold shadow-md">
                    {selectedItem.categoryTag}
                  </div>
                </div>

                {/* Title & Theme */}
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1A3A] break-words">{selectedItem.title}</h3>
                  {selectedItem.theme && (
                    <p className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider mt-1 break-words">
                      Theme: {selectedItem.theme}
                    </p>
                  )}
                </div>

                {/* Full Caption */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal break-words">
                  {selectedItem.fullCaption}
                </div>

                {/* Footer action */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-xs font-bold text-slate-500 font-mono">
                    {selectedItem.hashtag}
                  </span>

                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-2.5 rounded-full bg-[#0B1A3A] hover:bg-[#152B5A] text-white text-xs font-bold transition-all shadow-sm cursor-pointer ml-auto"
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
