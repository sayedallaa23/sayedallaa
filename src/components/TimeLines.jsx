import React, {
  useEffect,
  useRef,
  useState,
  useContext,
  createContext,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  PerspectiveCamera,
  useAnimations,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

function Model({ path, povState }) {
  const { scene, animations } = useGLTF(path);

  const earthRef = useRef();

  useFrame((state, delta) => {
    earthRef.current.rotation.y += 0.001;
    // earthRef.current.rotation.x += 0.00015;
  });

  return (
    <mesh position={[0, 0, 0]} ref={earthRef}>
      <primitive object={scene} scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]} />
    </mesh>
  );
}
function TimeLines() {
  return (
    <div className="flex items-center justify-between gap-x-10">
      <div className="w-[50%]  ml-[2rem]">
        <h1 className="font-bold text-transparent bg-opacity-50 md:text-6xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          Global Expertise, Local Impact
        </h1>
        <p className="mt-[2rem] text-neutral-600">
          I can bring your project to life no matter the timeline. I have the
          skills and experience to work seamlessly with teams around the world,
          delivering high-quality results on time and on budget.
        </p>
      </div>
      <div className="h-[100vh] w-[50%]">
        <Canvas>
          <PerspectiveCamera position={[0, 0, 1.5]} makeDefault />
          {/* <OrbitControls/> */}
          <Environment preset="studio" />
          {/* <pointLight position={[0, 20, 0]} intensity={1} />
          <pointLight position={[0, -20, 0]} intensity={1} />
          <pointLight position={[0, 0, 10]} intensity={20} /> */}
          <Model path="/earth2.glb" povState={true} />
        </Canvas>
      </div>
    </div>
  );
}

export default TimeLines;
