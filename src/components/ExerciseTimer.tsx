import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, RotateCcw } from 'lucide-react';

interface ExerciseTimerProps {
  duration: number;
  exerciseName: string;
  muscles: string[];
  animation: string;
  isActive: boolean;
  onComplete: () => void;
  onPause: () => void;
  onReset: () => void;
  onSkip: () => void;
}

const ExerciseTimer: React.FC<ExerciseTimerProps> = ({
  duration,
  exerciseName,
  muscles,
  animation,
  isActive,
  onComplete,
  onPause,
  onReset,
  onSkip
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(duration);
    setIsRunning(false);
  }, [duration]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && timeLeft > 0 && isActive) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isActive, onComplete]);

  const toggleTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      onPause();
    } else {
      setIsRunning(true);
    }
  };

  const resetTimer = () => {
    setTimeLeft(duration);
    setIsRunning(false);
    onReset();
  };

  const progress = ((duration - timeLeft) / duration) * 100;
  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const getAnimationClass = () => {
    switch (animation) {
      case 'rotate':
        return 'animate-spin';
      case 'flex':
        return 'animate-pulse';
      case 'plank':
        return 'animate-bounce';
      default:
        return 'animate-pulse';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
      {/* Exercise Info */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{exerciseName}</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {muscles.map((muscle) => (
            <span 
              key={muscle}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              {muscle}
            </span>
          ))}
        </div>
      </div>

      {/* Animated Character */}
      <div className="flex justify-center mb-6">
        <div className={`w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-4xl ${
          isRunning ? getAnimationClass() : ''
        } transition-all duration-500`}>
          🧗‍♂️
        </div>
      </div>

      {/* Timer Circle */}
      <div className="relative flex items-center justify-center mb-6">
        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#e5e7eb"
            strokeWidth="10"
            fill="none"
          />
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="#3b82f6"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-4xl font-bold text-gray-800">{timeLeft}</span>
          <span className="text-sm text-gray-600">secondes</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={toggleTimer}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 ${
            isRunning 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        
        <button
          onClick={resetTimer}
          className="w-12 h-12 rounded-full bg-gray-500 hover:bg-gray-600 text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        
        <button
          onClick={onSkip}
          className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110"
        >
          <SkipForward className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-6">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExerciseTimer;