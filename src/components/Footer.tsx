import React from 'react';
import { TabType } from '../types';
import { HeartPulse, ShieldCheck, Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-12 pb-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 flex items-center justify-center text-white">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white">نبض ذكي | Smart Pulse</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              منصة توعوية رقمية عن السكري توظّف الذكاء الاصطناعي وتحليل البيانات لنشر الوعي الصحي، ابتكار <strong>م. شادن فهد العنزي</strong>، لتبسيط المعرفة الطبية وتمكين المجتمع بأنماط حياة صحية وقائية ومستدامة على مدار العام.
            </p>
            <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl text-xs space-y-0.5">
              <span className="text-teal-400 font-bold block">ابتكار م. شادن فهد العنزي</span>
              <span className="text-slate-400 block text-[11px]">صاحبة فكرة ومطورة منصة نبض ذكي للتوعية الرقمية</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-teal-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-teal-500" />
              <span>لا نجمع أي معلومات صحية شخصية • خصوصية مطلقة</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-sm font-bold text-slate-200">أقسام المنصة</h4>
            <ul className="text-xs space-y-2">
              <li>
                <button onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-teal-400 transition">
                  الصفحة الرئيسية
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('assistant'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-teal-400 transition">
                  المساعد الصحي التعليمي
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('explorer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-teal-400 transition">
                  مستكشف البيانات ونماذج AI
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-teal-400 transition">
                  اختبار المعرفة (10 أسئلة)
                </button>
              </li>
              <li>
                <button onClick={() => { setActiveTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-teal-400 transition">
                  عن المشروع
                </button>
              </li>
            </ul>
          </div>

          {/* Educational Disclaimer */}
          <div className="md:col-span-4 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-2 text-xs">
            <h4 className="font-bold text-amber-400">إشعار قانوني وطبي:</h4>
            <p className="text-slate-400 leading-relaxed font-light">
              كافة محتويات هذا التطبيق والنماذج التفاعلية مخصصة للتوعية والتثقيف العام، ولا تُعد بديلاً عن الفحص السريري أو الاستشارة الطبية المتخصصة. لا تقم بتغيير جرعات أدويتك دون مراجعة طبيبك المعالج.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            منصة نبض ذكي • ابتكار وتطوير م. شادن فهد العنزي © {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-1">
            <span>صُنع بشغف لتعزيز صحة المجتمع</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
