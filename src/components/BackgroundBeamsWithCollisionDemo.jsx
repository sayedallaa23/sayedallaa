import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Socials from "./Socials";
export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col">
        <h2 className="py-4 mt-8 text-4xl font-medium tracking-tight text-center text-transparent bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text md:text-7xl">
          What are you wating for?{" "}
          <div className="relative mx-auto block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Contact Me</span>
            </div>
            <div className="relative py-4 text-transparent bg-no-repeat bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
              <span className="">Contact Me</span>
            </div>
          </div>
        </h2>
        <div className="self-center">
          <Socials />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
