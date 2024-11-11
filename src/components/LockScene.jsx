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
import { useInView } from "framer-motion";
import * as THREE from "three";
import { FlipWordsDemo } from "./FlipWordsDemo";

function Model({ path, povState }) {
  const { scene, animations } = useGLTF(path);
  const { actions } = useAnimations(animations, scene);
  const [rotationReached, setRotationReached] = useState(false);
  const lockRef = useRef();
  const hoverContext = useContext(lightContext);


  // useFrame((state, delta) => {
  //   if (povState && !rotationReached) {
  //     lockRef.current.rotation.y += 0.0015;
  //   }
  //   if (lockRef.current.rotation.y >= 0.1) {
  //     setRotationReached(true);
  //   }
  // });

  // useEffect(() => {
  //   if (povState) {
  //     actions["Change form"].reset().fadeIn(0.5).play();
  //     actions["Change form"].clampWhenFinished = true;
  //     actions["Change form"].setLoop(THREE.LoopOnce, 1);
  //     lockRef.current.rotation.y = -1;
  //     setRotationReached(false);
  //   }
  //   else {
  //     actions["Change form"].reset().stop();
  //     lockRef.current.rotation.y = -1;
  //     setRotationReached(false);
  //   }
  // }, [povState]);



  return (
    <mesh
      position={[50, 0, 0]}
      ref={lockRef}
      rotation={[0, -3, 0]}
      onPointerOver={(e) => {
        hoverContext.setHovered(true);
      }}
      onPointerOut={(e) => {
        hoverContext.setHovered(false);
      }}
    >
      <primitive object={scene} scale={[.5,.5,.5]} position={[0, 10, 0]} />
      {/* <primitive object={scene} scale={[250,250,250]} position={[-10, 10, 0]} /> */}

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

      console.log("mouse.x:", mouse.x, "mouse.y:", mouse.y);
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


function LockScene() {
  const locksceneRef = useRef();
  const isInView = useInView(locksceneRef, { amount: 0.7 });
  return (
    <div>
      <div className="w-[100vw] h-[100vh] ">
      <LightContextProvider>
          <Canvas ref={locksceneRef}>
            {/* <PerspectiveCamera position={[0, 35, 100]} makeDefault /> */}
            <PerspectiveCamera position={[0, 35, 100]} makeDefault />

            <Environment preset="night" />
            <LightWithMouse />
            <OrbitControls/>
            <pointLight position={[10, 20, 0]} intensity={.2} />
            <pointLight position={[10, -20, 0]} intensity={.2} />
            {/* <Model path={"/lock.glb"} povState={isInView} /> */}
            <Model path={"/engine.glb"} povState={isInView} />

          </Canvas>
        </LightContextProvider>
      </div>
      <div>
        <h1></h1>
        <p></p>
      </div>
    </div>
  );
}

export default LockScene;
