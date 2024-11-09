import { OrbitControls, Preload } from '@react-three/drei';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { SpaceBoy } from '../../models';
import { Loader } from '../Loader';
import styles from './SpaceBoyCanvas.module.css';

export const SpaceBoyCanvas = () => {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        className={styles.rotating}
        frameloop={'always'}
        shadows
        camera={{ position: [20, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <SpaceBoy />
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
