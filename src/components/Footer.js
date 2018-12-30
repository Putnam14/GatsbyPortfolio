import React from 'react'
import FooterStyles from './styles/FooterStyles'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contentful from '../../static/contentful.svg'
import gatsby from '../../static/gatsby.svg'
import netlify from '../../static/netlify.svg'

const Footer = () => {
  library.add(faGithub, faTwitter)
  return (
    <FooterStyles>
      <div className="container">
        <div>
          <a href="https://github.com/Putnam14">
            <FontAwesomeIcon icon={['fab', 'github']} />
            <span className="sr-only">Github</span>
          </a>
          <a href="https://twitter.com/BridgerPutnam">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
        <p>
          Made with 💛 in Boise by{' '}
          <a href="https://bridgerputnam.me/">Bridger Putnam</a>
        </p>
        <div className="attribution">
          <span>
            <a href="https://www.gatsbyjs.org/" rel="nofollow" target="_blank">
              <img src={gatsby} alt="Powered by Gatsby" />
            </a>
          </span>
          <span>
            <a
              href="https://www.contentful.com/"
              rel="nofollow"
              target="_blank"
            >
              <img src={contentful} alt="Powered by Contentful" />
            </a>
          </span>
          <span>
            <a href="https://www.netlify.com/" rel="nofollow" target="_blank">
              <img src={netlify} alt="Hosted on Netlify" />
            </a>
          </span>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
