import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Projects from '../components/Projects'
import Articles from '../components/Articles'

class RootIndex extends React.Component {
  render() {
    const { siteTitle } = this.props.data.site.siteMetadata
    const posts = this.props.data.allContentfulBlogPost.edges
    const [author] = this.props.data.allContentfulPerson.edges

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <Hero data={author.node} />
        <div className="wrapper" id="content">
          <Articles posts={posts} />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        siteTitle
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(background: "rgb:000000") {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
