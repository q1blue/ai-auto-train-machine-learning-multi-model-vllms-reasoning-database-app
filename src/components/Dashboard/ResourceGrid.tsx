import React from 'react';
import { SystemResource } from '../../types/dashboard';
import { Book, Code, Database, FileCode, Globe, Puzzle } from 'lucide-react';

const iconMap = {
  api: Globe,
  wiki: Book,
  mod: Puzzle,
  sdk: Code,
  database: Database,
  blueprint: FileCode,
};

export default function ResourceGrid({ resources }: { resources: SystemResource[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {resources.map(resource => {
        const Icon = iconMap[resource.type];
        return (
          <a
            key={resource.id}
            href={resource.url}
            className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center space-x-3">
              <Icon className="h-5 w-5 text-indigo-600" />
              <h3 className="font-medium text-gray-900">{resource.name}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-500">{resource.description}</p>
          </a>
        );
      })}
    </div>
  );
}