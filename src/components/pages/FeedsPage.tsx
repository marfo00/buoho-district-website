import React, { useState } from 'react';
import { Rss, Calendar, Bell, Mic, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { UpcomingEvents } from '../events/UpcomingEvents';

interface FeedsPageProps {
  initialTab?: 'news' | 'events' | 'announcements' | 'sermons';
}

export const FeedsPage: React.FC<FeedsPageProps> = ({ initialTab = 'news' }) => {
  const [activeTab, setActiveTab] = useState<'news' | 'events' | 'announcements' | 'sermons'>(initialTab);

  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const newsItems = [
    {
      id: 1,
      title: 'Buoho District Youth Rally & Consecration',
      category: 'Youth Fellowship',
      date: 'Recent',
      image: '/images/ministries/youth_week.jpg',
      snippet: 'Under the watchword “Son\'s of God. March Forward,” hundreds of young believers gathered in apostolic worship, prayer, and evangelism zeal.',
    },
    {
      id: 2,
      title: 'Women Unleashed for Kingdom Glory: District Women’s Week',
      category: 'Women Ministry',
      date: 'Recent',
      image: '/images/ministries/womens_week.png',
      snippet: 'Women across Buoho District stepped boldly into their God-given identities, unburdened by past fears, and equipped as conduits of divine grace.',
    },
    {
      id: 3,
      title: '2026 Strategic Growth Plan Launched',
      category: 'Evangelism Drive',
      date: 'Recent',
      image: '/images/events/pemem_dawn_prayers.jpg',
      snippet: 'District Pastor Thomas Appiah rallies all assemblies across Buoho District for the worldwide 800,000 souls evangelism challenge.',
    },
  ];

  // Empty lists — strictly no content added as requested
  const announcements: Array<{
    id: number;
    tag: string;
    title: string;
    desc: string;
    link?: string;
    linkText?: string;
  }> = [];

  const sermonArchives: Array<{
    id: number;
    title: string;
    preacher: string;
    series: string;
    url: string;
  }> = [];

  return (
    <div className="py-14 sm:py-20 bg-slate-50 min-h-screen text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            <Rss className="w-3.5 h-3.5" />
            <span>FEEDS & UPDATES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-[#0B1A3A] tracking-tight">
            News, Events, Announcements <br />
            <span className="text-blue-600">& Sermons Archives</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Your single destination for all fresh news, service dates, official notices, and inspiring sermon replays.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs max-w-xl mx-auto">
          {[
            { id: 'news', label: 'News & Stories', icon: <Rss className="w-3.5 h-3.5" /> },
            { id: 'events', label: 'Events Calendar', icon: <Calendar className="w-3.5 h-3.5" /> },
            { id: 'announcements', label: 'Announcements', icon: <Bell className="w-3.5 h-3.5" /> },
            { id: 'sermons', label: 'Sermons Archives', icon: <Mic className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0B1A3A] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: NEWS */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {newsItems.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">{item.snippet}</p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Buoho District</span>
                  <span className="text-blue-600 font-bold">Read Full Post →</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: EVENTS */}
        {activeTab === 'events' && (
          <div className="animate-in fade-in duration-200">
            <UpcomingEvents />
          </div>
        )}

        {/* TAB 3: ANNOUNCEMENTS */}
        {activeTab === 'announcements' && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200/90 shadow-sm max-w-xl mx-auto space-y-2 animate-in fade-in duration-200">
            <Bell className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No Announcements</h3>
            <p className="text-xs text-slate-500">There are no official announcements published at this time.</p>
          </div>
        )}

        {/* TAB 4: SERMONS ARCHIVES */}
        {activeTab === 'sermons' && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200/90 shadow-sm max-w-xl mx-auto space-y-2 animate-in fade-in duration-200">
            <Mic className="w-8 h-8 text-slate-300 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">No Sermons Archives</h3>
            <p className="text-xs text-slate-500">There are no archived sermons listed at this time.</p>
          </div>
        )}

      </div>
    </div>
  );
};
