/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '@/lib/types';
import { Highlight } from '@/lib/components/Highlight';

export const vocabFillInTheBlank: Chapter = {
  id: 'vocab-fill',
  title: 'Chapter 2: Vocabulary (Fill-in-the-Blank)',
  content: (
    <div className="space-y-6 text-lg leading-relaxed">
      <p>
        Next up is <strong>Vocabulary and Fill-in-the-Blanks</strong>. These questions test your ability to use context clues to figure out the missing word.
      </p>
      <p>
        Don't panic if you don't know the exact definition of a word. You can often guess its meaning by looking at the words around it.
      </p>
      <ul className="list-none space-y-6 mt-4">
        <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">1. Look for Synonyms or Antonyms</h4>
          <p className="text-stone-600">Sometimes the sentence itself defines the word. Look for words like "or", "that is", or "in other words". Also, look for contrast words like "but", "however", or "although".</p>
        </li>
        <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">2. Determine the Tone</h4>
          <p className="text-stone-600">Is the sentence positive, negative, or neutral? If the sentence is talking about a disaster, the missing word is likely negative.</p>
        </li>
      </ul>
    </div>
  ),
  technique: "Professor's Tip: Try to predict the missing word before looking at the choices. If your predicted word is one of the choices, you're probably right!",
  quizzes: [
    {
      type: 'FILL_IN_THE_BLANK',
      question: 'Despite the politician\'s __________ speeches, his actions revealed a deep-seated apathy towards the poor.',
      options: [
        'laconic',
        'magniloquent',
        'reticent',
        'taciturn'
      ],
      answer: 1,
      explanation: "The word 'Despite' indicates a contrast. His actions showed apathy (lack of interest), so his speeches must have been the opposite: grand, boastful, or expressive. 'Magniloquent' means using high-flown or bombastic language. The other three words (laconic, reticent, taciturn) all mean quiet or using few words."
    },
    {
      type: 'FILL_IN_THE_BLANK',
      question: 'The new employee was so __________ that she agreed to every request her manager made, even when it meant working late every night.',
      options: [
        'obdurate',
        'intransigent',
        'obsequious',
        'recalcitrant'
      ],
      answer: 2,
      explanation: "The sentence describes someone who agrees to everything, even unreasonable requests. 'Obsequious' means obedient or attentive to an excessive or servile degree. The other three words (obdurate, intransigent, recalcitrant) all mean stubborn or resistant to authority."
    }
  ]
};
