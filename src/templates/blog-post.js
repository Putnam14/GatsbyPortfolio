import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styled from 'styled-components'

import heroStyles from '../components/hero.module.css'

const PostStyles = styled.div`
  .post-script {
    padding: 0 1em;
  }
  .author-info {
    display: flex;
    .gatsby-image-wrapper {
      min-width: 75px;
      height: 75px;
      border-radius: 100%;
      margin-right: 1rem;
    }
  }
  .bio {
    display: grid;
    grid-template-columns: 1fr auto;
    .name {
      font-weight: bold;
    }
    .title {
      font-weight: light;
      font-style: italic;
    }
    p {
      padding: 0;
      margin: 0;
    }
    i {
      font-size: 1.25rem;
      color: ${props => props.theme.base};
      padding-right: 1rem;
    }
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { author } = post

    return (
      <Layout location={this.props.location}>
        <PostStyles>
          <Helmet>
            <title>{`${post.title} | ${siteTitle}`}</title>
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
              integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
              crossorigin="anonymous"
            />
          </Helmet>
          {post.heroImage.fluid && (
            <div className={heroStyles.hero}>
              <Img
                className={heroStyles.heroImage}
                alt={post.title}
                fluid={post.heroImage.fluid}
              />
            </div>
          )}
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
          <div className="section-headline" />
          <div className="post-script">
            <p>{post.publishDate}</p>
            <div className="author-info">
              <Img alt={author.name} fluid={author.image.fluid} />
              <div className="bio">
                <div>
                  <p className="name">{author.name}</p>
                  <p className="title">{author.title}</p>
                </div>
                <div>
                  {author.github && (
                    <a href={'https://www.github.com/' + author.github}>
                      <i className="fab fa-github" />
                    </a>
                  )}
                  {author.twitter && (
                    <a href={'https://www.twitter.com/' + author.twitter}>
                      <i className="fab fa-twitter" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: author.shortBio.childMarkdownRemark.html,
              }}
            />
          </div>
        </PostStyles>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
        title
        shortBio {
          childMarkdownRemark {
            html
          }
        }
        twitter
        github
        image {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
