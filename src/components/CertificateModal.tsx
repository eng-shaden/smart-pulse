import React, { useState } from 'react';
import { Award, CheckCircle2, Download, Printer, X, Sparkles, HeartPulse } from 'lucide-react';

interface CertificateModalProps {
  score: number;
  totalQuestions: number;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  score,
  totalQuestions,
  onClose,
}) => {
  const [recipientName, setRecipientName] = useState('المثقف الصحي الواعي');

  const handlePrint = () => {
    window.print();
  };

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition print:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Name Customization Input (Hidden in Print) */}
        <div className="mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 print:hidden space-y-2">
          <label className="text-xs font-bold text-slate-700 block">
            أدخل اسمك الكريم لإدراجه في الشهادة التوعوية:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="اكتب اسمك هنا..."
              className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm focus:border-teal-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Certificate Printable Canvas */}
        <div 
          id="certificate-print-area"
          className="border-8 border-double border-teal-800/40 p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-amber-50/20 via-white to-teal-50/30 text-center relative overflow-hidden"
        >
          {/* Subtle watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <HeartPulse className="w-96 h-96 text-teal-900" />
          </div>

          {/* Header Logos */}
          <div className="flex items-center justify-between border-b border-teal-100 pb-4 mb-6">
            <div className="text-right">
              <span className="text-xs font-bold text-teal-800 block">مبادرة اليوم العالمي للسكري</span>
              <span className="text-[11px] text-slate-500">World Diabetes Day • 14 نوفمبر</span>
            </div>

            {/* Blue Circle Icon */}
            <div className="w-10 h-10 rounded-full border-4 border-sky-400 bg-white flex items-center justify-center shadow-inner">
              <div className="w-3 h-3 rounded-full bg-teal-600"></div>
            </div>

            <div className="text-left">
              <span className="text-xs font-bold text-slate-800 block">نادي آفاق الذكاء الرقمي</span>
              <span className="text-[11px] text-teal-600 font-semibold">نبض ذكي | Smart Pulse</span>
            </div>
          </div>

          {/* Certificate Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 border-2 border-teal-400 text-teal-700 mb-4 shadow-sm">
            <Award className="w-9 h-9" />
          </div>

          <h3 className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-1">
            شهادة إتمام وتفوق في التثقيف الصحي
          </h3>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-serif mb-3">
            شهادة سفير الوعي بالسكري
          </h2>

          <p className="text-xs text-slate-500 mb-2">تُمنح هذه الشهادة التقديرية بكل فخر واعتزاز إلى:</p>
          <div className="text-xl sm:text-2xl font-black text-teal-900 border-b-2 border-teal-500/50 pb-2 max-w-sm mx-auto mb-4 font-sans">
            {recipientName || 'المثقف الصحي الواعي'}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6 font-normal">
            تقديراً لاجتيازه بنجاح اختبار المعرفة الشامل بداء السكري ضمن فعاليات اليوم العالمي للسكري بنسبة إنجاز بلغت{' '}
            <strong className="text-teal-700 font-bold">{percentage}%</strong> ({score} من {totalQuestions} إجابات صحيحة)،
            ومساهمته الفاعلة في تعزيز ثقافة الوقاية الصحية الرقمية.
          </p>

          {/* Signatures and Date */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-teal-100 text-xs">
            <div className="text-right">
              <span className="text-slate-400 text-[10px] block">فكرة وتطوير النموذج الأولي:</span>
              <span className="font-bold text-slate-800 block mt-0.5">م. شادن فهد العنزي</span>
              <span className="text-[10px] text-teal-600">مصممة ومطورة نبض ذكي</span>
            </div>
            <div className="text-center">
              <span className="text-slate-400 text-[10px] block">جهة المبادرة والتعاون:</span>
              <span className="font-bold text-slate-800 block mt-0.5">نادي آفاق الذكاء الرقمي</span>
              <span className="text-[10px] text-teal-600">Digital Horizons Club</span>
            </div>
            <div className="text-left sm:text-left">
              <span className="text-slate-400 text-[10px] block">تاريخ الاعتماد والإصدار:</span>
              <span className="font-bold text-slate-800 block mt-0.5">14 نوفمبر 2026</span>
              <span className="text-[10px] text-teal-600">كود التحقق: SP-{Date.now().toString().slice(-6)}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons (Hidden in Print) */}
        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-semibold transition"
          >
            إغلاق
          </button>
          <button
            onClick={handlePrint}
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm transition"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة أو حفظ الشهادة (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
