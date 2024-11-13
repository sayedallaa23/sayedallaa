import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "High Performance", "beautiful", "modern"];
 
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute left-0 mx-auto text-3xl font-normal lg:text-6xl text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with ME
      </div>
    </div>
  );
}
