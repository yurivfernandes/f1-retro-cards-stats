
import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { drivers } from "@/lib/data";
import DriverDetails from "@/components/DriverDetails";
import { Driver } from "@/lib/types";

const Compare = () => {
  const [driver1, setDriver1] = useState<Driver | null>(null);
  const [driver2, setDriver2] = useState<Driver | null>(null);
  
  const handleDriver1Change = (value: string) => {
    const selectedDriver = drivers.find(d => d.id.toString() === value) || null;
    setDriver1(selectedDriver);
  };
  
  const handleDriver2Change = (value: string) => {
    const selectedDriver = drivers.find(d => d.id.toString() === value) || null;
    setDriver2(selectedDriver);
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bungee mb-2">Compare Drivers</h1>
        <p className="text-f1-lightgrey">Select two drivers to compare their stats and skills</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-medium mb-2">First Driver</h2>
          <Select onValueChange={handleDriver1Change}>
            <SelectTrigger>
              <SelectValue placeholder="Select a driver" />
            </SelectTrigger>
            <SelectContent>
              {drivers.map((driver) => (
                <SelectItem key={`driver1-${driver.id}`} value={driver.id.toString()}>
                  {driver.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <h2 className="text-lg font-medium mb-2">Second Driver</h2>
          <Select onValueChange={handleDriver2Change}>
            <SelectTrigger>
              <SelectValue placeholder="Select a driver" />
            </SelectTrigger>
            <SelectContent>
              {drivers.map((driver) => (
                <SelectItem key={`driver2-${driver.id}`} value={driver.id.toString()}>
                  {driver.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {driver1 ? (
          <div>
            <DriverDetails driver={driver1} />
          </div>
        ) : (
          <div className="border border-dashed border-f1-darkgrey rounded-lg p-8 flex items-center justify-center">
            <p className="text-f1-lightgrey">Select first driver to view details</p>
          </div>
        )}
        
        {driver2 ? (
          <div>
            <DriverDetails driver={driver2} />
          </div>
        ) : (
          <div className="border border-dashed border-f1-darkgrey rounded-lg p-8 flex items-center justify-center">
            <p className="text-f1-lightgrey">Select second driver to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Compare;
