import * as React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import DeviconSmall from "../../atoms/works/DeviconSmall";
import { cardPaddingX, cardPaddingY, descriptionStyle, titleStyle, floatCardStyle } from "../../molecules/common/floatCardStyle";

type Props = {
  title: string;
  url: string;
  imgSrc: string;
  description: string;
  techStack: Array<string>;
  isTeam?: boolean;
};

export const WorkCard: React.FC<Props> = ({
  title,
  url,
  imgSrc,
  description,
  techStack,
  isTeam,
}) => {
  return (
    <a
      css={css`
        ${floatCardStyle}
        ${workCardStyle}
      `}
      href={url}
    >
      <div
        css={css`
          ${imgContainerStyle}
        `}
      >
        <img 
          src={imgSrc}
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
        {title}
      </h3>
      <p
        css={css`
          ${descriptionStyle}
          ${workDescriptionStyle}
        `}
      >
        {description}
      </p>
      <div
        css={css`
          ${techStackListStyle}
        `}
      >
        {techStack.map((e) => (
          <DeviconSmall name={e} key={e} />
        ))}
      </div>
      <FontAwesomeIcon
        icon={isTeam ? faUserGroup : faUser}
        css={css`
          ${iconStyle}
        `}
      />
    </a>
  );
};

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
`
const imgStyle = css`
  object-fit: cover;
  width: 101%;
`

const iconStyle = css`
  position: absolute;
  bottom: 17px;
  right: 8%;

  margin-bottom: auto;

  color: #252f6022;
  font-size: 2em;
`;

const techStackListStyle = css`
  position: absolute;
  float: left;
  bottom: 15px;
`;

const workDescriptionStyle = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`