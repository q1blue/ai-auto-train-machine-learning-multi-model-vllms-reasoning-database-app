import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface MetricsData {
  epoch: number;
  loss: number;
  accuracy: number;
}

interface TrainingMetricsProps {
  data: MetricsData[];
}

export default function TrainingMetrics({ data }: TrainingMetricsProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Training Metrics</h3>
      {data.length > 0 ? (
        <div className="w-full h-64">
          <LineChart width={600} height={240} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="epoch" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="loss" stroke="#8884d8" />
            <Line type="monotone" dataKey="accuracy" stroke="#82ca9d" />
          </LineChart>
        </div>
      ) : (
        <p className="text-gray-500">No training data available yet</p>
      )}
    </div>
  );
}