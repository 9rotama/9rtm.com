import * as React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import DeviconSmall from "../../atoms/works/DeviconSmall";
import { descriptionStyle, titleStyle, floatCardStyle } from "../../molecules/common/floatCardStyle";

type Props = {
  title: string;
  url: string;
  description: string;
  techStack: Array<string>;
  isTeam?: boolean;
};

export const WorkCard: React.FC<Props> = ({
  title,
  url,
  description,
  techStack,
  isTeam,
}) => {
  return (
    <a
      css={css`
        ${workCardStyle}
        ${floatCardStyle}
      `}
      href={url}
    >
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
  height: 130px;

  @media (max-width: 960px) {
    & {
      width: 300px;
      height: 120px;
    }
  }
  @media (max-width: 640px) {
    & {
      width: 100%;
    }
  }
`;

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