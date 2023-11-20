import Image from "next/image";
import styles from "./TechIcon.module.css";
type Props = {
  name: string;
  size: number;
  src: string;
};

export default function TechIcon({ name, size, src }: Props) {
  return (
    <Image
      src={src}
      width={size}
      height={size}
      alt={name}
      className={styles.module}
    />
  );
}
