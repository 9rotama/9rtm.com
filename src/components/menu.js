import * as React from "react"
import { Link } from "gatsby"
import { css } from '@emotion/react'


const Menu = ({ data }) => (
    <div>
        <Link to="/" >about me</Link>
        <Link to="/" >works</Link>
    </div>
) 

export default Menu