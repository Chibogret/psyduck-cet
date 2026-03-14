/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Chapter } from '../types';
import { SanaysayCard, TulaBox } from './components';
import { BookOpen, MapPin, Eye, Zap, Search, PenTool } from 'lucide-react';

export const readingComprehensionFil: Chapter = {
  id: 'read-comp-fil-1',
  subject: 'Language and Reading Comprehension',
  title: 'Chapter 9: Pagbasa at Pagsusuri',
  description: 'Analyzing Filipino literature: From classical poetry to contemporary essays.',
  content: (
    <div className="space-y-8 text-lg leading-relaxed font-sans mt-4">
      <div className="bg-[#FAEDCB] md:border border-[#f5e3b5] p-5 md:p-8 rounded-3xl text-slate-800">
        <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
          <Search className="w-8 h-8 text-slate-800" /> Critical Analysis
        </h3>
        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed">
          Reading comprehension in Filipino requires not just vocabulary knowledge, but the ability to decode <strong>Contextual Meaning</strong> and <strong>Authorial Intent</strong>. CETs often include "Malalim na Tagalog" (archaic words) to test your resilience and analytical skills.
        </p>
      </div>
      <div className="mt-8 bg-blue-50 p-6 rounded-2xl md:border border-blue-100">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <PenTool className="w-6 h-6 text-blue-500" /> Paksa ng Talata (Main Idea)
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Ang <strong>Paksa</strong> ang pinakasentro ng talakayan sa isang talata. Ito ang sumasagot sa tanong na, "Tungkol saan ang binabasa ko?"</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-blue-200">
            <strong className="text-blue-800 block mb-1 underline">Susing Pangungusap</strong>
            <p className="text-slate-600 text-sm font-medium">Kadalasan itong matatagpuan sa <strong>unahan</strong> ng talata, ngunit maaari ring nasa dulo bilang konklusyon.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-blue-200">
            <strong className="text-blue-800 block mb-1 underline">Sulong at Pasok</strong>
            <p className="text-slate-600 text-sm font-medium">Huwag malito sa mga detalyeng "suporta" lamang. Ang paksa ay dapat ang pangkalahatang ideya (Generalization).</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <Eye className="w-6 h-6 text-indigo-500" /> Decoding Poetry (Tula)
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Poetry often employs <strong>Tayutay</strong> (Figures of Speech) and heavy symbolism. To understand a stanza, look for the underlying social or emotional commentary.</p>
        <TulaBox title="Practice: Ang Sasabitan ng Ating Bandera">
          <p>Mahal na Senador na kagalang-galang,</p>
          <p>kung ang salitaan nati'y pataasan,</p>
          <p>kung itong medida ay sa patangkaran,</p>
          <p>. . . . . . puede ka pong tagdan</p>
          <p>. . . . . . sais talampatakan,</p>
          <p>isasasabit namin sa tenga mong mahal,</p>
          <p>ang aming bandilang karangal-rangalan,</p>
          <p>at ikaw ang siyang puno ng kawayan.</p>
          <br/>
          <p>Ang bandila namin kahi't na nga ganyan,</p>
          <p>iyan ay dakila, iyan ay marangal,</p>
          <p>dito kailan man ay hindi sumilang,</p>
          <p>. . . . . . iyang mangangamkam,</p>
          <p>. . . . . . iyang salanggapang,</p>
          <p>at kung mayro'n dapat alisi't ilagay,</p>
          <p>ilagay sa amin ang sa aming bayan,</p>
          <p>at alisin dito ang mga militar.</p>
        </TulaBox>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-2xl mb-4 text-slate-800 tracking-tight flex items-center gap-2">
          <MapPin className="w-6 h-6 text-emerald-500" /> Analyzing Essays (Sanaysay)
        </h4>
        <p className="text-slate-600 mb-6 font-medium">Essays focus on arguments and cultural identity. Identify the <strong>Thesis Statement</strong>—often found near the conclusion of the piece.</p>
        <SanaysayCard title="Practice: Ang Dyipni ng Pinoy">
          <p className="mb-4">
            Tulad ng pista, ang dyipni ay bahagi na ng buhay Pilipino. Katunayan ang Volkswagen, Ford, Toyota, at Chrysler ay ilan lamang sa mga kumpanyang multinasyonal na sumakay sa popularidad ng dyipni at lumikha ng ganitong sasakyan. Ilang beses nang ninais pahintuin ang dyipni, ngunit hindi nagtagumpay dahil bahagi ang dyipni ng suliraning sosyolohikal. Kung talagang kailangang ipagpatuloy ang pag-aalis sa dyipni sa mga pangunahing daan hanggang tuluyang alisin ito sa buong Metro Manila, ituloy natin. Kapakanang pambansa ang dapat mangibabaw.
          </p>
          <p>
            Gayunman, ginoo, sa pagsasabatas at pagpapatupad ng plano, isaalang-alang lamang na ang dyipni ay behikulong may sakay na kasaysayan, sining, at kultura.
          </p>
        </SanaysayCard>
      </div>
      
      <p className="text-slate-500 italic text-base mt-2 underline decoration-[#FAEDCB] decoration-4 underline-offset-4">
        Academic Tip: In Filipino reading sections, the longest option isn't always correct. Look for the most balanced and evidence-based answer!
      </p>
    </div>
  ),
  technique: "For poetry, ignore line breaks and read the stanza as a continuous sentence. For essays, focus on bridge words like 'Gayunman' (However) or 'Dahil dito' (Therefore) as they signal a shift in argument.",
  quizzes: [
    {
      id: 'rc-fil-q1',
      type: 'reading-comprehension',
      question: 'Ano ang pinapahiwatig ng may-akda sa linyang "Ang bandila namin kahi\'t na nga ganyan, iyan ay dakila, iyan ay marangal"?',
      passage: null,
      options: [
        'Ang bandila natin ay perpekto sa pagkakagawa.',
        'Ang bandila natin ay napakaluma na at dapat palitan.',
        'Kahit simple ang tingin ng iba sa ating bayan, taglay nito ang tunay na karangalan.',
        'Ang bandila ng Pilipinas ang pinakamaganda sa buong mundo.'
      ],
      answer: 2,
      explanation: "The phrase 'kahit na nga ganyan' denotes humility or simplicity, contrasting with 'dakila' and 'marangal' which show worth."
    },
    {
      id: 'rc-fil-q2',
      type: 'reading-comprehension',
      question: 'Batay sa unang saknong ng tula, ano ang tono ng persona sa "Senador"?',
      passage: null,
      options: [
        'Mapagkumbaba at humihingi ng tulong.',
        'Sarkastiko at mapang-uyam (Sarcastic/Ironical).',
        'Masaya at nagpapasalamat.',
        'Malungkot at nagdadalamhati.'
      ],
      answer: 1,
      explanation: "Ang paghalintulad sa Senador bilang isang 'tagdan' (pole) para sabitan ng bandila ay isang paraan ng panunuya sa kawalan nito ng silbi."
    },
    {
      id: 'rc-fil-q3',
      type: 'reading-comprehension',
      question: 'Sa sanaysay, ano ang itinuturing na "suliraning sosyolohikal" ng dyipni?',
      passage: null,
      options: [
        'Ang polusyong idinudulot nito sa paligid.',
        'Ang pagiging bahagi nito ng kabuhayan at transporatyon ng masa.',
        'Ang pakikipagkumpitensya nito sa mga dayuhang kumpanya.',
        'Ang ingay na nililikha ng mga makina nito.'
      ],
      answer: 1,
      explanation: "Ang 'sosyolohikal' na aspeto ay tumutukoy sa ugnayan ng dyip sa lipunan, gaya ng trapiko, trabaho, at pang-araw-araw na buhay ng mga Pilipino."
    },
    {
      id: 'rc-fil-q4',
      type: 'reading-comprehension',
      question: 'Ano ang pangunahing punto (thesis statement) ng sanaysay na "Ang Dyipni ng Pinoy"?',
      passage: null,
      options: [
        'Ang dyipni ay dapat nang palitan ng Volkswagen at Ford.',
        'Dapat alisin ang dyip sa Metro Manila para sa kapakanang pambansa.',
        'Ang dyipni ay hindi lamang sasakyan kundi simbolo ng sining, kultura, at kasaysayan.',
        'Ang mga drayber ay dapat magkaroon ng sariling kumpanya.'
      ],
      answer: 2,
      explanation: "Final argument states: 'isaalang-alang lamang na ang dyipni ay behikulong may sakay na kasaysayan, sining, at kultura'."
    },
    {
      id: 'rc-fil-q5',
      type: 'reading-comprehension',
      question: 'Anong uri ng tayutay ang ginamit sa linyang "ikaw ang siyang puno ng kawayan"?',
      passage: null,
      options: [
        'Pagtutulad (Simile)',
        'Pagwawangis (Metaphor)',
        'Pagsasatao (Personification)',
        'Pagmamalabis (Hyperbole)'
      ],
      answer: 1,
      explanation: "Ito ay direktang paghahambing sa tao (Senador) at bagay (kawayan) nang hindi gumagamit ng 'gaya ng' o 'tulad ng'."
    },
    {
      id: 'rc-fil-q6',
      type: 'reading-comprehension',
      question: 'Ano ang kahulugan ng salitang "salanggapang" sa tula?',
      options: [
        'Bayani',
        'Mabuting tao',
        'Masama o suwail na tao',
        'Matalinong opisyal'
      ],
      answer: 2,
      explanation: "Ang 'salanggapang' ay isang lumang salita na tumutukoy sa taong walang galang o masama."
    }
  ]
};
