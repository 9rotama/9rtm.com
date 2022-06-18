import * as React from "react"
import { css } from "@emotion/react"
import GitHubCalendar from "react-github-calendar"

const GithubActivity = () => {
  const theme = {
    background: 'transparent',
    text: '#ffffff',
    level4: '#FF2E63',
    level3: '#FF638A',
    level2: '#FF97B1',
    level1: '#FFCBD8',
    level0: '#FFFFFF',
  };

  return (
    <div css={css`
      overflow-x: auto;
    `}>
      <GitHubCalendar
        username="9rotama"
        year={new Date().getFullYear()}
        theme={theme}
        />
    </div>
);
}

export default GithubActivity
