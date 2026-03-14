/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '@/lib/types';
import { Highlight } from '@/lib/components/Highlight';

export const logicSentenceCompletion: Chapter = {
  id: 'logic-sentence',
  title: 'Chapter 3: Logic (Sentence Completion)',
  content: (
    <div className="space-y-6 text-lg leading-relaxed">
      <p>
        Welcome to <strong>Sentence Completion</strong>. These questions test your ability to understand the logical flow of a sentence and choose the word or phrase that best completes it.
      </p>
      <p>
        The key is to identify the relationship between the different parts of the sentence. Is it cause and effect? Contrast? Addition?
      </p>
      <ul className="list-none space-y-6 mt-4">
        <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">1. Look for Transition Words</h4>
          <p className="text-stone-600">Words like "because", "therefore", "however", "although", "moreover", and "furthermore" are your best friends. They tell you exactly how the ideas connect.</p>
        </li>
        <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">2. Determine the Relationship</h4>
          <p className="text-stone-600">If the sentence is "She studied hard, __________ she passed the exam", the relationship is cause and effect. The missing word is likely "therefore" or "so".</p>
        </li>
      </ul>
    </div>
  ),
  technique: "Professor's Tip: Read the entire sentence with each option plugged in. Does it sound natural? Does the logic hold up? If it sounds clunky or contradictory, it's probably wrong.",
  quizzes: [
    {
      type: 'SENTENCE_COMPLETION',
      question: 'The CEO\'s decision to cut funding for the research department was widely criticized; __________, it ultimately led to a more focused and profitable product line.',
      options: [
        'consequently',
        'nevertheless',
        'furthermore',
        'similarly'
      ],
      answer: 1,
      explanation: "The first part of the sentence describes a negative action (cutting funding, being criticized). The second part describes a positive outcome (profitable product line). This is a contrast relationship. 'Nevertheless' is the only option that indicates contrast."
    },
    {
      type: 'SENTENCE_COMPLETION',
      question: 'The new software update was designed to improve system stability; __________, several users reported experiencing frequent crashes after installation.',
      options: [
        'in addition',
        'as a result',
        'on the contrary',
        'for instance'
      ],
      answer: 2,
      explanation: "The first part states the intended positive outcome (improve stability). The second part states the actual negative outcome (frequent crashes). This is a direct contradiction. 'On the contrary' is the best fit."
    }
  ]
};
