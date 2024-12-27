import React from 'react';

interface ModelConfigProps {
  onConfigChange: (config: any) => void;
  config: {
    learningRate: number;
    batchSize: number;
    epochs: number;
    modelType: 'vllm' | 'gpt' | 'metahuman';
  };
}

export default function ModelConfig({ onConfigChange, config }: ModelConfigProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Model Configuration</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Learning Rate</label>
          <input
            type="number"
            value={config.learningRate}
            onChange={(e) => onConfigChange({ ...config, learningRate: parseFloat(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Batch Size</label>
          <input
            type="number"
            value={config.batchSize}
            onChange={(e) => onConfigChange({ ...config, batchSize: parseInt(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Model Type</label>
          <select
            value={config.modelType}
            onChange={(e) => onConfigChange({ ...config, modelType: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="vllm">VLLM</option>
            <option value="gpt">GPT</option>
            <option value="metahuman">MetaHuman</option>
          </select>
        </div>
      </div>
    </div>
  );
}