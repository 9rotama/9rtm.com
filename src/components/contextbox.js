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

        animation-name: fadeInUp;
        animation-duration: 0.3s;

        @keyframes fadeInUp{
          0% {
            opacity: 0;
            filter: blur(10px);
          }

          100% {
            opacity: 1;
          }
        }
      `}
    >
      <div css={css`
        position: relative;
        background-color: #222222a0;
        max-width: 800px;
        padding: 50px;
        margin-top: 150px;
        left: 50%;
        transform: translate(-50%);
        background: rgba(10, 10, 10, 1);
        border-radius: 30px;
        z-index: 3;

        @media (max-width: 1240px) {
          & {
            margin-top: 100px;
          }
        }
      `}
      >
        <div>
          <div css={css`
            position: relative;
            background-color: #ffffff;
            border-radius: 50%;
            width: 100px;
            height: 100px;
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
                font-size: 3em;
              `}
            />
          </div>
          <div css={css`
            color: #ffffff;
            margin-top: 70px;
            font-weight: 500;
            font-size: 3em;
          `}
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
