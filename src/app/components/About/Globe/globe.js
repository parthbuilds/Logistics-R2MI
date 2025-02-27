'use client';
import { Canvas, useLoader } from '@react-three/fiber'
import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Earth() {

  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start end', 'end start']
  })


  const Earth = dynamic(() => import('./globe.js'), {
    ssr: false,
    loading: () => <img src="/assets/placeholder.png"></img>
  })

  /* Used for smooth rotation if you're not using Lenis Scroll */
  // const smoothRotation = useSpring(scrollYProgress, {
  // damping: 20
  // });
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    '/assets/color.jpg',
    '/assets/normal.png', 
    '/assets/occlusion.jpg'
  ])

  return (
    <Canvas ref={scene}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[0, 0, 3]} />
      <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  )
}
