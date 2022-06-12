import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry"
import { useRef, useEffect } from "react"
import * as THREE from "three"
import { Canvas, useFrame, extend } from "@react-three/fiber"
import {
  EffectComposer,
  ToneMapping,
  DotScreen,
} from "@react-three/postprocessing"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json"

extend({ TextGeometry })

const moveSpeed = 0.7
const kao = ["(=_=)", "(>_<)", "(^v^)", "(o_o)", "($_$)", "(@w@)"]
const text = kao[parseInt(Math.random() * kao.length)]

function Text3D() {
  const font = new FontLoader().parse(fontJson)

  const meshRef = useRef()
  const geoRef = useRef()

  useEffect(() => {
    meshRef.current.geometry.computeBoundingBox()
    const boundingBox = meshRef.current.geometry.boundingBox
    const center = new THREE.Vector3()
    boundingBox.getCenter(center)
    meshRef.current.geometry.translate(-center.x, -center.y, -center.z)
    meshRef.current.rotation.x = Math.random() * 360
    meshRef.current.rotation.y = Math.random() * 360
    meshRef.current.rotation.z = Math.random() * 360
  })

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    meshRef.current.rotation.x = time * moveSpeed
    meshRef.current.rotation.y = (time / 3) * moveSpeed
    meshRef.current.rotation.z = (time / 5) * moveSpeed
  })

  return (
    <mesh ref={meshRef}>
      <textGeometry ref={geoRef} args={[text, { font, size: 40, height: 10 }]} />
      <meshMatcapMaterial attach="material" color="#cfe0fb" />
    </mesh>
  )
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
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [-60, 0, 0],
        }}
      >
        <EffectComposer>
          <ToneMapping />
          <DotScreen angle={Math.PI * 0.5} scale={0.6} />
        </EffectComposer>
        <Text3D />
      </Canvas>
    </div>
  )
}

export default Background
