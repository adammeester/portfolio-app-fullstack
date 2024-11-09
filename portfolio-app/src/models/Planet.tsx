import { useGLTF } from '@react-three/drei';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import spaceBoy from '../assets/3d/spaceBoy.glb';
import { useRef } from 'react';
import { Group } from 'three';
import { PlanetNavKey } from '../utils/types';

export const Planet = ({ planetKey }: { planetKey: PlanetNavKey }) => {
  const { nodes, materials } = useGLTF(spaceBoy);
  const planetRef = useRef<Group>(null);

  const planets = {
    blackTop: (
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials['Material.002']}
          scale={42}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_Material001_0.geometry}
          material={materials['Material.001']}
          scale={40}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_Material002_0.geometry}
          material={materials['Material.002']}
          scale={41}
        />
      </group>
    ),
    whiteLarge: (
      <group scale={0.05} castShadow receiveShadow>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={75.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials['Material.002']}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={72.324}
        />
      </group>
    ),
    whiteRinged: (
      <group scale={0.05} castShadow receiveShadow>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={70.402}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials['Material.002']}
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={68.324}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials['Material.002']}
          position={[0, 0, 0]}
          rotation={[150, 0, 0]}
          scale={[112.129, 89.609, 0]}
        />
      </group>
    ),
    blackBottom: (
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.08}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials['Material.002']}
          scale={46}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_Material001_0.geometry}
          material={materials['Material.001']}
          scale={44}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_Material002_0.geometry}
          material={materials['Material.002']}
          scale={45}
        />
      </group>
    ),
  };

  return (
    <group
      ref={planetRef}
      scale={1}
      position={[0, 0, 0]}
      // position={[3, 0, -5]}
      rotation={[0, 0, 0]}
      dispose={null}
      castShadow
      receiveShadow
    >
      {planets[planetKey]}
    </group>
  );
};
