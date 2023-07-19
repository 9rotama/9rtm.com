import * as React from "react";
import { css } from "@emotion/react";
import TechIcon from "../../../_common/CardCommon/TechIcon";
import {
  cardPaddingX,
  cardPaddingY,
  descriptionStyle,
  titleStyle,
  cardStyle,
  flexColWithGap,
} from "../../../_common/CardCommon/CardStyle";
import { Work } from "../../../../types/work";
import ToolTip from "./ToolTip";
import IsTeamIcon from "./IsTeamIcon";
import Image from "next/image";

type Props = {
  data: Work;
};

const WorkCard = ({ data }: Props) => {
  const workCardStyle = css`
    text-align: center;
    height: 270px;
  `;

  const isTeamIconStyle = css`
    position: absolute;
    bottom: 17px;
    right: 8%;

    margin-bottom: auto;
  `;

  const imgContainerStyle = css`
    position: relative;
    margin: -${cardPaddingY}px -${cardPaddingX}px 15px -${cardPaddingX}px;
    overflow: hidden;
    height: 150px;
  `;
  const imgStyle = css`
    object-fit: cover;
    width: 100%;
    height: 100%;
  `;

  const techStackListStyle = css`
    position: absolute;
    float: left;
    display: flex;
    bottom: 15px;
    gap: 6px;
  `;

  const workDescriptionStyle = css`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  `;

  return (
    <a
      href={data.url}
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
          ${workCardStyle}
        `}
      >
        <div
          css={css`
            ${imgContainerStyle}
          `}
        >
          <Image
            src={data.screenshot.url}
            layout="fill"
            alt={data.title}
            css={css`
              ${imgStyle}
            `}
          />
        </div>
        <div
          css={css`
            ${flexColWithGap(10)}
          `}
        >
          <h3
            css={css`
              ${titleStyle}
            `}
          >
            {data.title}
          </h3>
          <p
            css={css`
              ${descriptionStyle}
              ${workDescriptionStyle}
            `}
          >
            {data.description}
          </p>
        </div>
        <div
          css={css`
            ${techStackListStyle}
          `}
        >
          {data.techStack.map((e) => (
            <ToolTip text={e.name} key={e.name}>
              <TechIcon
                src={e.icon.url}
                key={e.name}
                size="small"
                name={e.name}
              />
            </ToolTip>
          ))}
        </div>
        <div
          css={css`
            ${isTeamIconStyle}
          `}
        >
          <IsTeamIcon isTeam={data.isTeam} />
        </div>
      </div>
    </a>
  );
};

export default WorkCard;
