import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, ExternalLink, MessageCircle } from 'lucide-react';

interface UpcomingEventItem {
  id: string;
  title: string;
  category: string;
  date: string;
  day: string;
  time: string;
  venue: string;
  isPhysical: boolean;
  registrationLink?: string;
  description: string;
}

const UPCOMING_EVENTS: UpcomingEventItem[] = [
  {
    id: 'district-evangelism',
    title: 'District Soul-Winning Evangelism Drives',
    category: 'Evangelism Drive',
    date: 'SEP – DEC',
    day: 'Weekly',
    time: 'Saturdays 6:00 AM & 4:00 PM',
    venue: 'Buoho District Communities & Assemblies',
    isPhysical: true,
    description: 'Mobilizing all members and ministries across Buoho District to win souls toward the 800,000 worldwide evangelism target of The Church of Pentecost.',
  },
  {
    id: 'sunday-services',
    title: 'Sunday Worship Services',
    category: 'Weekly Fellowship',
    date: 'EVERY SUN',
    day: 'Sundays',
    time: '9:00 AM – 12:00 PM',
    venue: 'Buoho Central Auditorium & District Assemblies',
    isPhysical: true,
    description: 'Experience apostolic praise, supernatural worship, and transformative ministry under the pastoral leadership of District Pastor Thomas Appiah.',
  },
];

export const UpcomingEvents: React.FC = () => {
  const handleWhatsAppInquiry = (eventTitle: string) => {
    const text = encodeURIComponent(
      `Hello The Church of Pentecost, Buoho District,\nI would love more information or confirmation for: *${eventTitle}*.`
    );
    window.open(`https://wa.me/233240000000?text=${text}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
            Calendar Highlights
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#0B1A3A] tracking-tight">
            Major Upcoming Activities
          </h3>
        </div>
        <span className="text-xs font-semibold text-slate-500">
          Showing major sanctuary & conference dates
        </span>
      </div>

      {/* List View */}
      <div className="divide-y divide-slate-100 bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
        {UPCOMING_EVENTS.map((event) => (
          <div
            key={event.id}
            className="p-5 sm:p-6 hover:bg-slate-50/80 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            {/* Left: Date Block & Title */}
            <div className="flex items-start gap-3.5 sm:gap-6 min-w-0 flex-1">
              {/* Date Box */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center text-center shrink-0">
                <span className="text-[10px] font-black text-blue-600 tracking-wider uppercase">
                  {event.day}
                </span>
                <span className="text-base sm:text-lg font-black text-[#0B1A3A] leading-tight">
                  {event.date}
                </span>
              </div>

              {/* Event Content */}
              <div className="space-y-1.5 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800">
                    {event.category}
                  </span>
                  {event.id === 'district-evangelism' && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 animate-pulse">
                      Active District Campaign
                    </span>
                  )}
                </div>

                <h4 className="text-base sm:text-xl font-bold text-slate-900 break-words">
                  {event.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed break-words font-normal">
                  {event.description}
                </p>

                {/* Event Metadata (Time & Venue) */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-slate-500 pt-1">
                  <span className="flex items-center gap-1.5 text-blue-700">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{event.time}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span>{event.venue}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 self-stretch sm:self-start lg:self-center shrink-0 w-full sm:w-auto pt-2 lg:pt-0">
              {event.registrationLink ? (
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all text-center"
                >
                  <span>Register via Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              ) : null}

              <button
                onClick={() => handleWhatsAppInquiry(event.title)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                title="Send inquiry on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>WhatsApp DM</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
