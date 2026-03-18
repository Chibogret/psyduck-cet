import { englishVocabulary } from './lang-reading/english-vocabulary/content';
import { englishGrammar } from './lang-reading/english-grammar/content';
import { englishSyntax } from './lang-reading/english-syntax/content';
import { filipinoWika } from './lang-reading/filipino/content';
import { readingComprehensionEn } from './lang-reading/reading-comprehension-en/content';
import { readingComprehensionFil } from './lang-reading/reading-comprehension-fil/content';
import { languageProficiencyPractice } from './lang-reading/language-proficiency-practice/content';
import { upcatPracticeSet4 } from './lang-reading/upcat-practice-set-4/content';
import { upcatReviewMastersLP } from './lang-reading/upcat-review-masters-lp/content';
import { sentenceCompletion } from './lang-reading/sentence-completion/content';
import { spotTheError } from './lang-reading/spot-the-error/content';
import { grammarRules } from './lang-reading/grammar-rules/content';
import { Chapter } from './types';

export const chapters: Chapter[] = [
  englishVocabulary,
  spotTheError,
  sentenceCompletion,
  grammarRules,
  englishGrammar,
  englishSyntax,
  filipinoWika,
  readingComprehensionEn,
  readingComprehensionFil,
  languageProficiencyPractice,
  upcatPracticeSet4,
  upcatReviewMastersLP
];

export * from './types';
export * from './components';
