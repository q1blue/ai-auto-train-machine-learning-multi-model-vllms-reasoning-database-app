import React from 'react';
import { ActivationStatus } from '../../types/dashboard';
import { Power } from 'lucide-react';

export default function ActivationPanel({ systems }: { systems: ActivationStatus[] }) {
  const toggleSystem = (id: string) => {
    // Implementation for toggling system status
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">System Controls</h2>
      <div className="space-y-4">
        {systems.map(system => (
          <div key={system.id} className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h3 className="font-medium">{system.name}</h3>
              <p className="text-sm text-gray-500">
                Last updated: {system.lastUpdated.toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => toggleSystem(system.id)}
              className={`p-2 rounded-full ${
                system.status === 'active' ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <Power className="h-5 w-5 text-white" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}