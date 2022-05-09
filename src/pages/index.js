import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Global, css } from '@emotion/react'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (

  <Layout>  
    <div>
      <Global styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,500;0,900;1,100;1,500;1,800&family=M+PLUS+1:wght@100;400;800&family=Montserrat:ital,wght@0,100;0,500;0,800;1,100;1,500;1,800&display=swap');
        @font-face {
          font-family: 'M PLUS 1','Montserrat Alternates';
        }
      `} />
    </div>
    <Seo title="Home" />
    
    <p>
      内容内容内容...
    </p>
  </Layout>
)

export default IndexPage
