import React from "react";
// import { Spotlight } from "../ui/spotlight";
import {Spotlight} from "../components/ui/Spotlight"

export function SpotlightPreview() {
  React.useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    (<div
      className="h-[25rem] md:h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="left-0 -top-40 md:left-60 md:-top-20" fill="white" />
      <div className="relative z-10 w-full p-4 pt-20 mx-auto max-w-7xl md:pt-0">
        <h1
          className="text-4xl font-bold text-center text-transparent bg-opacity-50 md:text-6xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
           Crafting Engaging User Experiences.
        </h1>
        <p
          className="max-w-lg mx-auto mt-4 text-base font-normal text-center text-neutral-300">
I believe that a well-designed website should not only look good, but also function seamlessly and provide a great user experience. I'm always eager to learn new technologies and techniques to stay up-to-date with the latest trends in web development.
        </p>
      </div>
    </div>)
  );
}
