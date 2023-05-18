import * as React from "react";
import { css } from "@emotion/react";
import TechIcon from "../../../_common/CardCommon/TechIcon";
import {
  cardPaddingX,
  cardPaddingY,
  descriptionStyle,
  titleStyle,
  cardStyle,
} from "../../../_common/CardCommon/CardStyle";
import { Work } from "../../../../types/work";
import { ToolTip } from "./ToolTip";
import IsTeamIcon from "./IsTeamIcon";

type Props = {
  data: Work;
};

const WorkCard: React.FC<Props> = ({ data }) => {
  const workCardStyle = css`
    width: 300px;
    height: 270px;

    @media (max-width: 960px) {
      & {
        width: 270px;
        height: 260px;
      }
    }
    @media (max-width: 640px) {
      & {
        width: 100%;
      }
    }
  `;

  const imgContainerStyle = css`
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
    -webkit-line-clamp: 1;
    overflow: hidden;
  `;

  return (
    <a
      css={css`
        ${cardStyle}
        ${workCardStyle}
      `}
      href={data.url}
    >
      <div
        css={css`
          ${imgContainerStyle}
        `}
      >
        <img
          src={data.imgSrc.url}
          alt={data.title}
          css={css`
            ${imgStyle}
          `}
        />
      </div>

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
      <div
        css={css`
          ${techStackListStyle}
        `}
      >
        {data.techStack.map((e) => (
          <ToolTip text={e.name} key={e.name}>
            <TechIcon src={e.iconUrl} key={e.name} size="small" name={e.name} />
          </ToolTip>
        ))}
      </div>
      <IsTeamIcon isTeam={data.isTeam} />
    </a>
  );
};

export default WorkCard;
