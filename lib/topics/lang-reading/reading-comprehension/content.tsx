/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../../types';
import { Highlight, PassageBox } from '../../components';

const passageContent = (
  <div className="space-y-4">
    <p>
      The architecture of Manila is not merely a collection of concrete and steel; it is a palimpsest of its tumultuous history. Beneath the gleaming, monolithic skyscrapers of BGC lies the memory of a different era, while the crumbling, ornate facades in Escolta whisper tales of the &quot;Pearl of the Orient.&quot; This juxtaposition is not accidental. It is a physical manifestation of a city constantly caught between the desperate urge to modernize and the inescapable gravity of its colonial past.
    </p>
    <p>
      Urban planners often decry the lack of cohesive zoning, pointing to the labyrinthine streets of older districts as evidence of poor foresight. However, sociologists argue that this very chaos breeds a unique form of community resilience. The <em>sari-sari</em> store embedded in the wall of a brutalist apartment complex is not an anomaly; it is an adaptation. It demonstrates how the populace reclaims sterile, top-down architectural impositions and transforms them into organic, breathing neighborhoods.
    </p>
    <p>
      Yet, this resilience comes at a cost. The rapid gentrification of historical areas often leads to the displacement of long-standing communities, replacing heritage with homogeneity. The challenge for future architects is not to erase the chaos, but to design within it—to create spaces that honor the palimpsest without erasing the ink of the marginalized.
    </p>
  </div>
);

export const readingComprehension: Chapter = {
  id: 'reading-comprehension-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 1: Reading Between the Lines',
  description: 'Mastering the art of reading comprehension by analyzing tone, inference, and main ideas.',
  content: (
    <div className="space-y-6 text-lg leading-relaxed">
      <p>
        Reading Comprehension is the heavyweight champion of entrance exams. It tests your stamina, your vocabulary, and most importantly, your ability to synthesize information quickly.
      </p>
      <p>
        You are not just reading to memorize facts; you are reading to understand the <strong>author&apos;s intent</strong>. Let&apos;s break down the three most common types of questions you will encounter:
      </p>
      <ul className="list-none space-y-6 mt-4">
        <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">1. The Main Idea</h4>
          <p className="mb-2 text-stone-600">What is the passage <em>mostly</em> about? Look at the first and last sentences of the paragraphs. They usually contain the thesis statement or the concluding thought.</p>
        </li>
        <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">2. Inference Questions</h4>
          <p className="mb-2 text-stone-600">These questions ask you to deduce something that is <em>not explicitly stated</em>. Look for clues and tone. If the author uses words like &quot;decry&quot; or &quot;unfortunately,&quot; they are expressing a negative stance.</p>
        </li>
        <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">3. Vocabulary in Context</h4>
          <p className="mb-2 text-stone-600">You will be asked to define a complex word based on how it is used. <Highlight color="#bbf7d0">Never rely solely on your prior knowledge of the word.</Highlight> Always read the surrounding sentences to see how the author is applying it.</p>
        </li>
      </ul>
    </div>
  ),
  technique: "Professor's Tip: Read the questions FIRST before reading the passage. This gives your brain a 'target' to look for. As you read, mentally summarize each paragraph in one sentence. If a paragraph is about 'gentrification', write 'gentrification' in the margins of your mind.",
  quizzes: [
    {
      id: 'rc-q1',
      type: 'reading-comprehension',
      question: 'Based on the passage, what does the author most likely mean by the word "palimpsest" in the first paragraph?',
      passage: passageContent,
      options: [
        'A modern architectural style characterized by glass and steel.',
        'A document or surface where original writing has been erased to make way for new writing, but traces remain.',
        'A chaotic and disorganized system of urban planning.',
        'A pristine, untouched historical artifact.'
      ],
      answer: 1,
      explanation: "The author mentions that beneath the modern skyscrapers lies the 'memory of a different era' and 'crumbling facades'. A palimpsest is exactly this: something reused or altered but still bearing visible traces of its earlier form. The context clues 'beneath... lies the memory' point directly to this."
    },
    {
      id: 'rc-q2',
      type: 'reading-comprehension',
      question: 'Which of the following best summarizes the sociologists\' view on Manila\'s "labyrinthine streets" as described in the second paragraph?',
      passage: passageContent,
      options: [
        'They are a prime example of poor foresight by urban planners.',
        'They are dangerous areas that need immediate gentrification.',
        'They foster a unique, organic adaptability and community strength.',
        'They should be replaced by brutalist apartment complexes.'
      ],
      answer: 2,
      explanation: "The passage explicitly states: 'However, sociologists argue that this very chaos breeds a unique form of community resilience... it is an adaptation.' Option C perfectly captures this sentiment."
    },
    {
      id: 'rc-q3',
      type: 'reading-comprehension',
      question: 'What is the author\'s primary tone in the final paragraph regarding gentrification?',
      passage: passageContent,
      options: [
        'Enthusiastic and forward-looking',
        'Indifferent and objective',
        'Cautionary and reflective',
        'Angry and accusatory'
      ],
      answer: 2,
      explanation: "The author uses phrases like 'resilience comes at a cost' and 'replacing heritage with homogeneity', which shows caution. The call to action ('challenge for future architects is not to erase... but to design within it') is reflective and advisory, not purely angry."
    }
  ]
};
