import { OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './PlanetCanvas.module.css';
import { Loader } from '../Loader';
import { Planet } from '../../models/Planet';
import { PlanetNavKey } from '../../utils/types';

type PlanetCanvasProps = {
  planet: PlanetNavKey;
};

export const PlanetCanvas = ({ planet }: PlanetCanvasProps) => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        className={styles.planetCanvas}
        id='planet-canvas-container'
        shadows
      >
        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        {/* z was 4*/}
        <PerspectiveCamera makeDefault position={[5, 2, 8]} />

        <Suspense fallback={<Loader />}>
          <hemisphereLight intensity={1} groundColor='black' />
          <spotLight
            position={[0, 0, 0]}
            angle={0.12}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
          />
          <Planet planetKey={planet} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
