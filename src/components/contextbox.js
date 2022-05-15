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
				backdrop-filter: blur(20px);
				border-radius: 60px;
				z-index: 3;
			`}
      >
				<div css={css`
				`}>
					<div css={css`
						position: relative;
						background-color: #ffffff;
						border-radius: 50%;
						width: 50px;
						height: 50px;
						margin-bottom: -50px;
						display: flex;
						z-index: 5;
					`}
					>
						<FontAwesomeIcon
							icon={pageIcon}
							css={css`
								color: #222222;
								margin: auto;
								font-size: 1.7em;
							`}
						/>
					</div>
					<h2 css={css`
						color: #ffffff;
						margin-top: 70px;
						font-weight: 600;
						font-size: 1.5em;
					`}
					>
						{pageTitle}
					</h2>
				</div>

        {context}
      </div>

    </>
  );
}

export default ContextBox;
