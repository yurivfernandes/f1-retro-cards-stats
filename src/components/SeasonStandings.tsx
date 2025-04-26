
import React from "react";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { getDriverById, getTeamColor, getTeamName } from "@/lib/data";
import { SeasonStats } from "@/lib/types";

interface SeasonStandingsProps {
  seasonData: SeasonStats;
}

const SeasonStandings: React.FC<SeasonStandingsProps> = ({ seasonData }) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableCaption>Season {seasonData.year} Driver Standings</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">Pos</TableHead>
            <TableHead>Driver</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-right">Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {seasonData.standingsData.map((standing) => {
            const driver = getDriverById(standing.driverId);
            if (!driver) return null;
            
            const teamColor = getTeamColor(driver.team);
            const teamName = getTeamName(driver.team);
            
            return (
              <TableRow key={standing.driverId}>
                <TableCell className="font-bungee">{standing.position}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-1 h-8" 
                      style={{ backgroundColor: teamColor }}
                    />
                    <div>
                      <span className="font-medium">{driver.name}</span>
                      <span className="text-xs text-muted-foreground ml-2">#{driver.number}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{teamName}</TableCell>
                <TableCell className="text-right font-bungee">{standing.points}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default SeasonStandings;
