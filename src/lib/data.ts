
import { Driver, SeasonStats, Team } from "./types";

export const teams: Team[] = [
  { id: "mercedes", name: "Mercedes", color: "#00D2BE" },
  { id: "redbull", name: "Red Bull Racing", color: "#0600EF" },
  { id: "ferrari", name: "Ferrari", color: "#DC0000" },
  { id: "mclaren", name: "McLaren", color: "#FF8700" },
  { id: "aston", name: "Aston Martin", color: "#006F62" },
  { id: "alpine", name: "Alpine", color: "#0090FF" },
  { id: "williams", name: "Williams", color: "#005AFF" },
  { id: "haas", name: "Haas F1", color: "#FFFFFF" },
  { id: "sauber", name: "Kick Sauber", color: "#900000" },
  { id: "rb", name: "RB", color: "#0032FF" },
];

export const drivers: Driver[] = [
  {
    id: 1,
    name: "Lewis Hamilton",
    team: "mercedes",
    nationality: "British",
    number: 44,
    image: "/drivers/hamilton.jpg",
    skills: {
      pace: 88,
      racecraft: 85,
      experience: 88,
      awareness: 82,
      consistency: 86,
      overall: 86
    },
    stats: {
      wins: 103,
      podiums: 197,
      polePositions: 104,
      fastestLaps: 64,
      pointsLastSeason: 234,
      pointsCurrentSeason: 79,
      championshipsWon: 7
    }
  },
  {
    id: 2,
    name: "Max Verstappen",
    team: "redbull",
    nationality: "Dutch",
    number: 1,
    image: "/drivers/verstappen.jpg",
    skills: {
      pace: 88,
      racecraft: 86,
      experience: 82,
      awareness: 79,
      consistency: 88,
      overall: 88
    },
    stats: {
      wins: 59,
      podiums: 105,
      polePositions: 39,
      fastestLaps: 29,
      pointsLastSeason: 575,
      pointsCurrentSeason: 169,
      championshipsWon: 3
    }
  },
  {
    id: 3,
    name: "Charles Leclerc",
    team: "ferrari",
    nationality: "Monégasque",
    number: 16,
    image: "/drivers/leclerc.jpg",
    skills: {
      pace: 86,
      racecraft: 82,
      experience: 77,
      awareness: 78,
      consistency: 75,
      overall: 83
    },
    stats: {
      wins: 5,
      podiums: 30,
      polePositions: 23,
      fastestLaps: 7,
      pointsLastSeason: 206,
      pointsCurrentSeason: 148,
      championshipsWon: 0
    }
  },
  {
    id: 4,
    name: "Sergio Pérez",
    team: "redbull",
    nationality: "Mexican",
    number: 11,
    image: "/drivers/perez.jpg",
    skills: {
      pace: 80,
      racecraft: 83,
      experience: 84,
      awareness: 81,
      consistency: 74,
      overall: 80
    },
    stats: {
      wins: 6,
      podiums: 38,
      polePositions: 3,
      fastestLaps: 10,
      pointsLastSeason: 285,
      pointsCurrentSeason: 107,
      championshipsWon: 0
    }
  },
  {
    id: 5,
    name: "Lando Norris",
    team: "mclaren",
    nationality: "British",
    number: 4,
    image: "/drivers/norris.jpg",
    skills: {
      pace: 85,
      racecraft: 83,
      experience: 77,
      awareness: 81,
      consistency: 82,
      overall: 84
    },
    stats: {
      wins: 2,
      podiums: 16,
      polePositions: 2,
      fastestLaps: 6,
      pointsLastSeason: 205,
      pointsCurrentSeason: 149,
      championshipsWon: 0
    }
  },
  {
    id: 6,
    name: "Carlos Sainz",
    team: "ferrari",
    nationality: "Spanish",
    number: 55,
    image: "/drivers/sainz.jpg",
    skills: {
      pace: 82,
      racecraft: 84,
      experience: 83,
      awareness: 83,
      consistency: 81,
      overall: 82
    },
    stats: {
      wins: 3,
      podiums: 21,
      polePositions: 5,
      fastestLaps: 2,
      pointsLastSeason: 200,
      pointsCurrentSeason: 118,
      championshipsWon: 0
    }
  },
  {
    id: 7,
    name: "Fernando Alonso",
    team: "aston",
    nationality: "Spanish",
    number: 14,
    image: "/drivers/alonso.jpg",
    skills: {
      pace: 84,
      racecraft: 87,
      experience: 88,
      awareness: 86,
      consistency: 85,
      overall: 85
    },
    stats: {
      wins: 32,
      podiums: 106,
      polePositions: 22,
      fastestLaps: 23,
      pointsLastSeason: 206,
      pointsCurrentSeason: 41,
      championshipsWon: 2
    }
  },
  {
    id: 8,
    name: "Oscar Piastri",
    team: "mclaren",
    nationality: "Australian",
    number: 81,
    image: "/drivers/piastri.jpg",
    skills: {
      pace: 81,
      racecraft: 78,
      experience: 70,
      awareness: 77,
      consistency: 76,
      overall: 78
    },
    stats: {
      wins: 1,
      podiums: 5,
      polePositions: 1,
      fastestLaps: 2,
      pointsLastSeason: 97,
      pointsCurrentSeason: 90,
      championshipsWon: 0
    }
  },
  {
    id: 9,
    name: "George Russell",
    team: "mercedes",
    nationality: "British",
    number: 63,
    image: "/drivers/russell.jpg",
    skills: {
      pace: 83,
      racecraft: 82,
      experience: 77,
      awareness: 80,
      consistency: 81,
      overall: 82
    },
    stats: {
      wins: 2,
      podiums: 12,
      polePositions: 4,
      fastestLaps: 6,
      pointsLastSeason: 175,
      pointsCurrentSeason: 66,
      championshipsWon: 0
    }
  },
  {
    id: 10,
    name: "Pierre Gasly",
    team: "alpine",
    nationality: "French",
    number: 10,
    image: "/drivers/gasly.jpg",
    skills: {
      pace: 78,
      racecraft: 79,
      experience: 79,
      awareness: 78,
      consistency: 77,
      overall: 78
    },
    stats: {
      wins: 1,
      podiums: 4,
      polePositions: 0,
      fastestLaps: 2,
      pointsLastSeason: 62,
      pointsCurrentSeason: 17,
      championshipsWon: 0
    }
  }
];

