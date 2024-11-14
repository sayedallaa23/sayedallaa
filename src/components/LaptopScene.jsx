import * as THREE from "three";
import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  ContactShadows,
  Html,
  OrbitControls,
  ScrollControls,
  Scroll,
  useScroll,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";

import { createRoot } from "react-dom/client";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { editable as e, SheetProvider, PerspectiveCamera } from "@theatre/r3f";

import { LaptopContext } from "../store/LaptopContext";
if (import.meta.env.DEV) {
  studio.initialize();
  studio.extend(extension);
}
import demoProjectState from "./th.json";

const demoSheet = getProject("Demo Project", { state: demoProjectState }).sheet(
  "Demo Sheet"
);

function Model({ open, hinge, showModel, setShowModel, ...props }) {
  const group = useRef();
  // Load model
  const { nodes, materials } = useGLTF("/mac-draco.glb");
  // Take care of cursor state on hover
  const [hovered, setHovered] = useState(false);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );
  // Make it float in the air when it's opened
  // if (showModel){
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 4 : 0,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.1
    );
  });
  // }

  return (
    <e.mesh theatreKey="Laptop">
      <group
        ref={group}
        {...props}
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        dispose={null}
      >
        <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
          <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              material={materials.aluminium}
              geometry={nodes["Cube008"].geometry}
            />
            <mesh
              material={materials["matte.001"]}
              geometry={nodes["Cube008_1"].geometry}
            />
            <mesh
              material={materials["screen.001"]}
              geometry={nodes["Cube008_2"].geometry}
            />
          </group>
        </three.group>
        <mesh
          material={materials.keys}
          geometry={nodes.keyboard.geometry}
          position={[1.79, 0, 3.45]}
        />
        <group position={[0, -0.1, 3.39]}>
          <mesh
            material={materials.aluminium}
            geometry={nodes["Cube002"].geometry}
          />
          <mesh
            material={materials.trackpad}
            geometry={nodes["Cube002_1"].geometry}
          />
        </group>
        <mesh
          material={materials.touchbar}
          geometry={nodes.touchbar.geometry}
          position={[0, -0.03, 1.2]}
        />
      </group>
    </e.mesh>
  );
}

function LaptopScene() {
  const sceneContext = useContext(LaptopContext);

  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false);
  // const [showModel, setShowModel] = useState(true);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  const mainGroup = useRef();
  const flashDiv = useRef();

  useEffect(() => {
    if (open) {
      window.addEventListener("scroll", () => {
        demoSheet.sequence.play();
        setTimeout(() => {
          sceneContext.setShowModel(false);
        }, 3000);
      });
    }
  }, [open]);

  const flash = () => {
    if (flashDiv.current) {
      flashDiv.current.style.display = "block";
      flashDiv.current.style.opacity = 0.5;
      setTimeout(() => {
        flashDiv.current.style.opacity = 0;
        setTimeout(() => {
          flashDiv.current.style.display = "none";
          flashDiv.current.style.opacity = 1;
        }, 500);
      }, 500);
    }
  };

  useEffect(() => {
    if (open && !sceneContext.showModel) {
      flash();
    }
  }, [sceneContext.showModel, open]);

  return (
    <div
      className={`bg-[#f0f0f0] overflow-x-hidden box-border`}
      ref={mainGroup}
    >
      {/* <div
        className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-[#fff] z-[1111111150] hidden "
        ref={flashDiv}
      ></div> */}

      <div
        className={`w-[100%] h-[101vh] ${!sceneContext.showModel && "hidden"}`}
      >
        <Canvas dpr={[1, 2]}>
          {/* <ScrollControls pages={0.2}> */}
          <SheetProvider sheet={demoSheet}>
            <PerspectiveCamera
              theatreKey="Camera"
              makeDefault
              position={[0, 0, -16]}
              fov={75}
              rotation={[0, -3.13, 0]}
            />
            {/* <OrbitControls/> */}
            {/* <Environment preset="studio" /> */}

            <three.pointLight
              position={[10, 10, 10]}
              intensity={1.5}
              color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
            />
            <Suspense fallback={null}>
              <group
                rotation={[0, Math.PI, 0]}
                onClick={(e) => (e.stopPropagation(), setOpen(!open))}
              >
                <Html transform scale={2} position={[0, 7, 0]}>
                  <h1
                    className={`${
                      !open
                        ? "flex text-[1.2rem] md:text-[2rem] lg:text-[3rem]"
                        : "hidden"
                    }`}
                  >
                    Open Your Laptop
                  </h1>
                  <h1 className={`${open ? "flex" : "hidden"}`}>Scroll</h1>
                </Html>

                <Model
                  open={open}
                  hinge={props.open.to([0, 1], [1.575, -0.425])}
                  showModel={sceneContext.showModel}
                  setShowModel={sceneContext.setShowModel}
                />
              </group>
              <Environment files={"/city.hdr"} />
            </Suspense>
            <ContactShadows
              position={[0, -4.5, 0]}
              opacity={0.4}
              scale={20}
              blur={1.75}
              far={4.5}
            />
          </SheetProvider>
          {/* </ScrollControls> */}
        </Canvas>
      </div>
    </div>
  );
}

export default LaptopScene;
