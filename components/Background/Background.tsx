import { useContext, Suspense, useEffect } from "react";
import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  ToneMapping,
  DotScreen,
} from "@react-three/postprocessing";
import ThreeText from "./ThreeText";
import { backgroundStateContext } from "../_common/Layout";

const transitionDur = 0.3;

const Background = () => {
  const backgroundState = useContext(backgroundStateContext);

  const kaomojiBackgroundWrapStyle = css`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -2;

    opacity: ${backgroundState.switch ? "1" : "0"};
    transition-duration: ${transitionDur}s;
  `;

  const patternBackgroundStyle = css`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-color: #d0dde9;
    background-image: linear-gradient(
        30deg,
        #acc8e3 12%,
        transparent 12.5%,
        transparent 87%,
        #acc8e3 87.5%,
        #acc8e3
      ),
      linear-gradient(
        150deg,
        #acc8e3 12%,
        transparent 12.5%,
        transparent 87%,
        #acc8e3 87.5%,
        #acc8e3
      ),
      linear-gradient(
        30deg,
        #acc8e3 12%,
        transparent 12.5%,
        transparent 87%,
        #acc8e3 87.5%,
        #acc8e3
      ),
      linear-gradient(
        150deg,
        #acc8e3 12%,
        transparent 12.5%,
        transparent 87%,
        #acc8e3 87.5%,
        #acc8e3
      ),
      linear-gradient(
        60deg,
        #acc8e377 25%,
        transparent 25.5%,
        transparent 75%,
        #acc8e377 75%,
        #acc8e377
      ),
      linear-gradient(
        60deg,
        #acc8e377 25%,
        transparent 25.5%,
        transparent 75%,
        #acc8e377 75%,
        #acc8e377
      );
    background-size: 74px 130px;
    background-position: 0 0, 0 0, 37px 65px, 37px 65px, 0 0, 37px 65px;
    opacity: ${backgroundState.switch ? "0.4" : "0.6"};

    transition-duration: ${transitionDur}s;
  `;

  return (
    <>
      <div css={patternBackgroundStyle} />
      {backgroundState.render ? (
        //ローディング中は表示がおかしくなるので何も表示しない
        <div css={kaomojiBackgroundWrapStyle}>
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
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Background;
