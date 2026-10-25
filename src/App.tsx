/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { AIAssistantSection } from './components/AIAssistantSection';
import { DataExplorerSection } from './components/DataExplorerSection';
import { QuizSection } from './components/QuizSection';
import { AboutSection } from './components/AboutSection';
import { Bot, HelpCircle, BarChart3, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-500 selection:text-white">
      {/* Top Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {activeTab === 'home' && <HomeSection setActiveTab={setActiveTab} />}
        {activeTab === 'assistant' && <AIAssistantSection />}
        {activeTab === 'explorer' && <DataExplorerSection />}
        {activeTab === 'quiz' && <QuizSection />}
        {activeTab === 'about' && <AboutSection />}
      </main>

      {/* Bottom Floating Quick Actions for Mobile / Tablet */}
      <div className="fixed bottom-4 left-4 z-30 flex items-center gap-2 print:hidden">
        {activeTab !== 'assistant' && (
          <button
            onClick={() => { setActiveTab('assistant'); scrollToTop(); }}
            className="bg-teal-600 hover:bg-teal-700 text-white p-3 rounded-full shadow-lg shadow-teal-600/30 flex items-center justify-center transition transform hover:scale-110"
            title="اسأل المساعد الذكي"
          >
            <Bot className="w-5 h-5" />
          </button>
        )}
        <button
          onClick={scrollToTop}
          className="bg-slate-900/80 hover:bg-slate-900 text-white p-3 rounded-full shadow-md backdrop-blur-sm transition hover:scale-105"
          title="للأعلى"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
