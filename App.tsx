
import React, { useState, useMemo, useEffect } from 'react';
import { QUESTIONS_BANK } from './questions';
import { QuizStatus, UserAnswer, Question } from './types';
import QuizHeader from './components/QuizHeader';

// Components defined outside main App to avoid re-renders
const OptionButton: React.FC<{
  text: string;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}> = ({ text, isSelected, onClick, disabled }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
      isSelected 
        ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
        : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50'
    } ${disabled ? 'cursor-not-allowed opacity-80' : ''}`}
  >
    <div className="flex items-center">
      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
        isSelected ? 'border-indigo-600 bg-indigo-600' : 'border-slate-300'
      }`}>
        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
      </div>
      <span className="font-medium text-lg">{text}</span>
    </div>
  </button>
);

const App: React.FC = () => {
  const [status, setStatus] = useState<QuizStatus>('idle');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Take a specific subset or random. Here we take 15 for the request
  const currentQuizQuestions = useMemo(() => QUESTIONS_BANK.slice(0, 15), []);

  const currentQuestion = currentQuizQuestions[currentIndex];
  const progress = ((currentIndex + 1) / currentQuizQuestions.length) * 100;

  const handleStart = () => {
    setStatus('active');
    setCurrentIndex(0);
    setUserAnswers([]);
    setSelectedOptionId(null);
  };

  const handleNext = () => {
    if (!selectedOptionId) return;

    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedOptionId,
      isCorrect,
    };

    const nextAnswers = [...userAnswers, newAnswer];
    setUserAnswers(nextAnswers);
    setSelectedOptionId(null);

    if (currentIndex < currentQuizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setStatus('completed');
    }
  };

  const score = userAnswers.filter(a => a.isCorrect).length;

  if (status === 'idle') {
    return (
      <div className="max-w-2xl mx-auto pt-20 px-4 text-center">
        <div className="bg-white p-10 rounded-3xl shadow-xl shadow-indigo-100 border border-slate-100">
          <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Discrete Math Quiz</h1>
          <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
            Test your knowledge of propositional logic, set theory, and combinatorics based on the standard discrete mathematics curriculum.
          </p>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <button 
              onClick={handleStart}
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              Start Quiz (15 Questions)
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'active') {
    return (
      <div className="max-w-3xl mx-auto pt-10 px-4 pb-20">
        <QuizHeader 
          title="Mathematics Challenge" 
          subtitle={`Question ${currentIndex + 1} of ${currentQuizQuestions.length}`} 
          progress={progress}
        />
        
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 mb-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-8 leading-relaxed">
            {currentQuestion.text}
          </h2>
          
          <div className="grid gap-3">
            {currentQuestion.options.map(opt => (
              <OptionButton 
                key={opt.id}
                text={opt.text}
                isSelected={selectedOptionId === opt.id}
                onClick={() => setSelectedOptionId(opt.id)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button
            disabled={!selectedOptionId}
            onClick={handleNext}
            className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center ${
              selectedOptionId 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100' 
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            {currentIndex === currentQuizQuestions.length - 1 ? 'Finish' : 'Next Question'}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    );
  }

  if (status === 'completed') {
    const percentage = (score / currentQuizQuestions.length) * 100;
    return (
      <div className="max-w-2xl mx-auto pt-16 px-4 pb-20">
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 text-center">
          <div className="relative inline-block mb-6">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
              <circle 
                cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="12" fill="transparent" 
                strokeDasharray={364}
                strokeDashoffset={364 - (364 * percentage) / 100}
                className="text-indigo-600 transition-all duration-1000 ease-out" 
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-indigo-600">{Math.round(percentage)}%</span>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Quiz Completed!</h1>
          <p className="text-slate-500 mb-8">You got {score} out of {currentQuizQuestions.length} questions correct.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setStatus('review')}
              className="bg-indigo-50 text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-100 transition-all border border-indigo-200"
            >
              Review Mistakes
            </button>
            <button 
              onClick={handleStart}
              className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'review') {
    return (
      <div className="max-w-4xl mx-auto pt-10 px-4 pb-20">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Review Your Answers</h1>
            <p className="text-slate-500">Analyze your performance question by question</p>
          </div>
          <button 
            onClick={handleStart}
            className="text-indigo-600 font-bold hover:underline"
          >
            Restart Quiz
          </button>
        </div>

        <div className="space-y-6">
          {currentQuizQuestions.map((q, idx) => {
            const userAnswer = userAnswers.find(a => a.questionId === q.id);
            const isCorrect = userAnswer?.isCorrect;
            const selectedOpt = q.options.find(o => o.id === userAnswer?.selectedOptionId);
            const correctOpt = q.options.find(o => o.id === q.correctOptionId);

            return (
              <div key={q.id} className="bg-white p-6 rounded-2xl shadow border border-slate-100 overflow-hidden relative">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`} />
                <div className="flex gap-4">
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">{q.text}</h3>
                    
                    <div className="space-y-2">
                      <div className={`p-4 rounded-xl flex items-center justify-between ${isCorrect ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
                        <div className="flex flex-col">
                          <span className="text-xs uppercase font-bold text-slate-400 mb-1">Your Answer</span>
                          <span className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            {selectedOpt?.text || "No answer"}
                          </span>
                        </div>
                        {isCorrect ? (
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        ) : (
                          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                        )}
                      </div>

                      {!isCorrect && (
                        <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                          <span className="text-xs uppercase font-bold text-slate-400 mb-1">Correct Answer</span>
                          <span className="block font-medium text-indigo-700">{correctOpt?.text}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={handleStart}
            className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default App;
