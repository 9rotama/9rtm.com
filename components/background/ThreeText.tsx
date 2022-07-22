import * as React from "react";
import { useRef, useEffect } from "react";
import { Vector3 }from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { useFrame, extend, ReactThreeFiber } from "@react-three/fiber";
import fontJson from "three/examples/fonts/helvetiker_regular.typeface.json";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: ReactThreeFiber.Node<TextGeometry, typeof TextGeometry>;
    }
  }
}



const ThreeText = () => {
  const moveSpeed = 0.7;
  const kao = ["(=_=)", "(>_<)", "(+~+)", "(o_o)", "($_$)", "(@w@)"];
  const text = kao[Math.floor(Math.random() * kao.length)];
  const font = new FontLoader().parse(fontJson);

  const meshRef = useRef<any>(null);
  extend({ TextGeometry });


  useEffect(() => {
    /*回転軸を計算し直す*/
    meshRef.current!.geometry.computeBoundingBox();
    const boundingBox = meshRef.current?.geometry.boundingBox;
    const center = new Vector3(0, 0, 0);
    boundingBox?.getCenter(center);

    meshRef.current!.geometry.translate(-center.x, -center.y, -center.z);
    meshRef.current!.rotation.x = Math.random() * 360;
    meshRef.current!.rotation.y = Math.random() * 360;
    meshRef.current!.rotation.z = Math.random() * 360;
  });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current!.rotation.x = time * moveSpeed;
    meshRef.current!.rotation.y = (time / 3) * moveSpeed;
    meshRef.current!.rotation.z = (time / 5) * moveSpeed;
  });

  return (
    <mesh ref={meshRef}>
      <textGeometry args={[text, { font, size: 25, height: 5 }]} />
      <meshMatcapMaterial attach="material" color="#cfe0fb" />
    </mesh>
  );
};

export default ThreeText;
