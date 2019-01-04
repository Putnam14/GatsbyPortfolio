import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import heroStyles from '../components/hero.module.css'

const PageContainer = styled.div`
  background-color: ${props => props.theme.cardBg};
`

const PostStyles = styled.div`
  max-width: 50em;
  margin: 0 auto;
  animation: fadeDown 0.5s both linear 0.25s;
  @keyframes fadeDown {
    0% {
      opacity: 0;
      transform: translateY(-25px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .author-info {
    display: flex;
    align-items: center;
    .gatsby-image-wrapper {
      border-radius: 100%;
      margin-right: 1rem;
    }
    a {
      padding-left: 1em;
    }
  }
  .post-info {
    display: flex;
    .author-info {
      padding-right: 1em;
    }
    .gatsby-image-wrapper {
      width: 40px;
      height: 40px;
    }
  }
  .post-script {
    padding: 0 1em;
    .gatsby-image-wrapper {
      min-width: 75px;
      height: 75px;
    }
    .social {
      display: grid;
      p {
        padding: 0;
        margin: 0;
      }
      a {
        text-decoration: none;
      }
      svg {
        padding-right: 0.5em;
      }
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
    svg {
      font-size: 1.25rem;
      color: ${props => props.theme.base};
    }
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const { blogTitle } = this.props.data.contentfulSiteSettings
    const { author } = post
    library.add(faGithub, faTwitter)

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>{`${post.title} | ${blogTitle}`}</title>
        </Helmet>
        <PageContainer>
          {post.heroImage.fluid && (
            <div className={heroStyles.hero}>
              <Img
                className={heroStyles.heroImage}
                alt={post.title}
                fluid={post.heroImage.fluid}
              />
            </div>
          )}
          <PostStyles>
            <div className="wrapper">
              <h1>{post.title}</h1>
              <div className="post-info">
                <div className="author-info">
                  <Img alt={author.name} fluid={author.image.fluid} />
                  <p className="name">{author.name}</p>
                  {author.github && (
                    <a href={'https://www.github.com/' + author.github}>
                      <FontAwesomeIcon icon={['fab', 'github']} />
                      <span className="sr-only">{author.name}'s Github</span>
                    </a>
                  )}
                  {author.twitter && (
                    <a href={'https://www.twitter.com/' + author.twitter}>
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                      <span className="sr-only">{author.name}'s Twitter</span>
                    </a>
                  )}
                </div>
                <p>{post.publishDate}</p>
              </div>
              <div className="section-headline" />
              <div
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />
              <div className="section-headline" />
              <div className="post-script">
                <div className="author-info">
                  <Img alt={author.name} fluid={author.image.fluid} />
                  <div className="bio">
                    <div>
                      <p className="name">{author.name}</p>
                      <p className="title">{author.title}</p>
                      <p>{post.publishDate}</p>
                    </div>
                  </div>
                  <div className="social">
                    {author.github && (
                      <a href={'https://www.github.com/' + author.github}>
                        <p>
                          <FontAwesomeIcon icon={['fab', 'github']} />
                          {author.github}
                        </p>
                      </a>
                    )}
                    {author.twitter && (
                      <a href={'https://www.twitter.com/' + author.twitter}>
                        <p>
                          <FontAwesomeIcon icon={['fab', 'twitter']} />
                          {author.twitter}
                        </p>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </PostStyles>
        </PageContainer>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulSiteSettings {
      blogTitle
    }
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
