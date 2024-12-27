export interface ActivationStatus {
  id: string;
  name: string;
  status: 'active' | 'inactive' | 'loading';
  lastUpdated: Date;
}

export interface SystemResource {
  id: string;
  type: 'api' | 'wiki' | 'mod' | 'sdk' | 'database' | 'blueprint';
  name: string;
  description: string;
  url: string;
  category: string;
}