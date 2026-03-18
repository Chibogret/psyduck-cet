/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../types';
import { reviewMastersLanguageProficiency } from './data';
import { FileText, Award, HelpCircle, Zap, Search, Layout } from 'lucide-react';

export const upcatReviewMastersLP: Chapter = {
  id: 'upcat-review-masters-lp',
  subject: 'Mock Exams',
  title: 'Review Masters: Language Proficiency',
  description: 'An 80-question intensive mock exam compiled by former UP proctors covering English and Filipino proficiency.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-serif mt-4 text-slate-800">
      <div className="bg-white border-2 border-slate-300 p-8 md:p-12 rounded-lg shadow-sm text-center space-y-2 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-teal-600"></div>
        <FileText className="w-12 h-12 mx-auto text-teal-600 mb-4" />
        <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Review Masters</h2>
        <h3 className="text-2xl font-bold text-slate-800">Language Proficiency</h3>
        <p className="text-xl text-slate-600 italic">Compiled UPCAT Questions</p>
        <div className="mt-4 flex justify-center gap-4 text-sm font-bold uppercase tracking-widest">
          <span className="bg-slate-100 px-3 py-1 rounded border border-slate-200">80 Items</span>
          <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded border border-teal-200">44 Minutes</span>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <div className="flex gap-4 items-start bg-teal-50 p-6 rounded-2xl border border-teal-100">
          <Award className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-xl mb-1 text-teal-900">Simulation Mode</h4>
            <p className="text-teal-800/80 text-base">
              This reviewer was compiled from student feedback and former UP proctors. To get the most out of this, set a timer for <strong>44 minutes</strong>. This helps build the speed and accuracy required for the actual UPCAT.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-indigo-500" /> Vocabulary
            </h5>
            <p className="text-xs text-slate-500">Synonyms, Antonyms, and Context Clues in English and Filipino (1-20).</p>
          </div>
          <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" /> Mechanics
            </h5>
            <p className="text-xs text-slate-500">Spelling accuracy and Sentence Completion (21-40).</p>
          </div>
          <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-rose-500" /> Grammar
            </h5>
            <p className="text-xs text-slate-500">Identifying Errors and Word Usage (41-50).</p>
          </div>
          <div className="p-5 border border-slate-100 rounded-2xl bg-white shadow-sm">
            <h5 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Layout className="w-4 h-4 text-emerald-500" /> Composition
            </h5>
            <p className="text-xs text-slate-500">Paragraph Completion, Sequencing, and Best Sentence choice (51-80).</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-200 text-center">
        <p className="italic text-slate-500 text-sm">Review Masters Inc. © 2019 - Compiled Reviewer Material</p>
        <p className="mt-2 font-bold text-slate-800">Pass the UPCAT — the Sure Way!</p>
      </div>
    </div>
  ),
  technique: "Manage your time: with 80 questions in 44 minutes, you have roughly 33 seconds per item. In 'Identifying Errors' (41-50), look for Subject-Verb Agreement first, as it is the most common error. For 'Sequencing' (61-70), focus on finding the introductory sentence and the concluding statement first to narrow down options.",
  quizzes: reviewMastersLanguageProficiency,
  layout: 'scrollable'
};