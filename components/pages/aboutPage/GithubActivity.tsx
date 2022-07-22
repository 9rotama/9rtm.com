import * as React from "react";
import { css } from "@emotion/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubCalendar from "react-github-calendar";

const GithubActivity = () => {
  const theme = {
    background: "",
    text: "#ffffff",
    level4: "#FF2E63",
    level3: "#FF638A",
    level2: "#FF97B1",
    level1: "#FFCBD8",
    level0: "#FFFFFF",
  };

  return (
    <div
      css={css`
        overflow-x: auto;
        @media (max-width: 720px) {
          width: 100%;
        }
      `}
    >
      <div
        css={css`
          background-color: #eff6fa;
          padding: 20px;
          border-radius: 20px;
          text-align: center;
        `}
      >
        <FontAwesomeIcon
          icon={faGithub}
          css={css`
            color: #253a60a0;
            margin: 0 0.8rem 0.8rem 0.8rem;
            font-size: 1.8em;
          `}
        />
        <GitHubCalendar
          username="9rotama"
          year={new Date().getFullYear()}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default GithubActivity;
