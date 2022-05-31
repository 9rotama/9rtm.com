import PropTypes from "prop-types"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContextBox({ pageIcon, pageTitle, children }) {
  ContextBox.propTypes = {
    pageIcon: PropTypes.element.isRequired,
    pageTitle: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  }

  return (
    <div
      css={css`
        padding-left: 20px;
        padding-right: 20px;

        animation-name: BlurUp;
        animation-duration: 0.3s;
      `}
    >
      <div
        css={css`
          position: relative;
          max-width: 800px;
          padding: 50px;
          margin-top: 150px;
          left: 50%;
          transform: translate(-50%);
          background: #ffffff55;
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
          <div
            css={css`
              position: relative;
              background-color: #252A34;
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
                color: #EAEAEA;
                margin: auto;
                font-size: 3em;
              `}
            />
          </div>
          <div
            css={css`
              color: #252A34;
              margin-top: 70px;
              font-weight: 600;
              font-size: 3em;
            `}
          >
            {pageTitle}
          </div>
        </div>
        {children}
      </div>
      <footer
        css={css`
          text-align: center;
          margin: 40px;
          font-size: 100;
          color: #252A3499;
          z-index: 200;
        `}
      >
        © {new Date().getFullYear()} 9rotama
      </footer>
    </div>
  )
}

export default ContextBox
