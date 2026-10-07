import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, Sparkles } from 'lucide-react';
import { GALLERY_CARDS } from '../../data/galleryData';
import { GalleryCardItem } from '../../types/hero';
import { CardDetailModal } from './CardDetailModal';
import { getManagedImage } from '../../utils/imageManager';

export const OrbitCarousel: React.FC = () => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedCard, setSelectedCard] = useState<GalleryCardItem | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [galleryVersion, setGalleryVersion] = useState(0);

  // Managed Church Building Image
  const churchImage = getManagedImage('buoho_church_building_image', '/images/buoho_central_church.jpg');

  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(performance.now());

  // Track responsive screen width
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Listen for gallery updates
  useEffect(() => {
    const handleImagesUpdated = () => setGalleryVersion((v) => v + 1);
    window.addEventListener('buoho_site_images_updated', handleImagesUpdated);
    return () => window.removeEventListener('buoho_site_images_updated', handleImagesUpdated);
  }, []);

  // Continuous, uninterrupted infinite 3D loop animation
  useEffect(() => {
    const animate = (time: number) => {
      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      // Silky-smooth constant speed: ~14 degrees per second
      const speedInDegrees = 14;
      setRotationAngle((prev) => (prev + (speedInDegrees * delta * Math.PI) / 180) % (2 * Math.PI));

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const totalCards = GALLERY_CARDS.length;
  const isMobile = windowWidth < 640;
  const isSmallMobile = windowWidth < 400;

  // Safe radii calculation strictly bounded inside viewport width
  const rx = isSmallMobile ? 115 : isMobile ? 140 : 275;
  const rz = isSmallMobile ? 75 : isMobile ? 95 : 195;
  const ry = isMobile ? 12 : 22;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative w-full max-w-[620px] lg:max-w-[720px] h-[480px] sm:h-[560px] lg:h-[600px] mx-auto flex items-center justify-center select-none overflow-hidden sm:overflow-visible"
    >
      {/* 3D Soft Light Background Glow (Clean white & soft sky) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[540px] h-[320px] sm:h-[540px] rounded-full bg-gradient-to-tr from-blue-100/50 via-slate-100/40 to-sky-100/50 blur-3xl pointer-events-none" />

      {/* Orbit Stage Area */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: isMobile ? 800 : 1200 }}
      >
        {/* ============================================================ */}
        {/* CENTERPIECE: BUOHO CENTRAL CHURCH BUILDING (PROMINENT Z-30) */}
        {/* ============================================================ */}
        <div className="absolute z-30 flex flex-col items-center justify-center pointer-events-auto">
          {/* Church Building Image Container - Crystal clear & unobstructed */}
          <div className="group/church relative w-[230px] sm:w-[330px] h-[290px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/20 border-2 border-slate-200/90 bg-white flex items-center justify-center transition-all duration-300 hover:shadow-blue-900/30">
            <img
              src={churchImage}
              alt="The Church of Pentecost, Buoho Central Church Building"
              className="w-full h-full object-cover object-center filter brightness-[1.01] contrast-[1.02] transition-transform duration-700 group-hover/church:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/buoho_central_church.jpg';
              }}
            />

            {/* Soft gradient blend at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1A3A]/90 via-[#0B1A3A]/40 to-transparent pointer-events-none" />

            {/* Building Identification Badge */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1A3A]/85 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold shadow-md border border-white/20">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Buoho Central Church</span>
            </div>

            {/* Bottom Caption Pill: District Watchword */}
            <div className="absolute bottom-3 inset-x-3 z-20 text-center">
              <div className="p-2 sm:p-2.5 rounded-2xl bg-[#0B1A3A]/90 backdrop-blur-md border border-white/15 text-white shadow-lg">
                <p className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-400">
                  Son's of God. March Forward
                </p>
                <p className="text-[9px] sm:text-[10px] text-slate-200 font-medium">
                  The Church of Pentecost • Buoho District
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3D CONTINUOUS LOOP: 11 GALLERY CARDS ORBITING INFINITELY     */}
        {/* ============================================================ */}
        {GALLERY_CARDS.map((card, index) => {
          const baseAngle = (index * 2 * Math.PI) / totalCards;
          const currentAngle = (baseAngle + rotationAngle) % (2 * Math.PI);

          const x = Math.cos(currentAngle) * rx;
          const z = Math.sin(currentAngle) * rz;
          const y = Math.sin(currentAngle) * ry;

          const normZ = z / rz;

          // Scale & depth
          const scale = isMobile
            ? 0.68 + ((normZ + 1) / 2) * 0.35
            : 0.74 + ((normZ + 1) / 2) * 0.42;
          const opacity = 0.65 + ((normZ + 1) / 2) * 0.35;
          const blur = normZ < -0.25 ? Math.abs(normZ) * 1.5 : 0;

          // Depth sorting
          const zIndex = z < 0 ? Math.floor(10 + (normZ + 1) * 8) : Math.floor(40 + normZ * 20);

          // Get managed custom image for this card if uploaded
          const cardImage = getManagedImage(`buoho_gallery_${card.id}`, card.image);

          return (
            <div
              key={`${card.id}-${galleryVersion}`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCard({ ...card, image: cardImage });
              }}
              className="absolute transition-[opacity,filter] duration-150 ease-out cursor-pointer group"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`,
                zIndex,
                opacity,
                filter: `blur(${blur}px)`,
              }}
            >
              {/* Individual 3D Orbiting Card in Crisp White styling */}
              <div className="relative w-20 sm:w-34 h-26 sm:h-42 rounded-xl sm:rounded-2xl overflow-hidden p-0.5 sm:p-1 bg-white shadow-lg border border-slate-200/90 ring-1 ring-slate-900/5 hover:ring-2 hover:ring-blue-500 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={cardImage}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-1 left-1 sm:top-1.5 sm:left-1.5">
                    <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white shadow-xs">
                      {card.category}
                    </span>
                  </div>

                  {/* Card Title & Icon */}
                  <div className="absolute bottom-1 sm:bottom-2 inset-x-1 sm:inset-x-2 text-white">
                    <p className="text-[9px] sm:text-xs font-bold leading-tight line-clamp-1 drop-shadow-sm">
                      {card.title}
                    </p>
                    <div className="hidden sm:flex items-center gap-1 text-[9px] text-slate-300 mt-0.5">
                      <ZoomIn className="w-2.5 h-2.5" />
                      <span>Inspect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Dialog for Clicked Card */}
      {selectedCard && (
        <CardDetailModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </motion.div>
  );
};
