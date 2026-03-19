export interface Device {
  id: string;
  name: string;
  type: 'TV' | 'Computer' | 'Smartphone' | 'Console' | 'Router' | 'IoT';
  dataRate: number; // in Mbps (MegaBits per second)
  ecoScore: 'A' | 'B' | 'C' | 'D' | 'E';
  status: 'online' | 'offline';
}

export interface HistoryPoint {
  date: string;
  co2: number; // in grams
  dataTotal: number; // in GB
}

export interface Suggestion {
  id: string;
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  completed: boolean;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  cost: number;
  image: string;
}

export const devices: Device[] = [
  { id: '1', name: 'Smart TV Salon', type: 'TV', dataRate: 25, ecoScore: 'B', status: 'online' }, // 4K Streaming
  { id: '2', name: 'MacBook Pro', type: 'Computer', dataRate: 5, ecoScore: 'A', status: 'online' },
  { id: '3', name: 'iPhone 15', type: 'Smartphone', dataRate: 2, ecoScore: 'A', status: 'online' },
  { id: '4', name: 'PS5', type: 'Console', dataRate: 15, ecoScore: 'C', status: 'offline' }, // Gaming
  { id: '5', name: 'Livebox 6', type: 'Router', dataRate: 1, ecoScore: 'A', status: 'online' },
  { id: '6', name: 'Ampoule Connectée', type: 'IoT', dataRate: 0.1, ecoScore: 'A', status: 'online' },
];

export const historyData: HistoryPoint[] = [
  { date: 'Mon', co2: 320, dataTotal: 45 },
  { date: 'Tue', co2: 280, dataTotal: 40 },
  { date: 'Wed', co2: 410, dataTotal: 58 },
  { date: 'Thu', co2: 250, dataTotal: 35 },
  { date: 'Fri', co2: 520, dataTotal: 72 },
  { date: 'Sat', co2: 680, dataTotal: 95 },
  { date: 'Sun', co2: 450, dataTotal: 62 },
];

export const suggestions: Suggestion[] = [
  { id: '1', title: 'Réduire la résolution Vidéo', description: 'Passer de la 4K à la HD réduit le flux de données de 75%.', impact: 'High' },
  { id: '2', title: 'Mode Éco Cloud', description: 'Désactivez la synchronisation automatique en arrière-plan.', impact: 'Medium' },
  { id: '3', title: 'Utiliser le Wi-Fi local', description: 'Le Wi-Fi consomme moins que la 5G pour le transport de données.', impact: 'Low' },
];

export const challenges: Challenge[] = [
  { id: '1', title: 'Zéro Vidéo 4K', description: 'Passez toute la journée en résolution standard (SD/HD).', points: 50, completed: false },
  { id: '2', title: 'Détox Numérique', description: 'Éteignez vos flux de données non essentiels pendant 3 heures.', points: 100, completed: false },
];

export const rewards: Reward[] = [
  { id: '1', title: 'Chargeur Solaire', description: 'Chargeur compact pour vos petits appareils.', cost: 500, image: '☀️' },
  { id: '2', title: 'Remise Reconditionné', description: '10% de réduction sur votre prochain achat.', cost: 300, image: '📱' },
];
