
import React from "react";
import { seasonData, drivers } from "@/lib/data";
import SeasonStandings from "@/components/SeasonStandings";
import StatCard from "@/components/StatCard";
import { Trophy, Star, Flag, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  // Get current and previous season data
  const currentSeason = seasonData[1]; // 2024
  const previousSeason = seasonData[0]; // 2023
  
  // Get current champion (last year winner)
  const currentChampion = drivers.find(driver => driver.id === previousSeason.winnerId);
  
  // Get current standings leader
  const currentLeader = drivers.find(driver => driver.id === currentSeason.standingsData[0].driverId);
  
  // Calculate total race wins in the dataset
  const totalWins = drivers.reduce((sum, driver) => sum + driver.stats.wins, 0);
  
  // Calculate total championships in the dataset
  const totalChampionships = drivers.reduce((sum, driver) => sum + driver.stats.championshipsWon, 0);
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bungee mb-2">F1 Retro Stats</h1>
        <p className="text-f1-lightgrey mb-6">Formula 1 driver statistics and analysis from the last 2 seasons</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Reigning Champion" 
            value={currentChampion?.name || "Unknown"} 
            icon={<Trophy size={20} />}
            color="#FFD700"
          />
          <StatCard 
            title="Current Leader" 
            value={currentLeader?.name || "Unknown"} 
            icon={<Star size={20} />}
          />
          <StatCard 
            title="Total Race Wins" 
            value={totalWins} 
            icon={<Flag size={20} />}
          />
          <StatCard 
            title="Championships" 
            value={totalChampionships} 
            icon={<Award size={20} />}
            color="#FFD700"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>2024 Season Standings</CardTitle>
            <CardDescription>Current Formula 1 season driver standings</CardDescription>
          </CardHeader>
          <CardContent>
            <SeasonStandings seasonData={currentSeason} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>2023 Season Standings</CardTitle>
            <CardDescription>Previous Formula 1 season driver standings</CardDescription>
          </CardHeader>
          <CardContent>
            <SeasonStandings seasonData={previousSeason} />
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-gradient-to-r from-f1-red/10 to-f1-black border-f1-red">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bungee mb-2">Explore Driver Cards</h2>
              <p className="text-f1-lightgrey">
                Check out our retro-style driver cards with detailed stats and skill ratings
              </p>
            </div>
            <Link 
              to="/drivers" 
              className="px-6 py-3 bg-f1-red text-white font-medium rounded-md hover:bg-f1-red/90 transition"
            >
              View Driver Cards
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
