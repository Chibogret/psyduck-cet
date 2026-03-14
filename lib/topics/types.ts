import { ReactNode } from 'react';

export type QuestionType =
  | 'multiple-choice'
  | 'fill-in-the-blank'
  | 'sentence-completion'
  | 'spot-the-error'
  | 'reading-comprehension';

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  question: string;
  instruction?: string; // Optional instructional text above the question
  passage?: ReactNode; // Used for reading comprehension
  sentence?: ReactNode; // Used for spot the error / sentence completion
  options: string[];
  answer: number;
  explanation: string;
}

export interface Chapter {
  id: string;
  subject: string;
  title: string;
  description: string;
  content: ReactNode;
  technique: string;
  quizzes: QuizQuestion[];
  layout?: 'paginated' | 'scrollable';
}
