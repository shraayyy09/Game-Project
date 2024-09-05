// components/Game.js

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics, RigidBody } from '@react-three/rapier';
import { useRef, useState, useEffect } from 'react';

function Vehicle() {
  // Define the vehicle structure with wheels and body
}

function FallingShapes() {
  // Randomly drop shapes from the sky
}

export default function Game() {
  return (
    <Canvas>
      <color attach="background" args={['#f0f0f0']} />
      <ambientLight />
      <Physics>
        <Vehicle />
        <FallingShapes />
      </Physics>
      <OrbitControls />
    </Canvas>
  );
}

function Vehicle() {
    const vehicleRef = useRef();
  
    return (
      <group ref={vehicleRef}>
        {/* Front Wheel (Sphere) */}
        <RigidBody>
          <mesh position={[0, 0.5, 0]}>
            <sphereBufferGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>
  
        {/* Back Wheels (Cylinders) */}
        <RigidBody>
          <mesh position={[-1, 0.25, 1]}>
            <cylinderBufferGeometry args={[0.25, 0.25, 1, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>
          <mesh position={[-1, 0.25, -1]}>
            <cylinderBufferGeometry args={[0.25, 0.25, 1, 32]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </RigidBody>
  
        {/* Body (Rectangle) */}
        <RigidBody>
          <mesh position={[-1, 1, 0]}>
            <boxBufferGeometry args={[2, 0.5, 1]} />
            <meshStandardMaterial color="green" />
          </mesh>
        </RigidBody>
      </group>
    );
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'w') {
        // Logic for moving forward
      } else if (event.key === 's') {
        // Logic for moving backward
      }
    };
  
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function FallingShapes() {
    const [shapes, setShapes] = useState([]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const shapeTypes = ['box', 'sphere', 'pyramid'];
        const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        const size = Math.random() * 2 + 0.5; // Random size
        const mass = Math.random() * 2 + 0.1; // Random mass
  
        setShapes((prevShapes) => [
          ...prevShapes,
          { type, size, mass, position: [Math.random() * 10 - 5, 10, Math.random() * 10 - 5] },
        ]);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return shapes.map((shape, index) => (
      <RigidBody key={index} position={shape.position} mass={shape.mass}>
        {shape.type === 'box' && <boxBufferGeometry args={[shape.size, shape.size, shape.size]} />}
        {shape.type === 'sphere' && <sphereBufferGeometry args={[shape.size / 2, 32, 32]} />}
        {/* Add pyramid shape logic */}
        <meshStandardMaterial color="orange" />
      </RigidBody>
    ));
  }
  