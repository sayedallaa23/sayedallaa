import React, {
  useRef,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import * as THREE from "three";

function Model({ path, povState }) {
  const { scene, animations } = useGLTF(path);

  const earthRef = useRef();

  useFrame((state, delta) => {
    earthRef.current.rotation.y += 0.001;
  });

  return (
    <mesh position={[0, 0, 0]} ref={earthRef}>
      <primitive object={scene} scale={[0.5, 0.5, 0.5]} position={[0, 0, 0]} />
    </mesh>
  );
}
function TimeLines() {
  return (
    <div className="flex items-center justify-between gap-x-10 mt-[4rem]">
      <div className="w-[50%]  ml-[2rem]">
        <h1 className="font-bold text-transparent bg-opacity-50 md:text-6xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 text-[1.5rem]">
          Global Expertise, Local Impact
        </h1>
        <p className="mt-[2rem] text-neutral-600">
          I can bring your project to life no matter the timeline. I have the
          skills and experience to work seamlessly with teams around the world,
          delivering high-quality results on time and on budget.
        </p>
      </div>
      <div className="h-[30vh] xl:h-[100vh] w-[50%]">
        <Canvas>
          <PerspectiveCamera position={[0, 0, 1.5]} makeDefault />
          {/* <Environment preset="city" /> */}
          <Environment files={"/city.hdr"} />
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            speed={.25}
          >
            <Model path="/earth5.glb" povState={true} />
          </PresentationControls>
        </Canvas>
      </div>
    </div>
  );
}

export default TimeLines;
