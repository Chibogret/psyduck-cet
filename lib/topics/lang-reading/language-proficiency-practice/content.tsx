/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../../types';
import { Highlight, SentenceBox } from '../../components';
import { Code, CheckCircle, Crosshair, RefreshCw, Layers } from 'lucide-react';

export const languageProficiencyPractice: Chapter = {
  id: 'lang-prof-practice',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 10: Language Proficiency Drill',
  description: 'Applying grammar and syntax rules through comprehensive practice questions.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-sans mt-4">
      <div className="bg-[#FAEDCB] md:border border-[#f5e3b5] p-5 md:p-8 rounded-3xl text-slate-800">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
          <Crosshair className="w-8 h-8 text-rose-500" /> Comprehensive Application
        </h3>
        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
          Standardized exams like the UPCAT or ACET combine various grammar rules into single, challenging sections. Dito mate-test ang ability mo to identify errors at pumili ng most effective sentence structures kahit walang specific topic hints.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Layers className="w-6 h-6 text-indigo-500" /> Exam Day Mental Checklist
        </h4>
        <div className="space-y-4">
          <div className="flex gap-4 bg-white p-5 rounded-2xl md:border border-slate-200 shadow-sm">
            <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <div><strong className="text-slate-800 block text-lg">Subject-Verb Agreement:</strong> Do the core subject and verb match? Ignore prepositional phrases para hindi ka malito.</div>
          </div>
          <div className="flex gap-4 bg-white p-5 rounded-2xl md:border border-slate-200 shadow-sm">
            <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <div><strong className="text-slate-800 block text-lg">Parallel Structure:</strong> Tiyakin na lahat ng items sa list or comparison follow the same grammatical format.</div>
          </div>
          <div className="flex gap-4 bg-white p-5 rounded-2xl md:border border-slate-200 shadow-sm">
            <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <div><strong className="text-slate-800 block text-lg">Pronoun Clarity:</strong> Check if every pronoun has a clear antecedent. Iwasan ang mga vague references na "it" or "they".</div>
          </div>
        </div>
      </div>

      <p className="text-slate-500 italic text-base mt-2 underline decoration-[#FAEDCB] decoration-4 underline-offset-4">
        Kapag hindi ka sure, read it internally. Kung rhythmic at balanced pakinggan, it's likely correct. Pero kung "clunky," check for parallelism!
      </p>
    </div>
  ),
  technique: "In 'Spot the Error' sections, if all underlined parts seem correct, don't be afraid to choose 'NO ERROR'. Approximately 10-15% of questions in standardized tests typically use this as the correct answer.",
  quizzes: [
    {
      id: 'prof-q1',
      type: 'spot-the-error',
      question: 'Identify the grammatical error:',
      sentence: 'Between you and I, the decision to postpone the meeting was entirely justified.',
      options: [
        'Between you and I',
        'the decision',
        'was entirely',
        'NO ERROR'
      ],
      answer: 0,
      explanation: "After a preposition like 'Between', you must use the objective case pronoun ('me') instead of the subjective case ('I')."
    },
    {
      id: 'prof-q2',
      type: 'multiple-choice',
      question: 'Choose the most effective way to combine these sentences: "The scientists conducted the experiment carefully. They documented every single result accurately."',
      options: [
        'The scientists conducted the experiment carefully, where they documented results.',
        'Documenting every result accurately, the experiment was conducted by scientists.',
        'The scientists carefully conducted the experiment and accurately documented every result.',
        'The experiment was conducted, and then the results were documented by scientists.'
      ],
      answer: 2,
      explanation: "Option C maintains the active voice and clearly shows the sequence of actions using parallel adverbs ('carefully conducted' and 'accurately documented')."
    },
    {
      id: 'prof-q3',
      type: 'spot-the-error',
      question: 'Identify the error:',
      sentence: 'The team of researchers, despite facing numerous setbacks, have successfully developed the vaccine.',
      options: [
        'The team of',
        'facing numerous',
        'have successfully',
        'NO ERROR'
      ],
      answer: 2,
      explanation: "The subject is 'team' (singular), so the verb should be 'has successfully developed', not 'have'."
    },
    {
      id: 'prof-q4',
      type: 'multiple-choice',
      question: 'Select the word that best completes the sentence: "The candidate was forced to _________ the accusations by providing concrete evidence of his whereabouts."',
      options: [
        'confirm',
        'refute',
        'ignore',
        'collaborate'
      ],
      answer: 1,
      explanation: "'Refute' means to prove a statement or theory to be wrong or false, which fits the context of providing evidence against accusations."
    },
    {
      id: 'prof-q5',
      type: 'spot-the-error',
      question: 'Identify the error:',
      sentence: 'Anyone who wishes to participate must bring their own safety equipment.',
      options: [
        'Anyone who',
        'to participate',
        'their own safety',
        'NO ERROR'
      ],
      answer: 2,
      explanation: "'Anyone' is singular, so it should be followed by a singular possessive pronoun ('his or her') or the sentence should be rephrased to be plural ('Participants must bring their...')."
    },
    {
      id: 'prof-q6',
      type: 'multiple-choice',
      question: 'What is the meaning of the idiom "to play it by ear"?',
      options: [
        'To listen carefully',
        'To improvise or act without a plan',
        'To learn to play an instrument',
        'To pretend not to hear'
      ],
      answer: 1,
      explanation: "To 'play it by ear' means to deal with a situation as it develops rather than having a fixed plan."
    }
  ]
};
