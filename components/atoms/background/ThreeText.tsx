import { useRef, useEffect } from "react";
import { Vector3 } from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { useFrame, extend, ReactThreeFiber } from "@react-three/fiber";
import fontJson from "three/examples/fonts/helvetiker_bold.typeface.json";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      textGeometry: ReactThreeFiber.Node<TextGeometry, typeof TextGeometry>;
    }
  }
}

const KAOMOJIS = [
  "(=_=)",
  "(>_<)",
  "(+_+)",
  "(o_o)",
  "($_$)",
  "(@_@)",
  "(#_#)",
];

const ThreeText = () => {
  extend({ TextGeometry });
  const moveSpeed = 0.5;
  const initRot = new Vector3(
    Math.random() * 360,
    Math.random() * 360,
    Math.random() * 360
  );
  const font = new FontLoader().parse(fontJson);
  const text = KAOMOJIS[Math.floor(Math.random() * KAOMOJIS.length)];
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    meshRef.current!.geometry.computeBoundingBox();
    const boundingBox = meshRef.current?.geometry.boundingBox;
    const center = new Vector3(0, 0, 0);
    boundingBox?.getCenter(center);

    meshRef.current!.geometry.translate(-center.x, -center.y, -center.z);
  }, [meshRef]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current!.rotation.x = time * moveSpeed + initRot.x;
    meshRef.current!.rotation.y = (time / 3) * moveSpeed + initRot.y;
    meshRef.current!.rotation.z = (time / 5) * moveSpeed + initRot.z;
  });

  return (
    <mesh ref={meshRef}>
      <textGeometry args={[text, { font, size: 25, height: 10 }]} />
      <meshMatcapMaterial attach="material" color="#cfe0fb" />
    </mesh>
  );
};

export default ThreeText;
