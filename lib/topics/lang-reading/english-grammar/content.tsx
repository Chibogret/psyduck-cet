/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../../types';
import { Highlight, SentenceBox } from '../../components';
import { Layers, Network, PenTool, Clock, AlertTriangle } from 'lucide-react';

export const englishGrammar: Chapter = {
  id: 'eng-gram-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 5: The Grammar Matrix',
  description: 'Mastering Conditionals, Verb Tenses, and advanced Punctuation.',
  content: (
    <div className="space-y-10 text-lg leading-relaxed font-sans mt-4">
      {/* INTRO SECTION */}
      <div className="bg-[#FAEDCB] md:border border-[#f5e3b5] p-5 md:p-8 rounded-3xl text-slate-800">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
          <Layers className="w-8 h-8 text-slate-800" /> Structure is Foundation
        </h3>
        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
          In College Entrance Tests (CETs), huwag kang aasa sa kung ano lang ang "sounds right"—that's a very common trap! Minsan, ang tamang grammar pakinggan ay awkward sa spoken English. You need to master the formal rules of <strong>Verb Tenses</strong>, <strong>Conditionals</strong>, and <strong>Punctuation</strong> para hindi ka malito sa mga complex at mahahabang sentences.
        </p>
      </div>

      {/* VERB TENSES SECTION */}
      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Clock className="w-6 h-6 text-blue-500" /> Verb Tenses: The Timeline Trick
        </h4>
        <p className="text-slate-600 mb-6 text-base font-medium">
          Basic past, present, and future tenses are rarely tested alone. CETs love the <strong>Perfect Tenses</strong>. Think of them as tools to show <em>which action happened first</em> on a timeline.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200 shadow-sm">
            <strong className="text-slate-800 block text-xl mb-2">1. The Past Perfect (The "Past of the Past")</strong>
            <p className="text-slate-600 mb-3 font-medium text-base">
              Formula: <span className="bg-slate-100 text-blue-700 px-2 py-1 rounded font-bold">had + Past Participle (V3)</span><br />
              <strong>When to use:</strong> Kapag may dalawang nangyari sa past, use Past Perfect for the <em>first/older event</em>, and Simple Past for the <em>second/newer event</em>.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="italic">"By the time the police <Highlight color="#F7D9C4">arrived</Highlight> (Action 2), the thief <Highlight color="#C6DEF1">had escaped</Highlight> (Action 1)."</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl md:border border-slate-200 shadow-sm">
            <strong className="text-slate-800 block text-xl mb-2">2. The Present Perfect (The "Bridge")</strong>
            <p className="text-slate-600 mb-3 font-medium text-base">
              Formula: <span className="bg-slate-100 text-blue-700 px-2 py-1 rounded font-bold">has/have + Past Participle (V3)</span><br />
              <strong>When to use:</strong> An action that started in the past and is <em>still continuing</em> or still relevant to the present. Keywords: <em>since, for, recently.</em>
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="italic">"She <Highlight color="#C9E4DE">has studied</Highlight> in this university since 2021."</span> (She is still studying there.)
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl md:border border-slate-200 shadow-sm">
            <strong className="text-slate-800 block text-xl mb-2">3. The Future Perfect (The "Deadline")</strong>
            <p className="text-slate-600 mb-3 font-medium text-base">
              Formula: <span className="bg-slate-100 text-blue-700 px-2 py-1 rounded font-bold">will have + Past Participle (V3)</span><br />
              <strong>When to use:</strong> Shows that an action will be 100% complete <em>before</em> a specific point in the future.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="italic">"By tomorrow night, I <Highlight color="#F2C6DE">will have finished</Highlight> my research paper."</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONDITIONALS SECTION */}
      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Network className="w-6 h-6 text-indigo-500" /> The Four Conditionals
        </h4>
        <p className="text-slate-600 mb-4 text-base font-medium">
          Conditionals describe a result na mangyayari under a specific condition. Match the tense of the <strong>If-clause</strong> with the <strong>main clause</strong> gamit ang strict formulas na ito. Huwag mong paghaluin!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl md:border border-[#C6DEF1]">
            <strong className="text-slate-800 block text-lg mb-1">0. Zero Conditional (Facts/Habits)</strong>
            <p className="text-slate-600 text-sm mb-2 font-medium">Formula: <span className="bg-slate-100 px-2 py-1 rounded">If + Present, Present</span></p>
            <p className="italic text-slate-700 text-base font-medium">"If you <Highlight color="#C6DEF1">heat</Highlight> ice, it <Highlight color="#C6DEF1">melts</Highlight>."</p>
            <p className="text-xs text-slate-500 mt-2">(General truths and scientific facts.)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl md:border border-[#C9E4DE]">
            <strong className="text-slate-800 block text-lg mb-1">1. First Conditional (Real Future)</strong>
            <p className="text-slate-600 text-sm mb-2 font-medium">Formula: <span className="bg-slate-100 px-2 py-1 rounded">If + Present, Will + V1</span></p>
            <p className="italic text-slate-700 text-base font-medium">"If it <Highlight color="#C9E4DE">rains</Highlight>, we <Highlight color="#C9E4DE">will stay</Highlight> indoors."</p>
            <p className="text-xs text-slate-500 mt-2">(Very possible to happen in the future.)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl md:border border-[#F7D9C4]">
            <strong className="text-slate-800 block text-lg mb-1">2. Second Conditional (Hypothetical)</strong>
            <p className="text-slate-600 text-sm mb-2 font-medium">Formula: <span className="bg-slate-100 px-2 py-1 rounded">If + Past, Would + V1</span></p>
            <p className="italic text-slate-700 text-base font-medium">"If I <Highlight color="#F7D9C4">won</Highlight> the lottery, I <Highlight color="#F7D9C4">would travel</Highlight>."</p>
            <p className="text-xs text-slate-500 mt-2">(Imaginary or highly unlikely present/future.)</p>
          </div>

          <div className="bg-white p-6 rounded-2xl md:border border-[#F2C6DE]">
            <strong className="text-slate-800 block text-lg mb-1">3. Third Conditional (Imaginary Past)</strong>
            <p className="text-slate-600 text-sm mb-2 font-medium">Formula: <span className="bg-slate-100 px-2 py-1 rounded">If + Past Perfect, Would have + V3</span></p>
            <p className="italic text-slate-700 text-base font-medium">"If I <Highlight color="#F2C6DE">had studied</Highlight>, I <Highlight color="#F2C6DE">would have passed</Highlight>."</p>
            <p className="text-xs text-slate-500 mt-2">(Regrets. Changing something in the past.)</p>
          </div>
        </div>

        {/* EXAM TRAP: Subjunctive */}
        <div className="mt-6 bg-rose-50 p-5 rounded-2xl border border-rose-200 flex gap-4">
          <AlertTriangle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
          <div>
            <strong className="text-rose-800 block mb-1">CET Trap: The "If I Were" Rule (Subjunctive Mood)</strong>
            <p className="text-rose-700 text-base font-medium">
              Sa 2nd Conditional, whenever you are stating an impossibility or hypothetical situation, <strong>always use "were"</strong> instead of "was" — kahit singular pa ang subject (I, he, she, it)!
            </p>
            <ul className="mt-2 text-rose-800 text-sm font-medium space-y-1">
              <li><span className="text-emerald-600 font-bold">✔</span> <em>"If I <strong>were</strong> a bird, I would fly."</em></li>
              <li><span className="text-rose-600 font-bold">✖</span> <em>"If I <strong>was</strong> a bird, I would fly."</em></li>
              <li><span className="text-emerald-600 font-bold">✔</span> <em>"He acts as if he <strong>were</strong> the boss."</em></li>
            </ul>
          </div>
        </div>
      </div>

      {/* PUNCTUATION SECTION */}
      <div className="mt-8 bg-white p-5 md:p-8 rounded-3xl md:border border-slate-200">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <PenTool className="w-6 h-6 text-slate-800" /> Advanced Punctuation Mastery
        </h4>
        <p className="text-slate-600 mb-6 font-medium">
          Isang malaking part ng reading comprehension at language exams ay ang pag-spot ng maling punctuation. Master these specific rules:
        </p>

        <ul className="space-y-8">
          <li>
            <strong className="text-slate-800 block text-xl mb-2">1. The Semicolon ( ; ) vs. The Comma Splice</strong>
            <p className="text-slate-600 text-sm mb-3 font-medium">
              A semicolon joins <strong>two independent clauses</strong> (two complete thoughts) na closely related. A very common exam trap is the <strong>Comma Splice</strong>—joining two complete sentences gamit lang ang comma (which is illegal in formal grammar!).
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <p><span className="text-rose-500 font-bold mr-2">✖ Comma Splice:</span><span className="italic">"It is raining outside<Highlight color="#F2C6DE">,</Highlight> I forgot my umbrella."</span> (Mali! You need a conjunction like 'and' or 'so'.)</p>
              <p><span className="text-emerald-500 font-bold mr-2">✔ Semicolon Fix:</span><span className="italic">"It is raining outside<Highlight color="#C9E4DE">;</Highlight> I forgot my umbrella."</span></p>
              <p><span className="text-emerald-500 font-bold mr-2">✔ With Adverb:</span><span className="italic">"It is raining outside<Highlight color="#C9E4DE">; however,</Highlight> I have my raincoat."</span></p>
            </div>
          </li>

          <li>
            <strong className="text-slate-800 block text-xl mb-2">2. The Colon ( : )</strong>
            <p className="text-slate-600 text-sm mb-3 font-medium">
              A colon introduces a list, an explanation, or a quotation. <strong>Golden Rule:</strong> The sentence <em>before</em> the colon MUST be a complete independent clause. Hindi siya pwedeng bitin.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
              <p><span className="text-emerald-500 font-bold mr-2">✔ Correct:</span><span className="italic">"She had all the requirements<Highlight color="#F7D9C4">:</Highlight> focus, discipline, and talent."</span></p>
              <p><span className="text-rose-500 font-bold mr-2">✖ Incorrect:</span><span className="italic">"My favorites are: chocolate and vanilla."</span> ('My favorites are' cannot stand alone as a complete sentence!)</p>
            </div>
          </li>

          <li>
            <strong className="text-slate-800 block text-xl mb-2">3. The Em Dash ( — ) vs. Hyphen ( - )</strong>
            <p className="text-slate-600 text-sm mb-3 font-medium">
              An <strong>em dash</strong> (long line) is used to create a strong break in a sentence or to emphasize extra information (parang bold parentheses). A <strong>hyphen</strong> (short line) is just used to combine words (e.g., well-known).
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="text-emerald-500 font-bold mr-2">✔ Em Dash:</span><span className="italic">"The truth<Highlight color="#FAEDCB">—</Highlight>as unpleasant as it was<Highlight color="#FAEDCB">—</Highlight>had to be told."</span>
            </div>
          </li>
        </ul>
      </div>

      <p className="text-slate-600 italic text-base mt-4 font-medium px-4 border-l-4 border-[#FAEDCB]">
        <strong>Pro Tip:</strong> When taking the test, treat grammar like a math equation. Check the left side, check the right side. Do the tenses align? Is the punctuation holding two complete thoughts or just fragments? Substitute the formulas in your head.
      </p>
    </div>
  ),
  technique: "Grammar in CETs is mathematical. For Verbs/Conditionals: Look for clues like 'had' or 'would have' and plug them into the formulas. For Punctuation: Identify your Independent Clauses first. If you have two complete sentences without an 'and/but/so', you CANNOT use a comma—look for the semicolon!",
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
      question: 'Identify the grammatically correct sentence:',
      options: [
        'If I was the president, I would lower taxes.',
        'If I were the president, I would lower taxes.',
        'If I am the president, I would lower taxes.',
        'If I had been the president, I would lower taxes.'
      ],
      answer: 1,
      explanation: "This is a Second Conditional (hypothetical). According to the Subjunctive Mood rule, we always use 'were' instead of 'was' for hypothetical statements, even with singular subjects like 'I'."
    },
    {
      id: 'gram-q3',
      type: 'multiple-choice',
      question: 'Complete the sentence: By the time the ambulance arrived, the victim _________ all his blood.',
      options: [
        'lost',
        'loses',
        'has lost',
        'had lost'
      ],
      answer: 3,
      explanation: "This tests the Past Perfect tense (Past of the Past). The victim losing blood happened BEFORE the ambulance arrived in the past. Therefore, we use 'had + V3' (had lost)."
    },
    {
      id: 'gram-q4',
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
      explanation: "The colon is incorrect because 'are' should not be separated from its objects. The phrase before the colon ('My favorite colors of the rainbow are') is not a complete independent clause."
    },
    {
      id: 'gram-q5',
      type: 'multiple-choice',
      question: 'Which of the following sentences contains a "Comma Splice"?',
      options: [
        'After washing the dishes, Maria swept the floor.',
        'The sun is shining brightly, but it is quite cold outside.',
        'I love reading fantasy novels, they take me to another world.',
        'Because she was tired, she went to bed early.'
      ],
      answer: 2,
      explanation: "'I love reading fantasy novels' and 'they take me to another world' are two independent clauses. You cannot join them with just a comma. You need a semicolon, a period, or a conjunction."
    },
    {
      id: 'gram-q6',
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
      id: 'gram-q7',
      type: 'multiple-choice',
      question: 'Complete the sentence: The valedictorian delivered a stellar speech; _________, the microphone kept cutting off.',
      options: [
        'moreover',
        'therefore',
        'however',
        'for example'
      ],
      answer: 2,
      explanation: "A semicolon followed by a conjunctive adverb requires a logical connector. The speech being stellar but the mic cutting off presents a contrast, so 'however' is the correct transition."
    },
    {
      id: 'gram-q8',
      type: 'multiple-choice',
      question: 'Complete the sentence: By the end of this year, the construction company _____ the new bridge.',
      options: [
        'will finish',
        'finishes',
        'will have finished',
        'finished'
      ],
      answer: 2,
      explanation: "The phrase 'By the end of this year' indicates a deadline in the future. We use the Future Perfect tense ('will have + V3') to show an action will be completed before that time."
    },
    {
      id: 'gram-q9',
      type: 'multiple-choice',
      question: 'Complete the conditional: If you mix red and yellow, you ________ orange.',
      options: [
        'got',
        'will get',
        'get',
        'would get'
      ],
      answer: 2,
      explanation: "This is a Zero Conditional because mixing colors produces a factual result. The formula is If + Present, Present. Therefore, 'get' is correct."
    },
    {
      id: 'gram-q10',
      type: 'multiple-choice',
      question: 'What punctuation mark is used to create a strong, abrupt break in a sentence for emphasis?',
      options: [
        'Comma',
        'Semicolon',
        'Hyphen',
        'Em Dash'
      ],
      answer: 3,
      explanation: "An em dash (—) is used to create a strong break or abrupt pause for emphasis, unlike a hyphen which just connects words, or a comma which is a softer pause."
    }
  ]
};