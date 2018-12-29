import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Projects from '../components/Projects'
import Articles from '../components/Articles'
import Contact from '../components/Contact'

class RootIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlogPost.edges
    const projects = this.props.data.allContentfulProject.edges
    const [author] = this.props.data.allContentfulPerson.edges
    const siteSettings = this.props.data.contentfulSiteSettings
    const { siteTitle } = siteSettings
    return (
      <Layout location={this.props.location} data={siteSettings}>
        <Helmet title={siteTitle} />
        <Hero data={siteSettings} />
        <div className="wrapper" id="content" style={{ marginTop: '-4rem' }}>
          <Projects projects={projects} />
          <Articles posts={posts}>Recent blog posts</Articles>
          <Contact id="contact" />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulSiteSettings {
      brandingTitle
      siteTitle
      heroImage {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      ctaJSON {
        cta
        pre
        button
        strong
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
    allContentfulProject(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          name
          type
          shortDescription
          link
          github
          image {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
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
