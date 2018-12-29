import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import Articles from '../components/Articles'
import Featured from '../components/Featured'
import BlogHeader from '../components/BlogHeader'

class BlogIndex extends React.Component {
  render() {
    const { blogTitle } = this.props.data.contentfulSiteSettings
    const posts = this.props.data.allContentfulBlogPost.edges
    const featuredPost = posts.filter(({ node }) => {
      return node.tags.includes('featured')
    })[0]

    return (
      <Layout location={this.props.location}>
        <Helmet title={blogTitle} />
        <BlogHeader />
        {featuredPost && <Featured post={featuredPost} />}
        <div className="wrapper">
          <Articles posts={posts}>Latest posts</Articles>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

// TODO: Import blog title, author from Contentful. Add the blog title to the <title> and author info to the cards.
export const pageQuery = graphql`
  query BlogIndexQuery {
    contentfulSiteSettings {
      blogTitle
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
  }
`
