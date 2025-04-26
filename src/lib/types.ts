
export interface Driver {
  id: number;
  name: string;
  team: string;
  nationality: string;
  number: number;
  image: string;
  skills: DriverSkills;
  stats: DriverStats;
}

export interface DriverSkills {
  pace: number;
  racecraft: number;
  experience: number;
  awareness: number;
  consistency: number;
  overall: number;
}

export interface DriverStats {
  wins: number;
  podiums: number;
  polePositions: number;
  fastestLaps: number;
  pointsLastSeason: number;
  pointsCurrentSeason: number;
  championshipsWon: number;
}

export interface Team {
  id: string;
  name: string;
  color: string;
}

export interface SeasonStats {
  year: number;
  races: number;
  winnerId: number;
  standingsData: StandingData[];
}

export interface StandingData {
  position: number;
  driverId: number;
  points: number;
}
