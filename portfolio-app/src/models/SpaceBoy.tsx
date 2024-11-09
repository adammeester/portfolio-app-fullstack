import { useGLTF } from '@react-three/drei';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { NavTarget } from '../utils/types';
import { usePlanetsContext } from '../components/PlanetsContextProvider/PlanetsContextProvider';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import spaceboy from '../assets/3d/spaceBoy.glb';

export const SpaceBoy = () => {
  const { nodes, materials } = useGLTF(spaceboy);
  const { handleSetTooltip } = usePlanetsContext();

  const spaceBoyRef = useRef<Group>(null);
  const rotationSpeed = useRef(0.002);

  useFrame(() => {
    if (spaceBoyRef.current) {
      spaceBoyRef.current.rotation.y += rotationSpeed.current;
    }
  });

  const onPointerOver = (target: NavTarget) => {
    handleSetTooltip(target);
    rotationSpeed.current = 0.0001;
  };

  const onPointerLeave = () => {
    handleSetTooltip('');
    rotationSpeed.current = 0.002;
  };

  const handleNavigate = (target: NavTarget) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <group
      ref={spaceBoyRef}
      scale={[1, 1, 1]}
      position={[0, -3, 0]}
      rotation={[0, 20, 0]}
      dispose={null}
    >
      <group scale={0.01}>
        {/* space boy */}
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.body_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        {/* black planet low */}
        <group
          onClick={() => handleNavigate('contact')}
          onPointerOver={() => onPointerOver('contact')}
          onPointerLeave={onPointerLeave}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        {/* black planet top */}
        <group
          onClick={() => handleNavigate('experience')}
          onPointerOver={() => onPointerOver('experience')}
          onPointerLeave={onPointerLeave}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={39.706}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere008_Material002_0.geometry}
            material={materials['Material.002']}
            scale={1.04}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials['Material.001']}
            scale={1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials['Material.002']}
            scale={1}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves1_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.waves2_Material002_0.geometry}
          material={materials['Material.002']}
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.particles_Material002_0.geometry}
          material={materials['Material.002']}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />

        {/* large ringed planet */}
        <group
          onClick={() => handleNavigate('projects')}
          onPointerEnter={() => onPointerOver('projects')}
          onPointerLeave={onPointerLeave}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Material001_0.geometry}
            material={materials['Material.001']}
            position={[375.469, 427.948, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={62.402}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_Material002_0.geometry}
            material={materials['Material.002']}
            position={[375.469, 427.948, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={60.324}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere004_Material002_0.geometry}
            material={materials['Material.002']}
            position={[375.469, 427.948, 0]}
            rotation={[-0.688, 0, 0]}
            scale={[104.129, 81.609, 0]}
          />
        </group>
        {/* large white planet */}
        <group
          onPointerDown={() => handleNavigate('about')}
          onPointerOver={() => onPointerOver('about')}
          onPointerLeave={onPointerLeave}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere005_Material001_0.geometry}
            material={materials['Material.001']}
            position={[-341.988, 460.196, -117.028]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={62.402}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere006_Material002_0.geometry}
            material={materials['Material.002']}
            position={[-341.988, 460.196, -117.028]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={60.324}
          />
        </group>
        {/* small white planet */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials['Material.002']}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
        {/* base */}
        <mesh
          castShadow
          receiveShadow
          // geometry={nodes.Cube_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0, -101.673, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.013, 1120.013, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        {/* <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials['Material.002']}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        /> */}
      </group>
    </group>
  );
};
