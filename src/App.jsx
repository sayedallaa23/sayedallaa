import React, { useContext, useEffect, useRef, useState } from "react";
import LaptopScene from "./components/LaptopScene";
import ContextProvider, { LaptopContext } from "./store/LaptopContext";
import { SpotlightPreview } from "./components/Header";
import { Skills } from "./components/Skills";
import Performance from "./components/Performance";
import TimeLines from "./components/TimeLines";
import Projects from "./components/Projects";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import Preloader from "./components/Preloader";
// studio.initialize();
// studio.extend(extension);

// const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

function App() {
  const sceneContext = useContext(LaptopContext);
  const [timeout, setLoadertimeout] = useState(true);
  
  setTimeout(() => {
    setLoadertimeout(false);
  }, 4000);
  
  return (
    <div className="relative w-screen">
      <div
        className={`${
          timeout ? "block absolute top-0 left-0 z-50 w-screen" : "hidden"
        }`}
      >
        <Preloader />
      </div>
      <div className={`absolute left-0 w-screen z-1 ${timeout?"top-[-1000rem]":"top-0"}`}>
        <LaptopScene />
      </div>
      <div
        className={`absolute  ${
          sceneContext.showModel
            ? "top-[-1000rem]"
            : "flex flex-col top-0 left-0"
        } overflow-hidden `}
      >
        {/* <div> */}
        <div className="mainbody stars">
          <SpotlightPreview />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-center text-transparent bg-opacity-50 md:text-6xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              My Skills
            </h1>
            <p className="w-[70%] mx-auto mt-[1rem] text-[#a4a0a0]">
              I am a skilled front-end developer with expertise in JavaScript,
              TypeScript, Next.js, React, Three.js, React Three Fiber, and
              Tailwind CSS. I am also proficient in using various frameworks and
              have a passion for learning new technologies. I am committed to
              creating high-quality, visually appealing websites that provide a
              seamless user experience.
            </p>
            <div>
              <Skills />
            </div>
          </div>

          <TimeLines />
          <Projects />
          <div className="md:mt-[4rem]">
            <Performance />
          </div>
          <BackgroundBeamsWithCollisionDemo />
        </div>
      </div>
    </div>
  );
}
export default App;
