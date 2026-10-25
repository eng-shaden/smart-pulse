export type TabType = 'home' | 'assistant' | 'explorer' | 'quiz' | 'about';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  isFallback?: boolean;
  error?: boolean;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  category: 'أنواع السكري' | 'الأرقام والمؤشرات' | 'الإسعاف والوقاية' | 'نمط الحياة' | 'رموز وتاريخ';
}

export interface GlucoseDataPoint {
  time: string;
  timeLabel: string;
  controlledValue: number;
  uncontrolledValue: number;
  targetMax: number;
  targetMin: number;
  note: string;
}

export interface AgeRiskData {
  ageGroup: string;
  fictionalPrevalence: number;
  awarenessRate: number;
  preventionAdherence: number;
}

export interface LifestyleFactor {
  id: string;
  name: string;
  description: string;
  hba1cReduction: number; // e.g. 0.5%
  iconName: string;
  recommendedDuration: string;
}

export interface PartnerOrg {
  id: string;
  name: string;
  type: string;
  description: string;
  status: 'confirmed' | 'strategic' | 'upcoming';
  logoText: string;
}
