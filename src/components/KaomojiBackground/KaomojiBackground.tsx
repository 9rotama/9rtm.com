import { ThemeString } from "@/types/theme";
import { Canvas } from "@react-three/fiber";
import {
  DotScreen,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import KaomojiMesh from "./KaomojiMesh";

type Props = {
  theme: ThemeString;
};

export const cameraBasePos = { x: -60, y: 0, z: 0 };

export default function KaomojiBackground({ theme }: Props) {
  return (
    <Canvas
      gl={{ antialias: false }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 1000,
        position: [cameraBasePos.x, cameraBasePos.y, cameraBasePos.z],
      }}
    >
      <KaomojiMesh theme={theme} />
      <EffectComposer>
        <ToneMapping />
        <DotScreen angle={Math.PI * 0.5} scale={0.3} />
      </EffectComposer>
    </Canvas>
  );
}
