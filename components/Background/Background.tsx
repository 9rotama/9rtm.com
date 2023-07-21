import { useContext } from "react";

import { backgroundStateContext } from "../_common/Layout";
import { PatternBg } from "./PatternBg";
import { KaomojiBg } from "./KaomojiBg";

export const backgroundTransitionDur = 0.3;

const Background = () => {
  const backgroundState = useContext(backgroundStateContext);

  return (
    <>
      <PatternBg />
      {backgroundState.render ? <KaomojiBg /> : <></>}
    </>
  );
};

export default Background;
