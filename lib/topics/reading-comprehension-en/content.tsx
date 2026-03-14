/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../types';
import { ReadingPassage } from './components';
import { BookOpen, Target, Clock, Zap, BookMarked } from 'lucide-react';

export const readingComprehensionEn: Chapter = {
  id: 'read-comp-en-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 8: Reading Comprehension Strategies',
  description: 'Mastering skimming, scanning, and analytical reading for standardized tests.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-sans mt-4">
      <div className="bg-[#FAEDCB] md:border border-[#f5e3b5] p-5 md:p-8 rounded-3xl text-slate-800">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
          <BookOpen className="w-8 h-8 text-slate-800" /> Efficiency is Key
        </h3>
        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
          Sa reading comprehension, ang pinaka-kalaban mo ay ang <strong>clock</strong>. Success depends on your ability to extract relevant information quickly without getting bogged down sa bawat nitpicky na detail.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Zap className="w-6 h-6 text-amber-500" /> High-Impact Strategies
        </h4>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200 shadow-sm">
            <h5 className="font-bold text-xl text-slate-800 mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-500" /> 1. Question-First Approach
            </h5>
            <p className="text-slate-600 font-medium text-base">
              Briefly scan the questions <em>before</em> reading the passage. Para itong "mental filter" na tutulong sa'yo na i-spot ang names, dates, or concepts habang nagbabasa.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200 shadow-sm">
            <h5 className="font-bold text-xl text-slate-800 mb-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-500" /> 2. Skimming & Scanning
            </h5>
            <p className="text-slate-600 font-medium text-base">
              <strong>Skimming:</strong> Rapidly reading para makuha ang "main idea" or flow.<br/>
              <strong>Scanning:</strong> Search mode! Looking for specific keywords na kailangan sa questions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <BookMarked className="w-6 h-6 text-indigo-500" /> Finding the Main Idea
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Madalas tanungin sa CETs ang: <em>"What is the main idea of the passage?"</em> or <em>"Which is the best title?"</em>. Para hindi ka maligaw, tandaan ito:</p>
        <div className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <strong className="text-slate-800 block text-lg mb-1">Thesis Statement vs. Topic Sentence</strong>
            <p className="text-slate-600 text-sm font-medium">Ang <strong>Thesis Statement</strong> ay ang main idea ng buong passage. Ang <strong>Topic Sentence</strong> ay ang main idea ng isang specific paragraph lang.</p>
            <p className="text-xs text-slate-500 mt-2 italic font-medium">Tip: If a choice is too narrow (details from only one paragraph) or too broad (concepts not in the text), eliminate it immediately!</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-xl mb-4 text-slate-800">Practice Passage: The Modern Architecture</h4>
        <ReadingPassage>
           <p className="mb-4 text-slate-700 font-medium">
            The transition from traditional to modern architecture in the 20th century was not merely a shift in aesthetic preference, but a radical response to the industrial revolution. Early modernists argued that "form follows function," asserting that the design of a building should derive directly from its purpose. Instead of ornate embellishments, architects began utilizing industrial materials like steel and reinforced concrete. 
          </p>
          <p className="mb-4 text-slate-700 font-medium">
            This utilitarian approach sought to strip away unnecessary ornamentation to reveal the true structural integrity of the edifice. However, critics often lamented the loss of historical continuity and warmth, describing the resulting structures as "sterile" monuments to efficiency.
          </p>
        </ReadingPassage>
      </div>
      
      <p className="text-slate-500 italic text-base mt-2 underline decoration-[#FAEDCB] decoration-4 underline-offset-4">
        Tip: Focus on the transition words (However, Therefore, Despite). Sila yung nagbibigay ng hint kung saan papunta yung argument ng author—parang traffic signs ng kaisipan!
      </p>
    </div>
  ),
  technique: "Main Idea questions are usually answered by the introductory and concluding sentences of each paragraph. Save 'Except' or 'Not' questions for last as they require cross-referencing multiple parts of the text.",
  quizzes: [
    {
      id: 'rc-en-q1',
      type: 'reading-comprehension',
      passage: null,
      question: 'What is the primary thesis of the passage?',
      options: [
        'Modern architecture is superior to traditional styles.',
        'Industrial materials are cheaper than traditional ones.',
        'Modern architecture prioritized functional design over decorative aesthetics.',
        'Critics successfully stopped the growth of modern architecture.'
      ],
      answer: 2,
      explanation: "The passage emphasizes that modernists believed 'form follows function' and focused on industrial materials instead of ornamentation."
    },
    {
      id: 'rc-en-q2',
      type: 'reading-comprehension',
      passage: null,
      question: 'What does the phrase "form follows function" imply?',
      options: [
        'A building should be beautiful first.',
        'The design of a building should be determined by its purpose.',
        'Industrial materials determine a building\'s height.',
        'Ornamentation is the most important part of a design.'
      ],
      answer: 1,
      explanation: "As stated in the text, it means 'the design of a building should derive directly from its purpose'."
    },
    {
      id: 'rc-en-q3',
      type: 'reading-comprehension',
      passage: null,
      question: 'Which of the following was a criticism of modern architecture mentioned in the text?',
      options: [
        'It was too expensive.',
        'It used too much wood.',
        'It lacked warmth and historical continuity.',
        'It was structurally unstable.'
      ],
      answer: 2,
      explanation: "Critics lamented the 'loss of historical continuity and warmth,' calling the structures 'sterile'."
    },
    {
      id: 'rc-en-q4',
      type: 'reading-comprehension',
      passage: null,
      question: 'The author\'s tone in the passage is primarily:',
      options: [
        'Critical and biased',
        'Objective and analytical',
        'Humorous and lighthearted',
        'Emotional and defensive'
      ],
      answer: 1,
      explanation: "The author presents both the modernists' perspective and the critics' views without using biased language."
    },
    {
      id: 'rc-en-q5',
      type: 'reading-comprehension',
      passage: null,
      question: 'What is the most likely meaning of the word "edifice" as used in the second paragraph?',
      options: [
        'A large building',
        'A mathematical formula',
        'An architectural critic',
        'A type of decoration'
      ],
      answer: 0,
      explanation: "In the context of 'structural integrity of the edifice,' it refers to the building itself."
    }
  ]
};
