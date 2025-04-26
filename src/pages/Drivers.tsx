
import React, { useState } from "react";
import { drivers } from "@/lib/data";
import DriverCard from "@/components/DriverCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Driver } from "@/lib/types";

const Drivers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("all");
  
  // Extract unique team IDs
  const teamIds = ["all", ...new Set(drivers.map(driver => driver.team))];
  
  // Filter drivers based on search query and team
  const filteredDrivers = drivers.filter(driver => {
    const matchesSearch = driver.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTeam = selectedTeam === "all" || driver.team === selectedTeam;
    return matchesSearch && matchesTeam;
  });
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bungee mb-2">Driver Cards</h1>
        <p className="text-f1-lightgrey">Explore drivers stats and skills in retro trading card style</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Search drivers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        
        <Tabs defaultValue="all" onValueChange={setSelectedTeam}>
          <TabsList>
            {teamIds.map((team) => (
              <TabsTrigger key={team} value={team}>
                {team === "all" ? "All Teams" : team.charAt(0).toUpperCase() + team.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      
      {filteredDrivers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
          {filteredDrivers.map((driver) => (
            <div key={driver.id} className="flex justify-center">
              <DriverCard driver={driver} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-f1-lightgrey">No drivers found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default Drivers;
