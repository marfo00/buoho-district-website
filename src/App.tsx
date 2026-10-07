import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { LeadershipSection } from './components/LeadershipSection';
import { MinistriesSection } from './components/MinistriesSection';
import { ImNewSection } from './components/ImNewSection';
import { WeeklyEventsSection } from './components/events/WeeklyEventsSection';
import { ExploreSection } from './components/explore/ExploreSection';
import { FindYourPlaceSection } from './components/FindYourPlaceSection';
import { ImNewFunnelModal } from './components/funnel/ImNewFunnelModal';

// Dedicated Sub-Pages
import { AboutPage } from './components/pages/AboutPage';
import { FeedsPage } from './components/pages/FeedsPage';
import { ContactPage } from './components/pages/ContactPage';

import { CHURCH_INFO } from './data/galleryData';
import { useChurchLogo } from './utils/logoState';
import { autoSyncImagesToFiles } from './utils/syncImagesToFiles';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [feedSubTab, setFeedSubTab] = useState<'news' | 'events' | 'announcements' | 'sermons'>('news');
  const [globalFunnelOpen, setGlobalFunnelOpen] = useState(false);
  const [syncedCount, setSyncedCount] = useState<number | null>(null);
  const { logo } = useChurchLogo();

  React.useEffect(() => {
    autoSyncImagesToFiles().then((count) => {
      if (count > 0) {
        setSyncedCount(count);
        setTimeout(() => setSyncedCount(null), 6000);
      }
    });
  }, []);

  const handleNavigate = (page: string, subCategory?: 'news' | 'events' | 'announcements' | 'sermons') => {
    setActivePage(page);
    if (subCategory) {
      setFeedSubTab(subCategory);
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {syncedCount && (
        <div className="bg-emerald-600 text-white text-xs font-semibold py-2.5 px-4 text-center transition-all flex items-center justify-center gap-2 shadow-sm z-50">
          <span>✓ Successfully saved {syncedCount} custom image(s) into project files! Ready to push to GitHub & Vercel.</span>
        </div>
      )}

      {/* 1. Header Navigation Bar (With logo & Join Fluenca) */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* 2. Main Content Display based on activePage */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            {/* Hero Section with 3D Buoho Central Building */}
            <HeroSection />

            {/* Leadership Spotlight Section (Homepage storage key) */}
            <LeadershipSection storageKey="buoho_home_pastor_image" />

            {/* Ministries / Current Updates Section */}
            <MinistriesSection />

            {/* "I'm New Here" Section (Physical Campus vs Join Fluenca) */}
            <ImNewSection />

            {/* Events and Announcement (2026 Strategic Growth Plan) */}
            <WeeklyEventsSection />

            {/* Moments Gallery Section */}
            <ExploreSection />

            {/* FIND YOUR PLACE Section */}
            <FindYourPlaceSection />
          </>
        )}

        {activePage === 'about' && <AboutPage />}

        {activePage === 'leadership' && (
          <div className="py-4">
            {/* Dedicated Leadership Page (Independent storage key so uploads don't alter homepage) */}
            <LeadershipSection storageKey="buoho_page_pastor_image" isStandalonePage={true} />
          </div>
        )}

        {activePage === 'feeds' && <FeedsPage initialTab={feedSubTab} />}

        {activePage === 'ministries' && (
          <div className="py-4">
            <MinistriesSection />
          </div>
        )}

        {activePage === 'media' && (
          <div className="py-4">
            <ExploreSection />
          </div>
        )}

        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* 3. Comprehensive Church Footer */}
      <footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-16 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Buoho District Logo"
                  className="w-10 h-10 rounded-xl bg-white p-1 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/gallery/logo_full.jpg';
                  }}
                />
                <span className="text-xl font-black text-white">BUOHO DISTRICT</span>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
                The Church of Pentecost, Buoho District. An apostolic community passionate about sound doctrine, aggressive evangelism, prayer, and advancing the kingdom of God.
              </p>
              <p className="text-amber-400 font-extrabold uppercase tracking-wider text-xs">
                {CHURCH_INFO.slogan}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-sm text-white uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-1.5 text-slate-400">
                <li><button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="hover:text-white cursor-pointer">Home</button></li>
                <li><button onClick={() => { setActivePage('about'); window.scrollTo(0,0); }} className="hover:text-white cursor-pointer">About Us</button></li>
                <li><button onClick={() => { setActivePage('leadership'); window.scrollTo(0,0); }} className="hover:text-white cursor-pointer">District Pastor Spotlight</button></li>
                <li><button onClick={() => { setActivePage('feeds'); setFeedSubTab('news'); window.scrollTo(0,0); }} className="hover:text-white cursor-pointer">News & Announcements</button></li>
                <li><button onClick={() => { setActivePage('media'); window.scrollTo(0,0); }} className="hover:text-white cursor-pointer">Moments Gallery</button></li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-sm text-white uppercase tracking-wider">District Central</h4>
              <p className="text-slate-400 leading-relaxed">
                Buoho Central Auditorium, Ashanti Region, Ghana.
              </p>
              <div className="pt-2 text-slate-400 space-y-1">
                <p>Sunday Service: 9:00 AM – 12:00 PM</p>
                <p>Midweek Prayer Meeting: Wednesdays 6:30 PM</p>
                <p>District Presbytery / Fasting: Fridays</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <p>© {new Date().getFullYear()} The Church of Pentecost — Buoho District. All Rights Reserved.</p>
            <button
              onClick={() => setGlobalFunnelOpen(true)}
              className="text-amber-400 hover:text-amber-300 font-bold cursor-pointer"
            >
              First Time Visitor? Connect With Us →
            </button>
          </div>
        </div>
      </footer>

      {/* 4. Global Onboarding Funnel Modal */}
      <ImNewFunnelModal
        isOpen={globalFunnelOpen}
        onClose={() => setGlobalFunnelOpen(false)}
      />
    </div>
  );
}
