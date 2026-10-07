import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useChurchLogo } from '../../utils/logoState';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string, subCategory?: 'news' | 'events' | 'announcements' | 'sermons') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [feedsDropdownOpen, setFeedsDropdownOpen] = useState(false);
  const [mobileFeedsOpen, setMobileFeedsOpen] = useState(false);
  const { logo } = useChurchLogo();

  const handleLinkClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setFeedsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFeedSubLink = (subCategory: 'news' | 'events' | 'announcements' | 'sermons') => {
    onNavigate('feeds', subCategory);
    setMobileMenuOpen(false);
    setFeedsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-100 transition-all shadow-xs">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* ========================================================= */}
        {/* LEFT: BUOHO DISTRICT LOGO                                 */}
        {/* ========================================================= */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-slate-200/90 p-1 flex items-center justify-center shadow-xs group-hover:border-blue-400 transition-colors">
              <img
                src={logo}
                alt="Buoho District Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/gallery/logo_full.jpg';
                }}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-[#0B1A3A] group-hover:text-blue-700 transition-colors">
                  BUOHO <span className="text-blue-600 font-extrabold">DISTRICT</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              </div>
              <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                The Church of Pentecost
              </span>
            </div>
          </button>
        </div>

        {/* ========================================================= */}
        {/* CENTER: NAVIGATION MENU (HOME, ABOUT, LEADERSHIP, FEEDS,  */}
        {/* MINISTRIES, MOMENTS GALLERY, CONTACT US)                  */}
        {/* ========================================================= */}
        <div className="hidden xl:flex items-center gap-6 text-[13.5px] font-semibold text-slate-700">
          <button
            onClick={() => handleLinkClick('home')}
            className={`transition-colors cursor-pointer py-2 ${
              activePage === 'home' ? 'text-blue-600 font-bold' : 'hover:text-[#0B1A3A]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleLinkClick('about')}
            className={`transition-colors cursor-pointer py-2 ${
              activePage === 'about' ? 'text-blue-600 font-bold' : 'hover:text-[#0B1A3A]'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleLinkClick('leadership')}
            className={`transition-colors cursor-pointer py-2 ${
              activePage === 'leadership' ? 'text-blue-600 font-bold' : 'hover:text-[#0B1A3A]'
            }`}
          >
            Leadership
          </button>

          {/* Feeds Menu: Selecting category opens appropriate tab */}
          <div
            className="relative"
            onMouseEnter={() => setFeedsDropdownOpen(true)}
            onMouseLeave={() => setFeedsDropdownOpen(false)}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setFeedsDropdownOpen(!feedsDropdownOpen);
              }}
              className={`flex items-center gap-1 transition-colors cursor-pointer py-2 ${
                activePage === 'feeds' ? 'text-blue-600 font-bold' : 'hover:text-[#0B1A3A]'
              }`}
            >
              <span>Feeds</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                  feedsDropdownOpen ? 'rotate-180 text-blue-600' : ''
                }`}
              />
            </button>

            {feedsDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-2xl bg-white border border-slate-200/90 shadow-xl p-2 z-50 text-xs font-semibold text-slate-700 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                  Select Feed Category
                </div>
                <button
                  onClick={() => handleFeedSubLink('news')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-700 block transition-colors cursor-pointer"
                >
                  ⚡ News & Highlights
                </button>
                <button
                  onClick={() => handleFeedSubLink('events')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-700 block transition-colors cursor-pointer"
                >
                  📅 Events Schedule
                </button>
                <button
                  onClick={() => handleFeedSubLink('announcements')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-700 block transition-colors cursor-pointer"
                >
                  📢 Announcements
                </button>
                <button
                  onClick={() => handleFeedSubLink('sermons')}
                  className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-blue-50 hover:text-blue-700 block transition-colors cursor-pointer"
                >
                  🎙️ Sermons Archives
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick('ministries')}
            className={`transition-colors cursor-pointer py-2 ${
              activePage === 'ministries' ? 'text-blue-600 font-bold' : 'hover:text-[#0B1A3A]'
            }`}
          >
            Ministries
          </button>

          <button
            onClick={() => handleLinkClick('media')}
            className={`transition-colors cursor-pointer py-2 ${
              activePage === 'media' ? 'text-blue-600 font-bold' : 'hover:text-[#0B1A3A]'
            }`}
          >
            Moments Gallery
          </button>

          <button
            onClick={() => handleLinkClick('contact')}
            className={`transition-colors cursor-pointer py-2 ${
              activePage === 'contact' ? 'text-blue-600 font-bold' : 'hover:text-[#0B1A3A]'
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* ========================================================= */}
        {/* RIGHT: JOIN FLUENCA BUTTON                                */}
        {/* ========================================================= */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#im-new"
            onClick={() => {
              if (activePage !== 'home') handleLinkClick('home');
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Join Fluenca</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <a
            href="#im-new"
            onClick={() => {
              if (activePage !== 'home') handleLinkClick('home');
            }}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-bold bg-purple-600 text-white"
          >
            <span>Fluenca</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-8 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="px-3 py-1 text-[11px] font-bold text-blue-600 uppercase tracking-wider flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Buoho District Navigation</span>
            </span>
          </div>

          <div className="flex flex-col space-y-1 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                activePage === 'home' ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                activePage === 'about' ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleLinkClick('leadership')}
              className={`text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                activePage === 'leadership' ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Leadership
            </button>

            {/* Mobile Feeds Accordion */}
            <div className="border border-slate-200/80 rounded-xl overflow-hidden">
              <button
                onClick={() => setMobileFeedsOpen(!mobileFeedsOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50 text-left font-bold text-slate-800"
              >
                <span>Feeds</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileFeedsOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileFeedsOpen && (
                <div className="bg-white px-3 py-2 space-y-1 border-t border-slate-100 text-xs">
                  <button
                    onClick={() => handleFeedSubLink('news')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-blue-700 block"
                  >
                    ⚡ News & Highlights
                  </button>
                  <button
                    onClick={() => handleFeedSubLink('events')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-blue-700 block"
                  >
                    📅 Events Schedule
                  </button>
                  <button
                    onClick={() => handleFeedSubLink('announcements')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-blue-700 block"
                  >
                    📢 Announcements
                  </button>
                  <button
                    onClick={() => handleFeedSubLink('sermons')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-blue-700 block"
                  >
                    🎙️ Sermons Archives
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('ministries')}
              className={`text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                activePage === 'ministries' ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Ministries
            </button>

            <button
              onClick={() => handleLinkClick('media')}
              className={`text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                activePage === 'media' ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Moments Gallery
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`text-left px-3.5 py-2.5 rounded-xl transition-colors ${
                activePage === 'contact' ? 'bg-blue-50 text-blue-700 font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Contact Us
            </button>

            <a
              href="#im-new"
              onClick={() => {
                setMobileMenuOpen(false);
                if (activePage !== 'home') handleLinkClick('home');
              }}
              className="w-full text-center py-3 rounded-full font-bold text-xs uppercase tracking-wider text-purple-900 bg-purple-100 hover:bg-purple-200 mt-2 block"
            >
              Join Fluenca (Church Social)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
