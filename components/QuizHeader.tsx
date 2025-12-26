
import React from 'react';

interface QuizHeaderProps {
  title: string;
  subtitle?: string;
  progress?: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ title, subtitle, progress }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
          {subtitle && <p className="text-slate-500">{subtitle}</p>}
        </div>
      </div>
      {progress !== undefined && (
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-indigo-600 h-full transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default QuizHeader;
