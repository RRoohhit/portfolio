"use client";

import React from "react";
import { AiKeywordDensityTracker } from "./components/AiKeywordDensityTracker";
import { AiSeoOptimizer } from "./components/AiSeoOptimizer";
import { Reveal } from "@/components/ui/Reveal";

export const AiLabView: React.FC = () => {
  return (
    <div className="space-y-8">
      <Reveal>
        <AiKeywordDensityTracker />
      </Reveal>
      <Reveal delay={0.1}>
        <AiSeoOptimizer />
      </Reveal>
    </div>
  );
};