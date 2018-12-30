import React from 'react'
import HalfRule from './styles/HalfRule'
import { Link } from 'gatsby'

const AboutMe = ({ text }) => (
  <>
    <HalfRule>
      <span>About Me</span>
    </HalfRule>
    <div
      dangerouslySetInnerHTML={{
        __html: text.childMarkdownRemark.html,
      }}
    />
  </>
)

export default AboutMe
