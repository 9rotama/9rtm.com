import * as React from "react";
import { css } from "@emotion/react";
import { descriptionStyle, titleStyle, floatCardStyle } from "../../molecules/common/floatCardStyle";
import TechIcon from "../../atoms/about/TechIcon";
import { SkillRank } from "../../atoms/about/SkillRank";

type Props = {
  name: string;
  iconSrc: string;
  rank: number;
  description: string;
  url: string;
};

export const SkillCard: React.FC<Props> = ({ name, iconSrc, rank, description, url }) => {
  return (
    <a
      css={css`
        ${skillCardStyle}
        ${floatCardStyle}
      `}
      href={url}
    >
      <div
        css={css`
          ${iconStyle}
        `}
      >
        <TechIcon
          name={name}
          src={iconSrc}
        />
      </div>

      <div>
        <h3
          css={css`
            ${titleStyle}
          `}
        >
          {name}
        </h3>
        <SkillRank rank={rank} />
      </div>
      
      <div
        css={css`
          ${verticalCenterStyle}
        `}
      >
        <p
          css={css`
            ${descriptionStyle}
            ${skillDescriptionStyle}
          `}
        >
          {description}
        </p>
      </div>
      
    </a>
  );
}

const iconStyle = css`
  margin: 10px 15px 0px 0px;
  float: right;
`

const skillCardStyle = css`
  width: 40%;
  height: 130px;
  text-align: left;

  @media (max-width: 640px) {
    & {
      width: 100%;
    }
  }
`;

const verticalCenterStyle = css`
  display: flex;
  align-items: center;
`

const skillDescriptionStyle = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`
