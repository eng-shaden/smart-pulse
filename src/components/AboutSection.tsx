import React, { useState } from 'react';
import { 
  clubProfile, 
  worldDiabetesDayInfo, 
  initialPartners 
} from '../data/partnersData';
import { PartnerOrg } from '../types';
import { 
  Info, 
  Award, 
  Users, 
  HeartHandshake, 
  CheckCircle2, 
  PlusCircle, 
  Building2, 
  Send, 
  ExternalLink, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { DisclaimerBanner } from './DisclaimerBanner';

export const AboutSection: React.FC = () => {
  const [partners, setPartners] = useState<PartnerOrg[]>(initialPartners);
  const [showAddPartnerForm, setShowAddPartnerForm] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Form state
  const [orgName, setOrgName] = useState('');
  const [orgType, setOrgType] = useState('مستشفى أو مركز صحي');
  const [orgDesc, setOrgDesc] = useState('');

  const handleAddPartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName.trim()) return;

    const newPartner: PartnerOrg = {
      id: `partner-${Date.now()}`,
      name: orgName.trim(),
      type: orgType,
      description: orgDesc.trim() || 'شريك استراتيجي داعم لفعاليات اليوم العالمي للسكري.',
      status: 'confirmed',
      logoText: orgName.trim().slice(0, 15)
    };

    setPartners((prev) => [newPartner, ...prev]);
    setOrgName('');
    setOrgDesc('');
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setShowAddPartnerForm(false);
    }, 2500);
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-12">
      <DisclaimerBanner />

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-teal-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/40 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>المسؤولية المجتمعية والتقنية</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black">
          عن المبادرة وتطبيق نبض ذكي
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          مبادرة رقمية وتوعوية تجمع بين شغف هندسة الحاسب والذكاء الاصطناعي وخدمة المجتمع الصحي بمناسبة اليوم العالمي للسكري.
        </p>

        {/* Creator highlight badge */}
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
          <span className="bg-teal-500/20 text-teal-200 border border-teal-400/30 px-3 py-1.5 rounded-xl font-bold">
            فكرة وتصميم وتطوير: م. شادن فهد العنزي
          </span>
          <span className="bg-slate-800 text-slate-300 border border-slate-700 px-3 py-1.5 rounded-xl">
            جهة المبادرة والتعاون: نادي آفاق الذكاء الرقمي
          </span>
        </div>
      </section>

      {/* Standalone Inspiration Story Card: من حكاية جدتي بدأت الفكرة */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-teal-500/30 shadow-2xl space-y-6">
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-teal-800/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-teal-300 font-bold block">
                  قصة إلهام التطبيق
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  من حكاية جدتي بدأت الفكرة
                </h2>
              </div>
            </div>

            <span className="text-xs bg-teal-950/80 text-teal-200 border border-teal-700/60 px-3 py-1 rounded-full font-medium">
              دافع إنساني وشغف تقني
            </span>
          </div>

          {/* Story Text without commas or periods as explicitly requested */}
          <div className="bg-slate-900/60 rounded-2xl p-6 sm:p-8 border border-teal-500/20 space-y-4 text-slate-100 text-sm sm:text-base leading-relaxed sm:leading-loose font-normal">
            <p>
              لم تكن فكرة نبض ذكي مجرد فكرة تقنية بل كانت وراءها حكاية قريبة من قلبي استلهمت هذا المشروع من جدتي التي أُصيبت بمرض السكري في مرحلة متأخرة من عمرها جعلتني تجربتها أكثر اهتمامًا بالتوعية بهذا المرض والتفكير في كيف يمكن للتقنية والذكاء الاصطناعي أن يساهما في نشر المعرفة الصحية وتبسيط المعلومات للناس
            </p>
            <p>
              ومن هنا جاءت فكرة نبض ذكي مبادرة تجمع بين شغفي بهندسة الحاسب والذكاء الاصطناعي ورغبتي في توظيف التقنية لخدمة المجتمع والمساهمة في رفع الوعي بمرض السكري
            </p>
            <p className="text-teal-200 font-medium">
              أؤمن أن وراء كل فكرة تقنية أثرًا إنسانيًا يمكن أن نصنعه وأن المعرفة والتوعية قد تكونان بداية لفرق كبير
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-500 text-white flex items-center justify-center font-black text-sm">
                ش
              </div>
              <div>
                <div className="text-sm font-bold text-white">م. شادن فهد العنزي</div>
                <div className="text-xs text-teal-300">صاحبة فكرة ومطورة النموذج الأولي لتطبيق نبض ذكي</div>
              </div>
            </div>

            <div className="text-xs text-slate-400">
              بالتعاون مع نادي آفاق الذكاء الرقمي
            </div>
          </div>
        </div>
      </section>

      {/* World Diabetes Day Story & The Blue Circle */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          {/* Blue Circle Icon */}
          <div className="w-12 h-12 rounded-full border-4 border-sky-400 bg-sky-50 flex items-center justify-center shrink-0 shadow-sm">
            <div className="w-4 h-4 rounded-full bg-teal-600"></div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              اليوم العالمي للسكري (14 نوفمبر)
            </h2>
            <p className="text-xs text-slate-500">{worldDiabetesDayInfo.theme}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
              <span>رمز الدائرة الزرقاء (The Blue Circle)</span>
            </h3>
            <p className="text-xs sm:text-sm">
              {worldDiabetesDayInfo.symbolMeaning}
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
              <span>تاريخ المناسبة العالمية</span>
            </h3>
            <p className="text-xs sm:text-sm">
              {worldDiabetesDayInfo.history}
            </p>
          </div>
        </div>
      </section>

      {/* Digital Horizons Club Profile */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs text-teal-400 font-bold uppercase tracking-wider block mb-1">جهة المبادرة والتعاون</span>
            <h2 className="text-2xl sm:text-3xl font-black">
              {clubProfile.name}
            </h2>
            <p className="text-xs text-slate-400">{clubProfile.englishName}</p>
          </div>
          <span className="text-xs bg-teal-500/20 text-teal-300 border border-teal-500/40 px-3 py-1.5 rounded-xl font-medium">
            شريك المبادرة المجتمعية
          </span>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-sm sm:text-base text-slate-200 leading-relaxed font-light">
          {clubProfile.about}
        </div>

        {/* Club Goals */}
        <div className="space-y-3">
          <h3 className="font-bold text-base text-teal-300 flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span>أهداف نادي آفاق الذكاء الرقمي في التوعية الصحية:</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {clubProfile.goals.map((goal, idx) => (
              <div key={idx} className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/50 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Sponsors Section */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4" />
              <span>الشبكة التوعوية المتكاملة</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              الشركاء والجهات الداعمة للمبادرة
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              نرحب بالتعاون مع كافة القطاعات الصحية والأكاديمية والمجتمعية لتوحيد جهود التوعية:
            </p>
          </div>

          <button
            onClick={() => setShowAddPartnerForm(!showAddPartnerForm)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition shrink-0 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{showAddPartnerForm ? 'إلغاء النموذج' : 'طلب انضمام كجهة شريكة'}</span>
          </button>
        </div>

        {/* Dynamic Partner Registration Form */}
        {showAddPartnerForm && (
          <form
            onSubmit={handleAddPartnerSubmit}
            className="bg-teal-50/70 p-5 sm:p-6 rounded-2xl border border-teal-200 space-y-4 animate-in fade-in duration-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm sm:text-base text-teal-950">
                تسجيل اهتمام بالشراكة التوعوية في اليوم العالمي للسكري
              </h3>
              <span className="text-xs text-teal-700">مساحة فورية للإضافة</span>
            </div>

            {formSuccess && (
              <div className="p-3 bg-teal-600 text-white rounded-xl text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>تم تسجيل وإضافة الجهة بنجاح ضمن قائمة الشركاء المعروضة!</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  اسم المنظمة أو الجهة:
                </label>
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="مثال: مستشفى الملك فيصل التخصصي"
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:border-teal-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  نوع الجهة أو القطاع:
                </label>
                <select
                  value={orgType}
                  onChange={(e) => setOrgType(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:border-teal-500 focus:outline-none"
                >
                  <option value="مستشفى أو مجمع طبي">مستشفى أو مجمع طبي</option>
                  <option value="جامعة أو مركز أبحاث">جامعة أو مركز أبحاث</option>
                  <option value="جمعية خيرية صحية">جمعية خيرية صحية</option>
                  <option value="شركة تقنية ورعاية رقمية">شركة تقنية ورعاية رقمية</option>
                  <option value="جهة إعلامية وتوعوية">جهة إعلامية وتوعوية</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                مجال التعاون المقترح أو نبذة عن الجهة:
              </label>
              <textarea
                rows={2}
                value={orgDesc}
                onChange={(e) => setOrgDesc(e.target.value)}
                placeholder="مثال: رعاية المعارض التوعوية وتقديم فحوصات سكر الدم المجانية للزوار..."
                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm focus:border-teal-500 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAddPartnerForm(false)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-white text-xs font-semibold"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5 rotate-180" />
                <span>اعتماد وإضافة الشريك</span>
              </button>
            </div>
          </form>
        )}

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner) => {
            const isUpcoming = partner.status === 'upcoming';
            return (
              <div
                key={partner.id}
                className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isUpcoming
                    ? 'border-dashed border-slate-300 bg-slate-50/50 hover:border-teal-400'
                    : 'border-slate-200 bg-white hover:shadow-md hover:border-teal-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      partner.status === 'confirmed'
                        ? 'bg-teal-100 text-teal-800 border border-teal-200'
                        : partner.status === 'strategic'
                        ? 'bg-sky-100 text-sky-800 border border-sky-200'
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                    }`}>
                      {partner.status === 'confirmed' ? 'شريك مؤكد' : partner.status === 'strategic' ? 'شريك مقترح' : 'مساحة متاحة'}
                    </span>
                    <Building2 className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base mb-1">
                    {partner.name}
                  </h3>
                  <div className="text-xs text-teal-600 font-semibold mb-2">
                    {partner.type}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {partner.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>فعاليات اليوم العالمي</span>
                  {isUpcoming ? (
                    <button
                      onClick={() => setShowAddPartnerForm(true)}
                      className="text-teal-600 hover:underline font-bold"
                    >
                      احجز مكان جهتك
                    </button>
                  ) : (
                    <span className="text-teal-600 font-medium">مشارك معتمد</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Rights / Credits Section in About */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-500 via-sky-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-0.5">
                تصميم وتطوير
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">
                م. شادن فهد العنزي
              </div>
              <div className="text-xs sm:text-sm text-teal-200 font-semibold mt-0.5">
                صاحبة فكرة ومطورة النموذج الأولي لتطبيق نبض ذكي
              </div>
            </div>
          </div>

          <div className="bg-slate-800/90 border border-slate-700 px-4 py-3 rounded-2xl text-xs text-slate-300 max-w-xs text-center sm:text-right">
            <span className="text-teal-300 font-bold block mb-1">جهة المبادرة والتعاون:</span>
            <span>نادي آفاق الذكاء الرقمي لليوم العالمي للسكري</span>
          </div>
        </div>
      </section>
    </div>
  );
};
