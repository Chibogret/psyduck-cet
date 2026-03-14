/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '@/lib/types';
import { Highlight } from '@/lib/components/Highlight';

export const scienceMultipleChoice: Chapter = {
  id: 'science-mcq',
  title: 'Chapter 1: Science & Logic (Multiple Choice)',
  content: (
    <div className="space-y-6 text-lg leading-relaxed">
      <p>
        Welcome to the first chapter! We're diving into <strong>Multiple Choice Questions (MCQs)</strong> focusing on Science and Logic. These are the bread and butter of any college entrance test.
      </p>
      <p>
        The key to mastering MCQs isn't just knowing the right answer, but knowing how to eliminate the wrong ones. This is called the <Highlight color="#bbf7d0">Process of Elimination</Highlight>.
      </p>
      <ul className="list-none space-y-6 mt-4">
        <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">1. Read the Question Carefully</h4>
          <p className="text-stone-600">Watch out for absolute words like "always", "never", "all", or "none". These often make a statement false in science, where exceptions usually exist.</p>
        </li>
        <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">2. Identify the Core Concept</h4>
          <p className="text-stone-600">Before looking at the choices, try to recall the scientific principle being tested. Is it Newton's Laws? Cellular respiration? Chemical bonding?</p>
        </li>
      </ul>
    </div>
  ),
  technique: "Professor's Tip: If two options are exact opposites, one of them is usually the correct answer. The test makers want to see if you know the difference between the two extremes.",
  quizzes: [
    {
      type: 'MULTIPLE_CHOICE',
      question: 'Which of the following scenarios best illustrates Newton\'s Third Law of Motion?',
      options: [
        'A book resting on a table remains at rest until pushed.',
        'A heavier car requires more force to accelerate than a lighter car.',
        'A swimmer pushes water backward with her arms, and the water pushes her forward.',
        'A ball rolling on grass eventually stops due to friction.'
      ],
      answer: 2,
      explanation: "Newton's Third Law states that for every action, there is an equal and opposite reaction. The swimmer pushing water backward (action) and the water pushing her forward (reaction) perfectly illustrates this."
    },
    {
      type: 'MULTIPLE_CHOICE',
      question: 'In a typical food web, what would most likely happen if the population of a primary consumer drastically decreased?',
      options: [
        'The population of producers would decrease.',
        'The population of secondary consumers would increase.',
        'The population of producers would increase, and secondary consumers would decrease.',
        'The ecosystem would immediately collapse.'
      ],
      answer: 2,
      explanation: "Primary consumers eat producers (plants) and are eaten by secondary consumers. If primary consumers decrease, producers have fewer predators (so they increase), and secondary consumers have less food (so they decrease)."
    }
  ]
};
