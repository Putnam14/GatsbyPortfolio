import React from 'react'
import { Link } from 'gatsby'
import NavStyles from './styles/NavStyles'

export default () => (
  <NavStyles role="navigation">
    <ul>
      <li>
        <Link to="/">Bridger Putnam</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <Link to="/projects/">Projects</Link>
      </li>
      <li>
        <Link to="/hire-me/">Hire Me</Link>
      </li>
    </ul>
  </NavStyles>
)
