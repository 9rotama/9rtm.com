import * as React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import DeviconSmall from "./DeviconSmall";

type CardProps = {
  title: string;
  url: string;
  description: string;
  techStack: Array<string>;
  isTeam?: boolean;
};

const Card: React.FC<CardProps> = ({
  title,
  url,
  description,
  techStack,
  isTeam,
}) => {
  return (
    <a
      css={css`
        ${cardStyle}
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

const cardStyle = css`
  position: relative;

  width: 40%;
  background: #f5faff;
  border-radius: 20px;
  margin: 0 0 20px 0;
  padding: 0px 30px 30px 30px;

  text-decoration: none;
  color: #252a34;

  transition-duration: 0.3s;

  &:hover {
    transform: translateY(-5px);

    background: #ffffff;
    filter: drop-shadow(0px 6px 8px #252a3422);

    transition-duration: 0.3s;
  }

  @media (max-width: 960px) {
    & {
      margin: 0px 2.5px 20px 2.5px;
      padding: 0px 20px 30px 20px;
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

const titleStyle = css`
  font-size: 1.3em;

  @media (max-width: 960px) {
    font-size: 1.1em;
  }
`;

const descriptionStyle = css`
  margin-bottom: 40px;

  @media (max-width: 960px) {
    font-size: 0.9em;
  }
`;

const techStackListStyle = css`
  position: absolute;
  float: left;
  bottom: 15px;
`;

export default Card;
