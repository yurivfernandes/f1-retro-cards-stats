
import React, { useState } from "react";
import { Driver } from "@/lib/types";
import { getTeamColor } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface DriverCardProps {
  driver: Driver;
}

const DriverCard = ({ driver }: DriverCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const teamColor = getTeamColor(driver.team);

  const handleFlip = () => {
    setFlipped(!flipped);
    if (!flipped) {
      setTimeout(() => setAnimateSkills(true), 500);
    } else {
      setAnimateSkills(false);
    }
  };

  const renderSkillBar = (skill: number) => {
    const percentage = (skill / 88) * 100;
    return (
      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={cn("h-full", animateSkills ? "animate-skill" : "")}
          style={{ 
            width: `${percentage}%`, 
            backgroundColor: teamColor 
          }} 
        />
      </div>
    );
  };

  return (
    <div 
      className="perspective w-72 h-96 cursor-pointer"
      onClick={handleFlip}
    >
      <div className={cn("card-inner transition-all duration-500", flipped && "flipped")}>
        {/* Card Front */}
        <div 
          className="card-front rounded-lg border overflow-hidden shadow-lg"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, ${teamColor}22, #15151E)`,
            borderColor: teamColor 
          }}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <Badge 
                style={{ backgroundColor: teamColor }}
                className="text-f1-black font-bold"
              >
                #{driver.number}
              </Badge>
              <span className="text-xs uppercase tracking-wider text-f1-lightgrey">
                {driver.nationality}
              </span>
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 mb-4" style={{ borderColor: teamColor }}>
                {driver.image ? (
                  <img src={driver.image} alt={driver.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-f1-darkgrey flex items-center justify-center text-f1-silver">
                    {driver.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-bungee tracking-wider text-xl text-f1-silver mb-1">{driver.name}</h3>
              <p className="text-sm text-f1-lightgrey">Click to see stats</p>
            </div>
          </div>
        </div>
        
        {/* Card Back */}
        <div 
          className="card-back rounded-lg border overflow-hidden shadow-lg bg-f1-black"
          style={{ borderColor: teamColor }}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="text-center mb-3">
              <h3 className="font-bungee tracking-wider text-lg text-f1-silver">{driver.name}</h3>
              <p className="text-xs text-f1-lightgrey">DRIVER SKILLS</p>
            </div>
            
            <div className="flex-grow space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Pace</span>
                  <span>{driver.skills.pace}/88</span>
                </div>
                {renderSkillBar(driver.skills.pace)}
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Racecraft</span>
                  <span>{driver.skills.racecraft}/88</span>
                </div>
                {renderSkillBar(driver.skills.racecraft)}
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Experience</span>
                  <span>{driver.skills.experience}/88</span>
                </div>
                {renderSkillBar(driver.skills.experience)}
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Awareness</span>
                  <span>{driver.skills.awareness}/88</span>
                </div>
                {renderSkillBar(driver.skills.awareness)}
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Consistency</span>
                  <span>{driver.skills.consistency}/88</span>
                </div>
                {renderSkillBar(driver.skills.consistency)}
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>OVERALL</span>
                  <span>{driver.skills.overall}/88</span>
                </div>
                <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={cn("h-full", animateSkills ? "animate-skill" : "")}
                    style={{ 
                      width: `${(driver.skills.overall / 88) * 100}%`, 
                      backgroundColor: teamColor 
                    }} 
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-2">
              <p className="text-xs text-f1-lightgrey">Click to see card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
