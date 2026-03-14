/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../types';
import { Highlight, SentenceBox } from '../components';
import { BookOpen, Tag, Type } from 'lucide-react';

export const grammarRules: Chapter = {
  id: 'grammar-rules-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 4: The Glue of Language',
  description: 'Mastering Parts of Speech, Capitalization, prepositions, and the subjunctive mood for CETs.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-sans mt-4">
      <div className="bg-[#FAEDCB] md:border border-[#f5e3b5] p-5 md:p-8 rounded-3xl text-slate-800">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
          <Tag className="w-8 h-8 text-slate-800" /> Grammar Foundations
        </h3>
        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
          Fill-in-the-blank questions often test the &quot;glue&quot; of language: the small words that hold big ideas together. Before we tackle those, let&apos;s make sure you have a solid grasp of the <strong>Parts of Speech</strong>—the building blocks of every sentence.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-indigo-500" /> The 8 Parts of Speech
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Every word in a sentence plays a role. CET questions require you to identify these roles, especially when checking for correct usage:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">1. Noun</strong>
            <span className="text-slate-600 text-sm font-medium">Names a person, place, thing, or idea.<br/><em className="text-slate-500">e.g., Maria, school, <Highlight color="#C6DEF1">honesty</Highlight></em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">2. Pronoun</strong>
            <span className="text-slate-600 text-sm font-medium">Replaces a noun to avoid repetition.<br/><em className="text-slate-500">e.g., <Highlight color="#C9E4DE">she</Highlight>, they, it, whom</em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">3. Verb</strong>
            <span className="text-slate-600 text-sm font-medium">Expresses an action or state of being.<br/><em className="text-slate-500">e.g., run, <Highlight color="#F7D9C4">is</Highlight>, become, think</em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">4. Adjective</strong>
            <span className="text-slate-600 text-sm font-medium">Describes or modifies a noun.<br/><em className="text-slate-500">e.g., <Highlight color="#F2C6DE">brilliant</Highlight> student, cold water</em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">5. Adverb</strong>
            <span className="text-slate-600 text-sm font-medium">Modifies a verb, adjective, or another adverb. Often ends in -ly.<br/><em className="text-slate-500">e.g., She ran <Highlight color="#C6DEF1">quickly</Highlight>.</em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">6. Preposition</strong>
            <span className="text-slate-600 text-sm font-medium">Shows relationship between a noun and another word.<br/><em className="text-slate-500">e.g., <Highlight color="#C9E4DE">in</Highlight> the box, <Highlight color="#C9E4DE">between</Highlight> us</em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">7. Conjunction</strong>
            <span className="text-slate-600 text-sm font-medium">Connects words, phrases, or clauses.<br/><em className="text-slate-500">e.g., <Highlight color="#F7D9C4">and</Highlight>, but, because, although</em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">8. Interjection</strong>
            <span className="text-slate-600 text-sm font-medium">Expresses sudden emotion. Often followed by an exclamation point.<br/><em className="text-slate-500">e.g., <Highlight color="#F2C6DE">Wow!</Highlight> Oh no! Hurray!</em></span>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-5 md:p-8 rounded-3xl md:border border-[#C6DEF1]">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Type className="w-6 h-6 text-slate-800" /> Capitalization Rules
        </h4>
        <p className="text-slate-600 mb-6 font-medium">CETs test your knowledge of when to capitalize. These are the rules that matter most:</p>
        <div className="space-y-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <strong className="text-slate-800 block mb-1">Proper Nouns &amp; Titles</strong>
            <p className="text-slate-600 text-sm font-medium">Always capitalize names, titles (when before a name), and specific places.</p>
            <p className="text-sm text-slate-500 mt-1 italic">&quot;<Highlight color="#C9E4DE">President</Highlight> Garcia attended the summit.&quot; vs. &quot;The <Highlight color="#F7D9C4">president</Highlight> attended the summit.&quot;</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <strong className="text-slate-800 block mb-1">Geographic Regions vs. Directions</strong>
            <p className="text-slate-600 text-sm font-medium">Capitalize when referring to a specific region, not a compass direction.</p>
            <p className="text-sm text-slate-500 mt-1 italic">&quot;She moved to the <Highlight color="#C9E4DE">South</Highlight>.&quot; (region) vs. &quot;Drive <Highlight color="#F7D9C4">south</Highlight> for two miles.&quot; (direction)</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <strong className="text-slate-800 block mb-1">Specific Courses vs. General Subjects</strong>
            <p className="text-slate-600 text-sm font-medium">Capitalize the specific course name, but not the general subject (except languages).</p>
            <p className="text-sm text-slate-500 mt-1 italic">&quot;I enrolled in <Highlight color="#C9E4DE">Biology 101</Highlight>.&quot; vs. &quot;I enjoy studying <Highlight color="#F7D9C4">biology</Highlight>.&quot; But always: &quot;I study <Highlight color="#C9E4DE">English</Highlight>.&quot;</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight">Idiomatic Prepositions</h4>
        <p className="text-slate-600 mb-4 font-medium">
          A common trap in CETs is testing your knowledge of <strong>idiomatic prepositions</strong>. These are pairings of verbs or adjectives with specific prepositions that don&apos;t always follow a logical rule—you just have to know them.
        </p>
        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-inner">
          <ul className="space-y-3 text-stone-700">
            <li><Highlight color="#e2e8f0">Accused of</Highlight> (Not &quot;accused for&quot;)</li>
            <li><Highlight color="#e2e8f0">Capable of</Highlight> (Not &quot;capable to&quot;)</li>
            <li><Highlight color="#e2e8f0">Comply with</Highlight> (Not &quot;comply to&quot;)</li>
            <li><Highlight color="#e2e8f0">Different from</Highlight> (Not &quot;different than&quot;)</li>
            <li><Highlight color="#e2e8f0">Prejudiced against</Highlight> (Not &quot;prejudiced to&quot;)</li>
            <li><Highlight color="#e2e8f0">Prohibited from</Highlight> (Not &quot;prohibited to&quot;)</li>
            <li><Highlight color="#e2e8f0">Superior to</Highlight> (Not &quot;superior than&quot;)</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight">The Subjunctive Mood</h4>
        <p className="text-slate-600 mb-4 font-medium">
          Used to express wishes, hypothetical situations, or commands/suggestions. The trick? The verb often drops its &quot;s&quot; or uses &quot;were&quot; instead of &quot;was&quot;.
        </p>
        <SentenceBox>
          I demand that he <Highlight color="#c7d2fe">apologize</Highlight> immediately. (Not &quot;apologizes&quot;)
        </SentenceBox>
        <SentenceBox>
          If I <Highlight color="#c7d2fe">were</Highlight> a rich man... (Not &quot;was&quot;)
        </SentenceBox>
      </div>
      
      <p className="text-slate-500 italic text-base mt-2 underline decoration-[#FAEDCB] decoration-4 underline-offset-4">
        Pro-Tip: When dealing with fill-in-the-blank prepositions, trust your ear first, then verify with the rule. For subjunctive mood, look for trigger verbs like &apos;demand&apos;, &apos;suggest&apos;, &apos;insist&apos;, or &apos;recommend&apos;.
      </p>
    </div>
  ),
  technique: "Professor's Tip: When dealing with fill-in-the-blank prepositions, trust your ear, but verify with the rule. If it sounds 'off', it probably is. For subjunctive mood questions, look for trigger verbs like 'demand', 'suggest', 'insist', or 'recommend'.",
  quizzes: [
    {
      id: 'gr-q1',
      type: 'fill-in-the-blank',
      question: 'Fill in the blank with the correct preposition.',
      sentence: 'The manager insisted that all employees comply __________ the new safety regulations by Friday.',
      options: [
        'to',
        'with',
        'on',
        'for'
      ],
      answer: 1,
      explanation: "The verb 'comply' is idiomatically paired with the preposition 'with'. You comply WITH a rule or request."
    },
    {
      id: 'gr-q2',
      type: 'fill-in-the-blank',
      question: 'Fill in the blank with the correct verb form.',
      sentence: 'The doctor strongly recommended that she __________ a specialist for her persistent migraines.',
      options: [
        'sees',
        'saw',
        'see',
        'has seen'
      ],
      answer: 2,
      explanation: "This sentence uses the subjunctive mood, triggered by the verb 'recommended that'. In the subjunctive mood, the base form of the verb ('see') is used, regardless of the subject ('she')."
    },
    {
      id: 'gr-q3',
      type: 'fill-in-the-blank',
      question: 'Fill in the blank with the correct transitional device.',
      sentence: 'The company\'s profits have declined steadily over the past three quarters; __________, the CEO announced a massive expansion plan.',
      options: [
        'consequently',
        'moreover',
        'nevertheless',
        'similarly'
      ],
      answer: 2,
      explanation: "The first clause states a negative fact (declining profits). The second clause states an action that contradicts what you would expect (a massive expansion). 'Nevertheless' is the correct transition to show this unexpected contrast."
    },
    {
      id: 'gr-q4',
      type: 'fill-in-the-blank',
      question: 'Fill in the blank with the correct verb form.',
      sentence: 'It is imperative that every student __________ the health and safety guidelines before entering the laboratory.',
      options: [
        'follows',
        'follow',
        'is following',
        'followed'
      ],
      answer: 1,
      explanation: "The phrase 'It is imperative that' triggers the subjunctive mood. In the subjunctive, the base form of the verb ('follow') is used regardless of the subject."
    },
    {
      id: 'gr-q5',
      type: 'fill-in-the-blank',
      question: 'Fill in the blank with the correct preposition.',
      sentence: 'The suspect was accused __________ tampering with evidence during the investigation.',
      options: [
        'for',
        'with',
        'of',
        'by'
      ],
      answer: 2,
      explanation: "The verb 'accused' is idiomatically paired with the preposition 'of'. You accuse someone OF doing something."
    },
    {
      id: 'gr-q6',
      type: 'multiple-choice',
      question: 'In the sentence "The incredibly talented musician performed beautifully," what part of speech is "incredibly"?',
      options: [
        'Adjective',
        'Adverb',
        'Noun',
        'Conjunction'
      ],
      answer: 1,
      explanation: "'Incredibly' modifies the adjective 'talented' (telling us HOW talented). A word that modifies an adjective is an adverb."
    },
    {
      id: 'gr-q7',
      type: 'multiple-choice',
      question: 'Which sentence uses capitalization correctly?',
      options: [
        'I am taking history, Math, and english this semester.',
        'I am taking History, math, and English this semester.',
        'I am taking history, math, and English this semester.',
        'I am taking History, Math, and English this Semester.'
      ],
      answer: 2,
      explanation: "General subjects (history, math) are not capitalized. However, languages (English) are always capitalized because they derive from proper nouns. 'Semester' is not capitalized."
    }
  ]
};
