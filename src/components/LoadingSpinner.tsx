import React from 'react';
import { Loader2, Palette } from 'lucide-react';

interface LoadingSpinnerProps {
  isDark: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isDark }) => {
  return (
    <div className={`rounded-xl border-2 transition-all duration-300 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } shadow-lg`}>
      <div className="p-8 text-center">
        <div className="relative inline-flex items-center justify-center mb-6">
          <div className={`absolute inset-0 rounded-full animate-ping ${
            isDark ? 'bg-purple-400' : 'bg-purple-500'
          } opacity-20`}></div>
          <div className={`relative p-4 rounded-full ${
            isDark ? 'bg-purple-600' : 'bg-purple-500'
          }`}>
            <Palette className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>
        
        <div className="flex items-center justify-center mb-4">
          <Loader2 className={`w-6 h-6 mr-3 animate-spin ${
            isDark ? 'text-purple-400' : 'text-purple-500'
          }`} />
          <h3 className="text-lg font-semibold">Applying Neural Style Transfer</h3>
        </div>
        
        <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Our System is analyzing your image and applying the artistic style. This usually takes a few moments...
        </p>
        
        <div className={`w-full bg-gray-200 rounded-full h-2 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
          <div className={`h-2 rounded-full transition-all duration-1000 ${
            isDark ? 'bg-purple-400' : 'bg-purple-500'
          }`} style={{ width: '0%', animation: 'loading 3s ease-in-out forwards' }}>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs opacity-60">
          <div className="flex items-center justify-center">
            <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
              isDark ? 'bg-blue-400' : 'bg-blue-500'
            }`}></div>
            Analyzing
          </div>
          <div className="flex items-center justify-center">
            <div className={`w-2 h-2 rounded-full mr-2 animate-pulse delay-500 ${
              isDark ? 'bg-yellow-400' : 'bg-yellow-500'
            }`}></div>
            Processing
          </div>
          <div className="flex items-center justify-center">
            <div className={`w-2 h-2 rounded-full mr-2 animate-pulse delay-1000 ${
              isDark ? 'bg-green-400' : 'bg-green-500'
            }`}></div>
            Rendering
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          33% { width: 30%; }
          66% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;