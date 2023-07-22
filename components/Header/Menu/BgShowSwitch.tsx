import { css } from "@emotion/react";
import { useContext } from "react";
import {
  backgroundStateContext,
  setBackgroundStateContext,
} from "../../../const/contexts";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { SwitchButton } from "./SwitchButton";

const BgShowSwitch = () => {
  const backgroundState = useContext(backgroundStateContext);
  const setBackgroundState = useContext(setBackgroundStateContext);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setBackgroundState({ render: true, switch: true });
    } else {
      setBackgroundState({ render: true, switch: false });

      setTimeout(() => {
        setBackgroundState({ render: false, switch: false });
      }, 300);
    }
  };

  return (
    <SwitchButton
      icon={faCube}
      isActive={backgroundState.switch}
      handleClick={handleClick}
    />
  );
};

export default BgShowSwitch;
