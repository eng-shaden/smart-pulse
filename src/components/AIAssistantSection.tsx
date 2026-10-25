import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { 
  Bot, 
  Send, 
  Sparkles, 
  AlertTriangle, 
  Trash2, 
  Copy, 
  Check, 
  HelpCircle, 
  ShieldCheck, 
  Stethoscope, 
  Clock, 
  ArrowRight,
  PhoneForwarded,
  Info
} from 'lucide-react';
import { DisclaimerBanner } from './DisclaimerBanner';

export const AIAssistantSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'bot',
      text: `مرحباً بك! أنا **المساعد الصحي التعليمي لمنصة «نبض ذكي»** بمناسبة اليوم العالمي للسكري.

يسعدني الإجابة عن استفساراتك العامة حول:
- مفاهيم ومؤشرات سكر الدم وتحليل السكر التراكمي (HbA1c).
- أعراض هبوط وارتفاع السكر والإسعاف الأولي السليم.
- أنماط التغذية الصحية وممارسة الرياضة المتوازنة.
- الفحوصات الوقائية الدورية لسلامة العينين والقدمين.

⚠️ **تنويه صحي إلزامي:** إجاباتي مخصصة **للتثقيف العام فقط**، ولا أقدم أي تشخيص طبي سريري ولا أصف أو أعدل جرعات الأدوية أو الإنسولين. لأي استفسار علاجي خاص، يُرجى الرجوع لطبيبك المعالج.`,
      timestamp: 'الآن'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'ما هو الفرق بين السكري من النوع الأول والنوع الثاني؟',
    'ما هي قاعدة الـ 15 الذهبية لإسعاف هبوط السكر؟',
    'ما هي قراءات فحص السكر التراكمي (HbA1c) وماذا تعني؟',
    'كيف تساهم ممارسة الرياضة في تحسين حساسية الإنسولين؟',
    'ما هي أهمية الفحص السنوي لقاع العين لمرضى السكري؟',
    'ما هي بدائل السكر الصحية وكيف تؤثر على الجلوكوز؟'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || loading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputText('');
    setLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages.map(m => ({ sender: m.sender, text: m.text }))
        }),
      });

      if (!response.ok) {
        throw new Error('فشل الاتصال بالخادم');
      }

      const data = await response.json();
      const botReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply || 'نعتذر، لم نتمكن من الحصول على الإجابة حالياً.',
        timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isFallback: data.isFallback,
        error: data.error
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error(err);
      const fallbackReply: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: `أهلاً بك. نعتذر، حدث تعذر مؤقت في الاتصال بالشبكة.\n\nتذكر دائماً أن أهم ركائز التحكم في السكري هي:\n1. الالتزام بالفحوصات الدورية وقراءة السكر وفق إرشادات الطبيب.\n2. التغذية المتوازنة الغنية بالألياف.\n3. ممارسة النشاط البدني 150 دقيقة أسبوعياً.\n\n*(تذكير: التطبيق للأغراض التثقيفية فقط ولا يحل محل زيارة الطبيب).*`,
        timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        isFallback: true
      };
      setMessages((prev) => [...prev, fallbackReply]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    if (window.confirm('هل تريد مسح سجل المحادثة والبدء من جديد؟')) {
      setMessages([
        {
          id: 'welcome-msg-reset',
          sender: 'bot',
          text: `تم بدء محادثة تثقيفية جديدة. كيف يمكنني مساعدتك في الإجابة عن استفساراتك العامة حول السكري؟`,
          timestamp: 'الآن'
        }
      ]);
    }
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      <DisclaimerBanner />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Chat Area */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-md flex flex-col h-[700px] overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal-500 to-sky-400 flex items-center justify-center text-white shadow-md shadow-teal-500/20">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-extrabold text-base sm:text-lg">المساعد الصحي التعليمي</h2>
                  <span className="text-[10px] bg-teal-500/20 text-teal-300 border border-teal-400/30 px-2 py-0.5 rounded-full font-bold">
                    معلومات معتمدة
                  </span>
                </div>
                <p className="text-xs text-slate-400">إجابات باللغة العربية • لا تشخيص طبي سريري</p>
              </div>
            </div>

            <button
              onClick={clearChat}
              title="مسح المحادثة"
              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-xl transition"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Disclaimer strip inside chat */}
          <div className="bg-amber-50 px-4 py-2 border-b border-amber-200 text-amber-900 text-xs flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-medium">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>للتوعية والتثقيف الصحي فقط • لا يقدم وصفات علاجية أو تعديل جرعات</span>
            </div>
            <span className="text-[10px] text-amber-800 font-bold bg-amber-200/60 px-2 py-0.5 rounded">
              آمن
            </span>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                    isBot ? 'bg-teal-600 text-white' : 'bg-slate-900 text-white'
                  }`}>
                    {isBot ? <Bot className="w-4 h-4" /> : 'أنت'}
                  </div>

                  <div className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 sm:p-5 text-sm shadow-sm leading-relaxed ${
                    isBot
                      ? 'bg-white text-slate-800 border border-slate-200/80 rounded-tr-none'
                      : 'bg-teal-600 text-white rounded-tl-none font-medium'
                  }`}>
                    <div className="whitespace-pre-line prose prose-sm max-w-none prose-slate">
                      {msg.text}
                    </div>

                    <div className={`mt-3 pt-2 flex items-center justify-between text-[11px] border-t ${
                      isBot ? 'border-slate-100 text-slate-400' : 'border-teal-500/50 text-teal-100'
                    }`}>
                      <span>{msg.timestamp}</span>

                      {isBot && (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopy(msg.id, msg.text)}
                            className="flex items-center gap-1 hover:text-teal-600 transition p-1 rounded"
                            title="نسخ الإجابة"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <Check className="w-3 h-3 text-teal-600" />
                                <span className="text-teal-600 font-bold">تم النسخ</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>نسخ</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {loading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200 rounded-tr-none shadow-sm flex items-center gap-2 text-slate-500 text-sm">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce"></span>
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce delay-150"></span>
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce delay-300"></span>
                  <span className="text-xs text-slate-600 mr-2 font-medium">جاري إعداد الإجابة التوعوية...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggested Questions Bar */}
          <div className="p-3 bg-white border-t border-slate-200 overflow-x-auto">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 shrink-0 flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3 text-teal-500" />
                <span>أسئلة شائعة:</span>
              </span>
              <div className="flex items-center gap-2">
                {suggestedQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    disabled={loading}
                    className="shrink-0 bg-slate-100 hover:bg-teal-50 hover:text-teal-800 text-slate-700 px-3 py-1.5 rounded-full border border-slate-200 text-xs transition duration-150 disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="اكتب سؤالك التثقيفي حول السكري باللغة العربية..."
              disabled={loading}
              className="flex-1 bg-slate-50 border border-slate-300 focus:border-teal-500 focus:bg-white focus:outline-none rounded-2xl px-4 py-3 text-sm transition"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || loading}
              className="bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white px-5 py-3 rounded-2xl font-bold flex items-center gap-2 text-sm transition shadow-sm cursor-pointer"
            >
              <span>إرسال</span>
              <Send className="w-4 h-4 rotate-180" />
            </button>
          </form>
        </div>

        {/* Informative Sidebar: Safe Usage & Emergency Protocols */}
        <div className="lg:col-span-4 space-y-6">
          {/* Emergency Safety Protocol Box */}
          <div className="bg-gradient-to-br from-rose-50 to-rose-100/60 rounded-3xl p-6 border border-rose-200 text-rose-950 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-rose-700 font-extrabold text-base">
              <PhoneForwarded className="w-5 h-5" />
              <h3>متى تتوجه للطوارئ فوراً؟</h3>
            </div>
            <p className="text-xs text-rose-900 leading-relaxed">
              إذا لاحظت أياً من هذه الأعراض الحرجة، لا تعتمد على أي مساعد ذكي وتوجه لأقرب طوارئ أو اتصل بالإسعاف (997 أو 937):
            </p>
            <ul className="text-xs space-y-2 text-rose-900 font-medium list-disc list-inside">
              <li>فقدان الوعي أو تشنجات أو عدم استجابة.</li>
              <li>هبوط سكر حاد (أقل من 50 ملغ/ديسيلتر) لا يستجيب بعد تطبيق قاعدة الـ 15.</li>
              <li>تنفس سريع وعميق مع رائحة تشبه الأسيتون أو الفاكهة في الفم، وغثيان مستمر.</li>
              <li>تشوش ذهني شديد وصعوبة في الكلام.</li>
            </ul>
          </div>

          {/* Educational Guidelines */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-teal-600" />
              <h3>إرشادات الاستخدام الآمن</h3>
            </div>
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                <span>
                  <strong>مناسب لـ:</strong> فهم معاني الفحوصات والتحاليل، نصائح التغذية السليمة، خطوات الإسعاف الأولي، والمفاهيم العلمية.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                <span>
                  <strong>غير مخصص لـ:</strong> إعطاء تشخيص فردي، حساب جرعات الإنسولين، أو تغيير وتعديل خطتك الدوائية الحالية.
                </span>
              </div>
            </div>
          </div>

          {/* Key Contact Resources */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-sm space-y-3">
            <h4 className="text-sm font-bold text-teal-400 flex items-center gap-1.5">
              <Info className="w-4 h-4" />
              <span>أرقام ومراجع هامة</span>
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span>مركز صحة 937 (استشارات مجانية):</span>
                <span className="font-bold text-teal-300">937</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800">
                <span>الهلال الأحمر السعودي للطوارئ:</span>
                <span className="font-bold text-rose-300">997</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span>الاتحاد الدولي للسكري (IDF):</span>
                <span className="text-slate-400">idf.org</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
