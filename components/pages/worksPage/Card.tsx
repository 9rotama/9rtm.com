import * as React from "react"
import Image from "next/image"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faUserGroup,
  faUser
} from "@fortawesome/free-solid-svg-icons"
import DeviconSmall from "./DeviconSmall"

type CardProps = {
  title: string;
  url: string;
  description: string;
  techStack: Array<string>;
  isTeam?: boolean;
}

const Card: React.FC<CardProps> = ({ title, url, description, techStack, isTeam }) => {
  return (
    <a
      css={css`
        position: relative;
        width: 40%;
        background: #f5faff;
        border-radius: 20px;
        padding: 0px 30px 30px 30px;
        margin-bottom: 20px;
        transition-duration: 0.3s;
        text-decoration: none;
        color: #252a34;

        &:hover {
          filter: drop-shadow(0px 6px 8px #252a3422);
          background: #ffffff;
          transition-duration: 0.3s;
          transform: translateY(-5px);
        }

        @media (max-width: 960px) {
          & {
            margin: 0px 2.5px 20px 2.5px;
            padding: 0px 20px 30px 20px;
            width: 40%;
          }
        }
        @media (max-width: 640px) {
          & {
            width: 100%;
          }
        }
      `}
      href={url}
    >
      <h2
        css={css`
          @media (max-width: 960px) {
            font-size: 1.3em;
          }
        `}
      >
        {title}
      </h2>
      <p
        css={css`
          margin-bottom: 40px;
          @media (max-width: 960px) {
            font-size: 0.9em;
          }
        `}
      >
        {description}
      </p>
      <div
        css={css`
          position: absolute;
          float: left;
          bottom: 15px;
        `}
      >
        {/*error: keyのpropが設定されていない(動きはする)*/}
        {techStack.map(e => (
          <DeviconSmall name={e} />
        ))}
      </div>

      <FontAwesomeIcon
        icon={isTeam ? faUserGroup : faUser}
        css={css`
          position: absolute;
          color: #252f6022;
          margin-bottom: auto;
          font-size: 2em;
          bottom: 20px;
          right: 8%;
        `}
      />
    </a>
  )
}

export default Card
