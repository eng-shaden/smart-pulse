import React, { useState } from 'react';
import { quizQuestions } from '../data/quizData';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  Award, 
  Sparkles, 
  BookOpen, 
  Check, 
  AlertCircle,
  FileBadge
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CertificateModal } from './CertificateModal';
import { DisclaimerBanner } from './DisclaimerBanner';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const currentQ = quizQuestions[currentQuestionIndex];
  const hasAnsweredCurrent = selectedAnswers[currentQuestionIndex] !== undefined;
  const totalQuestions = quizQuestions.length;

  // Handle option selection
  const handleSelectOption = (optionIndex: number) => {
    if (hasAnsweredCurrent) return; // Prevent changing after revealing explanation

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));

    // If answer is correct, trigger mini confetti burst
    if (optionIndex === currentQ.correctAnswerIndex) {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#0d9488', '#0ea5e9', '#38bdf8']
      });
    }
  };

  // Move to next question or complete quiz
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Completed all questions
      setQuizCompleted(true);
      // Trigger full celebratory confetti
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0d9488', '#0284c7', '#f59e0b', '#10b981']
      });
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  // Calculate score
  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswerIndex) {
        score += 1;
      }
    });
    return score;
  };

  // Reset quiz
  const handleRestartQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const finalScore = calculateScore();
  const percentage = Math.round((finalScore / totalQuestions) * 100);

  // Performance Tier
  const getPerformanceTier = () => {
    if (finalScore >= 9) return { title: 'خبير التوعية بالسكري (امتياز)', badge: 'درع التميز الصحي', color: 'text-teal-600', bg: 'bg-teal-50 border-teal-200' };
    if (finalScore >= 7) return { title: 'سفير الوعي الصحي (جيد جداً)', badge: 'وسام الوعي المتقدم', color: 'text-sky-600', bg: 'bg-sky-50 border-sky-200' };
    if (finalScore >= 5) return { title: 'مستوى معرفي جيد', badge: 'شهادة مشاركة توعوية', color: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-200' };
    return { title: 'بحاجة لتعزيز الثقافة الصحية', badge: 'مستوى استكشافي', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' };
  };

  const tier = getPerformanceTier();

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <DisclaimerBanner />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/40 font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>منصة نبض ذكي • 10 أسئلة تثقيفية شاملة</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">
            اختبار المعرفة الشامل بداء السكري
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            أجب عن الأسئلة واكتشف التفسير الطبي المعتمد لكل إجابة لتعزيز معرفتك الوقائية.
          </p>
        </div>

        {/* Live Score Counter Badge */}
        {!quizCompleted && (
          <div className="bg-slate-800/80 px-4 py-3 rounded-2xl border border-slate-700 text-center shrink-0">
            <div className="text-[11px] text-slate-400">الإجابات الصحيحة حتى الآن</div>
            <div className="text-xl font-black text-teal-400">
              {Object.keys(selectedAnswers).filter(k => selectedAnswers[Number(k)] === quizQuestions[Number(k)].correctAnswerIndex).length} / {Object.keys(selectedAnswers).length}
            </div>
          </div>
        )}
      </section>

      {/* Main Quiz Flow */}
      {!quizCompleted ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          {/* Progress Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span className="font-bold text-slate-900">
                السؤال {currentQuestionIndex + 1} من {totalQuestions}
              </span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-semibold border border-slate-200">
                {currentQ.category}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-teal-500 to-sky-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>

            {/* Question Quick Jump Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-1 overflow-x-auto">
              {quizQuestions.map((_, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = selectedAnswers[idx] !== undefined;
                const isCorrect = isAnswered && selectedAnswers[idx] === quizQuestions[idx].correctAnswerIndex;

                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`w-7 h-7 rounded-xl text-xs font-bold transition flex items-center justify-center ${
                      isCurrent
                        ? 'ring-2 ring-teal-500 bg-teal-600 text-white'
                        : isAnswered
                        ? isCorrect
                          ? 'bg-teal-100 text-teal-800 border border-teal-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question Text */}
          <div className="py-2">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options Grid */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === idx;
              const isCorrectAnswer = idx === currentQ.correctAnswerIndex;

              let optionStyle = 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300 text-slate-800';

              if (hasAnsweredCurrent) {
                if (isCorrectAnswer) {
                  optionStyle = 'bg-teal-50/90 border-teal-500 text-teal-950 font-bold ring-1 ring-teal-500 shadow-sm';
                } else if (isSelected) {
                  optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-medium ring-1 ring-rose-500';
                } else {
                  optionStyle = 'bg-slate-50/60 border-slate-200 text-slate-400 opacity-70';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnsweredCurrent}
                  className={`w-full text-right p-4 rounded-2xl border text-sm sm:text-base transition-all duration-200 flex items-start justify-between gap-3 cursor-pointer disabled:cursor-default ${optionStyle}`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-6 h-6 rounded-lg text-xs flex items-center justify-center shrink-0 font-bold mt-0.5 ${
                      hasAnsweredCurrent && isCorrectAnswer
                        ? 'bg-teal-600 text-white'
                        : hasAnsweredCurrent && isSelected
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{option}</span>
                  </div>

                  {hasAnsweredCurrent && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  )}
                  {hasAnsweredCurrent && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Visible once answered) */}
          {hasAnsweredCurrent && (
            <div className="bg-gradient-to-r from-teal-50 via-sky-50 to-teal-50 rounded-2xl p-5 border border-teal-200 space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-teal-600" />
                <span>الشرح الطبي الإرشادي:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-40 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
              <span>السابق</span>
            </button>

            {hasAnsweredCurrent ? (
              <button
                onClick={handleNext}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-teal-600/20 transition cursor-pointer"
              >
                <span>{currentQuestionIndex === totalQuestions - 1 ? 'عرض النتيجة النهائية' : 'السؤال التالي'}</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-xs text-slate-400">
                اختر إجابة للاطلاع على الشرح الطبي
              </span>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Completed Results Screen */
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-50 text-teal-600 border-2 border-teal-300 mx-auto shadow-sm">
              <Award className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                اكتمل الاختبار بنجاح!
              </h2>
              <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold border ${tier.bg} ${tier.color}`}>
                {tier.title} • {tier.badge}
              </div>
            </div>

            {/* Score Ring / Box */}
            <div className="max-w-xs mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="text-4xl sm:text-5xl font-black text-slate-900">
                {finalScore} <span className="text-lg text-slate-500 font-normal">/ {totalQuestions}</span>
              </div>
              <div className="text-xs font-semibold text-teal-600 mt-1">
                نسبة النجاح: {percentage}%
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              شكراً لمشاركتك في تعزيز مستوى وعيك الصحي عبر منصة «نبض ذكي» (ابتكار م. شادن فهد العنزي).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setShowCertificate(true)}
                className="bg-gradient-to-r from-teal-500 to-sky-600 hover:from-teal-600 hover:to-sky-700 text-white px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-teal-600/30 transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                <FileBadge className="w-4 h-4" />
                <span>إصدار شهادة إتمام التوعية</span>
              </button>

              <button
                onClick={handleRestartQuiz}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 transition cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة الاختبار</span>
              </button>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-extrabold text-lg text-slate-900 border-b border-slate-100 pb-3">
              مراجعة الأسئلة والشروحات الطبية الـ 10:
            </h3>

            <div className="space-y-4">
              {quizQuestions.map((q, idx) => {
                const userChoice = selectedAnswers[idx];
                const isCorrect = userChoice === q.correctAnswerIndex;

                return (
                  <div key={idx} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900">
                        {idx + 1}. {q.question}
                      </h4>
                      {isCorrect ? (
                        <span className="text-xs text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full font-bold flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" /> صحيحة
                        </span>
                      ) : (
                        <span className="text-xs text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full font-bold flex items-center gap-1 shrink-0">
                          <XCircle className="w-3.5 h-3.5" /> غير دقيقة
                        </span>
                      )}
                    </div>

                    <div className="text-xs space-y-1">
                      <div className="text-slate-600">
                        <strong>الإجابة الصحيحة:</strong> {q.options[q.correctAnswerIndex]}
                      </div>
                      <div className="text-slate-700 bg-white p-2.5 rounded-xl border border-slate-200/80 leading-relaxed">
                        <strong>الشرح:</strong> {q.explanation}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {showCertificate && (
        <CertificateModal
          score={finalScore}
          totalQuestions={totalQuestions}
          onClose={() => setShowCertificate(false)}
        />
      )}
    </div>
  );
};
