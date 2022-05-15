import * as React from 'react';
import { Link } from 'gatsby';
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContextBox({ pageIcon, pageTitle, context }) {
  return (
    <>
      <div css={css`
				position: relative;
				background-color: #222222a0;
				max-width: 800px;
				padding: 2%;
				margin-top: 200px;
				margin-left: auto;
				margin-right: auto;
				background: rgba(0, 0, 0, 0.5);
				backdrop-filter: blur(50px);
				border-radius: 60px;
				z-index: 3;
			`}
      >
				<div css={css`
					position: absolute;
					background-color: #ffffff;
					border-radius: 50%;
					top: -50px;
					width: 100px;
					height: 100px;
					margin-left: auto;
					margin-right: auto;
					margin-bottom: -50px;
					display: flex;
					z-index: 5;
				`}
      	>
					<FontAwesomeIcon
						icon={pageIcon}
						css={css`
							color: #000000;
							margin: auto;
							font-size: 2.8em;
						`}
					/>
      	</div>
        <h2 css={css`
					color: #ffffff;
					text-align: center;
					margin-top: 50px;
					font-weight: 600;
					font-size: 1.5em;
				`}
        >
          {pageTitle}
        </h2>

        {context}
      </div>

    </>
  );
}

export default ContextBox;
