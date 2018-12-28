import React from 'react'
import { Link } from 'gatsby'
import NavStyles from './styles/NavStyles'

export default () => (
  <NavStyles role="navigation">
    <li className="name">
      <Link to="/">Bridger Putnam</Link>
    </li>
    <li>
      <Link to="/" activeClassName="active">
        About
      </Link>
    </li>
    <li>
      <Link to="/blog/" activeClassName="active">
        Blog
      </Link>
    </li>
    <li>
      <Link to="/projects/" activeClassName="active">
        Projects
      </Link>
    </li>
    <li className="last">
      <Link to="/hire-me/" activeClassName="active">
        Hire Me
      </Link>
    </li>
  </NavStyles>
)
