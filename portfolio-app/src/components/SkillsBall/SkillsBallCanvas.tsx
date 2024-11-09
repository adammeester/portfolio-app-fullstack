import {
  Decal,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  useTexture,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import avanade from '../../assets/company/avanade.png';
import { Mesh } from 'three';

const angleToRadians = (angleInDeg: number) => (Math.PI / 180) * angleInDeg;

export const SkillsBallCanvas = () => {
  const ballRef = useRef<Mesh>(null);
  const rotationSpeed = useRef(0.009);
  const [decal] = useTexture([avanade]);

  useFrame(() => {
    if (ballRef.current) {
      ballRef.current.rotation.y += rotationSpeed.current;
    }
  });

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      {/* Ball */}
      <mesh position={[0, 0, 0]} castShadow ref={ballRef}>
        <sphereGeometry args={[2, 40, 40]} />
        <meshStandardMaterial color='#ffffff' metalness={0.6} roughness={0.2} />
        <Decal
          position={[2, 0, 0]}
          rotation={[0, 90, 0]}
          scale={[2, 1, 3]}
          map={decal}
        />
      </mesh>
      {/* Floor */}
      {/* <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color='white' />
      </mesh> */}

      {/* Ambient light */}
      <ambientLight args={['#ffffff', 0.25]} />
      {/* Spotlight light */}
      <spotLight
        args={['#ffffff', 7, 12, angleToRadians(45), 0.4]}
        position={[4, 3, 2]}
        castShadow
      />
      {/* Environmnet */}
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />

          <RandomizedLight
            amount={8}
            radius={1}
            ambient={0.5}
            position={[-3, 3, 0]}
            bias={0.001}
          />
          {/* <meshBasicMaterial color='#2266cc' side={THREE.BackSide} /> */}
        </mesh>
      </Environment>
    </>
  );
};
