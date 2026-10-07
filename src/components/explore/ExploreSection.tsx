import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { getManagedImage } from '../../utils/imageManager';

interface GalleryMoment {
  id: string;
  title: string;
  category: 'evangelism' | 'worship' | 'fellowship' | 'youth';
  categoryLabel: string;
  image: string;
  caption: string;
  tag: string;
}

const DEFAULT_MOMENTS: GalleryMoment[] = [
  {
    id: 'moment-1',
    title: 'Evangelism & Street Outreach',
    category: 'evangelism',
    categoryLabel: 'Evangelism',
    image: '/images/gallery/sharing_love.jpg',
    caption: 'Brethren marching into the community with passionate gospel tracts, personal evangelism, and winning souls for the 2026 Strategic Growth Plan.',
    tag: '#SonsofGodMarchForward',
  },
  {
    id: 'moment-2',
    title: 'Apostolic Intercession & Prayer',
    category: 'worship',
    categoryLabel: 'Prayer & Worship',
    image: '/images/gallery/aps_annor_knees.jpg',
    caption: 'Fervent prayer altars and travailing intercession before the presence of God for revival in Buoho District and Ghana.',
    tag: '#PrevailingPrayer',
  },
  {
    id: 'moment-3',
    title: 'Triumphant Praise & Joy in the Sanctuary',
    category: 'worship',
    categoryLabel: 'Praise & Worship',
    image: '/images/gallery/woman_dancing.jpg',
    caption: 'Unrestrained joy and dynamic dancing as the saints rejoice in the victories of our Lord Jesus Christ.',
    tag: '#JoyfulPraise',
  },
  {
    id: 'moment-4',
    title: 'Youth Consecration & Leadership Rally',
    category: 'youth',
    categoryLabel: 'Youth & Children',
    image: '/images/ministries/youth_week.jpg',
    caption: 'Empowering young men and women with apostolic doctrine, holiness, and zeal for kingdom advancement.',
    tag: '#BuohoYouth',
  },
  {
    id: 'moment-5',
    title: 'Men of Valor (PEMEM) Fellowship',
    category: 'fellowship',
    categoryLabel: 'Fellowship',
    image: '/images/gallery/men_dancing.jpg',
    caption: 'Men standing united in faith, brotherhood, and apostolic boldness as spiritual pillars of our homes and district.',
    tag: '#PEMEMBuoho',
  },
  {
    id: 'moment-6',
    title: 'Women of Grace & Faith',
    category: 'fellowship',
    categoryLabel: 'Fellowship',
    image: '/images/ministries/womens_week.png',
    caption: 'Mothers and sisters unleashed in prayer, charity, and building godly generations across our assemblies.',
    tag: '#WomenUnleashed',
  },
  {
    id: 'moment-7',
    title: 'Next Generation Champions',
    category: 'youth',
    categoryLabel: 'Youth & Children',
    image: '/images/ministries/children_week.jpg',
    caption: 'Children grounded in scripture, praise, and memorization of the Word of God from an early age.',
    tag: '#KingdomChampions',
  },
  {
    id: 'moment-8',
    title: 'Deep Heartfelt Adoration',
    category: 'worship',
    categoryLabel: 'Praise & Worship',
    image: '/images/gallery/woman_worship.png',
    caption: 'Lost in the reverence of the Holy Ghost during Sunday worship encounter.',
    tag: '#HolyWorship',
  },
  {
    id: 'moment-9',
    title: 'Ministerial Grace & Leadership Visit',
    category: 'fellowship',
    categoryLabel: 'Fellowship',
    image: '/images/gallery/apostle_nyamekye.jpg',
    caption: 'Apostolic impartation and spiritual encouragement to the leadership and presbytery of the district.',
    tag: '#ApostolicGrace',
  },
];

export const ExploreSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'evangelism' | 'worship' | 'fellowship' | 'youth'>('all');
  const [selectedMoment, setSelectedMoment] = useState<GalleryMoment | null>(null);

  const filteredMoments = activeCategory === 'all'
    ? DEFAULT_MOMENTS
    : DEFAULT_MOMENTS.filter((m) => m.category === activeCategory);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="explore" className="relative py-20 lg:py-28 bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-blue-50/70 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-amber-50/60 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ========================================================= */}
        {/* SECTION HEADER: MOMENTS GALLERY                           */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wider uppercase">
              <Camera className="w-3.5 h-3.5 text-blue-600" />
              <span>MOMENTS GALLERY • BUOHO DISTRICT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1A3A] tracking-tight">
              Moments <br />
              <span className="text-blue-600">Gallery</span>
              <span className="text-amber-500">.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Memories of revival, joyful Sunday assemblies, radical soul-winning street outreaches, and heartfelt worship across The Church of Pentecost, Buoho District.
            </p>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* CATEGORY FILTER PILL BUTTONS                              */}
        {/* ========================================================= */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 pb-4">
          {[
            { id: 'all', label: 'All Moments' },
            { id: 'evangelism', label: 'Evangelism Outreaches' },
            { id: 'worship', label: 'Praise & Worship' },
            { id: 'fellowship', label: 'Assemblies & Fellowship' },
            { id: 'youth', label: 'Youth & Children' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#0B1A3A] text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ========================================================= */}
        {/* MASONRY-STYLE RESPONSIVE PHOTO GRID                       */}
        {/* ========================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredMoments.map((moment) => {
            const momentImg = getManagedImage(`buoho_gallery_${moment.id}`, moment.image);

            return (
              <motion.div
                key={moment.id}
                variants={itemVariants}
                onClick={() => setSelectedMoment({ ...moment, image: momentImg })}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={momentImg}
                    alt={moment.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.97] transition-transform duration-700 ease-out group-hover:scale-108"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/gallery/sharing_love.jpg';
                    }}
                  />

                  {/* Gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                  {/* Category Chip */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider">
                      {moment.categoryLabel}
                    </span>
                  </div>

                  {/* Zoom Icon Hover Overlay */}
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/60 backdrop-blur-md text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Bottom Title & Tag Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 z-10 space-y-1.5">
                    <span className="text-[10px] font-mono text-amber-300 font-bold block">
                      {moment.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-snug drop-shadow-sm">
                      {moment.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed font-normal">
                      {moment.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* ========================================================= */}
      {/* DETAILED MOMENT LIGHTBOX MODAL                            */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedMoment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl my-auto rounded-3xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl text-white"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMoment(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-950 flex items-center justify-center">
                <img
                  src={getManagedImage(`buoho_gallery_${selectedMoment.id}`, selectedMoment.image)}
                  alt={selectedMoment.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-3 bg-[#0B1A3A]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-bold uppercase tracking-wider">
                    {selectedMoment.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-amber-400 font-bold">
                    {selectedMoment.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {selectedMoment.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {selectedMoment.caption}
                </p>

                <div className="pt-4 border-t border-blue-900/60 flex items-center justify-between text-xs text-slate-400">
                  <span>The Church of Pentecost • Buoho District</span>
                  <button
                    onClick={() => setSelectedMoment(null)}
                    className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold transition-colors cursor-pointer"
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
