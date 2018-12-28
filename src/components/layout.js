import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Helmet from 'react-helmet'
import Navigation from './navigation'
import styled, { ThemeProvider } from 'styled-components'

const theme = {
  base: '#327381',
  accent: '#A96F51',
  gray: '#3B4044',
  lightGray: '#A1A2A7',
  white: '#F2FDFF',
  black: '#393939',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.gray};
`
const Meta = () => (
  <Helmet>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Bridger Putnam</title>
  </Helmet>
)

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Navigation />
          {children}
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Template
