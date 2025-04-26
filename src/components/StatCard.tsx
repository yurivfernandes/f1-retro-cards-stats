
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Driver } from "@/lib/types";

interface StatCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  color?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color = "#E10600", className }) => {
  return (
    <Card className={`border-l-4 overflow-hidden shadow-md ${className}`} style={{ borderLeftColor: color }}>
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-base font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-2">
          {icon && <span className="text-f1-lightgrey">{icon}</span>}
          <span className="text-2xl font-bungee tracking-wider">{value}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
