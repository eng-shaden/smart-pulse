import { GlucoseDataPoint, AgeRiskData, LifestyleFactor } from '../types';

// Fictional diurnal blood glucose patterns (mg/dL) for educational visualization
export const glucoseCurvesData: GlucoseDataPoint[] = [
  {
    time: '06:00',
    timeLabel: '6:00 ص - الاستيقاظ (صائم)',
    controlledValue: 92,
    uncontrolledValue: 148,
    targetMin: 70,
    targetMax: 130,
    note: 'قراءة السكر الصائم في الصباح تعكس استقرار الكبد أثناء النوم وحساسية الإنسولين القاعدي.'
  },
  {
    time: '08:00',
    timeLabel: '8:00 ص - بعد الإفطار بساعة',
    controlledValue: 124,
    uncontrolledValue: 215,
    targetMin: 70,
    targetMax: 140,
    note: 'الوجبة المتوازنة المحتوية على ألياف وبروتين تُبقي الارتفاع تدريجياً وضمن النطاق الطبيعي.'
  },
  {
    time: '10:30',
    timeLabel: '10:30 ص - في منتصف الصباح',
    controlledValue: 105,
    uncontrolledValue: 180,
    targetMin: 70,
    targetMax: 140,
    note: 'عودة السكر لمستواه المستقر بفضل كفاءة الاستجابة الخلوية الطبيعية للإنسولين.'
  },
  {
    time: '13:00',
    timeLabel: '1:00 م - قبل وجبة الغداء',
    controlledValue: 95,
    uncontrolledValue: 165,
    targetMin: 70,
    targetMax: 130,
    note: 'فترة ما قبل الغداء، يُظهر النمط المتزن بقاء المستويات هادئة دون هبوط حاد.'
  },
  {
    time: '15:00',
    timeLabel: '3:00 م - بعد الغداء بساعتين',
    controlledValue: 132,
    uncontrolledValue: 245,
    targetMin: 70,
    targetMax: 140,
    note: 'الوجبات عالية النشويات المكررة تسبب قفزة سكرية حادة ترهق البنكرياس وتولد إرهاقاً سريعاً.'
  },
  {
    time: '18:00',
    timeLabel: '6:00 م - أثناء النشاط البدني (المشي)',
    controlledValue: 98,
    uncontrolledValue: 155,
    targetMin: 70,
    targetMax: 130,
    note: 'العضلات تستهلك الجلوكوز مباشرة كوقود أثناء الحركة مما يُسهم في خفض السكر دون إجهاد.'
  },
  {
    time: '20:30',
    timeLabel: '8:30 م - بعد العشاء الخفيف',
    controlledValue: 118,
    uncontrolledValue: 210,
    targetMin: 70,
    targetMax: 140,
    note: 'العشاء الخفيف المبكر يقي من اضطرابات النوم والارتفاع السكري الليلي.'
  },
  {
    time: '23:00',
    timeLabel: '11:00 م - قبل النوم مباشرة',
    controlledValue: 102,
    uncontrolledValue: 175,
    targetMin: 70,
    targetMax: 130,
    note: 'مستوى آمن يضمن نوماً هادئاً دون القلق من نوبات هبوط أو جفاف ليلي.'
  }
];

// Fictional demographic distribution representing educational insights
export const ageDemographicData: AgeRiskData[] = [
  {
    ageGroup: '18 - 29 سنة',
    fictionalPrevalence: 6.2,
    awarenessRate: 48,
    preventionAdherence: 52
  },
  {
    ageGroup: '30 - 44 سنة',
    fictionalPrevalence: 14.8,
    awarenessRate: 64,
    preventionAdherence: 58
  },
  {
    ageGroup: '45 - 59 سنة',
    fictionalPrevalence: 24.5,
    awarenessRate: 78,
    preventionAdherence: 69
  },
  {
    ageGroup: '60 سنة فأكثر',
    fictionalPrevalence: 33.1,
    awarenessRate: 86,
    preventionAdherence: 74
  }
];

// Interactive lifestyle factors for HbA1c impact simulation (educational estimates)
export const lifestyleFactors: LifestyleFactor[] = [
  {
    id: 'walking',
    name: 'المشي المنتظم (150 دقيقة أسبوعياً)',
    description: 'تحفيز استهلاك الجلوكوز العضلي وتحسين حساسية خلايا العضلات للإنسولين.',
    hba1cReduction: 0.6,
    iconName: 'Activity',
    recommendedDuration: '30 دقيقة × 5 أيام'
  },
  {
    id: 'diet',
    name: 'تقليل السكريات المكررة والمشروبات المحلاة',
    description: 'تجنب القمم السكرية الحادة وتخفيف الإجهاد التأكسدي على خلايا البنكرياس.',
    hba1cReduction: 0.7,
    iconName: 'Apple',
    recommendedDuration: 'نمط غذائي دائم'
  },
  {
    id: 'sleep',
    name: 'النوم الكافي والمنتظم (7 - 8 ساعات ليلاً)',
    description: 'خفض هرمون التوتر (الكورتيزول) الذي يرفع مقاومة الجسم للإنسولين.',
    hba1cReduction: 0.3,
    iconName: 'Moon',
    recommendedDuration: 'ليلياً بانتظام'
  },
  {
    id: 'monitoring',
    name: 'المتابعة الذاتية الدورية لمستوى السكر',
    description: 'فهم تأثير الوجبات والأنشطة المختلفة على قراءاتك الشخصية وسرعة تصحيح المسار.',
    hba1cReduction: 0.4,
    iconName: 'CheckCircle2',
    recommendedDuration: 'يومياً / حسب إرشاد الطبيب'
  }
];

// Fictional educational AI capabilities showcase in healthcare
export const aiHealthcarePillars = [
  {
    title: 'التنبؤ المبكر بنوبات الهبوط (Predictive Alerts)',
    desc: 'تستخدم خوارزميات التعلم الآلي بيانات حساسات السكر المستمرة (CGM) لتحذير المريض قبل حدوث نوبة الهبوط بنحو 20 إلى 30 دقيقة، مما يتيح التدخل الوقائي السريع.',
    tag: 'مراقبة مستمرة',
    badge: 'خوارزميات تنبؤية'
  },
  {
    title: 'فحص شبكية العين بالرؤية الحاسوبية (Computer Vision)',
    desc: 'نماذج الذكاء الاصطناعي المدربة قادرة على تحليل صور قاع العين واكتشاف أدق علامات اعتلال الشبكية السكري في مراحله الأولى بدقة تضاهي الخبراء، لتسريع التحويل للعلاج.',
    tag: 'تشخيص مساعد',
    badge: 'معالجة الصور'
  },
  {
    title: 'التغذية الدقيقة المخصصة (Precision Nutrition)',
    desc: 'تحليل الاستجابات الجلوكوزية الفردية لمختلف الأطعمة، حيث يختلف تأثير نوع الطعام من شخص لآخر تبعاً للبكتيريا المعوية (الميكروبيوم) والنشاط البدني وساعات النوم.',
    tag: 'توصيات ذكية',
    badge: 'بيانات صحية'
  },
  {
    title: 'مساعدات التوعية الصحية التفاعلية',
    desc: 'توفير إجابات تثقيفية موثوقة وفورية باللغة الطبيعية لتمكين المريض وأسرته من فهم التحاليل الطبية والتعامل السليم مع العادات اليومية بأمان وسهولة.',
    tag: 'تثقيف مجتمعي',
    badge: 'ذكاء اصطناعي توليدي'
  }
];
