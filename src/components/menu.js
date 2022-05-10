import * as React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/react'


const Menu = ({ data }) => (
    <div>
        <Link to="/aboutme" >about me</Link>
        <Link to="/works" >works</Link>
    </div>
) 

export default Menu