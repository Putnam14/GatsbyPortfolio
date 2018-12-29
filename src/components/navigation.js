import React from 'react'
import { Link } from 'gatsby'
import NavStyles from './styles/NavStyles'
import Headroom from 'react-headroom'

export default ({ title }) => (
  <Headroom>
    <NavStyles role="navigation">
      <li className="name">
        <Link to="/">{title}</Link>
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
        <Link to="/#content" activeClassName="active">
          Projects
        </Link>
      </li>
      <li className="last">
        <Link to="/#contact" activeClassName="active">
          Hire Me
        </Link>
      </li>
    </NavStyles>
  </Headroom>
)
