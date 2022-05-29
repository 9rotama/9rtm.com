import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const colorscheme = ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c']

const tempObject = new THREE.Object3D();
const tempColor = new THREE.Color();

const amount = 100;
const moveSpeed = 0.03;

const colorDataHex = Array.from({ length: amount }, () => (colorscheme[Math.floor(Math.random() * 5)]));
const posZ = Array.from({ length: amount }, () => (Math.random() * 80 - 40));

function Boxes() {
  const colorDataFloat = useMemo(() => Float32Array.from(new Array(amount).fill().flatMap((_, i) => tempColor.set(colorDataHex[i]).toArray())), []);
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    for (let i = 0; i < amount; i++) {
      tempObject.position.set(40 * Math.cos( time * moveSpeed + i * 0.5 ), 40 * Math.sin( time * moveSpeed + i * 1.3 ), posZ[i]);
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(i, tempObject.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, amount]}
    >
      <sphereGeometry args={[1, 16, 16]}>
        <instancedBufferAttribute attach="attributes-color" args={[colorDataFloat, 3]} />
      </sphereGeometry>
      <meshBasicMaterial toneMapped={false} vertexColors={THREE.VertexColors} />
    </instancedMesh>
  );
}

function Background() {
  return (
    <div
      css={css`
        position: fixed;
        top: 0px;
        width: 100vw;
        height: 100vh;
        z-index: -1;
      `}
    >
      <Canvas
        gl={{ antialias: false }}
        camera={{
          fov: 45, near: 0.1, far: 1000, position: [-30, 40, 30],
        }}
      >
        <Boxes />
      </Canvas>
    </div>
  );
}

export default Background;
