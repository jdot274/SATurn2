import React from 'react';
import { Sparkles } from 'lucide-react';

const PracticeHeader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-8">
      {/* Header with Sparkles */}
      <div className="text-center">
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
                       rounded-xl blur opacity-75 group-hover:opacity-100 animate-[pulse_3s_cubic-bezier(0.4,0,0.8,1)_infinite]" />
          <div className="relative px-12 py-4 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-400/20 
                       backdrop-blur-xl rounded-xl border border-blue-500/30">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 
                       bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
              Practice Center
              <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            </h1>
          </div>
        </div>
        <p className="text-lg text-white/60 mt-4">
          Continue your learning journey with personalized practice sessions
        </p>
      </div>
    </div>
  );
};

export default PracticeHeader;