import { useTheme } from "@/hooks/useTheme";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import SwitchButton from "./SwitchButton";

type Props = {
  icon: IconDefinition;
  isActive: boolean;
  onClick?: () => void;
};

export default function SwitchButtonContainer(props: Props) {
  const theme = useTheme();
  return (
    <div onClick={props.onClick}>
      <SwitchButton theme={theme} {...props} />
    </div>
  );
}
