import React from 'react';
import { AlertTriangle, ShieldCheck, HeartPulse } from 'lucide-react';

interface DisclaimerBannerProps {
  compact?: boolean;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="bg-amber-50 border-r-4 border-amber-500 p-3 rounded-lg text-amber-900 text-xs flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
        <span>
          <strong>تنبيه توعوي:</strong> هذا المحتوى والبيانات الافتراضية للتثقيف العام فقط ولا تُغني عن استشارة الطبيب المختص أو التشخيص الطبي.
        </span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-l from-amber-50 via-amber-100/50 to-amber-50 border border-amber-300/80 rounded-2xl p-4 shadow-sm mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="p-2.5 bg-amber-500 text-white rounded-xl shadow-sm shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="flex-1 text-right">
          <h4 className="text-sm font-bold text-amber-950 flex items-center gap-1.5">
            <span>إخلاء مسؤولية طبية وتثقيفية هامة</span>
            <span className="text-xs font-normal bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full">
              للتوعية فقط
            </span>
          </h4>
          <p className="text-xs text-amber-900 mt-1 leading-relaxed">
            منصة <strong>«نبض ذكي»</strong> مخصصة حصراً لنشر التوعية والتثقيف الصحي بمناسبة اليوم العالمي للسكري.
            البيانات والرسوم البيانية المعروضة هي نماذج افتراضية ولا نجمع أية بيانات صحية شخصية.
            المساعد الذكي <strong>لا يقدم تشخيصاً طبياً سريرياً، ولا يصف أو يغير جرعات أية أدوية أو إنسولين</strong>.
            يُرجى دائماً مراجعة طبيبك أو التوجه لأقرب مركز رعاية صحية في الحالات الطارئة.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0 text-xs text-amber-800 font-medium bg-white/80 px-3 py-1.5 rounded-xl border border-amber-200">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>خصوصية تامة 100%</span>
        </div>
      </div>
    </div>
  );
};
