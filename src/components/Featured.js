import React from 'react'
import ArticlePreview from './article-preview'
import FeaturedStyles from './styles/FeaturedStyles'

const Featured = ({ post: { node } }) => {
  return (
    <FeaturedStyles>
      <ul>
        <ArticlePreview article={node} />
      </ul>
    </FeaturedStyles>
  )
}

export default Featured
