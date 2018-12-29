import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import base from './base.css'
import Helmet from 'react-helmet'
import Navigation from './navigation'
import styled, { ThemeProvider } from 'styled-components'

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
            <StyledPage>
              <Meta />
              <Navigation title={brandingTitle} />
              {children}
            </StyledPage>
          </ThemeProvider>
        )}
      />
    )
  }
}

export default Template