export const seasonData: SeasonStats[] = [
  {
    year: 2023,
    races: 22,
    winnerId: 2, // Max Verstappen
    standingsData: [
      { position: 1, driverId: 2, points: 575 },
      { position: 2, driverId: 4, points: 285 },
      { position: 3, driverId: 1, points: 234 },
      { position: 4, driverId: 3, points: 206 },
      { position: 4, driverId: 7, points: 206 },
      { position: 6, driverId: 5, points: 205 },
      { position: 7, driverId: 6, points: 200 },
      { position: 8, driverId: 9, points: 175 },
      { position: 9, driverId: 8, points: 97 },
      { position: 10, driverId: 10, points: 62 },
    ]
  },
  {
    year: 2024,
    races: 8, // Races so far in current season
    winnerId: 2, // Current leader: Max Verstappen
    standingsData: [
      { position: 1, driverId: 2, points: 169 },
      { position: 2, driverId: 5, points: 149 },
      { position: 3, driverId: 3, points: 148 },
      { position: 4, driverId: 6, points: 118 },
      { position: 5, driverId: 4, points: 107 },
      { position: 6, driverId: 8, points: 90 },
      { position: 7, driverId: 1, points: 79 },
      { position: 8, driverId: 9, points: 66 },
      { position: 9, driverId: 7, points: 41 },
      { position: 10, driverId: 10, points: 17 },
    ]
  }
];

export function getTeamColor(teamId: string): string {
  const team = teams.find(t => t.id === teamId);
  return team ? team.color : "#FFFFFF";
}

export function getTeamName(teamId: string): string {
  const team = teams.find(t => t.id === teamId);
  return team ? team.name : "Unknown Team";
}

export function getDriverById(driverId: number): Driver | undefined {
  return drivers.find(driver => driver.id === driverId);
}
