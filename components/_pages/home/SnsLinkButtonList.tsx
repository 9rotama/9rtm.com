import * as React from "react";
import { css } from "@emotion/react";

import SnsLinkButton from "./SnsLinkButton";
import { snsLinks } from "../../../const/links";

const SnsLinkButtonList = () => {
  const listStyle = css`
    position: relative;

    display: flex;
    flex-direction: row;
    gap: 6px;

    padding: 10px 10px 10px 10px;

    @media (max-width: 480px) {
      & {
        margin-left: 0px;
        margin-right: 0px;
      }
    }
  `;

  return (
    <div
      css={css`
        ${listStyle}
      `}
    >
      {snsLinks.map((e) => (
        <SnsLinkButton
          key={e.name + "-snslinks"}
          icon={e.icon}
          url={e.url}
          hoverColor={e.hoverColor}
        />
      ))}
    </div>
  );
};

export default SnsLinkButtonList;
