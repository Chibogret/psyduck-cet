/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../types';
import { Highlight } from '../components';

export const spotTheError: Chapter = {
  id: 'spot-the-error-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 2: The Grammar Police',
  description: 'Identifying structural and grammatical errors in complex sentences.',
  content: (
    <div className="space-y-6 text-lg leading-relaxed">
      <p>
        &quot;Spot the Error&quot; questions are designed to trip you up. They use complex vocabulary and long, winding sentences to hide simple grammatical mistakes. 
      </p>
      <p>
        To beat the test makers, you need to become a grammar detective. Let&apos;s look at the three most common culprits:
      </p>
      
      <div className="space-y-6 mt-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">1. Dangling Modifiers</h4>
          <p className="mb-2 text-stone-600">A modifier is a phrase that describes something. A <em>dangling</em> modifier describes the wrong thing because the intended subject is missing or in the wrong place.</p>
          <p className="italic text-red-600 line-through">Walking down the street, <Highlight color="#fecaca">the trees</Highlight> were beautiful.</p>
          <p className="text-sm mt-2 text-stone-500">Wait, were the trees walking down the street? No! The person walking is missing.</p>
          <p className="italic text-green-700 mt-2">Walking down the street, <Highlight color="#bbf7d0">I</Highlight> saw the beautiful trees.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">2. Faulty Parallelism</h4>
          <p className="mb-2 text-stone-600">Items in a list or comparison must have the same grammatical structure.</p>
          <p className="italic text-red-600 line-through">She likes hiking, swimming, and <Highlight color="#fecaca">to ride</Highlight> bicycles.</p>
          <p className="text-sm mt-2 text-stone-500">&quot;Hiking&quot; and &quot;swimming&quot; end in -ing. &quot;To ride&quot; breaks the pattern.</p>
          <p className="italic text-green-700 mt-2">She likes hiking, swimming, and <Highlight color="#bbf7d0">riding</Highlight> bicycles.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
          <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">3. Subject-Verb Disagreement (The Decoy)</h4>
          <p className="mb-2 text-stone-600">Test makers will put a plural noun right next to a singular verb to confuse your ear.</p>
          <p className="italic text-red-600 line-through">The box of chocolates <Highlight color="#fecaca">were</Highlight> missing.</p>
          <p className="text-sm mt-2 text-stone-500">The subject is &quot;box&quot; (singular), not &quot;chocolates&quot;.</p>
          <p className="italic text-green-700 mt-2">The box of chocolates <Highlight color="#bbf7d0">was</Highlight> missing.</p>
        </div>
      </div>
    </div>
  ),
  technique: "Professor's Tip: When analyzing a sentence, mentally cross out prepositional phrases (like 'of the students', 'in the corner'). This strips the sentence down to its bare bones (Subject + Verb), making errors glaringly obvious.",
  quizzes: [
    {
      id: 'ste-q1',
      type: 'spot-the-error',
      question: 'Identify the part of the sentence that contains a grammatical error. If there is no error, select "NO ERROR".',
      sentence: 'Exhausted from the grueling marathon, the finish line was a welcome sight for the runners.',
      options: [
        'Exhausted from the',
        'grueling marathon, the finish line',
        'was a welcome sight for the runners.',
        'NO ERROR'
      ],
      answer: 1,
      explanation: "This is a classic dangling modifier. The phrase 'Exhausted from the grueling marathon' modifies the noun immediately following the comma. The current sentence implies that 'the finish line' was exhausted. It should be rewritten as: 'Exhausted from the grueling marathon, the runners found the finish line a welcome sight.'"
    },
    {
      id: 'ste-q2',
      type: 'spot-the-error',
      question: 'Identify the part of the sentence that contains a grammatical error.',
      sentence: 'The committee of professors, alongside the dean of the college, have decided to implement the new curriculum next semester.',
      options: [
        'The committee of professors,',
        'alongside the dean of the college,',
        'have decided to implement',
        'the new curriculum next semester.'
      ],
      answer: 2,
      explanation: "The subject of the sentence is 'committee', which is a singular collective noun in this context. Phrases like 'alongside', 'as well as', or 'together with' do not make a singular subject plural. Therefore, the verb should be singular: 'has decided', not 'have decided'."
    },
    {
      id: 'ste-q3',
      type: 'spot-the-error',
      question: 'Identify the part of the sentence that contains a grammatical error.',
      sentence: 'To succeed in the highly competitive program, one must be diligent, possess a strong work ethic, and studying late into the night.',
      options: [
        'To succeed in the highly competitive program,',
        'one must be diligent,',
        'possess a strong work ethic,',
        'and studying late into the night.'
      ],
      answer: 3,
      explanation: "This is an error in parallel structure. The list of requirements uses base verbs/adjectives: 'be diligent', 'possess a strong work ethic'. The third item shifts to a gerund/participle: 'studying'. It should be parallel: 'and study late into the night'."
    },
    {
      id: 'ste-q4',
      type: 'spot-the-error',
      question: 'Identify the part of the sentence that contains a grammatical error.',
      sentence: 'The data collected by the research team suggests that the new treatment are effective in reducing symptoms.',
      options: [
        'The data collected',
        'by the research team',
        'are effective in',
        'NO ERROR'
      ],
      answer: 2,
      explanation: "The subject of the subordinate clause is 'the new treatment' (singular), so the verb should be 'is effective', not 'are effective'."
    },
    {
      id: 'ste-q5',
      type: 'spot-the-error',
      question: 'Identify the part of the sentence that contains a grammatical error. If there is no error, select "NO ERROR".',
      sentence: 'Neither the students nor the teacher were aware of the sudden change in the examination schedule.',
      options: [
        'Neither the students',
        'nor the teacher were',
        'of the sudden change',
        'NO ERROR'
      ],
      answer: 1,
      explanation: "With 'Neither...nor', the verb must agree with the nearer subject. 'The teacher' is singular, so the verb should be 'was aware', not 'were aware'. This is the Rule of Proximity."
    }
  ]
};
