import { css } from "@emotion/react";

export const cardPaddingX = 30;
export const cardPaddingY = 10;

export const cardStyle = css`
  position: relative;

  background: #f5faff;
  border-radius: 20px;
  padding: ${cardPaddingY}px ${cardPaddingX}px ${cardPaddingY}px
    ${cardPaddingX}px;
  overflow: hidden;

  text-decoration: none;
  color: #252a34;

  transition-duration: 0.3s;

  &:hover {
    transform: translateY(-5px);

    background: #ffffff;
    filter: drop-shadow(0px 6px 8px #252a3422);

    transition-duration: 0.3s;
  }
`;

export const titleStyle = css`
  margin: 0px;
  font-size: 1.1em;
  font-weight: 600;
`;

export const descriptionStyle = css`
  margin: 0px;
  font-size: 0.9em;
`;

export const flexColWithGap = (gap: number) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: ${gap}px;
  `;
};
