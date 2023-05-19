import * as React from "react";
import { css } from "@emotion/react";
import {
  descriptionStyle,
  titleStyle,
  cardStyle,
  flexColWithGap,
} from "../../../_common/CardCommon/CardStyle";
import TechIcon from "../../../_common/CardCommon/TechIcon";
import SkillRank from "./SkillRank";

type Props = {
  name: string;
  iconSrc: string;
  rank: number;
  description: string;
  url: string;
};

export const SkillCard = ({ name, iconSrc, rank, description, url }: Props) => {
  const iconStyle = css`
    float: right;
  `;

  const skillCardStyle = css`
    padding-top: 20px;
    padding-bottom: 20px;

    height: 110px;
    text-align: left;
  `;

  const skillDescriptionStyle = css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  `;

  return (
    <a
      href={url}
      css={css`
        display: block;
        width: 47%;

        @media screen and (max-width: 640px) {
          width: 100%;
        }
      `}
    >
      <div
        css={css`
          ${cardStyle}
          ${skillCardStyle}
        `}
      >
        <div
          css={css`
            ${iconStyle}
          `}
        >
          <TechIcon name={name} size="medium" src={iconSrc} />
        </div>

        <div
          css={css`
            ${flexColWithGap(10)}
          `}
        >
          <div
            css={css`
              ${flexColWithGap(5)}
            `}
          >
            <h3
              css={css`
                ${titleStyle}
              `}
            >
              {name}
            </h3>
            <SkillRank rank={rank} />
          </div>

          <p
            css={css`
              ${descriptionStyle}
              ${skillDescriptionStyle}
            `}
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default SkillCard;
