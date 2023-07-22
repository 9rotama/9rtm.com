import {
  EffectComposer,
  ToneMapping,
  DotScreen,
} from "@react-three/postprocessing";
import KaomojiText from "./KaomojiText";

export const KaomojiScene = () => {
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
