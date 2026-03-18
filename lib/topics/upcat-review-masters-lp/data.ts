import { QuizQuestion } from '../types';

export const reviewMastersLanguageProficiency: QuizQuestion[] = [
  // --- SYNONYMS (Questions 1-10) ---
  {
    id: 'rm-lp-1',
    type: 'multiple-choice',
    instruction: "Directions: Each of the sentences below contains an underlined word or phrase. From the choices, select the one that best fits the context of the underlined word in the sentence.",
    question: '1. The construction team had an <u>arduous</u> task of rehabilitating the houses destroyed by the typhoon.',
    options: ['challenging', 'difficult', 'straightforward', 'exigent'],
    answer: 1,
    explanation: "Arduous means involving or requiring strenuous effort; difficult and tiring."
  },
  {
    id: 'rm-lp-2',
    type: 'multiple-choice',
    question: '2. Disposing toxic waste into rivers has a <u>deleterious</u> effect on the environment.',
    options: ['beneficial', 'devastating', 'developmental', 'harmful'],
    answer: 3,
    explanation: "Deleterious means causing harm or damage."
  },
  {
    id: 'rm-lp-3',
    type: 'multiple-choice',
    question: '3. The lone activist <u>desists</u> foreign invasion.',
    options: ['embrace', 'stop', 'continue', 'welcome'],
    answer: 1,
    explanation: "Desist means to cease or abstain from an action."
  },
  {
    id: 'rm-lp-4',
    type: 'multiple-choice',
    question: '4. Although the commendation was delayed, the press secretary recognized the <u>exemplary</u> services of the journalists.',
    options: ['cautionary', 'commendable', 'prolific', 'fraudulent'],
    answer: 1,
    explanation: "Exemplary means serving as a desirable model; representing the best of its kind (commendable)."
  },
  {
    id: 'rm-lp-5',
    type: 'multiple-choice',
    question: '5. Yes, the attack was <u>devoid</u> of tactical planning.',
    options: ['critical', 'present', 'lacking', 'comprehensive'],
    answer: 2,
    explanation: "Devoid means entirely lacking or free from."
  },
  {
    id: 'rm-lp-6',
    type: 'multiple-choice',
    question: '6. The <u>fickle-minded</u> policy maker failed to deliver once again.',
    options: ['enigmatic', 'charismatic', 'treacherous', 'indecisive'],
    answer: 3,
    explanation: "Fickle-minded refers to someone who changes their mind frequently; indecisive."
  },
  {
    id: 'rm-lp-7',
    type: 'multiple-choice',
    question: '7. Slaves <u>languish</u> in pain when the get whipped by their masters.',
    options: ['become weak', 'flourish', 'faint', 'vulnerable'],
    answer: 0,
    explanation: "Languish means to grow weak or feeble."
  },
  {
    id: 'rm-lp-8',
    type: 'multiple-choice',
    question: '8. The prisoner’s <u>bitterness</u> evoked by the war still resides in his heart.',
    options: ['resentment', 'kindness', 'awareness', 'lessons'],
    answer: 0,
    explanation: "In this context, bitterness refers to a feeling of deep-seated resentment."
  },
  {
    id: 'rm-lp-9',
    type: 'multiple-choice',
    question: '9. The committee members <u>acceded</u> to the protesters’ demands.',
    options: ['refute', 'yield', 'amended', 'antagonized'],
    answer: 1,
    explanation: "Accede means to agree to a demand or request; to yield."
  },
  {
    id: 'rm-lp-10',
    type: 'multiple-choice',
    question: '10. The president wanted to <u>extricate</u> himself from the issue to avoid controversy.',
    options: ['disconnect', 'entangle', 'include', 'assign'],
    answer: 0,
    explanation: "Extricate means to free or release from a constraint or difficulty."
  },

  // --- FILIPINO SYNONYMS (Questions 11-13) ---
  {
    id: 'rm-lp-11',
    type: 'multiple-choice',
    instruction: "Direksyon. Piliin ang katulad na kahulugan ng salitang nakasalungguhit.",
    question: '11. Ang <u>alab ng puso</u> ko ay ipaglaban ka.',
    options: ['pighati', 'sakit', 'damdamin', 'poot'],
    answer: 2,
    explanation: "Ang 'alab ng puso' ay tumutukoy sa simbuyo o matinding damdamin."
  },
  {
    id: 'rm-lp-12',
    type: 'multiple-choice',
    question: '12. Kahit para bang <u>pasan</u> ko ang daigdig, hindi ako susuko.',
    options: ['dala-dala', 'mayaman', 'kuba', 'marami akong problema'],
    answer: 0,
    explanation: "Ang 'pasan' ay nangangahulugang dala-dala sa balikat o likod; sa idyoma, ito ay bigat ng responsibilidad."
  },
  {
    id: 'rm-lp-13',
    type: 'multiple-choice',
    question: '13. Nang maglaon, ang kanyang <u>busilak</u> na puso ang naghatid sa kanya ng maayos na buhay.',
    options: ['mapula', 'madugo', 'malinis', 'maramdamin'],
    answer: 2,
    explanation: "Busilak means pure or clean (malinis)."
  },

  // --- ANTONYMS (Questions 14-20) ---
  {
    id: 'rm-lp-14',
    type: 'multiple-choice',
    instruction: "Directions. Select from the choices the one which has the opposite meaning of the italicized word.",
    question: '14. <u>benign</u> acts of charity',
    options: ['compassionate', 'sympathy', 'apathy', 'antipathy'],
    answer: 3,
    explanation: "Benign means kind; antipathy means deep-seated dislike (the opposite of kindness/compassion)."
  },
  {
    id: 'rm-lp-15',
    type: 'multiple-choice',
    question: '15. <u>altruistic</u> goals',
    options: ['selfish', 'unselfish', 'ambitious', 'loud'],
    answer: 0,
    explanation: "Altruistic means showing selfless concern for others; the opposite is selfish."
  },
  {
    id: 'rm-lp-16',
    type: 'multiple-choice',
    question: '16. achievements were <u>applauded</u>',
    options: ['celebrated', 'reprimanded', 'censured', 'admonished'],
    answer: 2,
    explanation: "Applauded means praised; censured means to express severe disapproval."
  },
  {
    id: 'rm-lp-17',
    type: 'multiple-choice',
    question: '17. <u>defiled</u> by his opponents',
    options: ['respected', 'tarnished', 'maligned', 'criticized'],
    answer: 0,
    explanation: "Defiled means desecrated or spoiled; respected is the opposite."
  },
  {
    id: 'rm-lp-18',
    type: 'multiple-choice',
    instruction: "Direksyon. Piliin ang kasalungat na kahulugan ng salitang nakasalungguhit.",
    question: '18. <u>tugatog</u> ng tagumpay',
    options: ['rurok', 'katuparan', 'ilalim', 'nakalalasing'],
    answer: 2,
    explanation: "Tugatog means peak/summit; ilalim (bottom/depth) is the opposite."
  },
  {
    id: 'rm-lp-19',
    type: 'multiple-choice',
    question: '19. <u>mapag-alinlangang</u> puso',
    options: ['nag-aatubili', 'mapagduda', 'mapagmahal', 'sigurado'],
    answer: 3,
    explanation: "Mapag-alinlangan means hesitant or doubtful; sigurado (certain) is the opposite."
  },
  {
    id: 'rm-lp-20',
    type: 'multiple-choice',
    question: '20. <u>walang puwang</u> sa kapatawaran',
    options: ['mapagbigay', 'madamot', 'malupit', 'bigo'],
    answer: 0,
    explanation: "Walang puwang implies no space or strictly denied; mapagbigay (generous/giving) is the opposite contextually."
  },

  // --- SPELLING (Questions 21-25) ---
  {
    id: 'rm-lp-21',
    type: 'multiple-choice',
    instruction: "Spelling. Select the word which is spelled correctly.",
    question: '21.',
    options: ['ocasion', 'occasion', 'occassion', 'ocassion'],
    answer: 1,
    explanation: "Occasion has two C's and one S."
  },
  {
    id: 'rm-lp-22',
    type: 'multiple-choice',
    question: '22.',
    options: ['lightwieght', 'lightweigth', 'lieghtweight', 'lightweight'],
    answer: 3,
    explanation: "The correct spelling is 'lightweight'."
  },
  {
    id: 'rm-lp-23',
    type: 'multiple-choice',
    question: '23.',
    options: ['rythm', 'rhytm', 'rhythm', 'rhythym'],
    answer: 2,
    explanation: "The word is 'rhythm'."
  },
  {
    id: 'rm-lp-24',
    type: 'multiple-choice',
    question: '24.',
    options: ['privilege', 'priviledge', 'privelege', 'priveledge'],
    answer: 0,
    explanation: "The correct spelling is 'privilege'."
  },
  {
    id: 'rm-lp-25',
    type: 'multiple-choice',
    question: '25.',
    options: ['accomodate', 'accommodate', 'acommodate', 'acommoddate'],
    answer: 1,
    explanation: "Accommodate has two C's and two M's."
  },

  // --- SENTENCE COMPLETION (Questions 26-35) ---
  {
    id: 'rm-lp-26',
    type: 'multiple-choice',
    instruction: "Sentence Completion. Select the word or phrase that most appropriately completes the sentence.",
    question: '26. Ms. Dinna Lee-Go does not _____ Metro Manila Development Authority’s plan of bulldozing the Katipunan Avenue islands in the name of traffic decongestion.',
    options: ['agree with', 'agree on', 'agree in', 'agree about'],
    answer: 0,
    explanation: "To 'agree with' a plan or idea is the standard prepositional use."
  },
  {
    id: 'rm-lp-27',
    type: 'multiple-choice',
    question: '27. ______ peso you pay for a National Geographic magazine goes to the research project on wildlife, like the research on anacondas.',
    options: ['Each', 'Every', 'Even', 'Except'],
    answer: 1,
    explanation: "'Every' is used to refer to all members of a group individually."
  },
  {
    id: 'rm-lp-28',
    type: 'multiple-choice',
    question: '28. Azerbaijanis have ______ hope that their crops will grow again in the oil-polluted land in Baku.',
    options: ['few', 'little', 'pieces of', 'many'],
    answer: 1,
    explanation: "'Little' is used with uncountable nouns like 'hope' to indicate a small amount."
  },
  {
    id: 'rm-lp-29',
    type: 'multiple-choice',
    question: '29. The music ______ of the ceremony should therefore be expressions which glorify the Lord rather than just the bride and groom.',
    options: ['select', 'selector', 'selective', 'selection'],
    answer: 3,
    explanation: "Noun form 'selection' is required as the subject of the clause."
  },
  {
    id: 'rm-lp-30',
    type: 'multiple-choice',
    question: '30. The list was compiled through the ______ of the collector.',
    options: ['kind', 'kindly', 'kindness', 'kinder'],
    answer: 2,
    explanation: "The noun 'kindness' acts as the object of the preposition."
  },
  {
    id: 'rm-lp-31',
    type: 'multiple-choice',
    question: '31. Nearly all ______ demand observance of the standard punctuation.',
    options: ['editor-in-chief', 'editors-in-chief', 'editor-in-chiefs', 'editors-in-chiefs'],
    answer: 1,
    explanation: "To pluralize compound nouns, add 's' to the principal word (editors)."
  },
  {
    id: 'rm-lp-32',
    type: 'multiple-choice',
    question: '32. The _____ were grazing when the lion attacked.',
    options: ['deer', 'deers', 'doe', 'fawn'],
    answer: 0,
    explanation: "The plural of 'deer' is 'deer'. 'Were grazing' indicates a plural subject."
  },
  {
    id: 'rm-lp-33',
    type: 'multiple-choice',
    question: '33. Berto wore a thin sport shirt, Nike warm-up pants, and shower clogs when I visited _____ unannounced.',
    options: ['he', 'him', 'his', 'himself'],
    answer: 1,
    explanation: "Objective case pronoun 'him' is required as the object of the verb 'visited'."
  },
  {
    id: 'rm-lp-34',
    type: 'multiple-choice',
    question: '34. Adel, ______ perseverance is unwavering, has a bright future ahead of her.',
    options: ['who', 'which', 'who’s', 'whose'],
    answer: 3,
    explanation: "'Whose' is the possessive form of the relative pronoun 'who'."
  },
  {
    id: 'rm-lp-35',
    type: 'multiple-choice',
    question: '35. Miguel has ______ big since I last saw him.',
    options: ['grow', 'grew', 'growed', 'grown'],
    answer: 3,
    explanation: "The past participle 'grown' is used with the auxiliary verb 'has' (present perfect)."
  },

  // --- FILIPINO GRAMMAR (Questions 36-40) ---
  {
    id: 'rm-lp-36',
    type: 'multiple-choice',
    instruction: "Piliin ang pinakaangkop na salita para sa patlang.",
    question: '36. _______ siya ng gatas araw-araw.',
    options: ['Nag-inom', 'Umiinom', 'Iniinom', 'Ininom'],
    answer: 1,
    explanation: "'Umiinom' signifies a recurring or present action (araw-araw)."
  },
  {
    id: 'rm-lp-37',
    type: 'multiple-choice',
    question: '37. Gaya ______ nakasanayan, namimitas ang magpipinsan ng bulaklak tuwing hapon para ilagay sa altar.',
    options: ['ng', 'nang', 'na', 'na ang'],
    answer: 1,
    explanation: "Gamit ang 'nang' sa pagsisimula ng sugnay na di-makapag-iisa o bilang pangatnig."
  },
  {
    id: 'rm-lp-38',
    type: 'multiple-choice',
    question: '38. Kinuha ______ ang mga kabibe mula sa tabing dagat.',
    options: ['nila', 'sila', 'kanila', 'siya'],
    answer: 0,
    explanation: "'Nila' is the correct pronoun for a plural actor in a passive-voice construction."
  },
  {
    id: 'rm-lp-39',
    type: 'multiple-choice',
    question: '39. Hindi makatulog ang bisita dahil ______.',
    options: ['namamahay', 'kapitbahay', 'binabahay', 'bahay-bahayan'],
    answer: 1,
    explanation: "Sa kontekstong Filipino, ang 'kapitbahay' dito ay tumutukoy sa ingay o sitwasyon sa labas."
  },
  {
    id: 'rm-lp-40',
    type: 'multiple-choice',
    question: '40. _______ Ningning at Daniel ang naatasang mamuno sa pagpupulong.',
    options: ['Si', 'Sina', 'Sila', 'Siya'],
    answer: 1,
    explanation: "'Sina' is used when referring to two or more specific people."
  },

  // --- IDENTIFYING ERRORS (Questions 41-50) ---
  {
    id: 'rm-lp-41',
    type: 'multiple-choice',
    instruction: "Identifying Errors. Choose the letter of the underlined portion that contains an error.",
    question: '41. He went (A) into his room, closed the door (B), opened the window (C) and goes to bed (D).',
    options: ['went', 'closed the door', 'opened the window', 'goes to bed'],
    answer: 3,
    explanation: "Verb tense consistency: 'went', 'closed', and 'opened' are past tense; 'goes' should be 'went'."
  },
  {
    id: 'rm-lp-42',
    type: 'multiple-choice',
    question: '42. Some of the boys (A) who plays basketball (B) also like to play (C) football (D).',
    options: ['Some of the boys', 'who plays basketball', 'like to play', 'football'],
    answer: 1,
    explanation: "Subject-verb agreement: 'boys' (plural) needs 'play' (plural), not 'plays'."
  },
  {
    id: 'rm-lp-43',
    type: 'multiple-choice',
    question: '43. You (A) and me (B) should make (C) a pact (D).',
    options: ['You', 'me', 'make', 'pact'],
    answer: 1,
    explanation: "Subject case required: 'You and I' should be the subject."
  },
  {
    id: 'rm-lp-44',
    type: 'multiple-choice',
    question: '44. When (A) you pass (B) the UPCAT, one (C) should be proud (D).',
    options: ['When', 'pass', 'one', 'proud'],
    answer: 2,
    explanation: "Pronoun shift: The sentence starts with 'you', so it should continue with 'you' should be proud."
  },
  {
    id: 'rm-lp-45',
    type: 'multiple-choice',
    question: '45. Neither Kate or (A) Sarah likes (B) the dessert prepared (C) by the chef (D).',
    options: ['or', 'likes', 'prepared', 'by the chef'],
    answer: 0,
    explanation: "Correlative conjunction pairing: 'Neither' must be paired with 'nor'."
  },
  {
    id: 'rm-lp-46',
    type: 'multiple-choice',
    question: '46. As dedicated barrio doctors (A), Jovi and Kenneth plans (B) to become members of the relief team (C) to be sent to Aurora (D).',
    options: ['barrio doctors', 'plans', 'relief team', 'to Aurora'],
    answer: 1,
    explanation: "Subject-verb agreement: 'Jovi and Kenneth' (plural) needs 'plan'."
  },
  {
    id: 'rm-lp-47',
    type: 'multiple-choice',
    question: '47. Ilagay mo ng (A) maayos ang lumang pigurin sa ibabaw (B) ng malaking (C) eskaparate (D).',
    options: ['ng', 'sa ibabaw', 'ng malaking', 'eskaparate'],
    answer: 0,
    explanation: "Dapat ay 'nang' dahil ito ay naglalarawan kung paano ilalagay (pang-abay)."
  },
  {
    id: 'rm-lp-48',
    type: 'multiple-choice',
    question: '48. Natatakpan (A) ng kadiliman ang iba’t-ibang (B) makukulay na (C) larawan (D).',
    options: ['Natatakpan', "iba't-ibang", 'makukulay na', 'larawan'],
    answer: 1,
    explanation: "Ayon sa bagong tuntunin, ang 'iba't iba' ay walang gitling sa dulo maliban kung may panlapi."
  },
  {
    id: 'rm-lp-49',
    type: 'multiple-choice',
    question: '49. Napagalaman (A) na nakipagsabwatan (B) siya sa kanyang tauhan upang (C) maikubli ang katiwaliang kanyang ginawa (D).',
    options: ['Napagalaman', 'nakipagsabwatan', 'upang', 'kanyang ginawa'],
    answer: 2,
    explanation: "Identified as the error per the original key."
  },
  {
    id: 'rm-lp-50',
    type: 'multiple-choice',
    question: '50. Magpahinga ka (A) na at pahiran mo (B) ang pawis na nasa iyong batok (C).',
    options: ['Magpahinga ka', 'na at', 'pahiran mo', 'iyong batok'],
    answer: 2,
    explanation: "Dapat ay 'pahirin' (alisin ang dumi/pawis) sa halip na 'pahiran' (lagyan ng isang bagay)."
  },

  // --- PARAGRAPH COMPLETION (Questions 51-60) ---
  {
    id: 'rm-lp-51',
    type: 'multiple-choice',
    instruction: "Paragraph Completion: The following paragraphs have some words missing as indicated by the numbered blanks. Read the paragraphs carefully and select the best answer for each number from the options given.",
    question: 'Slips of the tongue are almost inevitable. For __(51)__ 1,000 words spoken...',
    options: ['all', 'every', 'each', 'some'],
    answer: 1,
    explanation: "'Every' is used to express frequency relative to a number."
  },
  {
    id: 'rm-lp-52',
    type: 'multiple-choice',
    question: '...we make one or two errors. __(52)__ that the average pace of speech is 150 words a minute...',
    options: ['Considering', 'Realizing', 'Stating', 'Explaining'],
    answer: 0,
    explanation: "'Considering' introduces a premise or factor to be taken into account."
  },
  {
    id: 'rm-lp-53',
    type: 'multiple-choice',
    question: '...a slip is __(53)__ to occur about once every seven minutes...',
    options: ['definite', 'rarely', 'doubtful', 'bound'],
    answer: 3,
    explanation: "'Bound to occur' means certain or very likely to happen."
  },
  {
    id: 'rm-lp-54',
    type: 'multiple-choice',
    question: '...most of us make __(54)__ between 7 and 22 verbal slips.',
    options: ['among', 'somewhere', 'exactly', 'in'],
    answer: 1,
    explanation: "'Somewhere between' indicates an approximate range."
  },
  {
    id: 'rm-lp-55',
    type: 'multiple-choice',
    question: 'Sigmund Freud, __(55)__ name is indelibly linked with such gaffes...',
    options: ['whose', "who's", 'who', 'whom'],
    answer: 0,
    explanation: "Possessive relative pronoun 'whose' refers back to Sigmund Freud."
  },
  {
    id: 'rm-lp-56',
    type: 'multiple-choice',
    question: '...He deemed them notable for __(56)__ an unconscious thought, belief, wish, or motive.',
    options: ['imagining', 'confusing', 'revealing', 'discovering'],
    answer: 2,
    explanation: "Freud's theory was that slips 'reveal' hidden thoughts."
  },
  {
    id: 'rm-lp-57',
    type: 'multiple-choice',
    question: "The coalition’s board __(57)__ the severity of the climate crisis...",
    options: ['dismissed', 'recognized', 'inferred', 'encouraged'],
    answer: 1,
    explanation: "Context suggests identifying a problem before offering a pitch."
  },
  {
    id: 'rm-lp-58',
    type: 'multiple-choice',
    question: "...you won’t have __(58)__ down the line.",
    options: ['many', 'sure', 'once', 'one'],
    answer: 3,
    explanation: "Idiomatic use: 'have one [a business] down the line'."
  },
  {
    id: 'rm-lp-59',
    type: 'multiple-choice',
    question: "...There is now a scientific __(59)__ that among the effects of man-made climate change...",
    options: ['confusion', 'conjunction', 'compromise', 'consensus'],
    answer: 3,
    explanation: "'Scientific consensus' refers to the collective agreement of scientists."
  },
  {
    id: 'rm-lp-60',
    type: 'multiple-choice',
    question: "...if the __(60)__ pace of climate change continues.",
    options: ['previous', 'smooth', 'current', 'fair'],
    answer: 2,
    explanation: "'Current' refers to what is happening right now."
  },

  // --- SEQUENCING (Questions 61-70) ---
  {
    id: 'rm-lp-61',
    type: 'multiple-choice',
    instruction: "Sequencing: Determine the best order of the following words, phrases, and sentences to form a logical, unified, and coherent sentence or paragraph.",
    question: '(1) alcohol-related social media posts (2) a new study says (3) appear to influence (4) youth alcohol consumption',
    options: ['4-3-1-2', '3-1-4-2', '1-3-4-2', '2-4-1-3'],
    answer: 2,
    explanation: "1-3-4-2 creates: 'Alcohol-related social media posts appear to influence youth alcohol consumption, a new study says.'"
  },
  {
    id: 'rm-lp-62',
    type: 'multiple-choice',
    question: '(1) whom they even describe (2) the greatness of Rizal (3) as the greatest Filipino of all time (4) who fully appreciate (5) there are a lot of Filipino people',
    options: ['1-3-5-4-2', '5-1-3-2-4', '4-5-3-1-2', '5-4-2-1-3'],
    answer: 3,
    explanation: "5-4-2-1-3 creates: 'There are a lot of Filipino people who fully appreciate the greatness of Rizal, whom they even describe as the greatest Filipino of all time.'"
  },
  {
    id: 'rm-lp-63',
    type: 'multiple-choice',
    question: 'Intro: Memory transfer has been at the heart of science fiction... (1) Snails trained... (2) The research... (3) When RNA was inserted... (4) A team successfully transplanted...',
    options: ['4-1-3-2', '1-3-2-4', '4-3-2-1', '1-2-4-3'],
    answer: 0,
    explanation: "Starts with the broad action (4), followed by the subject (1), the result (3), and the significance (2)."
  },
  {
    id: 'rm-lp-64',
    type: 'multiple-choice',
    question: '(1) coffee (2) is (3) the chairman’s (4) mug (5) filled with',
    options: ['4-2-5-3-1', '1-4-2-5-3', '3-4-2-5-1', '5-1-3-4-2'],
    answer: 2,
    explanation: "3-4-2-5-1 creates: 'The chairman's mug is filled with coffee.'"
  },
  {
    id: 'rm-lp-65',
    type: 'multiple-choice',
    question: '(1) The moves of the game... (2) All life is a game of power... (3) As for the rules... (4) The object of the game...',
    options: ['2-4-1-3', '4-2-3-1', '1-3-4-2', '2-3-4-1'],
    answer: 0,
    explanation: "2 starts with the general theme, 4 defines the goal, 1 describes the moves, and 3 concludes with the rules."
  },
  {
    id: 'rm-lp-66',
    type: 'multiple-choice',
    question: '(1) sa kusina (2) mo (3) na kutsilyo (4) kunin (5) ang matalas',
    options: ['5-3-1-4-2', '4-2-3-1-5', '4-2-5-3-1', '1-2-4-3-5'],
    answer: 2,
    explanation: "4-2-5-3-1: 'Kunin mo ang matalas na kutsilyo sa kusina.'"
  },
  {
    id: 'rm-lp-67',
    type: 'multiple-choice',
    question: '(1) ang ginamit ng manunulat (2) upang isulat (3) ang lumang makinilya (4) ang kanyang maikling kwento',
    options: ['1-2-4-3', '2-4-1-3', '3-1-2-4', '4-1-2-3'],
    answer: 3,
    explanation: "4-1-2-3 creates: 'Ang kanyang maikling kwento ang ginamit ng manunulat upang isulat ang lumang makinilya'."
  },
  {
    id: 'rm-lp-68',
    type: 'multiple-choice',
    question: '(1) Hindi magkandaugaga... (2) Gulung-gulo... (3) Tinutukso ni Tony... (4) Tinatahi naman ni Eden...',
    options: ['1-2-3-4', '2-1-4-3', '4-3-2-1', '3-4-1-2'],
    answer: 1,
    explanation: "Sequence follows a logical narrative of a chaotic household scene."
  },
  {
    id: 'rm-lp-69',
    type: 'multiple-choice',
    question: '(1) Nais ng mestisang dalaga... (2) Hindi masabi ni Aling Miray... (3) Dumating si Aling Miray... (4) Tumanggi ang Reyna Elena...',
    options: ['3-2-4-1', '4-3-2-1', '1-2-3-4', '1-4-3-2'],
    answer: 2,
    explanation: "The logic 1-2-3-4 is identified as the intended structure in the key."
  },
  {
    id: 'rm-lp-70',
    type: 'multiple-choice',
    question: '(1) Pinakain ni Impong Sela... (2) Pinagmasdan ni Impong Sela... (3) Nagising si Pepe... (4) Ikinabalisa niya...',
    options: ['1-2-3-4', '4-3-2-1', '3-1-4-2', '2-4-3-1'],
    answer: 2,
    explanation: "3-1-4-2 follows: Pepe woke up, was fed, she worried about his fever, then watched him."
  },

  // --- BEST SENTENCE (Questions 71-80) ---
  {
    id: 'rm-lp-71',
    type: 'multiple-choice',
    instruction: "Directions: Choose the best from among the statements given below.",
    question: '71.',
    options: ['You can never really can tell.', 'You can never really tell.', 'Really you never can tell.', 'You can really never can tell.'],
    answer: 1,
    explanation: "B is the most standard and grammatically correct English idiom."
  },
  {
    id: 'rm-lp-72',
    type: 'multiple-choice',
    question: '72.',
    options: [
      'She wanted to know if did you use the bike without permission.',
      'She wanted to know if you use the bike without permission.',
      'She wanted to know whether you used the bike without permission.',
      'She wanted to know if you used the bike without permission.'
    ],
    answer: 3,
    explanation: "D uses the correct past tense for an indirect question."
  },
  {
    id: 'rm-lp-73',
    type: 'multiple-choice',
    question: '73.',
    options: [
      'The teenager assured his sister I will ask permission from their mother next time.',
      'I will ask permission from their mother next time was the assurance by the teenager to his sister.',
      'The teenager assured his sister that he will ask permission from their mother next time.',
      'The teenager assured his sister that he would ask permission from their mother next time.'
    ],
    answer: 2,
    explanation: "C provides a direct and grammatically clear reporting of the assurance."
  },
  {
    id: 'rm-lp-74',
    type: 'multiple-choice',
    question: '74.',
    options: [
      'Lisa can’t understand why Keith doesn’t dance as well as she.',
      'Lisa can’t understand how Keith doesn’t dance as well as her.',
      'Lisa can’t understand why Keith doesn’t dance as well as her.',
      'Lisa can’t understand the reason why Keith doesn’t dance as well as her.'
    ],
    answer: 0,
    explanation: "Formal grammar uses the nominative case 'she' (implies: as well as she dances)."
  },
  {
    id: 'rm-lp-75',
    type: 'multiple-choice',
    question: '75.',
    options: [
      'Empoy said that “I will be waiting for you across the street.”',
      'Empoy said that he will be waiting for us across the street.',
      'Empoy said that he would be waiting for us across the street.',
      'Empoy said that, “I would be waiting for you across the street.”'
    ],
    answer: 2,
    explanation: "Backshifting ('would') is required in indirect speech."
  },
  {
    id: 'rm-lp-76',
    type: 'multiple-choice',
    question: '76.',
    options: [
      'Bumalik na ang sundalo sa kani-kanilang mga pwesto.',
      'Bumalik na ang mga sundalo sa kani-kaniyang pwesto.',
      'Bumalik na ang mga sundalo sa kani-kaniyang mga pwesto.',
      'Bumalik na ang kapitan sa kani-kanilang pwesto.'
    ],
    answer: 1,
    explanation: "Gumagamit ng tamang pangmaramihang simuno (mga sundalo) at kaukulang anyo (kani-kaniyang)."
  },
  {
    id: 'rm-lp-77',
    type: 'multiple-choice',
    question: '77.',
    options: [
      'Ang magagaling ang mga doctor na sumuri ng kanyang malubhang sakit.',
      'Kahit salat sa pamumuhay, nagsusumikap ang kanyang ina ay maipagamot siya.',
      'Ang tanging paraan na lamang para maibsan ang kanyang nadaramang sakit ang sumailalim sa isang operasyon.',
      'Matapos ang operasyon at ilang araw na pahinga, nawala ang sakit na kanyang iniinda at bumuti ang kanyang pakiramdam.'
    ],
    answer: 3,
    explanation: "D contains the most logical and grammatically complete thought."
  },
  {
    id: 'rm-lp-78',
    type: 'multiple-choice',
    question: '78.',
    options: [
      'Mahirap magmahal ng taong hindi ka mahal.',
      'Sana’y maunawaan mo ito ng lubusan.',
      'Sinabi ko ng taimtim sa aking sarili na handa na ulit akong magmahal at masaktan.',
      'Sa pagkakataong ito ay huwag sanang paglaruan nang sinuman.'
    ],
    answer: 0,
    explanation: "A is a complete and grammatically sound sentence."
  },
  {
    id: 'rm-lp-79',
    type: 'multiple-choice',
    question: '79.',
    options: [
      'Pupunta sila Kevin at Tony sa pagtitipon bukas.',
      'Sasama raw kina Fred sina Alex at Jeff.',
      'Kahit walang paalam, dadalhin nila Alex at Kevin ang kotse ng kanilang mga magulang.',
      'Sa bahay nina Fred at Jeff makikitulog si Alex.'
    ],
    answer: 3,
    explanation: "D uses the correct plural possessive markers and structure."
  },
  {
    id: 'rm-lp-80',
    type: 'multiple-choice',
    question: '80.',
    options: [
      'Pumunta ako sa tindahan ni Aling Nena para bumili ng suka at iba’t-ibang sitserya.',
      'Habang akoy nagbabayad, nakita ko ang isang dalagang nakadungaw sa bintana.',
      'Natulala ako, nalaglag ang puso ko at nalaglag din ang sukang hawak ko.',
      'Napasigaw si Aling Nena at ako namay parang nakuryenteng pusa.'
    ],
    answer: 2,
    explanation: "C presents a humorous but grammatically consistent narrative sequence."
  }
];