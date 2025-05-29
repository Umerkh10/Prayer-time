"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

type CountryInfoProps = {
  name: string;
  flagUrl: string;
  timezone: string; // Add timezone as a prop
  time: string; // Add time as a prop
};

export function CountryInfo({ name, flagUrl, timezone, time }: CountryInfoProps) {
  return (
    <Card className="w-full bg-transparent shadow-lg border border-muted-foreground">
      <CardContent className="flex items-center gap-4 p-4">
        <div className="flex items-center gap-4">
          <img
            src={flagUrl || "/placeholder.svg"}
            alt={`${name} flag`}
            width={60}
            height={40}
            className="rounded shadow-sm"
          />
          <div>
            <h1 className="text-2xl font-bold capitalize">{name}</h1>
            <div className="flex items-center gap-1 space-y-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
              <span className="text-sm">({timezone})</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
