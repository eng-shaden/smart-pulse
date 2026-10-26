import React, { useState } from 'react';
import { TabType } from '../types';
import { 
  Bot, 
  BarChart3, 
  HelpCircle, 
  ShieldAlert, 
  HeartHandshake, 
  Sparkles, 
  Activity, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Info, 
  Clock, 
  Stethoscope, 
  Eye, 
  Footprints, 
  Apple, 
  Users
} from 'lucide-react';
import { DisclaimerBanner } from './DisclaimerBanner';

interface HomeSectionProps {
  setActiveTab: (tab: TabType) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ setActiveTab }) => {
  // State for interactive myth vs fact card tabs
  const [activeMythIndex, setActiveMythIndex] = useState<number>(0);

  const mythsAndFacts = [
    {
      myth: 'تناول السكريات والحلويات هو السبب الوحيد والمباشر للإصابة بالسكري.',
      fact: 'السكري من النوع الأول سببه مناعي ذاتي لا علاقة له بتناول السكر. أما السكري من النوع الثاني فمرتبط بعوامل متعددة معقدة مثل الوراثة، زيادة الوزن، قلة النشاط البدني، ومقاومة الإنسولين.',
      badge: 'خرافة شائعة'
    },
    {
      myth: 'مرضى السكري ممنوعون تماماً من تناول الفواكه أو الكربوهيدرات مدى الحياة.',
      fact: 'الفواكه تحتوي على ألياف وفيتامينات ومضادات أكسدة ضرورية. المطلوب هو الاعتدال وحساب الحصص الغذائية وتوزيعها على مدار اليوم بدلاً من الامتناع الكامل.',
      badge: 'تغذية متوازنة'
    },
    {
      myth: 'إذا لم أشعر بأي أعراض، فهذا يعني أن مستويات السكر لدي ممتازة ولا داعي للفحص.',
      fact: 'السكري يُسمى غالباً "المرض الصامت"؛ إذ يمكن أن تتطور مقاومة الإنسولين ومرحلة ما قبل السكري لسنوات دون أية أعراض واضحة، لذا يُعد الفحص المخبري الدوري ضرورياً.',
      badge: 'الكشف المبكر'
    },
    {
      myth: 'الإنسولين هو عقار "المرحلة الأخيرة"، وبداية استخدامه تعني تدهوراً حتمياً للحالة.',
      fact: 'الإنسولين هرمون طبيعي أساسي للحياة. في السكري من النوع الأول هو العلاج اليومي المنقذ، وفي النوع الثاني يُستخدم كخيار علاجي فعال لحماية الأعضاء الحيوية من تلف مضاعفات السكر المرتفع.',
      badge: 'علاج آمن'
    }
  ];

  const warningSigns = [
    { title: 'العطش الشديد وجفاف الفم المستمر', desc: 'استجابة لمحاولة الجسم تخفيف تركيز الجلوكوز في الدم.' },
    { title: 'التبول المتكرر (خاصة أثناء الليل)', desc: 'نتيجة قيام الكليتين بالتخلص من فائض السكر عن طريق البول.' },
    { title: 'التعب والإرهاق غير المبرر', desc: 'لأن خلايا الجسم لا تستطيع امتصاص الجلوكوز بفعالية لإنتاج الطاقة.' },
    { title: 'بطء التئام الجروح والخدوش', desc: 'لتأثير ارتفاع السكر المزمن على تدفق الدم والأوعية الدقيقة.' },
    { title: 'تشوش مؤقت في الرؤية', desc: 'بسبب تغيرات السوائل في عدسة العين نتيجة تقلبات السكر.' },
    { title: 'تنميل أو وخز في أطراف القدمين', desc: 'من العلامات المبكرة لتأثر الأعصاب الطرفية.' },
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Disclaimer Banner at top */}
      <DisclaimerBanner />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-teal-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/15 border border-teal-500/40 text-teal-300 text-xs sm:text-sm font-medium shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping"></span>
            <span>ابتكار م. شادن فهد العنزي</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight sm:leading-tight">
            نبض ذكي <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-cyan-200">| Smart Pulse</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            منصة توعوية رقمية عن السكري توظّف الذكاء الاصطناعي وتحليل البيانات لنشر الوعي الصحي
          </p>

          {/* Quick Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setActiveTab('assistant')}
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-teal-500/30 flex items-center gap-2.5 transition transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
            >
              <Bot className="w-5 h-5" />
              <span>اسأل المساعد الصحي الذكي</span>
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className="bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold px-6 py-3.5 rounded-2xl border border-slate-700 shadow-md flex items-center gap-2.5 transition transform hover:-translate-y-0.5 text-sm sm:text-base cursor-pointer"
            >
              <HelpCircle className="w-5 h-5 text-teal-400" />
              <span>اختبر معلوماتك (10 أسئلة)</span>
            </button>

            <button
              onClick={() => setActiveTab('explorer')}
              className="bg-sky-950/60 hover:bg-sky-900/60 text-sky-200 font-semibold px-5 py-3.5 rounded-2xl border border-sky-800/50 flex items-center gap-2 transition text-sm sm:text-base cursor-pointer"
            >
              <BarChart3 className="w-5 h-5 text-sky-400" />
              <span>مستكشف البيانات ونماذج AI</span>
            </button>
          </div>
        </div>

        {/* Global Awareness Highlights (Fictional/WHO Context) */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-teal-400">537 مليون</div>
            <div className="text-xs text-slate-400 mt-1">مصاب بالسكري عالمياً (تقديرات IDF)</div>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-sky-400">1 من كل 2</div>
            <div className="text-xs text-slate-400 mt-1">بالغ مصاب غير مدرك لإصابته</div>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-teal-300">50%+</div>
            <div className="text-xs text-slate-400 mt-1">يمكن الوقاية منها بنمط حياة نشط</div>
          </div>
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">توعية مستمرة</div>
            <div className="text-xs text-slate-400 mt-1">محتوى تفاعلي على مدار العام</div>
          </div>
        </div>
      </section>

      {/* Why Diabetes Awareness Matters */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-teal-600 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            رسالة التوعية الصحية المستمرة
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            لماذا يُعد الوعي بداء السكري خط الدفاع الأول؟
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            السكري ليس مجرد رقم في فحص الدم، بل هو نمط حياة يتطلب وعياً مستمراً.
            المعرفة الدقيقة تمكّنك من ضبط مستويات السكر، والوقاية من المضاعفات، والعيش بنشاط وثقة.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="bg-gradient-to-b from-slate-50 to-slate-100/60 p-6 rounded-2xl border border-slate-200/80 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">1. الكشف المبكر</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              فحص السكر الصائم والتراكمي سنوياً يكشف مرحلة "ما قبل السكري" حيث يمكن تصحيح المسار قبل الإصابة الدائمة.
            </p>
          </div>

          <div className="bg-gradient-to-b from-slate-50 to-slate-100/60 p-6 rounded-2xl border border-slate-200/80 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-4">
              <Apple className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">2. التغذية الذكية</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              التركيز على الألياف الكاملة، والخضروات الطازجة، وتجنب السكريات البسيطة والمشروبات الغازية يخفف الحمل على البنكرياس.
            </p>
          </div>

          <div className="bg-gradient-to-b from-slate-50 to-slate-100/60 p-6 rounded-2xl border border-slate-200/80 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">3. الحركة اليومية</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              30 دقيقة مشي سريع يومياً تعزز حساسية العضلات للإنسولين وتساعد على استهلاك الجلوكوز دون الحاجة لجرعات دوائية إضافية.
            </p>
          </div>

          <div className="bg-gradient-to-b from-slate-50 to-slate-100/60 p-6 rounded-2xl border border-slate-200/80 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-2">4. تمكين التكنولوجيا</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              حساسات المراقبة المستمرة وخوارزميات الذكاء الاصطناعي تنبه المريض مسبقاً قبل نوبات الهبوط وتقدم إرشادات لحظية.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Feature Cards Section */}
      <section className="space-y-4">
        <div className="text-right">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            أبرز أدوات منصة «نبض ذكي» التفاعلية
          </h2>
          <p className="text-slate-600 text-sm">
            استكشف أقسام التطبيق المصممة لدعمك وتثقيفك بأسلوب مرئي وتفاعلي متكامل:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI Assistant */}
          <div 
            onClick={() => setActiveTab('assistant')}
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-teal-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-teal-700 transition">
                  المساعد الصحي التعليمي
                </h3>
                <span className="text-[10px] bg-teal-100 text-teal-800 font-semibold px-2 py-0.5 rounded-full">
                  AI ذكي
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                اطرح أسئلتك العامة عن السكري، أعراض الهبوط، والفحوصات الدورية باللغة العربية. يقدم معلومات موثوقة دون تشخيص أو وصف أدوية.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-teal-600 font-bold text-xs sm:text-sm">
              <span>بدء المحادثة التثقيفية</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Interactive Data Explorer */}
          <div 
            onClick={() => setActiveTab('explorer')}
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-sky-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-sky-700 transition">
                  مستكشف البيانات التفاعلي
                </h3>
                <span className="text-[10px] bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 rounded-full">
                  نماذج بيانية
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                شاهد نماذج افتراضية لتذبذب سكر الدم اليومي، وتفاعل مع محاكي أثر العادات الصحية على التراكمي ودور الذكاء الاصطناعي في الطب.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-sky-600 font-bold text-xs sm:text-sm">
              <span>استكشاف الرسوم والمحاكاة</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Knowledge Quiz */}
          <div 
            onClick={() => setActiveTab('quiz')}
            className="group bg-white rounded-3xl p-6 border border-slate-200 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-indigo-700 transition">
                  اختبار المعرفة (10 أسئلة)
                </h3>
                <span className="text-[10px] bg-indigo-100 text-indigo-800 font-semibold px-2 py-0.5 rounded-full">
                  شهادة فورية
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                تحدَّ معلوماتك مع 10 أسئلة تثقيفية موثوقة مع شرح طبي لكل إجابة، واحصل على تقييم نتيجتك وشهادة إتمام توعوية رقمية.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-indigo-600 font-bold text-xs sm:text-sm">
              <span>بدء الاختبار المعرفي</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Myth vs Fact Accordion */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs text-teal-400 font-bold mb-1">تصحيح المفاهيم الطبية المغلوطة</div>
            <h2 className="text-2xl font-black">خرافات شائعة وحقائق علمية</h2>
          </div>
          <div className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
            اضغط على الخرافة لاستعراض الحقيقة الطبية
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Tabs list on the right */}
          <div className="lg:col-span-5 space-y-2">
            {mythsAndFacts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMythIndex(idx)}
                className={`w-full text-right p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3 ${
                  activeMythIndex === idx
                    ? 'bg-teal-500/15 border-teal-500 text-white font-bold shadow-md'
                    : 'bg-slate-800/60 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className={`p-1 rounded-full mt-0.5 ${activeMythIndex === idx ? 'bg-teal-400 text-slate-950' : 'bg-slate-700 text-slate-400'}`}>
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-teal-300 mb-0.5 font-semibold">{item.badge}</div>
                  <div className="text-sm line-clamp-2">{item.myth}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Detail Showcase on the left */}
          <div className="lg:col-span-7 bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/80 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <XCircle className="w-4 h-4" />
                <span>الخرافة الشائعة:</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 bg-rose-950/40 p-4 rounded-xl border border-rose-800/40">
                "{mythsAndFacts[activeMythIndex].myth}"
              </h3>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>الحقيقة الطبية المعتمدة:</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 bg-teal-950/40 p-5 rounded-xl border border-teal-800/40 leading-relaxed font-normal">
                {mythsAndFacts[activeMythIndex].fact}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Story Section: من حكاية جدتي بدأت الفكرة */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-teal-500/30 shadow-2xl space-y-6">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-teal-800/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center justify-center shrink-0 shadow-inner">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-teal-300 font-bold tracking-wider block">
                  قصة إلهام التطبيق
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  من حكاية جدتي بدأت الفكرة
                </h2>
              </div>
            </div>

            <div className="text-xs bg-teal-950/80 text-teal-200 border border-teal-700/60 px-3.5 py-1.5 rounded-full font-medium self-start sm:self-auto">
              الأثر الإنساني وراء التقنية
            </div>
          </div>

          {/* Story Text without commas or periods as requested */}
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

          {/* Author attribution within the inspiration card */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
                ش
              </div>
              <div>
                <div className="text-sm font-bold text-white">م. شادن فهد العنزي</div>
                <div className="text-xs text-teal-300">صاحبة فكرة ومطورة النموذج الأولي لتطبيق نبض ذكي</div>
              </div>
            </div>

            <div className="text-xs text-teal-300 bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-teal-500/30 font-medium">
              ابتكار م. شادن فهد العنزي
            </div>
          </div>
        </div>
      </section>

      {/* Early Signs Checklist for Health Awareness */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              علامات وأعراض تحذيرية تستدعي الفحص المخبري
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              إذا كنت تعاني أنت أو أحد أفراد أسرتك من هذه الأعراض بصورة متكررة، ينصح بمراجعة المركز الصحي لإجراء فحص السكر:
            </p>
          </div>
          <span className="text-xs bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-semibold border border-amber-200 shrink-0">
            مؤشرات استرشادية
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {warningSigns.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/70 transition flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"></div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Rights / Credits Section */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-teal-500 via-sky-500 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-bold text-teal-400 uppercase tracking-widest mb-0.5">
                فكرة وتصميم وتطوير
              </div>
              <div className="text-xl sm:text-2xl font-black text-white">
                ابتكار م. شادن فهد العنزي
              </div>
              <div className="text-xs sm:text-sm text-teal-200 font-semibold mt-0.5">
                صاحبة فكرة ومطورة منصة نبض ذكي للتوعية الرقمية
              </div>
            </div>
          </div>

          <div className="bg-slate-800/90 border border-slate-700 px-4 py-3 rounded-2xl text-xs text-slate-300 max-w-xs text-center sm:text-right">
            <span className="text-teal-300 font-bold block mb-1">منصة مستمرة ومستدامة:</span>
            <span>توظيف الذكاء الاصطناعي وعلوم البيانات لنشر الوعي الصحي</span>
          </div>
        </div>
      </section>
    </div>
  );
};
