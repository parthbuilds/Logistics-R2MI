"use client";

import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Html } from "@react-three/drei";

const EARTH_RADIUS = 1;

const locations = [
  { name: "Singapore", lat: 1.3521, lon: 103.8198, description: "A vibrant city-state in Southeast Asia." },
  { name: "Australia", lat: -25.2744, lon: 133.7751, description: "A country and continent surrounded by the Indian and Pacific oceans." },
  { name: "Malaysia", lat: 4.2105, lon: 101.9758, description: "A Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo." },
  { name: "USA", lat: 37.0902, lon: -95.7129, description: "A country of 50 states covering a vast swath of North America." },
  { name: "Vietnam", lat: 14.0583, lon: 108.2772, description: "A Southeast Asian country known for its beaches, rivers, and bustling cities." },
  { name: "Nigeria", lat: 9.082, lon: 8.6753, description: "A country in West Africa with diverse geography and cultures." },
  { name: "South Africa", lat: -30.5595, lon: 22.9375, description: "A country on the southernmost tip of the African continent." },
  { name: "Mauritius", lat: -20.3484, lon: 57.5522, description: "An Indian Ocean island nation known for its beaches, lagoons, and reefs." },
  { name: "Kenya", lat: -1.286389, lon: 36.817223, description: "A country in East Africa with coastline on the Indian Ocean." },
  { name: "Uganda", lat: 1.3733, lon: 32.2903, description: "A landlocked country in East Africa." },
  { name: "Tanzania", lat: -6.369028, lon: 34.888822, description: "An East African country known for its vast wilderness areas." },
  { name: "Belgium", lat: 50.8503, lon: 4.3517, description: "A country in Western Europe known for its medieval towns and Renaissance architecture." },
];

function convertLatLonToPosition(lat, lon) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    EARTH_RADIUS * Math.sin(phi) * Math.cos(theta),
    EARTH_RADIUS * Math.cos(phi),
    EARTH_RADIUS * Math.sin(phi) * Math.sin(theta),
  ];
}

function RotatingEarth() {
  const earthRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [selectedLocation, setSelectedLocation] = useState(null);

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

  const onPointerDown = () => setIsDragging(true);
  const onPointerUp = () => setIsDragging(false);

  const onPointerMove = (event) => {
    if (isDragging && earthRef.current) {
      const { movementX, movementY } = event;
      const newRotation = [
        rotation[0] + movementY * 0.005,
        rotation[1] + movementX * 0.005,
        rotation[2],
      ];
      setRotation(newRotation);
      earthRef.current.rotation.set(...newRotation);
    }
  };

  return (
    <>
      <mesh
        ref={earthRef}
        scale={2.5}
        rotation={rotation}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerMove={onPointerMove}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </mesh>

      {locations.map((location, index) => {
        const position = convertLatLonToPosition(location.lat, location.lon);
        const raisedPosition = [
          position[0] * 1.02, 
          position[1] * 1.02,
          position[2] * 1.02,
        ];
        return (
          <mesh
            key={index}
            position={raisedPosition}
            onClick={() => setSelectedLocation(location)}
          >
            <sphereGeometry args={[0.5, 32, 32]} /> 
            <meshStandardMaterial color="red" emissive="red" emissiveIntensity={2} />
          </mesh>
        );
      })}

      {selectedLocation && (
        <Html
          position={convertLatLonToPosition(
            selectedLocation.lat,
            selectedLocation.lon
          )}
        >
          <div
            style={{
              color: "black",
              background: "white",
              padding: "10px",
              borderRadius: "8px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <h3>{selectedLocation.name}</h3>
            <p>{selectedLocation.description}</p>
            <button onClick={() => setSelectedLocation(null)}>Close</button>
          </div>
        </Html>
      )}
    </>
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