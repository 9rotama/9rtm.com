import PropTypes from 'prop-types';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContextBox({ pageIcon, pageTitle, context }) {
  ContextBox.propTypes = {
    pageIcon: PropTypes.element.isRequired,
    pageTitle: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
  };

  return (
    <div
      css={css`
      padding-left: 20px;
      padding-right: 20px;
      `}
    >
      <div css={css`
        position: relative;
        background-color: #222222a0;
        max-width: 800px;
        padding: 30px;
        margin-top: 200px;
        left: 50%;
        transform: translate(-50%);
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(20px);
        border-radius: 60px;
        z-index: 3;

        @media (max-width: 1240px) {
          & {
            margin-top: 120px;
          }
        }
      `}
      >
<<<<<<< HEAD
        <div>
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
=======
        <div css={css`
				`}
        >
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
>>>>>>> main
          >
            <FontAwesomeIcon
              icon={pageIcon}
              css={css`
<<<<<<< HEAD
                color: #222222;
                margin: auto;
                font-size: 1.7em;
              `}
            />
          </div>
          <div css={css`
            color: #ffffff;
            margin-top: 70px;
            font-weight: 600;
            font-size: 1.5em;
          `}
=======
								color: #222222;
								margin: auto;
								font-size: 1.7em;
							`}
            />
          </div>
          <div css={css`
						color: #ffffff;
						margin-top: 70px;
						font-weight: 600;
						font-size: 1.5em;
					`}
>>>>>>> main
          >
            {pageTitle}
          </div>
        </div>

        {context}
      </div>
      <footer css={css`
          text-align: center;
          margin: 50px;
          font-size: 100;
          color: rgba(255,255,255,0.5);
          z-index: 200;
        `}
      >
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        9rotama
      </footer>

    </div>
  );
}

export default ContextBox;
