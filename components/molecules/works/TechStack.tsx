import * as React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faUser } from "@fortawesome/free-solid-svg-icons";
import DeviconSmall from "../../atoms/works/DeviconSmall";

type CardProps = {
  list: Array<string>;
};

const TechStack: React.FC<CardProps> = ({
  list,
}) => {
  return (
    <div
      css={css`
        ${techStackListStyle}
      `}
    >
      {list.map((e) => (
        <DeviconSmall name={e} key={e} />
      ))}
    </div>
  );
};

const techStackListStyle = css`
  position: absolute;
  float: left;
  bottom: 15px;
`;

export default TechStack;
