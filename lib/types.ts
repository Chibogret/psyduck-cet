import React from 'react';

export type QuestionType =
  | 'MULTIPLE_CHOICE'
  | 'FILL_IN_THE_BLANK'
  | 'SENTENCE_COMPLETION'
  | 'SPOT_THE_ERROR'
  | 'READING_COMPREHENSION';

export interface BaseQuestion {
  type: QuestionType;
  question: string | React.ReactNode;
  options: string[];
  answer: number;
  explanation: string | React.ReactNode;
}

export interface ReadingComprehensionQuestion extends BaseQuestion {
  type: 'READING_COMPREHENSION';
  passage: string | React.ReactNode;
}

export interface SpotTheErrorQuestion extends BaseQuestion {
  type: 'SPOT_THE_ERROR';
  sentence: string;
}

export interface FillInTheBlankQuestion extends BaseQuestion {
  type: 'FILL_IN_THE_BLANK';
}

export interface SentenceCompletionQuestion extends BaseQuestion {
  type: 'SENTENCE_COMPLETION';
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'MULTIPLE_CHOICE';
}

export type QuizQuestion = 
  | MultipleChoiceQuestion 
  | FillInTheBlankQuestion 
  | SentenceCompletionQuestion 
  | SpotTheErrorQuestion 
  | ReadingComprehensionQuestion;

export interface Chapter {
  id: string;
  title: string;
  content: React.ReactNode;
  technique: string | React.ReactNode;
  quizzes: QuizQuestion[];
}
