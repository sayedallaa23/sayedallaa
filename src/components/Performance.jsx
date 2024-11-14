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
} from "@react-three/drei";
import { useInView } from "framer-motion";
import * as THREE from "three";
import { FlipWordsDemo } from "./FlipWordsDemo";

function Model({ path, povState }) {
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, scene);
  const [rotationReached, setRotationReached] = useState(false);
  const primeRef = useRef();
  const light = useRef();
  const hoverContext = useContext(lightContext);

  useFrame((state, delta) => {
    if (povState && !rotationReached) {
      primeRef.current.rotation.y += 0.0015;
    }
    if (primeRef.current.rotation.y >= 0.3) {
      setRotationReached(true);
    }
  });

  useEffect(() => {
    if (povState) {
      actions["Change form"].reset().fadeIn(0.5).play();
      actions["Change form"].clampWhenFinished = true;
      actions["Change form"].setLoop(THREE.LoopOnce, 1);
      primeRef.current.rotation.y = -1;
      setRotationReached(false);
    } else {
      actions["Change form"].reset().stop();
      primeRef.current.rotation.y = -1;
      setRotationReached(false);
    }
  }, [povState]);

  return (
    <mesh
      position={[0, 0, 0]}
      ref={primeRef}
      rotation={[0, -1, 0]}
      onPointerOver={(e) => {
        hoverContext.setHovered(true);
      }}
      onPointerOut={(e) => {
        hoverContext.setHovered(false);
      }}
    >
      <primitive object={scene} scale={[0.5, 0.5, 0.5]} position={[0, 10, 0]} />
    </mesh>
  );
}

function LightWithMouse() {
  const { mouse } = useThree();
  const lightRef = useRef();
  const hoverContext = useContext(lightContext);

  useFrame(() => {
    if (lightRef.current && hoverContext.hovered) {
      lightRef.current.position.x = mouse.x * 300;
      lightRef.current.position.y = 10;
      lightRef.current.position.z = mouse.y * 300;
    }
  });

  return (
    <spotLight
      ref={lightRef}
      angle={0.5}
      penumbra={0.5}
      castShadow
      intensity={hoverContext.hovered ? 0.3 : 0}
      shadow-mapSize={1024}
      shadow-bias={-0.001}
    >
      <orthographicCamera
        attach="shadow-camera"
        args={[-10, 10, -10, 10, 0.1, 50]}
      />
    </spotLight>
  );
}

const lightContext = createContext(false);
function LightContextProvider({ children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <lightContext.Provider value={{ hovered, setHovered }}>
      {children}
    </lightContext.Provider>
  );
}

function Performance() {
  const performanceRef = useRef();
  const isInView = useInView(performanceRef, { amount: 0.7 });
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 700
  );

  return (
    <div className="flex justify-between h-[100dvh] lg:h-[100vh]">
      <div className="ml-[2rem] mt-[4rem]">
        <div className="">
          <div className="md:mb-[6rem] mb-[8rem]">
            <FlipWordsDemo />
          </div>
          <div className="w-[100%] md:w-[70%]">
            <p className=" text-neutral-600">
              I love creating high-performance, visually appealing websites that
              deliver a seamless user experience. I optimize speed,
              functionality, and design to meet customer needs and preferences.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[35vh] md:h-[50vh]  lg:h-[100vh] w-[50vw]">
        <LightContextProvider>
          <Canvas ref={performanceRef}>
            <PerspectiveCamera position={[0, 35, 110]} makeDefault />
            {/* <Environment preset={isMobile?"city":"night"} /> */}
            <Environment files={isMobile?"/city.hdr":"/night.hdr"} />
            <LightWithMouse />
            <pointLight position={[10, 20, 0]} intensity={0.3} />
            <pointLight position={[10, -20, 0]} intensity={0.3} />
            <Model path={"/prime2.glb"} povState={isInView} />
          </Canvas>
        </LightContextProvider>
      </div>
    </div>
  );
}

export default Performance;
