import * as React from "react";
import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  ToneMapping,
  DotScreen,
} from "@react-three/postprocessing";
import ThreeText from "./ThreeText";

const Background = () => {
  return (
    <div
      css={css`
        position: fixed;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 0;
      `}
    >
      <React.Suspense fallback={<span>loading...</span>}>
        <Canvas
          gl={{ antialias: false }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [-60, 0, 0],
          }}
        >
          <ThreeText />
          <EffectComposer>
            <ToneMapping />
            <DotScreen angle={Math.PI * 0.5} scale={0.3} />
          </EffectComposer>
        </Canvas>
      </React.Suspense>
    </div>
  );
};

export default Background;
