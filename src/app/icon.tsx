import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

const texts = ["^^", "ツ", "🤯", "🐢"];

export default function Icon() {
  const text = texts[Math.floor(Math.random() * texts.length)];
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "25%",
          background: "#001122",
        }}
      >
        {text}
      </div>
    ),
    {
      ...size,
      emoji: "noto",
    },
  );
}
