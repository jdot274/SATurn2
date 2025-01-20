import React from 'react';
import { Sparkles } from 'lucide-react';

const SATExplainedHeader: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1e3a8a] relative p-8">
      {/* Deep blue radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.5),rgba(30,58,138,0.2)_50%,transparent_100%)]" />

      {/* Header with Sparkles */}
      <div className="text-center relative z-10">
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0088ff] via-[#0066ff] to-[#0088ff]
                       rounded-xl blur opacity-75 group-hover:opacity-100 animate-[pulse_3s_cubic-bezier(0.4,0,0.8,1)_infinite]" />
          <div className="relative px-12 py-4 bg-gradient-to-r from-[#0088ff]/20 via-[#0066ff]/20 to-[#0088ff]/20 
                       backdrop-blur-xl rounded-xl border border-[#0088ff]/30">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 via-violet-200 to-purple-100 
                       bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
              Understanding the SAT
              <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
            </h1>
          </div>
        </div>
        <p className="text-lg text-white/60 mt-4">
          Master the format, scoring, and strategies for success
        </p>
      </div>
    </div>
  );
}

export default SATExplainedHeader;