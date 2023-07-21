import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  ToneMapping,
  DotScreen,
} from "@react-three/postprocessing";
import KaomojiText from "./KaomojiText";
import { Vector3 } from "three";
import { cameraBasePos } from "./KaomojiBg";

export const KaomojiScene = () => {
  const { camera, mouse } = useThree();
  useFrame((state) => {
    camera.position.lerp(
      new Vector3(mouse.x + cameraBasePos.x, mouse.y, camera.position.z),
      1
    );
    console.log(camera.position);
  });
  return (
    <>
      <KaomojiText />
      <EffectComposer>
        <ToneMapping />
        <DotScreen angle={Math.PI * 0.5} scale={0.3} />
      </EffectComposer>
    </>
  );
};
