import React, { useState } from 'react';
import TrainingControls from '../Training/TrainingControls';
import TrainingMetrics from '../Training/TrainingMetrics';
import ModelConfig from '../Training/ModelConfig';
import { AIModel } from '../../types/ai';

export default function TrainingDashboard() {
  const [isTraining, setIsTraining] = useState(false);
  const [config, setConfig] = useState({
    learningRate: 0.001,
    batchSize: 32,
    epochs: 100,
    modelType: 'vllm' as const
  });
  const [metrics, setMetrics] = useState([]);

  const handleStart = () => {
    setIsTraining(true);
    // Training logic here
  };

  const handlePause = () => {
    setIsTraining(false);
    // Pause logic here
  };

  const handleReset = () => {
    setIsTraining(false);
    setMetrics([]);
    // Reset logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">AI Training Dashboard</h1>
          <TrainingControls
            onStart={handleStart}
            onPause={handlePause}
            onReset={handleReset}
            isTraining={isTraining}
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <ModelConfig config={config} onConfigChange={setConfig} />
          <TrainingMetrics data={metrics} />
        </div>
      </div>
    </div>
  );
}