import React from 'react'
import Img from 'gatsby-image'
import HeroStyles from './styles/HeroStyles'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

export default ({ data }) => (
  <HeroStyles>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
        crossorigin="anonymous"
      />
    </Helmet>
    <div className="heroContainer">
      <Img alt={data.name} fluid={data.heroImage.fluid} />
      <div className="bio">
        <div className="bio-content">
          <p className="pre">Independent</p>
          <p className="strong">Web Designer</p>
          <p className="strong">Full Stack Developer</p>
          <p className="strong">Digital Strategist</p>
          <p className="cta">
            I build bad-ass websites that are hella performant. Hire me and
            let’s build something you can brag about.
          </p>
          <button>Talk to me</button>
        </div>
        {/* 
        <h3>{data.name}</h3>
        <p>{data.title}</p>
        <p>{data.shortBio.shortBio}</p> */}
      </div>
    </div>
    <div className="bottomLinks">
      <a href="https://github.com/Putnam14">
        <i className="fab fa-github" />
      </a>
      <a href="https://twitter.com/BridgerPutnam">
        <i className="fab fa-twitter" />
      </a>
      <Link to="/#content" className="downArrow">
        <i className="downArrow fas fa-angle-double-down" />
      </Link>
    </div>
  </HeroStyles>
)
