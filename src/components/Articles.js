import React from 'react'
import ArticlePreview from './article-preview'
import HalfRule from './styles/HalfRule'
import ArticlesStyles from './styles/ArticlesStyles'

const Articles = ({ posts, children }) => (
  <div>
    {children && (
      <HalfRule>
        <span>{children}</span>
      </HalfRule>
    )}
    <ArticlesStyles>
      {posts.map(({ node }) => {
        return <ArticlePreview article={node} />
      })}
    </ArticlesStyles>
  </div>
)

export default Articles
