import React from 'react'
import Img from 'gatsby-image'
import HeroStyles from './styles/HeroStyles'

export default ({ data }) => (
  <HeroStyles>
    <Img alt={data.name} fluid={data.heroImage.fluid} />
    <div className="bio">
      <div>
        <p>Independent</p>
        <p>Web Designer</p>
        <p>Full Stack Developer</p>
        <p>Digital Strategist</p>
        <p>
          I build bad-ass websites that are hella performant. Hire me and let’s
          build something you can brag about.
        </p>
        <button>Talk to me</button>
        {/* 
        <h3>{data.name}</h3>
        <p>{data.title}</p>
        <p>{data.shortBio.shortBio}</p> */}
      </div>
    </div>
  </HeroStyles>
)
