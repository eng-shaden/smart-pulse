import React, { useState } from 'react';
import { 
  glucoseCurvesData, 
  ageDemographicData, 
  lifestyleFactors, 
  aiHealthcarePillars 
} from '../data/explorerData';
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Sparkles, 
  Check, 
  Plus, 
  Minus, 
  Info, 
  Sliders, 
  Cpu, 
  Eye, 
  ShieldAlert, 
  Apple, 
  Moon, 
  CheckCircle2 
} from 'lucide-react';
import { DisclaimerBanner } from './DisclaimerBanner';

export const DataExplorerSection: React.FC = () => {
  // Glucose curve state
  const [selectedPointIndex, setSelectedPointIndex] = useState<number>(1);
  const [curveFilter, setCurveFilter] = useState<'both' | 'controlled' | 'uncontrolled'>('both');

  // Lifestyle simulator state: IDs of active lifestyle habits
  const [activeHabits, setActiveHabits] = useState<string[]>(['walking', 'diet']);

  // Selected AI Pillar
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);

  // Toggle habit in simulator
  const toggleHabit = (id: string) => {
    setActiveHabits(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculate simulated HbA1c reduction
  const baselineA1c = 8.5;
  const totalReduction = lifestyleFactors
    .filter(factor => activeHabits.includes(factor.id))
    .reduce((sum, item) => sum + item.hba1cReduction, 0);
  const projectedA1c = Math.max(5.5, Number((baselineA1c - totalReduction).toFixed(1)));

  // SVG Chart Dimensions
  const svgWidth = 800;
  const svgHeight = 320;
  const paddingX = 60;
  const paddingY = 40;
  const chartWidth = svgWidth - paddingX * 2;
  const chartHeight = svgHeight - paddingY * 2;

  // Value mappings (Y-axis: 60 to 260 mg/dL)
  const minY = 60;
  const maxY = 260;

  const getYCoord = (val: number) => {
    const clamped = Math.min(Math.max(val, minY), maxY);
    return svgHeight - paddingY - ((clamped - minY) / (maxY - minY)) * chartHeight;
  };

  const getXCoord = (index: number) => {
    // In RTL, 0 is on the right or left? In standard charts, chronological time runs left to right or right to left.
    // For universal clarity, chronological time points from 6:00 AM to 11:00 PM will be mapped left-to-right:
    return paddingX + (index / (glucoseCurvesData.length - 1)) * chartWidth;
  };

  // Generate SVG path strings
  const controlledPath = glucoseCurvesData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getXCoord(i)} ${getYCoord(d.controlledValue)}`).join(' ');
  const uncontrolledPath = glucoseCurvesData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${getXCoord(i)} ${getYCoord(d.uncontrolledValue)}`).join(' ');

  const currentPoint = glucoseCurvesData[selectedPointIndex];

  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-12">
      <DisclaimerBanner />

      {/* Explorer Intro Header */}
      <section className="bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/40 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>بيانات توعوية افتراضية ومحاكاة تعليمية</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              مستكشف البيانات التفاعلي ونماذج الذكاء الاصطناعي
            </h1>
            <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              كيف تسهم علوم البيانات ونماذج الذكاء الاصطناعي في تحليل أنماط سكر الدم، ومساعدة الكوادر الطبية والمصابين على فهم العوامل الحيوية المؤثرة؟ استكشف الرسوم التفاعلية أدناه:
            </p>
          </div>
        </div>

        {/* Note on Fictional Data */}
        <div className="p-3.5 bg-slate-800/80 rounded-2xl border border-slate-700/80 text-xs text-slate-300 flex items-center gap-2">
          <Info className="w-4 h-4 text-sky-400 shrink-0" />
          <span>
            <strong>تنويه منهجي:</strong> جميع الأرقام والمنحنيات المعروضة هنا هي نماذج إحصائية وتوضيحية افتراضية لأغراض الشرح التعليمي، ولا تمثل تشخيصاً طبياً لأي مريض.
          </span>
        </div>
      </section>

      {/* Visualization 1: Interactive Diurnal Glucose Curve */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 text-teal-700 text-xs font-bold uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>النمذجة الحيوية لسكر الدم</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
              مخطط مسار سكر الدم النموذجي على مدار اليوم
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              قارن بين استجابة الجسم في نمط متوازن مقابل نمط غير منضبط. اضغط على أي نقطة زمنية لاستكشاف التفسير الفسيولوجي:
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl text-xs font-semibold shrink-0">
            <button
              onClick={() => setCurveFilter('both')}
              className={`px-3 py-1.5 rounded-xl transition ${
                curveFilter === 'both' ? 'bg-white text-slate-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              كلا المسارين للمقارنة
            </button>
            <button
              onClick={() => setCurveFilter('controlled')}
              className={`px-3 py-1.5 rounded-xl transition ${
                curveFilter === 'controlled' ? 'bg-teal-600 text-white shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              النمط المتوازن فقط
            </button>
            <button
              onClick={() => setCurveFilter('uncontrolled')}
              className={`px-3 py-1.5 rounded-xl transition ${
                curveFilter === 'uncontrolled' ? 'bg-rose-600 text-white shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              النمط المرتفع فقط
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
          {(curveFilter === 'both' || curveFilter === 'controlled') && (
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-teal-500"></span>
              <span className="text-slate-700 font-bold">مسار متوازن (وجبات متوازنة ونشاط بدني)</span>
            </div>
          )}
          {(curveFilter === 'both' || curveFilter === 'uncontrolled') && (
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-rose-500"></span>
              <span className="text-slate-700 font-bold">مسار غير منضبط (وجبات دسمة وسكريات سريعة)</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <span className="w-4 h-3 rounded bg-teal-100 border border-teal-300"></span>
            <span className="text-slate-500">النطاق الطبيعي المستهدف (70 - 140 ملغ/ديسيلتر)</span>
          </div>
        </div>

        {/* SVG Interactive Chart */}
        <div className="overflow-x-auto bg-slate-50/70 p-4 rounded-2xl border border-slate-200">
          <div className="min-w-[680px]">
            <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-auto select-none">
              {/* Target safe zone rectangle */}
              <rect
                x={paddingX}
                y={getYCoord(140)}
                width={chartWidth}
                height={getYCoord(70) - getYCoord(140)}
                fill="#ccfbf1"
                fillOpacity="0.55"
              />

              {/* Grid Lines */}
              {[70, 100, 140, 180, 220].map((val) => (
                <g key={val}>
                  <line
                    x1={paddingX}
                    y1={getYCoord(val)}
                    x2={svgWidth - paddingX}
                    y2={getYCoord(val)}
                    stroke="#e2e8f0"
                    strokeDasharray={val === 70 || val === 140 ? '4 4' : '2 2'}
                  />
                  <text
                    x={paddingX - 10}
                    y={getYCoord(val) + 4}
                    textAnchor="end"
                    className="text-[10px] fill-slate-400 font-sans"
                  >
                    {val}
                  </text>
                </g>
              ))}

              {/* Uncontrolled Curve Path */}
              {(curveFilter === 'both' || curveFilter === 'uncontrolled') && (
                <path
                  d={uncontrolledPath}
                  fill="none"
                  stroke="#f43f5e"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Controlled Curve Path */}
              {(curveFilter === 'both' || curveFilter === 'controlled') && (
                <path
                  d={controlledPath}
                  fill="none"
                  stroke="#0d9488"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Interactive Data Points */}
              {glucoseCurvesData.map((d, idx) => {
                const cx = getXCoord(idx);
                const cyCtrl = getYCoord(d.controlledValue);
                const cyUnctrl = getYCoord(d.uncontrolledValue);
                const isSelected = selectedPointIndex === idx;

                return (
                  <g key={idx} className="cursor-pointer" onClick={() => setSelectedPointIndex(idx)}>
                    {/* Vertical indicator for selected point */}
                    {isSelected && (
                      <line
                        x1={cx}
                        y1={paddingY}
                        x2={cx}
                        y2={svgHeight - paddingY}
                        stroke="#0ea5e9"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                    )}

                    {/* Uncontrolled Point */}
                    {(curveFilter === 'both' || curveFilter === 'uncontrolled') && (
                      <circle
                        cx={cx}
                        cy={cyUnctrl}
                        r={isSelected ? 7 : 5}
                        fill="#f43f5e"
                        stroke="#ffffff"
                        strokeWidth="2"
                        className="hover:scale-125 transition-transform"
                      />
                    )}

                    {/* Controlled Point */}
                    {(curveFilter === 'both' || curveFilter === 'controlled') && (
                      <circle
                        cx={cx}
                        cy={cyCtrl}
                        r={isSelected ? 7 : 5}
                        fill="#0d9488"
                        stroke="#ffffff"
                        strokeWidth="2"
                        className="hover:scale-125 transition-transform"
                      />
                    )}

                    {/* X-axis time label */}
                    <text
                      x={cx}
                      y={svgHeight - 14}
                      textAnchor="middle"
                      className={`text-[11px] font-sans ${isSelected ? 'fill-sky-800 font-bold' : 'fill-slate-500'}`}
                    >
                      {d.time}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Selected Data Point Detail Card */}
        {currentPoint && (
          <div className="bg-gradient-to-r from-teal-50/80 via-white to-sky-50/80 p-5 rounded-2xl border border-teal-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-ping"></span>
                <span className="text-xs font-bold text-teal-800">
                  تفاصيل التوقيت المختار: {currentPoint.timeLabel}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {currentPoint.note}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-teal-100/80 border border-teal-300 px-3.5 py-2 rounded-xl text-center">
                <div className="text-[11px] text-teal-800 font-semibold">المتوازن</div>
                <div className="text-lg font-black text-teal-700">{currentPoint.controlledValue} <span className="text-[10px] font-normal">mg/dL</span></div>
              </div>
              <div className="bg-rose-100/80 border border-rose-300 px-3.5 py-2 rounded-xl text-center">
                <div className="text-[11px] text-rose-800 font-semibold">المرتفع</div>
                <div className="text-lg font-black text-rose-700">{currentPoint.uncontrolledValue} <span className="text-[10px] font-normal">mg/dL</span></div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Visualization 2: Interactive Lifestyle Impact on HbA1c Simulator */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider">
            <Sliders className="w-4 h-4" />
            <span>محاكاة السلوك الصحي</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            محاكي أثر نمط الحياة على السكر التراكمي (HbA1c)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            فعّل أو عطّل العادات الإيجابية اليومية لمشاهدة الانخفاض التراكمي الافتراضي في معدل السكر (نموذج إرشادي توضيحي):
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Habits Checkboxes / Toggles */}
          <div className="lg:col-span-7 space-y-3">
            {lifestyleFactors.map((habit) => {
              const isActive = activeHabits.includes(habit.id);
              return (
                <div
                  key={habit.id}
                  onClick={() => toggleHabit(habit.id)}
                  className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-teal-50/70 border-teal-500 shadow-sm'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                      isActive ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-400'
                    }`}>
                      {isActive ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isActive ? 'text-teal-950' : 'text-slate-700'}`}>
                        {habit.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">{habit.description}</p>
                    </div>
                  </div>

                  <div className="text-left shrink-0">
                    <span className={`text-xs font-bold px-2 py-1 rounded-lg ${
                      isActive ? 'bg-teal-200/60 text-teal-900' : 'bg-slate-200 text-slate-600'
                    }`}>
                      -{habit.hba1cReduction}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Result Gauge / Metric Display */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 text-center space-y-4 shadow-xl">
            <span className="text-xs text-teal-300 font-bold bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
              المعدل التراكمي الافتراضي المحاكى
            </span>

            <div className="py-2">
              <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-sky-300 to-cyan-200">
                {projectedA1c}%
              </div>
              <div className="text-xs text-slate-400 mt-2">
                انخفاض إجمالي متوقع: <span className="text-teal-300 font-bold">-{totalReduction.toFixed(1)}%</span> من النسبة الأولية ({baselineA1c}%)
              </div>
            </div>

            {/* Target Status Banner */}
            <div className={`p-3 rounded-2xl text-xs font-semibold ${
              projectedA1c <= 6.5
                ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                : projectedA1c <= 7.2
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
            }`}>
              {projectedA1c <= 6.5
                ? 'نطاق مثالي وممتاز للوقاية من المضاعفات'
                : projectedA1c <= 7.2
                ? 'نطاق مستهدف إيجابي لمعظم المصابين'
                : 'يُنصح بإضافة المزيد من العادات الصحية'}
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              * تخفيض السكر التراكمي بنسبة 1% فقط يرتبط بانخفاض خطر مضاعفات الأوعية الدقيقة بنحو 37% وفق الدراسات الطبية العالمية.
            </p>
          </div>
        </div>
      </section>

      {/* Visualization 3: Age Groups Prevalence & Awareness */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 text-sky-600 text-xs font-bold uppercase tracking-wider">
            <BarChart3 className="w-4 h-4" />
            <span>الديموغرافيا والوعي المجتمعي</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
            توزيع مؤشرات السكري والوعي الوقائي حسب الفئات العمرية
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            بيانات افتراضية تسلط الضوء على تفاوت معدلات الإصابة والوعي بين الأجيال:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ageDemographicData.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-sm">{item.ageGroup}</span>
                <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full font-medium">فئة عمرية</span>
              </div>

              {/* Metric 1: Prevalence */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>نسبة الانتشار الافتراضية:</span>
                  <span className="font-bold text-rose-600">{item.fictionalPrevalence}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-rose-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${item.fictionalPrevalence * 2.5}%` }}
                  ></div>
                </div>
              </div>

              {/* Metric 2: Awareness Rate */}
              <div>
                <div className="flex justify-between text-xs text-slate-600 mb-1">
                  <span>مستوى الوعي الصحي:</span>
                  <span className="font-bold text-teal-600">{item.awarenessRate}%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-teal-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${item.awarenessRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visualization 4: AI & Data Science in Healthcare */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="text-xs text-teal-400 font-bold mb-1">الرعاية الصحية الرقمية المستقبلية</div>
            <h2 className="text-2xl font-black">دور الذكاء الاصطناعي في دعم الرعاية والوقاية</h2>
          </div>
          <span className="text-xs bg-teal-500/20 text-teal-300 border border-teal-500/40 px-3 py-1.5 rounded-xl font-medium">
            نادي آفاق الذكاء الرقمي
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aiHealthcarePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 hover:border-teal-500/80 transition space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] bg-teal-950 text-teal-300 border border-teal-800 px-2.5 py-0.5 rounded-full font-bold">
                  {pillar.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">{pillar.tag}</span>
              </div>
              <h3 className="font-extrabold text-base text-slate-100 group-hover:text-teal-300 transition">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
