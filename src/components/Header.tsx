import React, { useState } from 'react';
import { TabType } from '../types';
import { 
  HeartPulse, 
  Bot, 
  BarChart3, 
  HelpCircle, 
  Info, 
  Home, 
  Menu, 
  X, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'الرئيسية', icon: Home },
    { id: 'assistant', label: 'المساعد الذكي', icon: Bot },
    { id: 'explorer', label: 'مستكشف البيانات', icon: BarChart3 },
    { id: 'quiz', label: 'اختبار المعرفة (10)', icon: HelpCircle },
    { id: 'about', label: 'عن المبادرة والشركاء', icon: Info },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      {/* Top micro bar for World Diabetes Day & Club branding */}
      <div className="bg-gradient-to-r from-teal-900 via-sky-900 to-indigo-950 py-1.5 px-4 text-xs border-b border-teal-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Blue Circle of World Diabetes Day */}
            <span className="w-3.5 h-3.5 rounded-full border-2 border-sky-400 bg-sky-500/30 inline-block shadow-sm"></span>
            <span className="font-semibold text-sky-200">اليوم العالمي للسكري • 14 نوفمبر</span>
            <span className="hidden sm:inline-block text-slate-400">|</span>
            <span className="hidden sm:inline-block text-teal-200">بالتعاون مع «نادي آفاق الذكاء الرقمي»</span>
          </div>

          <div className="flex items-center gap-3 text-slate-300">
            <span className="hidden md:flex items-center gap-1 text-[11px] text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
              <PhoneCall className="w-3 h-3" />
              <span>استشارات عاجلة: 937</span>
            </span>
            <span className="text-[11px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded-full border border-teal-500/40 flex items-center gap-1 font-medium">
              <Sparkles className="w-2.5 h-2.5" />
              <span>توعية رقمية معتمدة</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & title */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group py-2"
          >
            <div className="relative">
              {/* Pulsing glow effect */}
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-sky-600 flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
                <HeartPulse className="w-6 h-6 text-white animate-pulse" />
              </div>
              {/* World diabetes day blue ring badge */}
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-sky-400 bg-slate-900 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl text-white tracking-wide font-sans">
                  نبض ذكي
                </span>
                <span className="text-teal-400 font-light text-xs tracking-widest uppercase border border-teal-500/30 px-1.5 py-0.5 rounded">
                  Smart Pulse
                </span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-1">
                فكرة وتطوير م. شادن العنزي • بالتعاون مع نادي آفاق الذكاء الرقمي
              </p>
            </div>
          </div>

          {/* Desktop navigation tabs */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-500 to-sky-600 text-white shadow-md shadow-teal-600/30 scale-[1.02]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-teal-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Quiz CTA button on desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('quiz')}
              className="bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 text-xs px-3.5 py-2 rounded-xl font-semibold flex items-center gap-2 transition shadow-sm hover:border-teal-400"
            >
              <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
              <span>اختبر معلوماتك</span>
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 focus:outline-none transition"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="text-xs text-slate-400 px-3 py-1 mb-2 border-b border-slate-800">
            أقسام منصة نبض ذكي
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500 to-sky-600 text-white font-bold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-teal-400'}`} />
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
              </button>
            );
          })}

          <div className="pt-4 border-t border-slate-800 mt-2">
            <div className="text-xs text-slate-400 text-center">
              مبادرة نادي آفاق الذكاء الرقمي لليوم العالمي للسكري
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
