import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import base from './base.css'
import Helmet from 'react-helmet'
import Navigation from './navigation'
import styled, { ThemeProvider } from 'styled-components'
import Footer from './Footer'
import { isAbsolute } from 'upath'

const StyledPage = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
  background: ${props => props.theme.white};
  color: ${props => props.theme.gray};
  a {
    color: ${props => props.theme.base};
  }
  .sr-only {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`
const Meta = () => (
  <Helmet>
    <title>Bridger Putnam</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="My name is Bridger Putnam and I am a full stack developer located in Boise, ID. My focus is on creating stunning websites that users find value in. I am available for hire, contact me!"
    />
    <meta charSet="utf-8" />
    <html lang="en" />
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
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            contentfulSiteSettings {
              brandingTitle
              theme {
                bs
                base
                gray
                lightGray
                black
                white
                accent
                cardBg
                maxWidth
              }
            }
          }
        `}
        render={({ contentfulSiteSettings: { brandingTitle, theme } }) => (
          <ThemeProvider theme={theme}>
            <StyledPage id="hi">
              <div className="content">
                <Meta />
                <Navigation title={brandingTitle} />
                {children}
              </div>
              <Footer />
            </StyledPage>
          </ThemeProvider>
        )}
      />
    )
  }
}

export default Template
