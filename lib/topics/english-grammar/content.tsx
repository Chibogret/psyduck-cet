/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../types';
import { Highlight, SentenceBox } from '../components';
import { Layers, Network, PenTool } from 'lucide-react';

export const englishGrammar: Chapter = {
  id: 'eng-gram-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 5: The Grammar Matrix',
  description: 'Mastering Conditionals, Verb Tenses, and advanced Punctuation.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-sans mt-4">
      <div className="bg-[#FAEDCB] md:border border-[#f5e3b5] p-5 md:p-8 rounded-3xl text-slate-800">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
          <Layers className="w-8 h-8 text-slate-800" /> Structure is Foundation
        </h3>
        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
          In CETs, huwag kang aasa sa kung ano lang ang "sounds right"—that's a common trap! You need to understand the formal rules of <strong>Conditionals</strong> and <strong>Punctuation</strong> para hindi ka malito sa mga complex sentences.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Network className="w-6 h-6 text-indigo-500" /> The Four Conditionals
        </h4>
        <p className="text-slate-600 mb-4 text-base font-medium">
          Conditionals describe a result na mangyayari under a specific condition. Match the tense of the <strong>If-clause</strong> with the <strong>main clause</strong> gamit ang mga formulas na ito:
        </p>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl md:border border-[#C6DEF1]">
            <strong className="text-slate-800 block text-xl mb-1">1. Zero Conditional (Facts/Habits)</strong>
            <p className="text-slate-600 mb-2 font-medium">Formula: <span className="bg-slate-100 px-2 py-1 rounded">If + Present Simple, Present Simple</span></p>
            <p className="italic text-slate-700 font-medium">"If you <Highlight color="#C6DEF1">heat</Highlight> ice, it <Highlight color="#C6DEF1">melts</Highlight>." (General truth ito!)</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl md:border border-[#C9E4DE]">
            <strong className="text-slate-800 block text-xl mb-1">2. First Conditional (Real Future)</strong>
            <p className="text-slate-600 mb-2 font-medium">Formula: <span className="bg-slate-100 px-2 py-1 rounded">If + Present Simple, Will + Verb</span></p>
            <p className="italic text-slate-700 font-medium">"If it <Highlight color="#C9E4DE">rains</Highlight> later, we <Highlight color="#C9E4DE">will stay</Highlight> indoors." (Possible mangyari!)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl md:border border-[#F7D9C4]">
            <strong className="text-slate-800 block text-xl mb-1">3. Second Conditional (Hypothetical)</strong>
            <p className="text-slate-600 mb-2 font-medium">Formula: <span className="bg-slate-100 px-2 py-1 rounded">If + Past Simple, Would + Verb</span></p>
            <p className="italic text-slate-700 font-medium">"If I <Highlight color="#F7D9C4">won</Highlight> the scholarship, I <Highlight color="#F7D9C4">would travel</Highlight> abroad." (Imaginary or unlikely present situation.)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl md:border border-[#F2C6DE]">
            <strong className="text-slate-800 block text-xl mb-1">4. Third Conditional (Imaginary Past)</strong>
            <p className="text-slate-600 mb-2 font-medium">Formula: <span className="bg-slate-100 px-2 py-1 rounded">If + Past Perfect (had + V3), Would have + V3</span></p>
            <p className="italic text-slate-700 font-medium">"If I <Highlight color="#F2C6DE">had studied</Highlight> harder, I <Highlight color="#F2C6DE">would have passed</Highlight> the exam." (Regrets or situations sa past na hindi nangyari.)</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-5 md:p-8 rounded-3xl md:border border-slate-200">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <PenTool className="w-6 h-6 text-slate-800" /> Punctuation Mastery
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Precision in punctuation is very important para maging clear ang sentences mo. Master these key marks:</p>
        
        <ul className="space-y-6">
          <li>
            <strong className="text-slate-800 block text-xl mb-2">Semicolon ( ; )</strong>
            <p className="text-slate-600 text-sm mb-3 font-medium">Joins two <strong>independent clauses</strong> (complete thoughts) na closely related, without using "and" or "but".</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-emerald-500 font-bold mr-2">✔</span><span className="italic">"The report is due tomorrow<Highlight color="#C6DEF1">;</Highlight> I haven’t even started the introduction."</span>
            </div>
          </li>
          
          <li>
            <strong className="text-slate-800 block text-xl mb-2">Colon ( : )</strong>
            <p className="text-slate-600 text-sm mb-3 font-medium">Introduces a list, explanation, or quotation. Tandaan: The part <em>before</em> the colon must be a complete thought on its own.</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-emerald-500 font-bold mr-2">✔</span><span className="italic">"She had all the requirements<Highlight color="#F7D9C4">:</Highlight> focus, discipline, and talent."</span><br />
              <span className="text-rose-500 font-bold mr-2 mt-2 inline-block">✖</span><span className="italic">"My favorites are: chocolate and vanilla."</span> (Mali ito because incomplete ang intro phrase.)
            </div>
          </li>

          <li>
            <strong className="text-slate-800 block text-xl mb-2">Dash ( — )</strong>
            <p className="text-slate-600 text-sm mb-3 font-medium">Used for emphasis or to indicate an abrupt break in thought. Katulad ito ng parentheses pero mas may "impact" or emphasis.</p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-emerald-500 font-bold mr-2">✔</span><span className="italic">"The truth—as unpleasant as it was—had to be told."</span>
            </div>
          </li>
        </ul>
      </div>

      <p className="text-slate-500 italic text-base mt-4 underline decoration-[#FAEDCB] decoration-4 underline-offset-4">
        Always check kung "connect" ba properly ang sentence parts mo. Don't worry, kahit model students nalilito rin—basta be mindful of the formulas!
      </p>
    </div>
  ),
  technique: "Identify the 'If' clause first and check its tense. If it's Past Perfect ('had studied'), look for 'would have' in the other clause. It's essentially a formula—memorize it once, and you're set for the exam.",
  quizzes: [
    {
      id: 'gram-q1',
      type: 'multiple-choice',
      question: 'Complete the sentence: If we __________ harder, we would have passed the qualifying exams.',
      options: [
        'study',
        'studied',
        'had studied',
        'were studying'
      ],
      answer: 2,
      explanation: "This is a Third Conditional. The main clause uses 'would have passed', so the 'if' clause must use Past Perfect ('had studied')."
    },
    {
      id: 'gram-q2',
      type: 'multiple-choice',
      question: 'Choose the correct punctuation: "She has several chores ____ cleaning the room, washing dishes, and watering the plants."',
      options: [
        '; (Semicolon)',
        ': (Colon)',
        ', (Comma)',
        '— (Dash)'
      ],
      answer: 1,
      explanation: "A colon is used to introduce a list after a complete independent clause ('She has several chores')."
    },
    {
      id: 'gram-q3',
      type: 'spot-the-error',
      question: 'Identify the error: "My favorite colors of the rainbow are: red, blue, and green."',
      sentence: 'My favorite colors of the rainbow are: red, blue, and green.',
      options: [
        'My favorite',
        'of the rainbow',
        'are:',
        'NO ERROR'
      ],
      answer: 2,
      explanation: "The colon is incorrect because 'are' should not be separated from its objects. 'My favorite colors of the rainbow are' is not a complete thought on its own."
    },
    {
      id: 'gram-q4',
      type: 'multiple-choice',
      question: 'Which punctuation mark joins two independent but related sentences without a conjunction?',
      options: [
        'Comma',
        'Semicolon',
        'Hyphen',
        'Apostrophe'
      ],
      answer: 1,
      explanation: "A semicolon joins two independent clauses without needing a conjunction like 'and' or 'but'."
    },
    {
      id: 'gram-q5',
      type: 'multiple-choice',
      question: 'Complete the sentence: By the time the operation ends, the team _____ for 12 hours.',
      options: [
        'will wait',
        'will have been waiting',
        'waited',
        'waits'
      ],
      answer: 1,
      explanation: "Future Perfect Continuous is used to show a duration up to a point in the future ('will have been waiting')."
    }
  ]
};
