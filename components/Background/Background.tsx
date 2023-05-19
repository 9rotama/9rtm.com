import { useContext, Suspense } from "react";
import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  ToneMapping,
  DotScreen,
} from "@react-three/postprocessing";
import ThreeText from "./ThreeText";
import { backgroundStateContext } from "../_common/Layout";

const Background = () => {
  const backgroundState = useContext(backgroundStateContext);

  const canvasWrapStyle = css`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 0;

    opacity: ${backgroundState.switch ? "1" : "0"};
    transition-duration: 0.3s;
  `;

  return (
    <div css={canvasWrapStyle}>
      {backgroundState.render ? (
        //ローディング中は表示がおかしくなるので何も表示しない
        <Suspense fallback={<></>}>
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
        </Suspense>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Background;
