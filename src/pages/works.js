import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Global, css } from '@emotion/react'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (

  <Layout>  
    <Seo title="works" />
    
    <p>
      welcome to 9rotama's portfolio!!
    </p>
  </Layout>
)

export default IndexPage
