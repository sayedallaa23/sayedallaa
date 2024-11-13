// https://cydstumpel.nl/

import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Image,
  useScroll,
  useTexture,
  PresentationControls,
} from "@react-three/drei";
import { easing } from "maath";
import "./util";
import "../index.css";
import { useInView } from "framer-motion";

export const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.8 });

  return (
    <div className="w-[100vw] h-[30vh] xl:h-[100vh] scrollable-element">
      <Canvas camera={{ position: [0, 0, 100], fov: 15 }} ref={ref}>
        <fog attach="fog" args={["#a79", 8.5, 12]} />
        {/* <ScrollControls pages={4} style={{ scrollbarWidth: "none" }} horizontal infinite> */}
        <PresentationControls
          global
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.3, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          speed={0.25}
        >
          <Rig rotation={[0, 0, 0.15]}>
            <Carousel />
          </Rig>
          <Banner position={[0, -0.15, 0]} />
        </PresentationControls>
        {/* </ScrollControls> */}
      </Canvas>
    </div>
  );
};

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    // ref.current.rotation.y = -scroll?.offset * (Math.PI * 2); // Rotate contents
    state.events.update(); // Raycasts every frame rather than on pointer-move
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 2, state.pointer.y + 1.5, 10],
      0.3,
      delta
    ); // Move camera
    state.camera.lookAt(0, 0, 0); // Look at center
  });
  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.4, count = 8 }) {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * -0.2; // Adjust the rotation speed as needed
  });
  return (
    <group ref={ref}>
      {Array.from({ length: count }, (_, i) => (
        <Card
          key={i}
          url={`/img${Math.floor(i % 10) + 1}_.jpg`}
          position={[
            Math.sin((i / count) * Math.PI * 2) * radius,
            0,
            Math.cos((i / count) * Math.PI * 2) * radius,
          ]}
          rotation={[0, (i / count) * Math.PI * 2, 0]}
        />
      ))}
    </group>
  );
}

function Card({ url, ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const pointerOver = (e) => (e.stopPropagation(), hover(true));
  const pointerOut = () => hover(false);
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(
      ref.current.material,
      "radius",
      hovered ? 0.25 : 0.1,
      0.2,
      delta
    );
    easing.damp(ref.current.material, "zoom", hovered ? 1 : 1.5, 0.2, delta);
  });
  return (
    <Image
      ref={ref}
      url={url}
      transparent
      side={THREE.DoubleSide}
      onPointerOver={pointerOver}
      onPointerOut={pointerOut}
      {...props}
    >
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  );
}

function Banner(props) {
  const ref = useRef();
  const texture = useTexture("/work_.png");
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  const scroll = useScroll();
  useFrame((state, delta) => {
    // ref.current.material.time.value += Math.abs(scroll.delta) * 4;
    ref.current.material.map.offset.x += delta / 2;
  });
  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[30, 1]}
        side={THREE.DoubleSide}
        toneMapped={true}
        color={"#b6b8fc"}
      />
    </mesh>
  );
}
