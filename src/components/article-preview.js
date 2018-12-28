import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import ArticlePreviewStyles from './styles/ArticlePreviewStyles'

export default ({ article }) => (
  <ArticlePreviewStyles>
    <Img alt="" fluid={article.heroImage.fluid} />
    <div className="card">
      <span className="tag">{article.tags[0]}</span>
      <h3>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
      <small>{article.publishDate}</small>
    </div>
  </ArticlePreviewStyles>
)
