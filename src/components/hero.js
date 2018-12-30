import React from 'react'
import Img from 'gatsby-image'
import HeroStyles from './styles/HeroStyles'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

export default ({ data }) => {
  const { brandingTitle, heroImage, ctaJSON } = data
  const { pre, strong, cta, button } = ctaJSON
  return (
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
        <Img alt={brandingTitle} fluid={heroImage.fluid} />
        <div className="bio">
          <div className="bio-content">
            {pre && <p className="pre">{pre}</p>}
            {strong && strong.map(val => <p className="strong">{val}</p>)}
            {cta && <p className="cta">{cta}</p>}
            {button && (
              <a href="/#contact">
                <button>{button}</button>
              </a>
            )}
          </div>
          {/* 
        <h3>{data.name}</h3>
        <p>{data.title}</p>
        <p>{data.shortBio.shortBio}</p> */}
        </div>
      </div>
      <div className="bottomLinks">
        <a href="https://github.com/Putnam14">
          <i className="fab fa-github">
            <span className="sr-only">Github</span>
          </i>
        </a>
        <a href="https://twitter.com/BridgerPutnam">
          <i className="fab fa-twitter">
            <span className="sr-only">Twitter</span>
          </i>
        </a>
        <Link to="/#content" className="downArrow">
          <i className="downArrow fas fa-angle-double-down" />
        </Link>
      </div>
    </HeroStyles>
  )
}
