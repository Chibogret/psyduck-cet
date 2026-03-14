# CET Reviewer: Chapter Creation Guidelines

This document serves as the official guideline for creating new chapters and topics for the CET (College Entrance Test) Reviewer application. 

## 🌟 Core Philosophy

1. **Bespoke & Memorable:** Never use generic, boring examples like "The cat sat on the mat" or "John bought 5 apples." Use culturally relevant, thought-provoking, or slightly humorous examples (e.g., the architectural history of Manila, or a dramatic sentence about a politician). The goal is for the student to *remember* the lesson because the context was interesting.
2. **Conversational Tone (Taglish):** Write explanations as if a friendly, expert professor is tutoring the student one-on-one. Use a natural mix of English and Tagalog (Taglish). The majority should be in English for technical accuracy, with Tagalog used for emphasis, reassurance, or relatable side-comments. *Minimize awkward or forced Taglish.*
3. **No Generic UI:** Do not just output walls of text. Use the provided custom components (`Highlight`, `PassageBox`, `SentenceBox`) and creative Tailwind CSS layouts (e.g., colored cards, grid layouts, custom borders) inside the `content` property to make each chapter visually distinct and engaging.

---

## 📁 File Structure

Every new topic must have its own dedicated folder and file within `lib/topics/` to maintain modularity.

```text
lib/topics/
├── components.tsx       # Shared UI components (Highlight, PassageBox, etc.)
├── types.ts             # TypeScript interfaces (Chapter, QuizQuestion, etc.)
├── index.ts             # Main export file (Add new chapters here!)
├── README.md            # This guideline document
└── [topic-name]/        # Create a new folder for your topic
    └── content.tsx      # The actual chapter content and quizzes
```

---

## 🛠️ Step-by-Step Guide to Creating a Chapter

### 1. Create the File
Create a new folder and a `content.tsx` file (e.g., `lib/topics/math-algebra/content.tsx`).

### 2. Define the Chapter Object
Import the necessary types and components, then define your `Chapter` object.

```tsx
import React from 'react';
import { Chapter } from '../types';
import { Highlight, SentenceBox } from '../components';

export const newTopic: Chapter = {
  id: 'unique-id-1',
  title: 'Chapter X: Catchy Title Here',
  description: 'A brief, punchy description of what the student will learn.',
  content: ( ... ), // See Step 3
  technique: "Professor's Tip: ...", // See Step 4
  quizzes: [ ... ] // See Step 5
};
```

### 3. Crafting the Content (The "No Generic UI" Rule)
The `content` property accepts a `ReactNode`. This is where you get creative. 
* Break down concepts into easily digestible visual chunks.
* Use Tailwind CSS to create custom cards, colored callouts, or grid layouts.
* Use the `<Highlight color="#hex">` component to draw attention to specific words.

**Example of Custom UI in Content:**
```tsx
content: (
  <div className="space-y-6 text-lg leading-relaxed">
    <p>Introduction text here. Explain the concept naturally.</p>
    
    {/* Custom Colored Card for a specific rule */}
    <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
      <h4 className="font-bold text-xl mb-2 text-emerald-900">The Golden Rule</h4>
      <p className="text-emerald-800">
        Always remember this specific rule. <Highlight color="#a7f3d0">Never</Highlight> forget it!
      </p>
    </div>
  </div>
)
```

### 4. The Professor's Tip (`technique`)
Every chapter must include a `technique`. This should be a highly practical, actionable "cheat code" or mental shortcut for the exam. 
* *Example:* "Physically cross out prepositional phrases to find the true subject."
* *Example:* "Read the questions FIRST before reading the passage."

### 5. Creating Quizzes
Quizzes must test the specific concepts taught in the chapter. Use the exact `QuestionType` required.

**Supported Question Types:**
1. `multiple-choice`: Standard 4-option questions.
2. `fill-in-the-blank`: For grammar, prepositions, or missing words.
3. `sentence-completion`: For vocabulary and logic (identifying signal words).
4. `spot-the-error`: Provide a `sentence` and break it into options to find the grammatical error.
5. `reading-comprehension`: Provide a `passage` (ReactNode) and ask inference/main idea questions.

**Quiz Object Structure:**
```tsx
{
  id: 'unique-quiz-id',
  type: 'spot-the-error', // Choose from the 5 types
  question: 'Identify the part of the sentence that contains an error.',
  sentence: 'The actual sentence goes here.', // Optional: Use for spot-the-error
  passage: passageContent, // Optional: ReactNode for reading-comprehension
  options: [
    'Option A',
    'Option B',
    'Option C',
    'Option D'
  ],
  answer: 1, // Index of the correct option (0-based)
  explanation: "Detailed explanation of WHY this is the answer. Use Taglish here if it helps clarify the concept!"
}
```

### 6. Export the Chapter
Finally, go to `lib/topics/index.ts`, import your new chapter, and add it to the `chapters` array.

```tsx
import { newTopic } from './new-topic/content';

export const chapters: Chapter[] = [
  // ... existing chapters
  newTopic
];
```

---

## 🗣️ Voice and Tone Checklist
Before finalizing a chapter, ask yourself:
- [ ] Is the explanation easy to understand?
- [ ] Did I use a natural, conversational Taglish tone? (e.g., *"Classic trap ito! Wag magpadala sa sound."*)
- [ ] Are the examples memorable and bespoke?
- [ ] Does the UI look custom and engaging, avoiding a boring "wall of text"?
- [ ] Are the quiz explanations thorough and encouraging?
