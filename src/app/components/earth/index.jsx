// "use client";

// import { Canvas, useLoader } from "@react-three/fiber";
// import { useRef } from "react";
// import { useScroll } from "framer-motion";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// import { motion } from "framer-motion-3d";

// export default function Earth() {
//   const scene = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: scene,
//     offset: ["start end", "end start"],
//   });

//   const [color, normal, aoMap] = useLoader(TextureLoader, [
//     "/assets/color.jpg",
//     "/assets/normal.png",
//     "/assets/occlusion.jpg",
//   ]);

//   return (
//     <Canvas ref={scene} >
//       <ambientLight intensity={0.1} />
//       <directionalLight intensity={3.5} position={[0, 0, 3]} />
//       <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
//       </motion.mesh>
//     </Canvas>
//   );
// }


"use client";

import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";
import { Vector3 } from "three";

function RotatingEarth() {
  const earthRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);
  
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/assets/color.jpg",
    "/assets/normal.png",
    "/assets/occlusion.jpg",
  ]);

  useFrame(() => {
    if (!isDragging && earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  const onPointerDown = () => {
    setIsDragging(true);
  };

  const onPointerUp = () => {
    setIsDragging(false);
  };

  const onPointerMove = (event) => {
    if (isDragging && earthRef.current) {
      const { movementX, movementY } = event;
      const newRotation = [rotation[0] + movementY * 0.005, rotation[1] + movementX * 0.005, rotation[2]];
      setRotation(newRotation);
      earthRef.current.rotation.set(...newRotation);
    }
  };

  return (
    <motion.mesh
      ref={earthRef}
      scale={2.5}
      rotation={rotation}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </motion.mesh>
  );
}

export default function Earth() {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={3.5} position={[2, 2, 5]} />
      <RotatingEarth />
    </Canvas>
  );
}
