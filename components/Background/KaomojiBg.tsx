import { useContext, Suspense, useState } from "react";
import { backgroundStateContext } from "../_common/Layout";
import { backgroundTransitionDur } from "./Background";
import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import { KaomojiScene } from "./KaomojiScene";

export const cameraBasePos = { x: -60, y: 0, z: 0 };

export const KaomojiBg = () => {
  const backgroundState = useContext(backgroundStateContext);

  const kaomojiBackgroundWrapStyle = css`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: -2;

    opacity: ${backgroundState.switch ? "1" : "0"};
    transition-duration: ${backgroundTransitionDur}s;
  `;

  return (
    <div css={kaomojiBackgroundWrapStyle}>
      <Suspense fallback={<></>}>
        {/*ローディング中は表示がおかしくなるので何も表示しない*/}
        <Canvas
          gl={{ antialias: false }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 1000,
            position: [cameraBasePos.x, cameraBasePos.y, cameraBasePos.z],
          }}
        >
          <KaomojiScene></KaomojiScene>
        </Canvas>
      </Suspense>
    </div>
  );
};
