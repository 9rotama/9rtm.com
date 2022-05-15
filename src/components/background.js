import * as THREE from 'three'
import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const colorscheme=["#ef476f","#ffd166","#06d6a0","#118ab2","#073b4c"]


const tempObject = new THREE.Object3D()
const tempColor = new THREE.Color()

const amount = 100;
const moveSpeed = 0.1;

let i = 0;
const colorDataHex = Array.from({ length: amount }, () => (colorscheme[Math.floor(Math.random() * 5)]))
const posZ = Array.from({length: amount}, () => (Math.random()*80-40))



function Boxes() {
  const [hovered, set] = useState()
  const colorDataFloat = useMemo(() => Float32Array.from(new Array(amount).fill().flatMap((_, i) => tempColor.set(colorDataHex[i]).toArray())), [])
  const meshRef = useRef()
  const prevRef = useRef()
  useEffect(() => void (prevRef.current = hovered), [hovered])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    for (let i = 0; i < amount; i++){
      const id = i;
      tempObject.position.set(40 * Math.cos( time * moveSpeed + i * 0.5 ), 40 * Math.sin( time *moveSpeed + i * 1.3 ), posZ[i]);
      if (hovered !== prevRef.Current) {
        ;(id === hovered ? tempColor.setRGB(10, 10, 10) : tempColor.set(colorDataHex[id])).toArray(colorDataFloat, id * 3)
        meshRef.current.geometry.attributes.color.needsUpdate = true
      }
      const scale = 1;
      tempObject.scale.setScalar(scale);
      tempObject.updateMatrix();
      meshRef.current.setMatrixAt(id, tempObject.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  })
  return (
    <instancedMesh
      ref={meshRef}
      args={[null, null, amount]}
      onPointerMove={(e) => (e.stopPropagation(), set(e.instanceId))}
      onPointerOut={(e) => set(undefined)}>
      <sphereGeometry args={[1, 16, 16]}>
        <instancedBufferAttribute attach="attributes-color" args={[colorDataFloat, 3]} />
      </sphereGeometry>
      <meshBasicMaterial toneMapped={false} vertexColors={THREE.VertexColors} />
    </instancedMesh>
  )
}

function Background() {
  return (
    <Canvas
    gl={{ antialias: false }}
    camera={{fov: 45, near: 0.1, far: 1000, position: [-30,40,30]}}
    css={css`
      position: absolute;
    `}
    >
      <Boxes />
    </Canvas>
  )
}

export default Background;

