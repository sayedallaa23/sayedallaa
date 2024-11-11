import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["better", "High Performance", "beautiful", "modern"];
 
  return (
    <div className="flex items-center justify-center px-4 ">
      <div className="mx-auto text-6xl font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with ME
      </div>
    </div>
  );
}
