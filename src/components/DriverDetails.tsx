
import React from "react";
import { Driver } from "@/lib/types";
import { getTeamName, getTeamColor } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Flag, Award, Clock } from "lucide-react";
import StatCard from "./StatCard";

interface DriverDetailsProps {
  driver: Driver;
}

const DriverDetails: React.FC<DriverDetailsProps> = ({ driver }) => {
  const teamColor = getTeamColor(driver.team);
  const teamName = getTeamName(driver.team);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4" style={{ borderColor: teamColor }}>
          {driver.image ? (
            <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-f1-darkgrey flex items-center justify-center text-f1-silver text-4xl">
              {driver.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
        
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bungee tracking-wider mb-2">{driver.name}</h2>
          
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-3">
            <div 
              className="inline-flex items-center px-3 py-1 rounded-full text-sm"
              style={{ backgroundColor: teamColor + '33', color: teamColor }}
            >
              {teamName}
            </div>
            <div className="text-sm text-f1-lightgrey">
              {driver.nationality} &bull; #{driver.number}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {driver.stats.championshipsWon > 0 && (
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-f1-darkgrey rounded-md text-xs">
                <Trophy size={14} className="text-amber-400" />
                <span>{driver.stats.championshipsWon}x World Champion</span>
              </div>
            )}
            <div className="inline-flex items-center gap-1 px-2 py-1 bg-f1-darkgrey rounded-md text-xs">
              <Flag size={14} className="text-f1-red" />
              <span>{driver.stats.wins} Wins</span>
            </div>
            <div className="inline-flex items-center gap-1 px-2 py-1 bg-f1-darkgrey rounded-md text-xs">
              <Award size={14} className="text-f1-silver" />
              <span>{driver.stats.podiums} Podiums</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        <StatCard 
          title="Pole Positions" 
          value={driver.stats.polePositions} 
          color={teamColor}
        />
        <StatCard 
          title="Fastest Laps" 
          value={driver.stats.fastestLaps} 
          color={teamColor} 
          icon={<Clock size={18} />} 
        />
        <StatCard 
          title="2023 Points" 
          value={driver.stats.pointsLastSeason} 
          color={teamColor} 
        />
        <StatCard 
          title="2024 Points" 
          value={driver.stats.pointsCurrentSeason} 
          color={teamColor} 
        />
      </div>
      
      <Card className="mt-6">
        <CardContent className="p-6">
          <h3 className="text-xl font-bungee mb-4">Driver Skills (0-88 Rating)</h3>
          <div className="space-y-4">
            {Object.entries(driver.skills).map(([key, value]) => {
              if (key === "overall") return null;
              return (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="capitalize">{key}</span>
                    <span>{value}/88</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      style={{ 
                        width: `${(value / 88) * 100}%`, 
                        backgroundColor: teamColor 
                      }} 
                      className="h-full"
                    />
                  </div>
                </div>
              );
            })}
            
            <div className="pt-2 border-t">
              <div className="flex justify-between font-bold mb-1">
                <span>OVERALL</span>
                <span>{driver.skills.overall}/88</span>
              </div>
              <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                <div 
                  style={{ 
                    width: `${(driver.skills.overall / 88) * 100}%`, 
                    backgroundColor: teamColor 
                  }} 
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriverDetails;
