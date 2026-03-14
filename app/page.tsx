'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Brain, CheckCircle2, XCircle, ArrowRight, ArrowLeft, Menu, X, LayoutDashboard, Target } from 'lucide-react';
import { chapters, QuizQuestion, RichText } from '@/lib/topics';

const STORAGE_KEY = 'psyduck-reviewer-v1';

export default function Page() {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [view, setView] = useState<'lesson' | 'quiz'>('lesson');
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [allAnswers, setAllAnswers] = useState<Record<string, number>>({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const { chapterIndex, allAnswers: savedAnswers } = JSON.parse(saved);
        if (typeof chapterIndex === 'number' && chapterIndex < chapters.length) {
          setCurrentChapterIndex(chapterIndex);
        }
        if (savedAnswers && typeof savedAnswers === 'object') {
          setAllAnswers(savedAnswers);
        }
      }
    } catch {
      // ignore parse errors
    }
    setMounted(true);
  }, []);

  // Persist to localStorage whenever answers or chapter changes
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ chapterIndex: currentChapterIndex, allAnswers }));
    } catch {
      // ignore storage errors
    }
  }, [currentChapterIndex, allAnswers, mounted]);

  const currentChapter = chapters[currentChapterIndex];
  const currentQuiz = currentChapter.quizzes[currentQuizIndex];

  const jumpToChapter = (index: number) => {
    setCurrentChapterIndex(index);
    setView('lesson');
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setAllAnswers({});
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleNextChapter = () => {
    if (currentChapterIndex < chapters.length - 1) {
      jumpToChapter(currentChapterIndex + 1);
    }
  };

  const handlePreviousChapter = () => {
    if (currentChapterIndex > 0) {
      jumpToChapter(currentChapterIndex - 1);
    }
  };

  const handleNextQuiz = () => {
    if (currentQuizIndex < currentChapter.quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      handleNextChapter();
    }
  };

  const handleAnswerSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);

    // Also track in allAnswers for consistent state
    setAllAnswers(prev => ({
      ...prev,
      [`${currentChapter.id}-${currentQuiz.id}`]: index
    }));
  };

  const handleScrollableAnswerSelect = (quizId: string, index: number) => {
    const key = `${currentChapter.id}-${quizId}`;
    if (allAnswers[key] !== undefined) return;

    setAllAnswers(prev => ({
      ...prev,
      [key]: index
    }));
  };

  if (!mounted) return null;

  const renderQuizContent = (quiz: QuizQuestion) => {
    return (
      <motion.div
        key={quiz.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-8"
      >
        {quiz.passage && (
          <div className="bg-[#f8fafc] p-5 md:p-8 rounded-3xl md:border border-[#C6DEF1] mb-6">
            <div className="text-slate-500 font-medium uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Reading Passage
            </div>
            <div className="prose prose-slate prose-sm md:prose-base max-w-none">
              {quiz.passage}
            </div>
          </div>
        )}
        {quiz.sentence && (
          <div className="bg-[#FAEDCB] p-5 md:p-8 rounded-3xl md:border border-[#f5e3b5] mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#F7D9C4]"></div>
            <p className="text-slate-800 text-xl md:text-2xl italic leading-relaxed pl-4 md:pl-6">
              &quot;{quiz.sentence}&quot;
            </p>
          </div>
        )}

        {quiz.instruction && (
          <div className="mb-6 whitespace-pre-wrap leading-relaxed border-b border-slate-100 pb-4 text-slate-500 font-medium">
            <RichText text={quiz.instruction} />
          </div>
        )}

        <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-2">
          <RichText text={quiz.question} />
        </h3>
        <p className="text-sm text-slate-400 font-medium mb-6">
          Question {currentQuizIndex + 1} of {currentChapter.quizzes.length}
        </p>

        <div className="grid grid-cols-1 gap-4">
          {quiz.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === quiz.answer;
            const showStatus = selectedAnswer !== null;

            let buttonStyle = "bg-white border-[#e2e8f0] text-slate-700";
            if (showStatus) {
              if (isCorrect) {
                buttonStyle = "bg-[#C9E4DE] border-[#C9E4DE] text-slate-900";
              } else if (isSelected) {
                buttonStyle = "bg-[#F2C6DE] border-[#F2C6DE] text-slate-900";
              } else {
                buttonStyle = "bg-slate-50 border-[#e2e8f0] text-slate-400 opacity-50";
              }
            } else {
              buttonStyle += " hover:border-[#C6DEF1] hover:bg-[#f8fafc]";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-4 md:p-5 rounded-2xl md:border-2 transition-colors duration-200 flex items-center justify-between group ${buttonStyle}`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className={`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm shrink-0 ${showStatus && (isCorrect || isSelected) ? 'bg-white/50 text-slate-900' : 'bg-slate-100 text-slate-500 group-hover:bg-[#C6DEF1] group-hover:text-slate-800'
                    }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-medium text-base md:text-lg text-inherit tracking-tight">{option}</span>
                </div>
                {showStatus && isCorrect && <CheckCircle2 className="w-6 h-6 text-slate-800 shrink-0" />}
                {showStatus && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-slate-800 shrink-0" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden pt-6"
            >
              <div className={`p-8 rounded-3xl md:border relative overflow-hidden ${selectedAnswer === quiz.answer ? 'bg-[#C9E4DE]/50 border-[#C9E4DE]' : 'bg-[#F2C6DE]/50 border-[#F2C6DE]'}`}>
                <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                  {selectedAnswer !== quiz.answer && (
                    <img src="/images/wrong_psyduck.png" alt="Wrong" className="w-24 h-24 object-contain shrink-0" />
                  )}
                  <div className="flex-1">
                    <h4 className={`font-bold text-xl mb-3 flex items-center gap-2 text-slate-900`}>
                      {selectedAnswer === quiz.answer ? 'Brilliant!' : 'Let\'s Review'}
                    </h4>
                    <p className="text-slate-700 leading-relaxed text-lg mb-8">
                      {quiz.explanation}
                    </p>

                    <button
                      onClick={handleNextQuiz}
                      className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200 w-full md:w-auto justify-center"
                    >
                      {currentQuizIndex < currentChapter.quizzes.length - 1 ? 'Next Question' : 'Finish Chapter'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  const handleResetMockExam = () => {
    const keysToRemove = Object.keys(allAnswers).filter(k => k.startsWith(currentChapter.id));
    if (keysToRemove.length === 0) return;
    setAllAnswers(prev => {
      const next = { ...prev };
      keysToRemove.forEach(k => delete next[k]);
      return next;
    });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderScrollableQuizContent = (chapterQuizzes: QuizQuestion[]) => {
    const answeredCount = Object.keys(allAnswers).filter(k => k.startsWith(currentChapter.id)).length;
    const chapterScore = Object.keys(allAnswers).filter(k => k.startsWith(currentChapter.id)).reduce((acc, k) => {
      const qId = k.split('-').slice(1).join('-');
      const quiz = currentChapter.quizzes.find(q => q.id === qId);
      return acc + (quiz && allAnswers[k] === quiz.answer ? 1 : 0);
    }, 0);

    return (
      <div className="min-h-screen bg-white text-black font-serif leading-normal selection:bg-gray-200">
        {/* Paper Score Header (Embedded in Scroll) */}
        <div className="max-w-3xl mx-auto px-8 pt-4 flex justify-between items-center text-sm border-b border-gray-300 font-sans pb-2">
          <div>
            Score: {chapterScore} / {chapterQuizzes.length}
            {answeredCount < chapterQuizzes.length && (
              <span className="ml-2 text-gray-400">({answeredCount} answered)</span>
            )}
          </div>
          <button onClick={handleResetMockExam} className="underline hover:text-gray-600 text-gray-500 italic">
            Reset Answers
          </button>
        </div>

        <main className="max-w-3xl mx-auto px-8 py-10">
          <div className="space-y-2">
            {chapterQuizzes.map((quiz) => {
              const key = `${currentChapter.id}-${quiz.id}`;
              const selectedIdx = allAnswers[key];
              const hasAnswered = selectedIdx !== undefined;

              return (
                <div key={quiz.id} className="scroll-mt-24">
                  {quiz.instruction && (
                    <div className="mb-6 whitespace-pre-wrap leading-relaxed border-b border-gray-100 pb-2 text-gray-800">
                      <RichText text={quiz.instruction} />
                    </div>
                  )}

                  <div className="mb-4 mt-10">
                    <p className="text-[17px] text-gray-900">
                      <RichText text={quiz.question} />
                    </p>
                  </div>

                  <div className="space-y-0 pl-6">
                    {quiz.options.map((option, index) => {
                      const isSelected = selectedIdx === index;
                      const isCorrect = index === quiz.answer;

                      let textColor = "text-black";
                      let fontWeight = "font-normal";
                      let feedbackMark = "";

                      if (hasAnswered) {
                        if (isCorrect) {
                          textColor = "text-green-700";
                          fontWeight = "font-bold";
                          feedbackMark = " [ ✓ Correct ]";
                        } else if (isSelected) {
                          textColor = "text-red-600";
                          fontWeight = "font-bold";
                          feedbackMark = " [ ✗ Wrong ]";
                        } else {
                          textColor = "text-gray-400";
                        }
                      }

                      return (
                        <div
                          key={index}
                          onClick={() => handleScrollableAnswerSelect(quiz.id, index)}
                          className={`flex items-start ${!hasAnswered ? 'cursor-pointer hover:underline' : ''}`}
                        >
                          <span className={`${textColor} ${fontWeight} text-[16px]`}>
                            {String.fromCharCode(65 + index)}. {option} {feedbackMark}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {hasAnswered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-2 pl-6"
                      >
                        <div className="p-4 border-l-2 border-gray-200 bg-gray-50/50">
                          <p className="text-sm font-sans text-gray-600 italic">
                            <strong className="not-italic text-gray-800">Explanation:</strong> {quiz.explanation}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Paper Footer */}
          <div className="mt-20 pt-10 border-t border-gray-300 text-center space-y-1 font-sans">
            <p className="font-bold">Filipi Know</p>
            <p>To get more UPCAT review materials,</p>
            <p>visit <a href="https://filipiknow.net/upcat-reviewer/" target="_blank" rel="noopener noreferrer" className="underline text-blue-800">https://filipiknow.net/upcat-reviewer/</a></p>
            <p className="mt-6 italic">To God be the glory!</p>

            <div className="mt-12 pt-8 border-t border-gray-100">
              <button
                onClick={handleNextChapter}
                className="text-slate-900 border-2 border-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-all inline-flex items-center gap-2"
              >
                Proceed to Next Chapter <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  };

  return (
    <div className="h-screen flex bg-[#f8fafc] font-sans overflow-hidden text-slate-900 pb-16 md:pb-0">

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {(isSidebarOpen || (typeof window !== 'undefined' && window.innerWidth >= 768)) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed md:relative z-50 h-full w-80 bg-[#FAEDCB] md:border-r border-[#f5e3b5] flex flex-col ${isSidebarOpen ? 'left-0 shadow-2xl md:shadow-none' : '-left-80 md:left-0'}`}
          >
            <div className="p-6 h-20 md:border-b border-[#f5e3b5] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="/images/avatar.png" alt="Psyduck" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h1 className="font-extrabold text-lg tracking-tight text-slate-900">Reviewer ni Psyduck</h1>
                  <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest">Mastery</p>
                </div>
              </div>
              <button className="md:hidden text-slate-800" onClick={() => setIsSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
              {Array.from(new Set(chapters.map(c => c.subject))).map((subject) => (
                <div key={subject} className="mb-6">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest px-3 mb-2 mt-2">{subject}</div>
                  <div className="space-y-1">
                    {chapters.map((chapter, idx) => {
                      if (chapter.subject !== subject) return null;
                      return (
                        <button
                          key={chapter.id}
                          onClick={() => jumpToChapter(idx)}
                          className={`w-full text-left px-4 py-3 rounded-2xl transition-colors duration-200 flex items-center gap-3 ${idx === currentChapterIndex
                            ? 'bg-white text-slate-900 font-bold border border-[#f5e3b5]'
                            : 'text-slate-700 hover:bg-[#f5e3b5]/50 font-medium border border-transparent'
                            }`}
                        >
                          <div className={`w-8 h-8 flex-shrink-0 rounded-lg flex items-center justify-center text-sm ${idx === currentChapterIndex ? 'bg-[#FAEDCB] text-slate-900' : 'bg-white/50 text-slate-600'
                            }`}>
                            {idx + 1}
                          </div>
                          <span className="font-medium text-sm leading-snug">{chapter.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 md:border-t border-[#f5e3b5]">
              <div className="bg-slate-900 p-4 rounded-2xl text-center text-[#FAEDCB] relative overflow-hidden group">
                <img src="/images/avatar.png" className="absolute -right-2 -bottom-2 w-12 h-12 opacity-20 group-hover:scale-110 transition-transform" alt="" />
                <div className="font-semibold text-sm mb-1">CET Prep 2026</div>
                <div className="text-slate-400 text-xs text-balance">Review effectively and confidently.</div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full bg-[#f8fafc] overflow-hidden relative">

        {/* Top Header */}
        <header className="h-20 px-4 lg:px-12 flex items-center justify-between shrink-0 bg-white md:border-b border-slate-200 z-40">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-600"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:block">
              <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 tracking-wide uppercase">
                Module {currentChapterIndex + 1}
              </span>
            </div>
          </div>

          <div className="flex bg-slate-100 p-1.5 rounded-2xl md:border border-slate-200">
            <button
              onClick={() => setView('lesson')}
              className={`px-3 md:px-5 py-2 rounded-xl text-sm font-bold tracking-wide transition-colors duration-200 flex items-center gap-2 ${view === 'lesson'
                ? 'bg-white text-slate-900 shadow-sm md:shadow-none md:border border-slate-200'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              <LayoutDashboard className="w-4 h-4" /> Lesson
            </button>
            <button
              onClick={() => {
                setView('quiz');
                setCurrentQuizIndex(0);
                setSelectedAnswer(null);
                setShowExplanation(false);
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className={`px-3 md:px-5 py-2 rounded-xl text-sm font-bold tracking-wide transition-colors duration-200 flex items-center gap-2 ${view === 'quiz'
                ? 'bg-white text-slate-900 shadow-sm md:shadow-none md:border border-slate-200'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              <CheckCircle2 className="w-4 h-4" /> Quiz
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-12 main-scrollbar relative scroll-smooth bg-white">
          <div className="max-w-4xl mx-auto pb-32">
            <AnimatePresence mode="wait">
              {view === 'lesson' ? (
                <motion.div
                  key="lesson"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
                      {currentChapter.title.split(': ')[1] || currentChapter.title}
                    </h1>
                    <p className="mt-6 text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                      {currentChapter.description}
                    </p>
                  </div>

                  <div className="prose prose-slate prose-lg max-w-none">
                    {currentChapter.content}
                  </div>

                  {currentChapter.technique && (
                    <div className="mt-16 bg-[#FAEDCB] md:border border-[#f5e3b5] p-10 rounded-[2rem] text-slate-900 relative overflow-hidden group">
                      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center overflow-hidden shrink-0 border-2 border-[#f5e3b5]">
                          <img src="/images/avatar.png" alt="Mascot" className="w-16 h-16 object-contain" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Brain className="w-8 h-8 text-slate-800" />
                            Professor&apos;s Master Technique
                          </h3>
                          <p className="text-slate-800 text-lg leading-relaxed font-medium">
                            {currentChapter.technique}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-16 flex justify-between items-center bg-[#f8fafc] p-6 rounded-3xl md:border border-slate-200">
                    <button
                      onClick={handlePreviousChapter}
                      disabled={currentChapterIndex === 0}
                      className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-colors ${currentChapterIndex === 0
                        ? 'text-slate-300 cursor-not-allowed'
                        : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                        }`}
                    >
                      <ArrowLeft className="w-5 h-5" /> Previous
                    </button>
                    <button
                      onClick={() => {
                        setView('quiz');
                        setCurrentQuizIndex(0);
                        setSelectedAnswer(null);
                        setShowExplanation(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group flex items-center gap-3 bg-slate-900 text-[#FAEDCB] px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors"
                    >
                      Take the Quiz
                      <div className="bg-white/20 p-2 rounded-xl transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="quiz"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-bold uppercase tracking-widest text-xs mb-4 border border-slate-200">
                        <Target className="w-3 h-3" /> Question {currentQuizIndex + 1} of {currentChapter.quizzes.length}
                      </span>
                      <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                        Test Your Instincts
                      </h2>
                    </div>
                  </div>

                  {currentChapter.layout === 'scrollable' ? renderScrollableQuizContent(currentChapter.quizzes) : renderQuizContent(currentQuiz)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

