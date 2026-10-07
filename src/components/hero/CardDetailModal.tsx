import React from 'react';
import { X, Sparkles, Heart } from 'lucide-react';
import { GalleryCardItem } from '../../types/hero';
import { getManagedImage } from '../../utils/imageManager';

interface CardDetailModalProps {
  card: GalleryCardItem | null;
  onClose: () => void;
}

export const CardDetailModal: React.FC<CardDetailModalProps> = ({ card, onClose }) => {
  if (!card) return null;

  const storageKey = `buoho_gallery_${card.id}`;
  const currentImage = getManagedImage(storageKey, card.image);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-2xl text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 shadow-md transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview with Aspect Ratio */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
          <img
            src={currentImage}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          
          {/* Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 text-white shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              {card.category}
            </span>
          </div>
        </div>

        {/* Card Content & Details */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[#0B1A3A] flex items-center gap-2">
              {card.title}
            </h3>
            {card.verse && (
              <span className="text-xs font-bold text-blue-700 font-serif tracking-wide block mt-1">
                Scripture Inspiration: {card.verse}
              </span>
            )}
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            {card.description}
          </p>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-[#0B1A3A] flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              Buoho District Moments
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#0B1A3A] hover:bg-[#152B5A] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
