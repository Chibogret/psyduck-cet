/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../../types';
import { Highlight, SentenceBox } from '../../components';
import { BookOpen, Star, AlertTriangle, BookMarked, Search, GraduationCap } from 'lucide-react';

export const filipinoWika: Chapter = {
  id: 'fil-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 7: Balarila at Retorika',
  description: 'Mastering Filipino Grammar (Balarila) and Rhetoric (Retorika) for Academic Excellence.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-sans mt-4">
      <div className="bg-[#FAEDCB] md:border border-[#f5e3b5] p-5 md:p-8 rounded-3xl text-slate-800">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
          <GraduationCap className="w-8 h-8 text-slate-800" /> Academic Proficiency
        </h3>
        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
          The Filipino section of College Entrance Tests (CETs) often proves challenging because it demands a formal understanding of <strong>Balarila</strong> (Grammar) and <strong>Retorika</strong> (Rhetoric). Beyond casual conversation, you must master specific linguistic nuances that define formal Filipino.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-indigo-500" /> Bahagi ng Pananalita (Parts of Speech)
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Mahalagang matukoy ang papel ng bawat salita sa pangungusap upang masigurado ang wastong gamit at estruktura.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">1. Pangngalan (Noun)</strong>
            <span className="text-slate-600 text-sm font-medium">Ngalan ng tao, hayop, pook, bagay, o pangyayari.<br /><em className="text-slate-500">Hal: lapis, Boracay, <Highlight color="#C6DEF1">katalinuhan</Highlight></em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">2. Panghalip (Pronoun)</strong>
            <span className="text-slate-600 text-sm font-medium">Salitang panghalili sa pangngalan.<br /><em className="text-slate-500">Hal: <Highlight color="#C9E4DE">ako</Highlight>, siya, tayo, ito</em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">3. Pandiwa (Verb)</strong>
            <span className="text-slate-600 text-sm font-medium">Nagsasaad ng kilos o galaw.<br /><em className="text-slate-500">Hal: <Highlight color="#F7D9C4">tumakbo</Highlight>, kumain, nag-aral</em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">4. Pang-uri (Adjective)</strong>
            <span className="text-slate-600 text-sm font-medium">Naglalarawan sa pangngalan o panghalip.<br /><em className="text-slate-500">Hal: <Highlight color="#F2C6DE">matalino</Highlight>, masarap, asul</em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">5. Pang-abay (Adverb)</strong>
            <span className="text-slate-600 text-sm font-medium">Naglalarawan sa pandiwa, pang-uri, o kapwa pang-abay.<br /><em className="text-slate-500">Hal: <Highlight color="#C6DEF1">mabilis</Highlight> na tumakbo</em></span>
          </div>
          <div className="bg-white p-5 rounded-2xl md:border border-slate-200">
            <strong className="text-slate-800 block mb-1">6. Pang-ugnay (Connectors)</strong>
            <span className="text-slate-600 text-sm font-medium">Pangatnig (conjunction), Pang-ukol (preposition), at Pang-angkop.<br /><em className="text-slate-500">Hal: at, dahil, <Highlight color="#C9E4DE">sa</Highlight>, para kay</em></span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-rose-500" /> Phonological Rules: Daw/Din vs. Raw/Rin
        </h4>
        <p className="text-slate-600 mb-6 font-medium">In formal Filipino, the shift between 'D' and 'R' is governed by the sound that precedes it. This is designed for <em>euphony</em>—making the language sound pleasant and fluid.</p>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200 shadow-sm">
            <h5 className="font-bold text-xl text-slate-800 mb-2">Rule for D (Daw / Din)</h5>
            <p className="text-slate-600 mb-4 text-base font-medium">
              Ginagamit kung ang sinusundang salita ay nagtatapos sa <strong>Katinig (Consonant)</strong>, maliban sa 'W' at 'Y'.
            </p>
            <SentenceBox>
              "Masarap <Highlight color="#F7D9C4">daw</Highlight> ang luto ni Nanay." (Nagtatapos sa 'p' ang "masarap")
            </SentenceBox>
          </div>
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200 shadow-sm">
            <h5 className="font-bold text-xl text-slate-800 mb-2">Rule for R (Raw / Rin)</h5>
            <p className="text-slate-600 mb-4 text-base font-medium">
              Used if the preceding word ends in a <strong>Vowel (Patinig: a, e, i, o, u)</strong> or the semi-vowels <strong>W and Y</strong>.
            </p>
            <SentenceBox>
              "Siya <Highlight color="#C9E4DE">raw</Highlight> ang nanalo sa patimpalak." (Nagtatapos sa patinig na 'a')
            </SentenceBox>
            <SentenceBox>
              "May sitaw <Highlight color="#C9E4DE">rin</Highlight> sa palengke." (Nagtapos sa 'w')
            </SentenceBox>
          </div>
          <div className="bg-amber-50 p-6 rounded-2xl md:border border-amber-200">
            <h5 className="font-bold text-xl text-amber-800 mb-2">Fundamental Exception!</h5>
            <p className="text-amber-700 mb-4 text-base font-medium">
              Kung ang sinusundang salita ay nagtatapos sa <em>RA, RE, RI, RO, RU, RAW, o RAY</em>, dapat gamitin ang 'D' para hindi maging paulit-ulit ang tunog ng 'R'.
            </p>
            <SentenceBox>
              "Ang bawat araw <Highlight color="#FDE68A">daw</Highlight> ay mahalaga." (Correct: araw DAW, not araw raw)
            </SentenceBox>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white p-5 md:p-8 rounded-3xl md:border border-[#C6DEF1]">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <BookMarked className="w-6 h-6 text-indigo-500" /> Syntactic Precision: Nang vs. Ng
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Distinguishing between 'ng' and 'nang' is a common metric for language proficiency. Follow these academic guidelines:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <strong className="text-slate-800 block text-lg border-b border-indigo-100 pb-2 mb-2">Kailan gamitin ang NG?</strong>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 font-medium marker:text-indigo-400">
              <li>Upang sagutin ang tanong na <strong>ANO</strong> (Direct Object).</li>
              <li>Nagpapakita ng pagmamay-ari (Possession).</li>
              <li>Kapag sinundan ng pangngalan o pang-uri.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <strong className="text-slate-800 block text-lg border-b border-emerald-100 pb-2 mb-2">Kailan gamitin ang NANG?</strong>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 font-medium marker:text-emerald-400">
              <li>Upang sagutin ang tanong na <strong>PAANO</strong> (Pang-abay na pamaraan).</li>
              <li>Bilang pangatnig na "noon", "upang", o "para".</li>
              <li>Para sa pag-uulit ng pandiwa (Hal: takbo nang takbo).</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Search className="w-6 h-6 text-rose-500" /> Tayutay (Figures of Speech)
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Ang Retorika ay sining ng mabisang pagpapahayag. Narito ang mga madalas lumabas sa pagsusulit:</p>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl md:border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <strong className="text-slate-800">1. Pagtutulad (Simile):</strong>
                <p className="text-slate-600 text-sm">Ginagamit ang mga salitang: <em>gaya ng, tulad ng, para ng, parang.</em></p>
                <p className="text-xs text-slate-500 italic mt-1 font-medium">"Ang kanyang tinig ay <Highlight color="#C9E4DE">parang</Highlight> anghel."</p>
              </div>
              <div>
                <strong className="text-slate-800">2. Pagwawangis (Metaphor):</strong>
                <p className="text-slate-600 text-sm">Tuwirang paghahambing na hindi gumagamit ng mga salitang paghahambing.</p>
                <p className="text-xs text-slate-500 italic mt-1 font-medium">"<Highlight color="#F7D9C4">Leon</Highlight> siya sa galit."</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <strong className="text-slate-800">3. Pagmamalabis (Hyperbole):</strong>
                <p className="text-slate-600 text-sm">Lubhang pinalalabis o pinakukulang ang katotohanan.</p>
                <p className="text-xs text-slate-500 italic mt-1 font-medium">"Umuulan ng <Highlight color="#F2C6DE">apoy</Highlight> sa tindi ng init."</p>
              </div>
              <div>
                <strong className="text-slate-800">4. Pagsasatao (Personification):</strong>
                <p className="text-slate-600 text-sm">Pagbibigay ng katangian ng tao sa mga bagay na walang buhay.</p>
                <p className="text-xs text-slate-500 italic mt-1 font-medium">"<Highlight color="#C6DEF1">Ngumiti</Highlight> ang araw sa kanya."</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-[#f8fafc] md:border border-[#F2C6DE] p-5 md:p-8 rounded-3xl">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Star className="w-6 h-6 text-rose-400" /> Advanced Idioms (Sawikain)
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Academic Filipino often utilizes idioms to express complex ideas succinctly. Familiarize yourself with these frequent CET items:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-base font-medium">
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Basa ang papel:</span> <span className="text-slate-500">Sira ang reputasyon</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Balitang-kutsero:</span> <span className="text-slate-500">Gossip / Fake news</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Balat-sibuyas:</span> <span className="text-slate-500">Highly sensitive</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Busilak ang puso:</span> <span className="text-slate-500">Pure of heart</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Buto't balat:</span> <span className="text-slate-500">Extremely thin</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Nag-aapoy ang mata:</span> <span className="text-slate-500">Furious</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Nagsunog ng kilay:</span> <span className="text-slate-500">Studied very hard</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Mababaw ang luha:</span> <span className="text-slate-500">Easily moved to cry</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Suntok sa buwan:</span> <span className="text-slate-500">Impossible dream</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Itaga sa bato:</span> <span className="text-slate-500">Remember / Promise</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Krus sa balikat:</span> <span className="text-slate-500">A burden</span></li>
          <li className="flex justify-between border-b border-slate-100 pb-1"><span>Pagputi ng uwak:</span> <span className="text-slate-500">Never</span></li>
        </ul>
      </div>

      <p className="text-slate-500 italic text-base mt-2 underline decoration-[#FAEDCB] decoration-4 underline-offset-4">
        Academic Tip: Sa pagsusulit, tignan ang konteksto. Ang Filipino ay mayaman sa pahiwatig (nuance). Practice identifying Tayutay in every reading passage you encounter!
      </p>
    </div>
  ),
  technique: "Identify the word ending immediately before daw/raw or din/rin. Remember the 'W/Y' rule—they behave like vowels even though they are technically semi-vowels. For ng vs nang, if it functions as an adverb, use NANG.",
  quizzes: [
    {
      id: 'fil-q1',
      type: 'multiple-choice',
      question: 'Dahil sa paulit-ulit na pagsisinungaling, "basa ang papel" niya sa karamihan. Ano ang ibig sabihin nito?',
      options: [
        'Ayaw nang paniwalaan / Sira ang reputasyon',
        'Binasa ang kanyang birth certificate',
        'Sikat na sikat siya',
        'Laging iniiyakan ang papel'
      ],
      answer: 0,
      explanation: "Ang 'basa ang papel' ay isang sawikain na nangangahulugang sira na ang records o reputasyon mo kaya hindi ka na mapagkakatiwalaan."
    },
    {
      id: 'fil-q2',
      type: 'spot-the-error',
      question: 'Piliin ang wastong salita: Sumigaw _____ malakas ang bata dahil sa gulat.',
      sentence: 'Sumigaw (ng/nang) malakas ang bata dahil sa gulat.',
      options: [
        'ng',
        'nang',
        'parehong pwede',
        'wala sa nabanggit'
      ],
      answer: 1,
      explanation: "Ang 'malakas' ay naglalarawan kung PAANO sumigaw ang bata, kaya ito ay isang pang-abay (adverb) na nangangailangan ng 'nang'."
    },
    {
      id: 'fil-q3',
      type: 'multiple-choice',
      question: 'Piliin ang wastong salita: Ilang araw _____ hindi pumapasok ang kaniyang kaklase?',
      options: [
        'din',
        'rin',
        'daw',
        'raw'
      ],
      answer: 2,
      explanation: "Special rule: Kahit nagtatapos sa 'W' ang salitang 'araw', dahil ito ay 'RAW', babalik tayo sa letter D ('daw') para maiwasan ang repetitive 'R' sounds."
    },
    {
      id: 'fil-q4',
      type: 'multiple-choice',
      question: 'Ano ang kasalungat (antonym) ng salitang "Matatas"?',
      options: [
        'Mabilis',
        'Utal',
        'Mahusay',
        'Malinaw'
      ],
      answer: 1,
      explanation: "Ang 'matatas' ay nangangahulugang fluent o dire-diretso magsalita. Ang kasalungat nito ay 'utal' (stuttering)."
    },
    {
      id: 'fil-q5',
      type: 'multiple-choice',
      question: 'Piliin ang tamang pang-ugnay: Nag-aral siya nang mabuti _______ makapasa sa pagsusulit.',
      options: [
        'upang',
        'sapagkat',
        'habang',
        'datapwat'
      ],
      answer: 0,
      explanation: "Ang 'upang' ay ginagamit para magsaad ng layunin o intensyon (so that/in order to)."
    },
    {
      id: 'fil-q6',
      type: 'multiple-choice',
      question: 'Alin sa mga sumusunod ang halimbawa ng "Pantukoy"?',
      options: [
        'Si / Ang',
        'Mabilis / Mabagal',
        'Bumili / Kumain',
        'Masaya / Malungkot'
      ],
      answer: 0,
      explanation: "Ang 'si' at 'ang' ay mga pantukoy (articles/markers) na ginagamit bago ang pangngalan."
    },
    {
      id: 'fil-q7',
      type: 'spot-the-error',
      question: 'Identify the error: "Ang mga bata ay masayang naglalaro sa gitna ng kalsada nanunuod ang mga magulang."',
      sentence: 'Ang mga bata ay masayang naglalaro sa gitna ng kalsada nanunuod ang mga magulang.',
      options: [
        'Ang mga bata',
        'sa gitna ng',
        'kalsada nanunuod',
        'mga magulang'
      ],
      answer: 2,
      explanation: "This is a run-on sentence. There should be a punctuation mark (like a semicolon or period) or a conjunction between 'kalsada' and 'nanunuod'."
    },
    {
      id: 'fil-q8',
      type: 'multiple-choice',
      question: 'Anong uri ng tayutay ang ginamit sa pangungusap: "Ang mga mata niya ay bituin sa ningning"?',
      options: [
        'Pagtutulad',
        'Pagwawangis',
        'Pagmamalabis',
        'Pagsasatao'
      ],
      answer: 1,
      explanation: "Ito ay Pagwawangis (Metaphor) dahil direkta ang paghahambing ng 'mata' sa 'bituin' nang hindi gumagamit ng mga salitang gaya ng 'parang' o 'tulad ng'."
    },
    {
      id: 'fil-q9',
      type: 'multiple-choice',
      question: 'Sa pangungusap na "Mabilis na tumakbo ang atleta," ano ang bahagi ng pananalita ng salitang "tumakbo"?',
      options: [
        'Pangngalan',
        'Pandiwa',
        'Pang-uri',
        'Pang-abay'
      ],
      answer: 1,
      explanation: "Ang 'tumakbo' ay isang pandiwa (verb) dahil ito ay nagsasaad ng kilos o galaw."
    },
    {
      id: 'fil-q10',
      type: 'multiple-choice',
      question: 'Ano ang ibig sabihin ng sawikain na "itaga sa bato"?',
      options: [
        'Saktan ang sarili',
        'Tandaan o ipangako nang matibay',
        'Magalit sa bato',
        'Maging matigas ang ulo'
      ],
      answer: 1,
      explanation: "Ang 'itaga sa bato' ay nangangahulugang tandaan ang isang bagay o mangako nang seryoso at matibay."
    }
  ]
};
