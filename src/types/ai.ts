export interface TrainingConfig {
  learningRate: number;
  batchSize: number;
  epochs: number;
  modelType: 'vllm' | 'gpt' | 'metahuman';
}

export interface TrainingMetrics {
  loss: number;
  accuracy: number;
  epoch: number;
  timestamp: number;
}

export interface AIModel {
  id: string;
  name: string;
  type: string;
  status: 'training' | 'ready' | 'error';
  metrics: TrainingMetrics[];
  config: TrainingConfig;
}