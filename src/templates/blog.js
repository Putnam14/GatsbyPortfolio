import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Articles from '../components/Articles'
import Featured from '../components/Featured'
import BlogHeader from '../components/BlogHeader'
import BlogStyles from '../components/styles/BlogStyles'

class BlogIndex extends React.Component {
  render() {
    const { blogTitle } = this.props.data.contentfulSiteSettings
    const posts = this.props.data.allContentfulBlogPost.edges
    const featuredPost = this.props.data.contentfulBlogPost
    const { numPages, currentPage } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage === 2 ? '/blog/' : `/blog/${(currentPage - 1).toString()}`
    const nextPage = `/blog/${(currentPage + 1).toString()}`

    return (
      <Layout location={this.props.location}>
        <Helmet title={blogTitle} />
        <BlogHeader />
        {featuredPost && <Featured post={featuredPost} />}
        <BlogStyles>
          <Articles posts={posts}>Latest posts</Articles>
          {numPages > 1 && (
            <div className="pagination">
              <span className="prev">
                {!isFirst && (
                  <Link to={prevPage} rel="prev">
                    ← Previous Page
                  </Link>
                )}
              </span>
              <p>{`Page ${currentPage} of ${numPages}`}</p>
              <span>
                {!isLast && (
                  <Link to={nextPage} rel="next">
                    Next Page →
                  </Link>
                )}
              </span>
            </div>
          )}
        </BlogStyles>
      </Layout>
    )
  }
}

export default BlogIndex

// TODO: Import blog title, author from Contentful. Add the blog title to the <title> and author info to the cards.
export const pageQuery = graphql`
  query BlogIndexQuery($skip: Int!, $limit: Int!) {
    contentfulSiteSettings {
      blogTitle
    }
    contentfulBlogPost(tags: { in: "featured" }) {
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
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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
