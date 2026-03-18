import { englishVocabulary } from './english-vocabulary/content';
import { englishGrammar } from './english-grammar/content';
import { englishSyntax } from './english-syntax/content';
import { filipinoWika } from './filipino/content';
import { readingComprehensionEn } from './reading-comprehension-en/content';
import { readingComprehensionFil } from './reading-comprehension-fil/content';
import { languageProficiencyPractice } from './language-proficiency-practice/content';
import { upcatPracticeSet4 } from './upcat-practice-set-4/content';
import { upcatReviewMastersLP } from './upcat-review-masters-lp/content';
import { sentenceCompletion } from './sentence-completion/content';
import { spotTheError } from './spot-the-error/content';
import { grammarRules } from './grammar-rules/content';
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
