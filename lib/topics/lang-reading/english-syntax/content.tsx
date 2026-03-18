/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../../types';
import { Highlight, SentenceBox } from '../../components';
import { Scale, RefreshCw, Feather, Target, AlertCircle, CheckCircle2 } from 'lucide-react';

export const englishSyntax: Chapter = {
  id: 'eng-syn-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 6: Syntax & SVA Mastery',
  description: 'Mastering Subject-Verb Agreement traps, Active vs. Passive Voice, and Figures of Speech.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-sans mt-4">
      <div className="bg-[#FAEDCB] md:border border-[#f5e3b5] p-5 md:p-8 rounded-3xl text-slate-800">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
          <Scale className="w-8 h-8 text-slate-800" /> Sentence Precision
        </h3>
        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
          <strong>Syntax</strong> is the arrangement of words to create well-formed sentences. In CETs, madalas mag-insert ang examiners ng mga "filler" phrases between the Subject and the Verb para malito ka. Let's learn to spot these traps!
        </p>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Target className="w-6 h-6 text-rose-500" /> SVA Traps (Subject-Verb Agreement)
        </h4>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200 shadow-sm">
            <h5 className="font-bold text-xl text-slate-800 mb-2">Trap 1: Intervening Phrases</h5>
            <p className="text-slate-600 mb-4 text-base font-medium">
              Ignore phrases na nag-uumpisa sa <em>including, in addition to, as well as,</em> or <em>accompanied by</em>. They do not change the number of the subject.
            </p>
            <SentenceBox>
              <Highlight color="#F7D9C4">The principal</Highlight>, along with the teachers, <Highlight color="#F7D9C4">is</Highlight> attending the meeting.
            </SentenceBox>
            <p className="text-sm text-slate-500 mt-2 italic font-medium">Focus on the singular subject "principal". Huwag kang palito sa plural na "teachers"!</p>
          </div>

          <div className="bg-white p-6 rounded-2xl md:border border-slate-200 shadow-sm">
            <h5 className="font-bold text-xl text-slate-800 mb-2">Trap 2: Either/Or & Neither/Nor</h5>
            <p className="text-slate-600 mb-4 text-base font-medium">
              Ang tawag dito ay <strong>Rule of Proximity</strong>: The verb must agree with the subject na pinakamalapit sa kaniya.
            </p>
            <SentenceBox>
              Neither the plates nor <Highlight color="#C9E4DE">the serving bowl goes</Highlight> on that shelf.
            </SentenceBox>
            <SentenceBox>
              Either the principal or <Highlight color="#C6DEF1">the teachers are</Highlight> speaking tonight. (Pinakamalapit yung "teachers" kaya plural ang verb!)
            </SentenceBox>
          </div>

          <div className="bg-white p-6 rounded-2xl md:border border-slate-200 shadow-sm">
            <h5 className="font-bold text-xl text-slate-800 mb-2">Trap 3: Indefinite Pronouns</h5>
            <p className="text-slate-600 mb-4 text-base font-medium">
              Words like <em>Each, Everyone, No one,</em> and <em>Somebody</em> are <strong>always singular</strong>. Huwag malito kahit marami silang pakinggan.
            </p>
            <SentenceBox>
              <Highlight color="#F2C6DE">Everyone</Highlight> in the room <Highlight color="#F2C6DE">is</Highlight> required to participate.
            </SentenceBox>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-5 md:p-8 rounded-3xl md:border border-slate-200">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <RefreshCw className="w-6 h-6 text-indigo-500" /> Active vs. Passive Voice
        </h4>
        <p className="text-slate-600 mb-6 text-base font-medium">Clear communication usually favors the <strong>Active Voice</strong>. Recognize the difference para maging concise at direct ang writing mo.</p>
        <ul className="space-y-4">
          <li className="flex gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <div>
              <strong className="text-slate-800 block text-lg">Active Voice:</strong>
              <p className="text-slate-600 text-base italic">"The programmer wrote the code."</p>
              <p className="text-slate-500 text-sm mt-1">The subject (programmer) performs the action (wrote). Napaka-clear!</p>
            </div>
          </li>
          <li className="flex gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <AlertCircle className="w-6 h-6 text-rose-400 flex-shrink-0" />
            <div>
              <strong className="text-slate-800 block text-lg">Passive Voice:</strong>
              <p className="text-slate-600 text-base italic">"The code was written by the programmer."</p>
              <p className="text-slate-500 text-sm mt-1">The subject (code) receives the action. Note the "was/is + participle" structure dito.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-8 bg-[#f8fafc] md:border border-[#C6DEF1] p-5 md:p-8 rounded-3xl">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Feather className="w-6 h-6 text-sky-500" /> Essential Figures of Speech
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Figures of speech add depth to language. Memorize these key types para sa Reading Comprehension sections niyo:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-xl border border-slate-100">
            <strong className="text-slate-800 block mb-1">Simile</strong>
            <span className="text-slate-600 text-sm">Comparing using "like" or "as". <br /><em>(e.g., As brave as a lion.)</em></span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100">
            <strong className="text-slate-800 block mb-1">Metaphor</strong>
            <span className="text-slate-600 text-sm">Direct comparison without "like/as". <br /><em>(e.g., Time is a thief.)</em></span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100">
            <strong className="text-slate-800 block mb-1">Personification</strong>
            <span className="text-slate-600 text-sm">Giving human traits to non-living things. <br /><em>(e.g., Sumisigaw ang hangin.)</em></span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-100">
            <strong className="text-slate-800 block mb-1">Hyperbole</strong>
            <span className="text-slate-600 text-sm">Extreme exaggeration for effect. <br /><em>(e.g., I've told you a million times.)</em></span>
          </div>
        </div>
      </div>

      <p className="text-slate-500 italic text-base mt-2 underline decoration-[#FAEDCB] decoration-4 underline-offset-4">
        Remember: SVA problems are like puzzles. Cross out the "extra baggage" sa isip mo para makita mo yung real subject!
      </p>
    </div>
  ),
  technique: "When checking for Subject-Verb Agreement, mentally cross out all prepositional phrases and intervening clauses. Focus only on the core Subject and the Verb. For example, in 'The box (of cookies) is empty', the subject is 'box', not 'cookies'.",
  quizzes: [
    {
      id: 'syn-q1',
      type: 'spot-the-error',
      question: 'Identify the error in Subject-Verb Agreement:',
      sentence: 'A large percentage of the results were inconsistent with our theory.',
      options: [
        'A large percentage',
        'of the results',
        'were inconsistent',
        'NO ERROR'
      ],
      answer: 3,
      explanation: "NO ERROR. When 'percentage' is followed by a plural noun ('results'), the verb should be plural ('were')."
    },
    {
      id: 'syn-q2',
      type: 'multiple-choice',
      question: 'Neither the manager nor the employees _____ willing to work overtime tonight.',
      options: [
        'is',
        'are',
        'was',
        'has been'
      ],
      answer: 1,
      explanation: "According to the Rule of Proximity, the verb agrees with the closest subject ('employees'), which is plural."
    },
    {
      id: 'syn-q3',
      type: 'multiple-choice',
      question: 'Identify the most concise way to express the following:',
      options: [
        'The cake was gifted to me by Sarah for my birthday.',
        'Sarah gifted me a cake for my birthday.',
        'A birthday cake was received by me from Sarah.',
        'It was Sarah who gifted the cake to me for my birthday.'
      ],
      answer: 1,
      explanation: "Option B is in the Active Voice and is the most direct and concise statement."
    },
    {
      id: 'syn-q4',
      type: 'multiple-choice',
      question: 'Each of the participants _____ required to sign a waiver.',
      options: [
        'is',
        'are',
        'were',
        'have been'
      ],
      answer: 0,
      explanation: "'Each' is an indefinite pronoun that is always singular, regardless of the prepositional phrase ('of the participants')."
    },
    {
      id: 'syn-q5',
      type: 'multiple-choice',
      question: 'What figure of speech is used: "The lightning danced across the sky"?',
      options: [
        'Simile',
        'Metaphor',
        'Personification',
        'Hyperbole'
      ],
      answer: 2,
      explanation: "Lightning is an inanimate object given the human trait of 'dancing', making it personification."
    }
  ]
};
