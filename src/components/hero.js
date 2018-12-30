import React from 'react'
import Img from 'gatsby-image'
import HeroStyles from './styles/HeroStyles'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default ({ data }) => {
  const { brandingTitle, heroImage, ctaJSON } = data
  const { pre, strong, cta, button } = ctaJSON
  library.add(faGithub, faTwitter, faAngleDoubleDown)
  return (
    <HeroStyles>
      <div className="heroContainer">
        <Img alt={brandingTitle} fluid={heroImage.fluid} />
        <div className="bio">
          <div className="bio-content fadeDown">
            {pre && <p className="pre">{pre}</p>}
            {strong && strong.map(val => <p className="strong">{val}</p>)}
            {cta && <p className="cta">{cta}</p>}
            {button && (
              <a href="/#contact">
                <button>{button}</button>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="bottomLinks">
        <a href="https://github.com/Putnam14">
          <FontAwesomeIcon icon={['fab', 'github']} />
          <span className="sr-only">Github</span>
        </a>
        <a href="https://twitter.com/BridgerPutnam">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
          <span className="sr-only">Twitter</span>
        </a>
        <Link to="/#content" className="downArrow bounce">
          <FontAwesomeIcon className="downArrow" icon="angle-double-down" />
        </Link>
      </div>
    </HeroStyles>
  )
}
