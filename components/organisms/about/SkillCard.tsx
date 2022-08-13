import * as React from "react";
import { css } from "@emotion/react";
import { descriptionStyle, titleStyle, floatCardStyle } from "../../molecules/common/floatCardStyle";
import TechIcon from "../../atoms/about/TechIcon";


type Props = {
  id: string;
  name: string;
  iconSrc: string;
  rank: number;
  description: string;
  url: string;
};

export const SkillCard: React.FC<Props> = ({ id, name, iconSrc, rank, description, url }) => {
  return (
    <a
      css={css`
        ${skillCardStyle}
        ${floatCardStyle}
      `}
      href={url}
    >
      <div css={iconStyle}>
        <TechIcon
          name={name}
          src={iconSrc}
        />
      </div>
      
      <h3
        css={css`
          ${titleStyle}
        `}
      >
        {name}
      </h3>
      <p
        css={css`
          ${descriptionStyle}
        `}
      >
        {description}
      </p>
    </a>
  );
}

const iconStyle = css`
  float: left;
  margin-right: 30px;
`

const skillCardStyle = css`
  width: 40%;
  height: 70px;
  text-align: left;

  @media (max-width: 640px) {
    & {
      width: 100%;
    }
  }
`;

