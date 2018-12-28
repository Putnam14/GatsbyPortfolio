import React from 'react'
import ArticlePreview from './article-preview'
import HalfRule from './styles/HalfRule'
import ArticlesStyles from './styles/ArticlesStyles'

const Articles = ({ posts }) => (
  <div>
    <HalfRule>
      <span>Recent blog posts</span>
    </HalfRule>
    <ArticlesStyles>
      {posts.map(({ node }) => {
        return <ArticlePreview article={node} />
      })}
    </ArticlesStyles>
  </div>
)

export default Articles
