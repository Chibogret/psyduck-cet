import React from 'react';
import { motion } from 'motion/react';

export const Highlight = ({ children, color = '#fde047' }: { children: React.ReactNode, color?: string }) => (
  <motion.span
    initial={{ backgroundColor: 'transparent' }}
    whileInView={{ backgroundColor: color }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="px-1 rounded font-semibold"
  >
    {children}
  </motion.span>
);

export type QuestionType =
  | 'multiple-choice'
  | 'error-identification'
  | 'analogy'
  | 'sentence-combining'
  | 'paragraph-organization'
  | 'context-clues'
  | 'fill-in-the-blank';

export interface QuizQuestion {
  type: QuestionType;
  question: string;
  paragraph?: string;
  sentence?: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Chapter {
  id: string;
  title: string;
  content: React.ReactNode;
  technique: string;
  quizzes: QuizQuestion[];
}

export const chapters: Chapter[] = [
  {
    id: 'conditionals',
    title: 'Chapter 1: The Art of Conditionals',
    content: (
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Welcome to our first lecture, class! Today, we&apos;re tackling <strong>Conditionals</strong>. Madalas itong lumabas sa UPCAT at iba pang entrance tests, and it&apos;s a common trap for many students. Conditionals are simply &quot;If... then...&quot; statements. They describe the result of something that might happen or might have happened.
        </p>
        <p>Let&apos;s break them down into four main types. Pay close attention to the verb tenses!</p>
        <ul className="list-none space-y-6 mt-4">
          <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">Zero Conditional</h4>
            <p className="mb-2 text-stone-600">Used for general truths and habits. Kapag laging totoo.</p>
            <p className="font-mono text-sm bg-stone-100 p-2 rounded mb-3">If + present simple, present simple</p>
            <p className="italic">Example: If you <Highlight color="#bbf7d0">add</Highlight> two and two, you <Highlight color="#bbf7d0">get</Highlight> four.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">First Conditional</h4>
            <p className="mb-2 text-stone-600">Used for possible or likely things in the future.</p>
            <p className="font-mono text-sm bg-stone-100 p-2 rounded mb-3">If + present simple, will + infinitive</p>
            <p className="italic">Example: If it <Highlight color="#bbf7d0">rains</Highlight> later, we <Highlight color="#bbf7d0">will stay</Highlight> at home.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">Second Conditional</h4>
            <p className="mb-2 text-stone-600">Used for impossible things in the present or unlikely things in the future. (Yung mga &quot;sana&quot; moments natin).</p>
            <p className="font-mono text-sm bg-stone-100 p-2 rounded mb-3">If + past simple, would + infinitive</p>
            <p className="italic">Example: If I <Highlight color="#fef08a">won</Highlight> the lottery, I <Highlight color="#fef08a">would sail</Highlight> around the world.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">Third Conditional</h4>
            <p className="mb-2 text-stone-600">Used for things that didn&apos;t happen in the past and their imaginary results. (Yung mga regrets!).</p>
            <p className="font-mono text-sm bg-stone-100 p-2 rounded mb-3">If + past perfect, would/wouldn&apos;t have + past participle</p>
            <p className="italic">Example: If you <Highlight color="#fecaca">had told</Highlight> me about the meeting, I <Highlight color="#fecaca">would have come</Highlight>.</p>
          </li>
        </ul>
      </div>
    ),
    technique: "Professor's Tip: Always identify the tense in the 'If' clause to determine the correct tense in the main clause. Memorize the pairings: Present-Present (Zero), Present-Will (First), Past-Would (Second), Past Perfect-Would Have (Third). Don't mix them up!",
    quizzes: [
      {
        type: 'fill-in-the-blank',
        question: 'If we __________ harder we would have passed the UPCAT.',
        options: ['study', 'had studied', 'studied', 'have studied'],
        answer: 1,
        explanation: "Look at the main clause: 'would have passed'. This is 'would have + past participle', which is the signature of the Third Conditional. Therefore, the 'if' clause MUST use the past perfect tense: 'had studied'."
      }
    ]
  },
  {
    id: 'future-tenses',
    title: 'Chapter 2: Future Tenses',
    content: (
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Let&apos;s move on to Future Tenses. Many students just use &quot;will&quot; for everything, but there&apos;s nuance here that entrance exams love to test.
        </p>
        <ul className="list-none space-y-6 mt-4">
          <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">Future Perfect Tense</h4>
            <p className="mb-2 text-stone-600">Used for actions indicating a sense of completion at a certain time in the future. It happens BEFORE another action or specific time in the future.</p>
            <p className="font-mono text-sm bg-stone-100 p-2 rounded mb-3">will have + past participle</p>
            <p className="italic">Example: She <Highlight color="#bbf7d0">will have finished</Highlight> the project before tomorrow.</p>
            <p className="italic">Example: I <Highlight color="#bbf7d0">will have gotten</Highlight> my degree by 2022.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">Future Continuous Tense</h4>
            <p className="mb-2 text-stone-600">Used for actions that will be ongoing at a specific time in the future.</p>
            <p className="font-mono text-sm bg-stone-100 p-2 rounded mb-3">will be + verb-ing</p>
            <p className="italic">Example: The workers <Highlight color="#fef08a">will be painting</Highlight> the wall for the next two days.</p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">Simple Future Tense</h4>
            <p className="mb-2 text-stone-600">Used for simple predictions, promises, or decisions made at the moment of speaking.</p>
            <p className="font-mono text-sm bg-stone-100 p-2 rounded mb-3">will/shall + base verb</p>
            <p className="italic">Example: I <Highlight color="#fecaca">shall write</Highlight> an essay.</p>
          </li>
        </ul>
      </div>
    ),
    technique: "Professor's Tip: Look for time markers! 'By the time', 'before', or 'by [Year]' usually signal the Future Perfect. 'For the next [duration]' or 'tomorrow at [time]' usually signal Future Continuous.",
    quizzes: [
      {
        type: 'fill-in-the-blank',
        question: 'By the time the operation ends, Billy _____ a total of 1,300 hours for his friend and _____ countless outdated magazines in the emergency room waiting area.',
        options: [
          'will have waited...will have read',
          'have waited...have read',
          'waited...read',
          'will have waited...read'
        ],
        answer: 0,
        explanation: "The phrase 'By the time the operation ends' sets a specific point in the future. The actions of waiting and reading will be COMPLETED before that point. Therefore, we need the Future Perfect tense for both: 'will have waited' and 'will have read'."
      }
    ]
  },
  {
    id: 'punctuation',
    title: 'Chapter 3: Punctuation Mastery',
    content: (
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Let&apos;s talk about punctuation marks. Many students lose points because they interchange semicolons and colons. Let&apos;s clear that up today.
        </p>
        
        <h3 className="text-2xl font-bold font-serif mt-8 mb-4">The Semicolon (;)</h3>
        <p>Think of a semicolon as a &quot;super comma&quot; or a &quot;soft period&quot;. It has two main jobs:</p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>To separate items in a complex list</strong> (especially when items already contain commas).<br/>
            <em>Correct:</em> I bought shiny, ripe apples<Highlight color="#fed7aa">;</Highlight> small, sweet, juicy grapes<Highlight color="#fed7aa">;</Highlight> and firm pears.
          </li>
          <li>
            <strong>To join two closely related independent clauses</strong> (sentences that can stand alone) without using a conjunction like &quot;and&quot; or &quot;but&quot;.<br/>
            <em>Correct:</em> Sarah wanted to see the concert<Highlight color="#fed7aa">;</Highlight> she had been looking forward to it for a long time.
          </li>
        </ol>

        <h3 className="text-2xl font-bold font-serif mt-8 mb-4">The Colon (:)</h3>
        <p>A colon is like a trumpet announcing what comes next. It follows an independent clause and introduces something.</p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>To introduce a list, noun, quote, or explanation.</strong><br/>
            <em>Example:</em> My roommate gave me the things I needed most<Highlight color="#bfdbfe">:</Highlight> companionship and quiet.
          </li>
          <li>
            <strong>To join sentences</strong> when the second sentence summarizes or explains the first.<br/>
            <em>Example:</em> Life is like a puzzle<Highlight color="#bfdbfe">:</Highlight> half the fun is in trying to work it out.
          </li>
        </ul>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
          <p className="text-red-800 font-bold">Common Mistake Alert!</p>
          <p className="text-red-700">Never use a colon between a verb and its object, or after phrases like &quot;such as&quot; or &quot;including&quot;. The phrase before the colon MUST be a complete thought.</p>
          <p className="text-red-700 line-through mt-2">Incorrect: There are many types of paper, including: college ruled and plain.</p>
        </div>
      </div>
    ),
    technique: "Professor's Tip: Before placing a colon, check the words that come right before it. If they don't form a complete sentence on their own, you probably shouldn't use a colon there. For semicolons, ensure BOTH sides can stand alone as complete sentences.",
    quizzes: [
      {
        type: 'error-identification',
        question: 'Identify the sentence with the CORRECT punctuation.',
        options: [
          'The very best peaches are: those that are grown in Georgia.',
          'I went to the grocery store today; I bought a ton of fruit.',
          'My favorite cake is made of: carrots, flour, and butter.',
          'There are many types of paper, including: college ruled and plain.'
        ],
        answer: 1,
        explanation: "Option B correctly uses a semicolon to join two independent clauses. Options A, C, and D incorrectly use a colon after a verb ('are'), a preposition ('of'), and 'including', respectively. The text before a colon must be a complete thought."
      }
    ]
  },
  {
    id: 'analogies',
    title: 'Chapter 4: Word Analogies',
    content: (
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Word analogies test your vocabulary and your ability to identify relationships between concepts. You will see a pair of words, and you must find another pair with the exact same relationship.
        </p>
        <p>
          The format usually looks like this: <strong>A : B :: C : D</strong> (A is to B as C is to D).
        </p>
        <h3 className="text-2xl font-bold font-serif mt-8 mb-4">Common Analogy Relationships</h3>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <strong>Type / Category:</strong> <Highlight>ode : poetry</Highlight> (An ode is a type of poetry)
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <strong>Group / Member:</strong> <Highlight>herd : cattle</Highlight> (A herd is a group of cattle)
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <strong>Object / Location:</strong> <Highlight>gun : holster</Highlight> (A gun is kept in a holster)
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <strong>Adult / Young:</strong> <Highlight>lion : cub</Highlight> (A cub is a young lion)
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <strong>Sport / Target:</strong> <Highlight>golf : hole</Highlight> (In golf, the target is the hole)
          </li>
        </ul>
      </div>
    ),
    technique: "Professor's Tip: Form a clear, specific sentence connecting the first pair of words. Then, plug the answer choices into that exact same sentence structure. If it sounds right and makes logical sense, you've found your answer!",
    quizzes: [
      {
        type: 'analogy',
        question: 'ode : poetry ;',
        options: [
          'theme : essay',
          'conflict : short story',
          'fable : prose',
          'tragedy : drama'
        ],
        answer: 3,
        explanation: "Let's form a sentence: 'An ode is a specific genre/type of poetry.' Now let's test the options. Is a theme a type of essay? No. Is a conflict a type of short story? No. Is a fable a type of prose? Yes, but let's check D. Is a tragedy a specific genre/type of drama? Yes. Between C and D, 'tragedy' and 'drama' are more closely related as literary genres just like 'ode' and 'poetry'. Therefore, tragedy : drama is the best fit."
      },
      {
        type: 'analogy',
        question: 'herd : cattle ;',
        options: [
          'colony : termites',
          'pack : peacocks',
          'hive : wolves',
          'covey : whales'
        ],
        answer: 0,
        explanation: "Sentence: 'A group of cattle is called a herd.' Let's test: A group of termites is called a colony (True). A group of peacocks is a muster/ostentation, not a pack. A group of wolves is a pack, not a hive. A group of whales is a pod, not a covey. Answer is A."
      },
      {
        type: 'analogy',
        question: 'gun : holster ;',
        options: [
          'sword : scabbard',
          'sword : slay',
          'sword : bayonet',
          'sword : cadet'
        ],
        answer: 0,
        explanation: "Sentence: 'A gun is sheathed or stored in a holster.' A sword is sheathed or stored in a scabbard."
      }
    ]
  },
  {
    id: 'spot-the-error',
    title: 'Chapter 5: Spot the Error',
    content: (
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          &quot;Spot the Error&quot; questions are a staple in the UPCAT. They test your mastery of grammar rules, specifically Subject-Verb Agreement, Pronoun Usage, and Idioms.
        </p>
        <p>Let&apos;s look at some common pitfalls:</p>
        
        <div className="space-y-6 mt-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">1. Intervening Phrases</h4>
            <p className="mb-2 text-stone-600">Don&apos;t be fooled by phrases that come between the subject and the verb.</p>
            <p className="italic text-red-600 line-through">Recent advances in basic neurobiological research <Highlight color="#fecaca">has</Highlight> established...</p>
            <p className="italic text-green-700">Recent advances in basic neurobiological research <Highlight color="#bbf7d0">have</Highlight> established...</p>
            <p className="text-sm mt-2 text-stone-500">The subject is &quot;advances&quot; (plural), so the verb must be &quot;have&quot;. Ignore &quot;in basic neurobiological research&quot;.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">2. Pronoun Case</h4>
            <p className="mb-2 text-stone-600">Know when to use &apos;I&apos; vs &apos;me&apos;.</p>
            <p className="italic text-red-600 line-through">Everyone in the room except Monica and <Highlight color="#fecaca">I</Highlight> has...</p>
            <p className="italic text-green-700">Everyone in the room except Monica and <Highlight color="#bbf7d0">me</Highlight> has...</p>
            <p className="text-sm mt-2 text-stone-500">&quot;Except&quot; acts as a preposition here, so it requires an object pronoun (&quot;me&quot;), not a subject pronoun (&quot;I&quot;).</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h4 className="font-bold text-xl mb-2 font-serif text-stone-800">3. Inverted Sentences</h4>
            <p className="mb-2 text-stone-600">Sometimes the verb comes before the subject.</p>
            <p className="italic text-red-600 line-through">Never before <Highlight color="#fecaca">has</Highlight> so many people...</p>
            <p className="italic text-green-700">Never before <Highlight color="#bbf7d0">have</Highlight> so many people...</p>
            <p className="text-sm mt-2 text-stone-500">The subject is &quot;people&quot; (plural), so the verb must be &quot;have&quot;.</p>
          </div>
        </div>
      </div>
    ),
    technique: "Professor's Tip: When you see a long sentence, mentally cross out prepositional phrases (like 'in the room', 'of the animals'). This isolates the true subject and makes finding the correct verb much easier.",
    quizzes: [
      {
        type: 'error-identification',
        question: 'Select the part of the sentence that contains a grammatical error. If there is no error, select "NO ERROR".',
        sentence: 'The two people in charge of the buffet table, Marcus and me, will pay for the broken glasswares.',
        options: [
          'The two people in charge of the buffet table,',
          'Marcus and me, will pay for the broken',
          'glasswares.',
          'NO ERROR'
        ],
        answer: 1,
        explanation: "The error is 'Marcus and me'. This phrase is an appositive renaming the subject 'The two people'. Since 'people' is the subject, the appositive must also be in the subjective case: 'Marcus and I'."
      },
      {
        type: 'error-identification',
        question: 'Select the part of the sentence that contains a grammatical error.',
        sentence: 'None of the animals in the zoo is in their natural habitat, but there are plans to remedy the situation.',
        options: [
          'None of the animals in the zoo is in their natural',
          'habitat, but there are plans to remedy the',
          'situation.',
          'NO ERROR'
        ],
        answer: 0,
        explanation: "The error is 'is in their'. 'None' can be singular or plural depending on what it refers to. Here it refers to 'animals' (plural), so it should be 'None of the animals... are in their...'. Alternatively, if treated as singular, it should be 'is in its'. Mixing singular 'is' with plural 'their' is incorrect."
      }
    ]
  },
  {
    id: 'filipino-grammar',
    title: 'Chapter 6: Wastong Gamit ng Salita',
    content: (
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Huwag nating kalimutan ang ating sariling wika! Maraming nalilito sa mga simpleng tuntunin sa Filipino. Let&apos;s review some common confusing pairs.
        </p>
        
        <h3 className="text-2xl font-bold font-serif mt-8 mb-4">Daw/Din vs. Raw/Rin</h3>
        <p>The rule is based on the last letter of the preceding word.</p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            Gamitin ang <strong>RAW at RIN</strong> kung ang sinusundang salita ay nagtatapos sa patinig (vowels: a, e, i, o, u) o malapatinig (w, y).<br/>
            <em>Halimbawa:</em> Gusto <Highlight color="#bbf7d0">raw</Highlight> nila makita ang dagat. (Nagtatapos sa &apos;o&apos; ang gusto). May kalabaw <Highlight color="#bbf7d0">rin</Highlight> si Aleah. (Nagtatapos sa &apos;w&apos; ang kalabaw).
          </li>
          <li>
            Gamitin ang <strong>DAW at DIN</strong> kung ang sinusundang salita ay nagtatapos sa katinig (consonants).<br/>
            <em>Halimbawa:</em> Ahas <Highlight color="#fef08a">daw</Highlight> ang nakita nila. Nauntog <Highlight color="#fef08a">din</Highlight> si Aleah.
          </li>
          <li>
            <strong>Special Case:</strong> Kung nagtatapos sa <em>ra, re, ri, ro, ru, raw, ray</em> ang naunang salita, <strong>D</strong> ang gagamitin imbis na R para hindi awkward pakinggan.<br/>
            <em>Halimbawa:</em> Ilang araw <Highlight color="#fecaca">daw</Highlight> na nasa ospital si Betty.
          </li>
        </ul>

        <h3 className="text-2xl font-bold font-serif mt-8 mb-4">Taga vs. Tiga</h3>
        <p>This is a very common mistake in spoken Taglish.</p>
        <p className="bg-stone-100 p-4 rounded-lg border-l-4 border-stone-800">
          <strong>Walang unlaping &quot;tiga-&quot;.</strong> Laging <strong>&quot;taga-&quot;</strong> ang tamang ginagamit.<br/>
          <em>Tama:</em> Taga-Negros, tagapag-alaga, tagaluto.<br/>
          <em>Mali:</em> Tiga-Negros, tigapag-alaga, tigaluto.
        </p>

        <h3 className="text-2xl font-bold font-serif mt-8 mb-4">Bitiw vs. Bitaw</h3>
        <p>Magkaiba ang kahulugan ng dalawang ito!</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Bitaw:</strong> Ginagamit sa pagsasabong ng manok.</li>
          <li><strong>Bitiw / Nabitiwan:</strong> Pagkaalis o pagkawala sa pagkakahawak (to let go).</li>
        </ul>
      </div>
    ),
    technique: "Professor's Tip: When in doubt with daw/raw, look at the letter immediately preceding it. If your mouth is open (vowels, w, y), use the 'R' sound. If your mouth is closed or restricted (consonants), use the 'D' sound. It's all about phonetics and ease of pronunciation!",
    quizzes: [
      {
        type: 'fill-in-the-blank',
        question: '_____________-Negros ang tagapag-alaga ni Norma.',
        options: ['Taga', 'Tiga', 'Mala', 'Parang'],
        answer: 0,
        explanation: "Walang unlaping 'tiga-' sa wikang Filipino. Ang tamang unlapi para tukuyin ang pinagmulan o tungkulin ay 'taga-'."
      },
      {
        type: 'fill-in-the-blank',
        question: '________________ni Aling Nena ang mga pinamalengke dahil sa takot.',
        options: ['Nabitawan', 'Nabitiwan', 'Nalaglag', 'Nabuhos'],
        answer: 1,
        explanation: "Ang 'bitaw' ay para sa sabong. Ang 'bitiw' o 'nabitiwan' ay ang tamang pandiwa para sa pagkawala ng hawak sa isang bagay."
      },
      {
        type: 'fill-in-the-blank',
        question: 'Nakipaghuntahan na naman _____ ang kasama mo _____ sa kabilang ibayo.',
        options: ['raw, roon', 'raw, doon', 'daw, roon', 'daw, doon'],
        answer: 2,
        explanation: "Ang unang puwang ay sumusunod sa salitang 'naman' (nagtatapos sa katinig na 'n'), kaya 'daw' dapat. Ang ikalawang puwang ay sumusunod sa 'mo' (nagtatapos sa patinig na 'o'), kaya 'roon' dapat. Kaya ang tamang sagot ay 'daw, roon'."
      }
    ]
  },
  {
    id: 'vocabulary',
    title: 'Chapter 7: Vocabulary & Context Clues',
    content: (
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          You won&apos;t know every word on the exam, and that&apos;s okay! The test makers leave clues in the sentence to help you figure out the meaning of difficult words. This is called using <strong>Context Clues</strong>.
        </p>
        
        <h3 className="text-2xl font-bold font-serif mt-8 mb-4">Types of Context Clues</h3>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <strong>1. Definition/Explanation Clues:</strong> The meaning is explained right in the sentence.<br/>
            <em>Example:</em> Asphyxia, <Highlight>an unconscious state caused by lack of oxygen</Highlight>, can be fatal.
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <strong>2. Synonym/Restatement Clues:</strong> A similar word is used nearby.<br/>
            <em>Example:</em> The <Highlight color="#bbf7d0">vociferous</Highlight> crowd was so <Highlight color="#bbf7d0">loud and talkative</Highlight> that I couldn&apos;t hear myself think.
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <strong>3. Antonym/Contrast Clues:</strong> Look for words like &apos;but&apos;, &apos;however&apos;, &apos;although&apos;.<br/>
            <em>Example:</em> Although her sister was outgoing, Maria was <Highlight color="#fecaca">reticent</Highlight> and <Highlight color="#fecaca">meek</Highlight>.
          </li>
          <li className="bg-white p-4 rounded-lg shadow-sm border border-stone-200">
            <strong>4. Inference Clues:</strong> You have to guess based on the situation.<br/>
            <em>Example:</em> The corrupt policeman was discharged from service due to his <Highlight color="#fef08a">ignominious</Highlight> act of accepting bribes. (Accepting bribes is bad/disgraceful, so ignominious must mean something negative).
          </li>
        </ul>

        <h3 className="text-2xl font-bold font-serif mt-8 mb-4">Filipino Vocabulary</h3>
        <p>Apply the same techniques to Filipino words!</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Garil:</strong> Utal o bulol magsalita.</li>
          <li><strong>Hungkag:</strong> Walang laman, salat, o empty.</li>
          <li><strong>Maantak:</strong> Mahapdi (usually referring to a wound).</li>
          <li><strong>Basa ang papel:</strong> Sira na ang reputasyon, ayaw nang paniwalaan.</li>
          <li><strong>Talo-saling:</strong> Sensitibo, madaling masaktan, o mahiyain.</li>
        </ul>
      </div>
    ),
    technique: "Professor's Tip: When faced with a difficult word, blank it out. Read the sentence with a 'blank' and guess what word would make sense in that spot. Then, look at the choices and pick the one that matches your guess.",
    quizzes: [
      {
        type: 'context-clues',
        question: 'Choose the word closest to the meaning to the underlined word: The corrupt policeman was discharged from service due to his IGNOMINIOUS act of accepting bribes.',
        options: ['honorable', 'disrespectable', 'unwanted', 'remarkable'],
        answer: 1,
        explanation: "Accepting bribes is a shameful act that gets a policeman fired. Therefore, 'ignominious' means shameful or disrespectable."
      },
      {
        type: 'context-clues',
        question: 'Choose the word opposite in meaning to the underlined word: The GARRULOUS girls were distanced from each other.',
        options: ['mute', 'talkative', 'behaved', 'quiet'],
        answer: 3,
        explanation: "Why were the girls distanced from each other? Probably because they were talking too much. So 'garrulous' means talkative. The question asks for the OPPOSITE meaning. The opposite of talkative is 'quiet'."
      },
      {
        type: 'context-clues',
        question: 'Piliin ang salitang kasing-kahulugan ng salitang nakapahilig: Dahil sa paulit-ulit na pagsisinungaling, BASA ANG PAPEL niya sa karamihan.',
        options: ['ayaw nang paniwalaan', 'ayaw nang pagbigyan', 'ayaw nang pakinggan', 'ayaw nang makasama'],
        answer: 0,
        explanation: "Ang idyomang 'basa ang papel' ay nangangahulugang sira na ang reputasyon o hindi na pinagkakatiwalaan dahil sa masamang gawain, tulad ng pagsisinungaling."
      }
    ]
  },
  {
    id: 'sentence-combining',
    title: 'Chapter 8: Sentence Combining',
    content: (
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Sentence combining questions test your ability to create clear, concise, and grammatically correct sentences from shorter, choppy ones.
        </p>
        <p>
          The goal is to avoid redundancy and ensure the logical relationship between the ideas is preserved.
        </p>
        <h3 className="text-2xl font-bold font-serif mt-8 mb-4">Key Strategies</h3>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>Use Appositives:</strong> An appositive is a noun or noun phrase that renames another noun right beside it. It&apos;s a great way to combine sentences.
            <br/><em>Example:</em> The old brain is called the reptilian brain. It does not know passion.
            <br/><em>Combined:</em> The old brain, <Highlight color="#bbf7d0">called the reptilian brain</Highlight>, does not know passion.
          </li>
          <li><strong>Use Conjunctions Wisely:</strong> Make sure the conjunction (although, because, and, but) accurately reflects the relationship (contrast, cause/effect, addition).</li>
          <li><strong>Avoid Awkward Phrasing:</strong> If an option sounds clunky or uses unnecessary words (like &quot;whereupon this idea is...&quot;), it&apos;s probably wrong.</li>
        </ul>
      </div>
    ),
    technique: "Professor's Tip: Read the original sentences and determine their relationship. Are they contrasting? Is one explaining the other? Then, look for the option that expresses this relationship most concisely and naturally. The shortest answer isn't always right, but the clearest one usually is.",
    quizzes: [
      {
        type: 'sentence-combining',
        question: 'Choose the sentence that best combines the underlined sentences.',
        sentence: 'Plato believed that boys and girls should be given an equal education. This idea is rarely mentioned in textbooks.',
        options: [
          'Plato believed that boys and girls should be given an equal education, where this idea is rarely mentioned in textbooks.',
          'Plato believed that boys and girls should be given an equal education, an idea that is rarely mentioned in textbooks.',
          'Believing that boys and girls should be given an equal education, Plato’s idea is rarely mentioned in textbooks.',
          'Plato believed that boys and girls should be given an equal education, whereupon this idea is rarely mentioned in textbooks.'
        ],
        answer: 1,
        explanation: "Option B uses an appositive phrase ('an idea that is rarely mentioned...') to smoothly and concisely combine the two sentences without changing the meaning or introducing awkward conjunctions like 'where' or 'whereupon'."
      },
      {
        type: 'sentence-combining',
        question: 'Choose the sentence that best combines the underlined sentences.',
        sentence: 'The old brain is called the reptilian brain. It does not know passion, but only stolid obedience to its own genetic dictates.',
        options: [
          'After the old brain is called the reptilian brain, it does not know passion, but only stolid obedience to its own genetic dictates.',
          'The old brain, called the reptilian brain, does not know passion, but only stolid obedience to its own genetic dictates.',
          'The old brain is called the reptilian brain, whereupon it does not know passion, but only stolid obedience to its own genetic dictates.',
          'Unless the old brain, called the reptilian brain, does not know passion, only stolid obedience to its own genetic dictates.'
        ],
        answer: 1,
        explanation: "Option B correctly uses an appositive ('called the reptilian brain') to combine the sentences concisely. The other options introduce illogical conjunctions ('After', 'whereupon', 'Unless')."
      }
    ]
  }
];
