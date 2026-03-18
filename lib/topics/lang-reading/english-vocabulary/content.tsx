/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../../types';
import { Highlight, SentenceBox } from '../../components';
import { BookA, Search, Brain, Zap, CheckCircle2 } from 'lucide-react';

export const englishVocabulary: Chapter = {
  id: 'eng-vocab-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 1: Vocabulary Mastery',
  description: 'Mastering synonyms, antonyms, and context clues for college entrance tests.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-sans mt-4">
      <div className="bg-[#FAEDCB] md:border border-[#f5e3b5] p-5 md:p-8 rounded-3xl text-slate-800">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
          <BookA className="w-8 h-8 text-slate-800" /> CET Vocabulary Secrets
        </h3>
        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
          In College Entrance Tests (CETs), madalas kang makaka-encounter ng mga "high-frequency" words like <em>deleterious</em> or <em>vociferous</em>. Pero wag kang mag-panic! You don't have to memorize the entire dictionary. Ang sikreto ay mastering <strong>Context Clues</strong> and <strong>Root Words</strong>.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight">1. Context Clues: Gamitin ang Diskarte</h4>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200">
            <h5 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-2">
              <Search className="w-5 h-5 text-indigo-500" /> Synonym Clues
            </h5>
            <p className="text-slate-600 mb-4 font-medium text-base">
              Sometimes, the sentence already provides a synonym or an explanation for the difficult word. Look for indicators like "and" or "or" na nag-durugtong sa kanila.
            </p>
            <SentenceBox>
              The manager was <Highlight color="#F7D9C4">irascible</Highlight>, constantly snapping at employees and showing his <Highlight color="#F7D9C4">hot-tempered</Highlight> nature.
            </SentenceBox>
            <p className="text-sm text-slate-500 mt-2 italic">Clue: Constant snapping = hot-tempered. Kaya "irascible" means madaling magalit.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200">
            <h5 className="font-bold text-xl text-slate-800 mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5 text-emerald-500" /> Antonym Clues
            </h5>
            <p className="text-slate-600 mb-4 font-medium text-base">
              Look for contrast indicators like <strong>but, however, although,</strong> or <strong>despite</strong>. Focus on the opposite meaning—baliktad ang ibig sabihin nito sa clue.
            </p>
            <SentenceBox>
              Although Jane is usually <Highlight color="#C9E4DE">garrulous</Highlight>, today she is surprisingly <Highlight color="#C9E4DE">quiet</Highlight>.
            </SentenceBox>
            <p className="text-sm text-slate-500 mt-2 italic">Clue: "Although" signals a contrast. Opposite of quiet = talkative. So "garrulous" ay madaldal!</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-5 md:p-8 rounded-3xl md:border border-[#C6DEF1]">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-3">
          <Zap className="w-6 h-6 text-slate-800" /> Essential CET Vocabulary
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Familiarize yourself with these commonly tested words para hindi ka mabigla sa exam:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
              <div><strong className="text-slate-800">Deleterious:</strong> <span className="text-slate-600 font-medium">Harmful or injurious (think: nakakasama).</span></div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
              <div><strong className="text-slate-800">Ignominious:</strong> <span className="text-slate-600 font-medium">Marked by shame or disgrace; humiliating.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
              <div><strong className="text-slate-800">Languish:</strong> <span className="text-slate-600 font-medium">To become weak or feeble (nanghihina).</span></div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
              <div><strong className="text-slate-800">Ubiquitous:</strong> <span className="text-slate-600 font-medium">Found everywhere; omnipresent (nasa lahat ng lugar).</span></div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
              <div><strong className="text-slate-800">Pernicious:</strong> <span className="text-slate-600 font-medium">Having a harmful effect, especially gradually (unti-unting nakakasira).</span></div>
            </li>
          </ul>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div><strong className="text-slate-800">Exculpated:</strong> <span className="text-slate-600 font-medium">To clear from guilt. (Root: <em>culp</em> = blame).</span></div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div><strong className="text-slate-800">Reticent:</strong> <span className="text-slate-600 font-medium">Silent or uncommunicative (tahimik or reserved).</span></div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div><strong className="text-slate-800">Vociferous:</strong> <span className="text-slate-600 font-medium">Vehement and loud (maingay or vocal).</span></div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div><strong className="text-slate-800">Pragmatic:</strong> <span className="text-slate-600 font-medium">Dealing with things sensibly and practically (praktikal).</span></div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
              <div><strong className="text-slate-800">Ephemeral:</strong> <span className="text-slate-600 font-medium">Lasting for a very short time (panandalian, saglit lang).</span></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Zap className="w-6 h-6 text-amber-500" /> Spelling Rules You Must Know
        </h4>
        <p className="text-slate-600 mb-6 font-medium">CETs often include trick questions on spelling. Rather than memorizing every word, learn these reliable rules:</p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200">
            <h5 className="font-bold text-xl text-slate-800 mb-3">&quot;I before E&quot; Rule</h5>
            <p className="text-slate-600 mb-3 font-medium text-base">
              Write <strong>I before E</strong> except after <strong>C</strong>, or when sounding like <strong>A</strong> as in &quot;neighbor&quot; and &quot;weigh.&quot;
            </p>
            <ul className="text-slate-600 text-sm space-y-1 font-medium">
              <li>✅ bel<Highlight color="#C9E4DE">ie</Highlight>ve, ach<Highlight color="#C9E4DE">ie</Highlight>ve, fr<Highlight color="#C9E4DE">ie</Highlight>nd</li>
              <li>✅ rec<Highlight color="#F7D9C4">ei</Highlight>ve, dec<Highlight color="#F7D9C4">ei</Highlight>ve (after C)</li>
              <li>⚠️ Exceptions: w<Highlight color="#F2C6DE">ei</Highlight>rd, s<Highlight color="#F2C6DE">ei</Highlight>ze, for<Highlight color="#F2C6DE">ei</Highlight>gn</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200">
            <h5 className="font-bold text-xl text-slate-800 mb-3">Doubling Consonants</h5>
            <p className="text-slate-600 mb-3 font-medium text-base">
              When adding a suffix starting with a vowel (-ing, -ed) to a word ending in <strong>CVC</strong> (consonant-vowel-consonant), double the final consonant.
            </p>
            <ul className="text-slate-600 text-sm space-y-1 font-medium">
              <li>✅ run → ru<Highlight color="#C9E4DE">nn</Highlight>ing, sit → si<Highlight color="#C9E4DE">tt</Highlight>ing</li>
              <li>✅ begin → begi<Highlight color="#C9E4DE">nn</Highlight>ing, occur → occu<Highlight color="#C9E4DE">rr</Highlight>ed</li>
              <li>❌ open → opening (stress not on last syllable)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Search className="w-6 h-6 text-rose-500" /> Homonyms: Same Sound, Different Meaning
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Homonyms are words that sound alike but have different meanings and spellings. These are CET favorites because they test precision:</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-slate-800">their / there / they&apos;re</strong>
            </div>
            <ul className="text-slate-600 text-sm space-y-1 font-medium">
              <li><Highlight color="#C6DEF1">Their</Highlight> = possessive (kanilang)</li>
              <li><Highlight color="#C9E4DE">There</Highlight> = place (doon)</li>
              <li><Highlight color="#F7D9C4">They&apos;re</Highlight> = they are</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-slate-800">affect / effect</strong>
            </div>
            <ul className="text-slate-600 text-sm space-y-1 font-medium">
              <li><Highlight color="#C6DEF1">Affect</Highlight> = verb (to influence)</li>
              <li><Highlight color="#C9E4DE">Effect</Highlight> = noun (result/outcome)</li>
              <li>Tip: <strong>A</strong>ffect = <strong>A</strong>ction, <strong>E</strong>ffect = <strong>E</strong>nd result</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-slate-800">principal / principle</strong>
            </div>
            <ul className="text-slate-600 text-sm space-y-1 font-medium">
              <li><Highlight color="#C6DEF1">Principal</Highlight> = head of school / main</li>
              <li><Highlight color="#C9E4DE">Principle</Highlight> = rule or belief</li>
              <li>Tip: The princip<strong>al</strong> is your p<strong>al</strong></li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <strong className="text-slate-800">complement / compliment</strong>
            </div>
            <ul className="text-slate-600 text-sm space-y-1 font-medium">
              <li><Highlight color="#C6DEF1">Complement</Highlight> = to complete</li>
              <li><Highlight color="#C9E4DE">Compliment</Highlight> = praise</li>
              <li>Tip: Compl<strong>e</strong>ment compl<strong>e</strong>tes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Brain className="w-6 h-6 text-indigo-500" /> Confusing Word Pairs
        </h4>
        <p className="text-slate-600 mb-6 font-medium">These pairs trip up students because they look or sound similar but mean completely different things:</p>
        <div className="space-y-3">
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong className="text-slate-800">Emigrate</strong>
              <p className="text-slate-600 text-sm font-medium">To <em>leave</em> a country. (<strong>E</strong>migrate = <strong>E</strong>xit)</p>
            </div>
            <div>
              <strong className="text-slate-800">Immigrate</strong>
              <p className="text-slate-600 text-sm font-medium">To <em>enter</em> a country. (<strong>I</strong>mmigrate = go <strong>I</strong>n)</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong className="text-slate-800">Stationary</strong>
              <p className="text-slate-600 text-sm font-medium">Not moving; fixed in place.</p>
            </div>
            <div>
              <strong className="text-slate-800">Stationery</strong>
              <p className="text-slate-600 text-sm font-medium">Writing materials (pens, paper). Tip: Station<strong>e</strong>ry = p<strong>e</strong>n</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong className="text-slate-800">Elicit</strong>
              <p className="text-slate-600 text-sm font-medium">To draw out a response (verb).</p>
            </div>
            <div>
              <strong className="text-slate-800">Illicit</strong>
              <p className="text-slate-600 text-sm font-medium">Illegal or forbidden (adjective).</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong className="text-slate-800">Loose</strong>
              <p className="text-slate-600 text-sm font-medium">Not tight; free from attachment.</p>
            </div>
            <div>
              <strong className="text-slate-800">Lose</strong>
              <p className="text-slate-600 text-sm font-medium">To fail to win; to misplace something. (l-o-s-e has one 'o')</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong className="text-slate-800">Accept</strong>
              <p className="text-slate-600 text-sm font-medium">To receive something or agree.</p>
            </div>
            <div>
              <strong className="text-slate-800">Except</strong>
              <p className="text-slate-600 text-sm font-medium">To exclude; apart from.</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong className="text-slate-800">Advice</strong>
              <p className="text-slate-600 text-sm font-medium">An opinion or recommendation (noun).</p>
            </div>
            <div>
              <strong className="text-slate-800">Advise</strong>
              <p className="text-slate-600 text-sm font-medium">To give advice (verb). Tip: Advi<strong>s</strong>e has a 'z' sound.</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-slate-500 italic text-base mt-4 underline decoration-[#FAEDCB] decoration-4 underline-offset-4">
        Pro-Tip: If you encounter an unfamiliar word, don&apos;t panic. Read the whole sentence and use Tagalog logic to bridge the gaps—kung negative ang vibe ng sentence, hanapin ang negative choice!
      </p>
    </div>
  ),
  technique: "When facing a difficult word, read the entire sentence and guess a simpler word that fits (fill-in-the-blank style). If your guessed word has a negative connotation, eliminate positive options from the choices.",
  quizzes: [
    {
      id: 'vocab-q1',
      type: 'multiple-choice',
      question: 'Identify the synonym for the italicized word: The deleterious effect of the chemical was immediately apparent.',
      options: [
        'beneficial',
        'helpful',
        'harmful',
        'subtle'
      ],
      answer: 2,
      explanation: "Deleterious means causing harm or damage. In this context, it describes a negative effect on a person or environment."
    },
    {
      id: 'vocab-q2',
      type: 'multiple-choice',
      question: 'Select the word closest in meaning to the underlined word: Jacqueline is an irascible girl who frequently has tantrums.',
      options: [
        'calm',
        'short-tempered',
        'cheerful',
        'jolly'
      ],
      answer: 1,
      explanation: "The context clue 'frequently has tantrums' implies that she is easily angered or short-tempered (irascible)."
    },
    {
      id: 'vocab-q3',
      type: 'multiple-choice',
      question: 'Choose the word OPPOSITE in meaning to the underlined word: The garrulous students were separated to prevent them from talking.',
      options: [
        'talkative',
        'quiet',
        'loud',
        'articulate'
      ],
      answer: 1,
      explanation: "The context indicates the students were 'talking' (garrulous). Since we need the opposite, 'quiet' is the correct answer."
    },
    {
      id: 'vocab-q4',
      type: 'multiple-choice',
      question: 'Select the word with the same meaning as the italicized word: Evidence was found that exculpated the defendant from the crime.',
      options: [
        'convicted',
        'blamed',
        'cleared of guilt',
        'interrogated'
      ],
      answer: 2,
      explanation: "Exculpated means to clear from guilt. The root word 'culp' refers to blame, and 'ex-' means out of."
    },
    {
      id: 'vocab-q5',
      type: 'multiple-choice',
      question: 'His ruffian behavior led to his eventual expulsion from the academy. (Closest meaning)',
      options: [
        'polite',
        'brilliant',
        'violent and lawless',
        'lovable'
      ],
      answer: 2,
      explanation: "A ruffian is a person who behaves in a violent or lawless way. The expulsion suggests his behavior was severe."
    },
    {
      id: 'vocab-q6',
      type: 'multiple-choice',
      question: 'Choose the correctly spelled word:',
      options: [
        'occurence',
        'occurrence',
        'occurance',
        'occurrance'
      ],
      answer: 1,
      explanation: "The correct spelling is 'occurrence'. Remember the doubling rule: occur ends in CVC with stress on the last syllable, so the R doubles (occurred, occurrence)."
    },
    {
      id: 'vocab-q7',
      type: 'multiple-choice',
      question: 'The new policy will __________ all employees starting next month.',
      options: [
        'effect',
        'affect',
        'affective',
        'effective'
      ],
      answer: 1,
      explanation: "'Affect' is a verb meaning to influence. 'Effect' is typically a noun (the result). Since we need a verb here ('will ___'), 'affect' is correct."
    },
    {
      id: 'vocab-q8',
      type: 'multiple-choice',
      question: 'The teacher asked the students to buy new __________ for the art class.',
      options: [
        'stationary',
        'stationery',
        'stationerry',
        'stationairy'
      ],
      answer: 1,
      explanation: "'Stationery' (with an E) refers to writing/art materials. 'Stationary' (with an A) means not moving. Tip: stationEry = pEn and papEr."
    },
    {
      id: 'vocab-q9',
      type: 'multiple-choice',
      question: 'Be careful not to __________ your keys in the crowded market.',
      options: [
        'loose',
        'lose',
        'loss',
        'lost'
      ],
      answer: 1,
      explanation: "'Lose' is the verb meaning to misplace something. 'Loose' is an adjective meaning not tight."
    },
    {
      id: 'vocab-q10',
      type: 'multiple-choice',
      question: 'I would strongly __________ you to review your notes before the exam.',
      options: [
        'advice',
        'advise',
        'advises',
        'advised'
      ],
      answer: 1,
      explanation: "We need a verb here. 'Advise' is the verb form, while 'advice' is the noun."
    }
  ]
};
