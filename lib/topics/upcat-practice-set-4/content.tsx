/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../types';
import { upcatSet4Data } from './data';
import { FileText, Award, HelpCircle } from 'lucide-react';

export const upcatPracticeSet4: Chapter = {
  id: 'upcat-set-4',
  subject: 'Mock Exams',
  title: 'UPCAT Set 4: Language Proficiency',
  description: 'A comprehensive mock exam covering analogies, synonyms, antonyms, and sentence structure.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-serif mt-4 text-slate-800">
      <div className="bg-white border-2 border-slate-300 p-8 md:p-12 rounded-lg shadow-sm text-center space-y-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-slate-800"></div>
        <FileText className="w-12 h-12 mx-auto text-slate-800 mb-4" />
        <h2 className="text-3xl font-black uppercase tracking-tighter">Filipi Know</h2>
        <h3 className="text-2xl font-bold">UPCAT Language Proficiency</h3>
        <p className="text-xl">Practice Questions</p>
        <p className="font-bold text-2xl border-t-2 border-slate-800 pt-2 mt-4 inline-block px-4">SET 4</p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="flex gap-4 items-start bg-slate-50 p-6 rounded-2xl border border-slate-200">
          <Award className="w-6 h-6 text-slate-800 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-xl mb-1">Mock Exam Instructions</h4>
            <p className="text-slate-600 text-base">
              This set contains 41 questions designed to simulate the actual UPCAT Language Proficiency subtest. 
              Read each instruction carefully as the sections shift between analogies, vocabulary, and grammar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-indigo-500" /> Analogy (1-14)
            </h5>
            <p className="text-sm text-slate-500">Master word relationships and logical categorization.</p>
          </div>
          <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-500" /> Vocabulary (15-26)
            </h5>
            <p className="text-sm text-slate-500">Context clues, synonyms, and antonyms in English and Filipino.</p>
          </div>
          <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-rose-500" /> Grammar (27-41)
            </h5>
            <p className="text-sm text-slate-500">Sentence combining, conjunctions, and usage drills.</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 text-center">
        <p className="italic text-slate-500">"To get more UPCAT review materials, visit the official FilipiKnow website."</p>
        <p className="mt-2 font-bold text-slate-800">To God be the glory!</p>
      </div>
    </div>
  ),
  technique: "When taking a mock exam, time yourself. For 40 questions, aim for 20-30 minutes. Don't spend too much time on a single question; mark it and return if you have time. Trust your first instinct but verify with rules!",
  quizzes: upcatSet4Data,
  layout: 'scrollable'
};
