import React, { useContext, useEffect, useRef } from "react";
import LaptopScene from "./components/LaptopScene";
import ContextProvider, { LaptopContext } from "./store/LaptopContext";
import { SpotlightPreview } from "./components/Header";
import { Skills } from "./components/Skills";
import Performance from "./components/Performance";
import TimeLines from "./components/TimeLines";
import LockScene from "./components/LockScene";
import Projects from "./components/Projects";
// studio.initialize();
// studio.extend(extension);

// const demoSheet = getProject("Demo Project").sheet("Demo Sheet");

function App() {
  const sceneContext = useContext(LaptopContext);

  return (
    // <ContextProvider>
    <div className="w-screen bg-black/[0.96]">
      {/* <LaptopScene />
      <div
        className={`absolute top-0 left-0 ${
          sceneContext.showModel ? "hidden" : "flex flex-col"
        } overflow-hidden `}
      > */}
      <div>
        <SpotlightPreview />
        <div className="bg-black/[0.96] h-[98vh] text-center">
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
        <div className="md:mt-[4rem]">
          <Performance />
        </div>
        <TimeLines/>
        {/* <LockScene/> */}
        <Projects/>
      </div>
    </div>
    // </ContextProvider>
  );
}
export default App;
