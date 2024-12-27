import React from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TrainingControlsProps {
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  isTraining: boolean;
}

export default function TrainingControls({ onStart, onPause, onReset, isTraining }: TrainingControlsProps) {
  return (
    <div className="flex items-center space-x-4">
      <button 
        onClick={isTraining ? onPause : onStart}
        className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 flex items-center"
      >
        {isTraining ? (
          <>
            <Pause className="w-4 h-4 mr-2" />
            Pause Training
          </>
        ) : (
          <>
            <Play className="w-4 h-4 mr-2" />
            Start Training
          </>
        )}
      </button>
      <button 
        onClick={onReset}
        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 flex items-center"
      >
        <RotateCcw className="w-4 h-4 mr-2" />
        Reset
      </button>
    </div>
  );
}