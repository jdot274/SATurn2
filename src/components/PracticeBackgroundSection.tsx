import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface PracticeBackgroundSectionProps {
  isExpanded?: boolean;
  onToggle?: () => void;
}

const PracticeBackgroundSection: React.FC<PracticeBackgroundSectionProps> = ({
  isExpanded = false,
  onToggle
}) => {
  const [isExpandedInternal, setIsExpandedInternal] = useState(isExpanded);
  const [today] = useState(new Date());
  const [today] = useState(new Date());

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setIsExpandedInternal(!isExpandedInternal);
    }
  };

  const expanded = onToggle ? isExpanded : isExpandedInternal;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Planet */}
        <div className="absolute w-[120vh] h-[120vh] rounded-full
                      bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950
                      -top-[90vh] left-[50%] transform -translate-x-1/2 -z-10
                      blur-sm" />

        {/* Atmosphere glow effect */}
        <div className="absolute w-[200vw] h-[100vh] -top-[50vh] -left-[50vw] 
                      bg-gradient-to-b from-blue-600/20 via-blue-800/10 to-transparent
                      blur-3xl transform -rotate-12" />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950" />

        {/* Deep blue radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.5),rgba(30,58,138,0.2)_50%,transparent_100%)]" />

        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.25
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-2xl mx-auto mt-8">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 
                     rounded-xl blur opacity-75 group-hover:opacity-100 animate-[pulse_3s_cubic-bezier(0.4,0,0.8,1)_infinite]" />
        <div className="relative px-4 py-2 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-400/20 
                     backdrop-blur-xl rounded-xl border border-blue-500/30">
          <div className="flex items-center justify-between cursor-pointer"
               onClick={handleToggle}>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-purple-200 to-blue-100 
                        bg-clip-text text-transparent">Background</h2>
            <ChevronDown className={`w-6 h-6 text-white/60 transition-transform duration-300 ${
              expanded ? 'rotate-180' : ''
            }`} />
          </div>
          {!expanded && (
            <p className="text-lg text-white/60 mt-2">
              Continue your learning journey with personalized practice sessions
            </p>
          )}
          <div className={`mt-4 overflow-hidden transition-all duration-500 ${
            expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col items-center gap-3 relative z-10">
              <button
                className="px-4 py-2 rounded-xl backdrop-blur-xl border border-pink-500/30 
                       bg-pink-500/20 text-pink-400 hover:bg-pink-500/30
                       transition-all duration-300 flex items-center gap-3 font-medium
                       mx-auto text-base shadow-lg shadow-pink-500/20
                       hover:scale-105 active:scale-95"
              >
                Summary
              </button>
              <button
                className="px-4 py-2 rounded-xl backdrop-blur-xl border border-blue-500/30 
                       bg-blue-500/20 text-blue-400 hover:bg-blue-500/30
                       transition-all duration-300 flex items-center gap-3 font-medium
                       mx-auto text-base shadow-lg shadow-blue-500/20
                       hover:scale-105 active:scale-95"
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeBackgroundSection;