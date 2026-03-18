/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../../types';
import { Highlight } from '../../components';
import { BookCheck, Layout, MessageSquare, ArrowRightLeft } from 'lucide-react';

export const sentenceCompletion: Chapter = {
  id: 'sentence-completion-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 3: The Missing Link',
  description: 'Mastering sentence completion and paragraph construction through logic and signal words.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-sans mt-4">
      <div className="bg-[#FAEDCB] md:border border-[#f5e3b5] p-5 md:p-8 rounded-3xl text-slate-800">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
          <BookCheck className="w-8 h-8 text-slate-800" /> Logical Flow
        </h3>
        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
          Sentence completion questions test your vocabulary, but more importantly, they test your <strong>logic</strong>. You are looking for the word (or pair of words) that perfectly completes the thought of the sentence.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <ArrowRightLeft className="w-6 h-6 text-indigo-500" /> Signal Words
        </h4>
        <p className="text-slate-600 mb-6 font-medium">These words act as road signs, telling you which direction the logic of the sentence is heading.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
            <h5 className="font-bold text-xl mb-2 text-emerald-900 flex items-center gap-2">
              Agreement
            </h5>
            <p className="text-emerald-800 text-sm mb-4">The blank supports or continues the established idea.</p>
            <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="bg-white px-2 py-1 rounded border border-emerald-200">And</span>
              <span className="bg-white px-2 py-1 rounded border border-emerald-200">Furthermore</span>
              <span className="bg-white px-2 py-1 rounded border border-emerald-200">Consequently</span>
              <span className="bg-white px-2 py-1 rounded border border-emerald-200">Since</span>
            </div>
            <p className="italic text-sm text-emerald-800">
              "Because she was so <Highlight color="#a7f3d0">diligent</Highlight>, she was awarded the scholarship."
            </p>
          </div>

          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <h5 className="font-bold text-xl mb-2 text-rose-900 flex items-center gap-2">
              Contrast
            </h5>
            <p className="text-rose-800 text-sm mb-4">The blank shifts or contradicts the established idea.</p>
            <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="bg-white px-2 py-1 rounded border border-rose-200">But</span>
              <span className="bg-white px-2 py-1 rounded border border-rose-200">However</span>
              <span className="bg-white px-2 py-1 rounded border border-rose-200">Despite</span>
              <span className="bg-white px-2 py-1 rounded border border-rose-200">Nevertheless</span>
            </div>
            <p className="italic text-sm text-rose-800">
              "Despite his <Highlight color="#fecdd3">arrogant</Highlight> demeanor, he was actually quite insecure."
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-5 md:p-8 rounded-3xl md:border border-slate-200">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Layout className="w-6 h-6 text-slate-800" /> Composition: Paragraph & Essay Structure
        </h4>
        <p className="text-slate-600 mb-6 font-medium">UPCAT's Language Proficiency often asks questions about "Composition." You must understand how ideas are organized in academic writing.</p>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-bold text-slate-500 italic">1</div>
            <div>
              <strong className="text-slate-800 block text-lg">The Topic Sentence:</strong>
              <p className="text-slate-600 text-sm font-medium">The main idea of a paragraph. It's usually found at the beginning but can also be at the end. It answers: <em>"What is this whole section about?"</em></p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-bold text-slate-500 italic">2</div>
            <div>
              <strong className="text-slate-800 block text-lg">Supporting Details:</strong>
              <p className="text-slate-600 text-sm font-medium">Sentences that provide evidence, examples, or explanations for the Topic Sentence. <em>(Logical coherence is key here!)</em></p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-bold text-slate-500 italic">3</div>
            <div>
              <strong className="text-slate-800 block text-lg">Unity & Coherence:</strong>
              <p className="text-slate-600 text-sm font-medium"><strong>Unity</strong> means everything in the paragraph relates to the main idea. <strong>Coherence</strong> means the sentences flow logically from one to another.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#f8fafc] md:border border-indigo-100 p-5 md:p-8 rounded-3xl">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-indigo-400" /> Essay Organization
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-xl border border-slate-100">
            <strong className="text-slate-800 block mb-1">Introduction</strong>
            <p className="text-xs text-slate-500 font-medium">Hook, background info, and the <strong>Thesis Statement</strong> (the main argument of the entire essay).</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-100">
            <strong className="text-slate-800 block mb-1">Body Paragraphs</strong>
            <p className="text-xs text-slate-500 font-medium">Each starts with a topic sentence and follows the PEEL method: Point, Evidence, Explanation, Link.</p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-100">
            <strong className="text-slate-800 block mb-1">Conclusion</strong>
            <p className="text-xs text-slate-500 font-medium">Restates the thesis in a new way and provides a "so what?" factor. No new info should be added here!</p>
          </div>
        </div>
      </div>

      <p className="text-slate-500 italic text-base mt-2 underline decoration-[#FAEDCB] decoration-4 underline-offset-4">
        Academic Tip: In "Sentence Ordering" questions, look for pronoun references (like 'This', 'They') and time indicators (like 'Finally', 'First') to find the sequence!
      </p>
    </div>
  ),
  technique: "Professor's Tip: For double-blank questions, tackle one blank at a time. Read the sentence and try to guess a simple word for the first blank. Eliminate options that don't match your guess. Then, do the same for the second blank. Don't try to solve both at once!",
  quizzes: [
    {
      id: 'sc-q1',
      type: 'sentence-completion',
      question: 'Choose the word that best completes the sentence.',
      sentence: 'Although the politician\'s speech was filled with grand promises, the audience remained __________, having been disappointed by his previous failures to deliver.',
      options: [
        'enthusiastic',
        'skeptical',
        'oblivious',
        'vindicated'
      ],
      answer: 1,
      explanation: "The signal word 'Although' indicates a contrast. The first part of the sentence is positive ('grand promises'), so the second part must be negative. The phrase 'having been disappointed' confirms this. 'Skeptical' (doubtful) fits perfectly."
    },
    {
      id: 'sc-q2',
      type: 'sentence-completion',
      question: 'Choose the pair of words that best completes the sentence.',
      sentence: 'The author\'s latest novel was surprisingly __________, lacking the __________ plot twists that characterized her earlier masterpieces.',
      options: [
        'intricate ... predictable',
        'pedestrian ... ingenious',
        'riveting ... convoluted',
        'innovative ... mundane'
      ],
      answer: 1,
      explanation: "The word 'lacking' sets up a contrast between the new novel and her 'earlier masterpieces'. The second blank needs a positive word describing great plot twists (ingenious). The first blank needs a negative word describing the new novel (pedestrian, meaning dull or ordinary)."
    },
    {
      id: 'sc-q3',
      type: 'sentence-completion',
      question: 'Choose the word that best completes the sentence.',
      sentence: 'Because the evidence against the defendant was entirely __________, the jury had no choice but to acquit him due to reasonable doubt.',
      options: [
        'circumstantial',
        'irrefutable',
        'corroborated',
        'tangible'
      ],
      answer: 0,
      explanation: "The signal word 'Because' indicates cause and effect. The effect is 'acquit him due to reasonable doubt'. Therefore, the cause (the evidence) must be weak or indirect. 'Circumstantial' means pointing indirectly toward someone's guilt but not conclusively proving it."
    },
    {
      id: 'sc-q4',
      type: 'sentence-completion',
      question: 'Choose the word that best completes the sentence.',
      sentence: 'The professor\'s lectures were so __________ that even the most attentive students struggled to stay awake during the three-hour class.',
      options: [
        'captivating',
        'soporific',
        'enlightening',
        'controversial'
      ],
      answer: 1,
      explanation: "The context clue 'struggled to stay awake' tells us the lectures are sleep-inducing. 'Soporific' means tending to cause sleep or drowsiness—exactly matching the negative tone."
    },
    {
      id: 'sc-q5',
      type: 'sentence-completion',
      question: 'Choose the pair of words that best completes the sentence.',
      sentence: 'Despite the CEO\'s __________ public image, insiders described her management style as genuinely __________ and collaborative.',
      options: [
        'warm ... distant',
        'intimidating ... approachable',
        'humble ... arrogant',
        'generous ... stingy'
      ],
      answer: 1,
      explanation: "The signal word 'Despite' indicates contrast. The public image and the reality must oppose each other. 'Intimidating' (public) vs. 'approachable' (actual) creates the logical contrast."
    },
    {
      id: 'sc-q6',
      type: 'multiple-choice',
      question: 'In a well-structured essay, where is the Thesis Statement typically located?',
      options: [
        'At the very beginning of the Introduction as a hook.',
        'At the end of the Introduction.',
        'In the middle of the first Body Paragraph.',
        'At the beginning of the Conclusion only.'
      ],
      answer: 1,
      explanation: "The Thesis Statement is traditionally placed at the end of the introduction to set the roadmap for the rest of the essay."
    },
    {
      id: 'sc-q7',
      type: 'multiple-choice',
      question: 'Which of the following is the best "Topic Sentence" for a paragraph about the benefits of exercise?',
      options: [
        'Running three miles a day can improve cardiovascular health.',
        'Exercise has numerous physical and mental health benefits.',
        'Many people enjoy playing basketball on the weekends.',
        'Gym memberships have become more expensive in recent years.'
      ],
      answer: 1,
      explanation: "Option B is the best topic sentence because it is broad enough to cover multiple points (physical and mental) while clearly defining the main subject of the paragraph."
    }
  ]
};
