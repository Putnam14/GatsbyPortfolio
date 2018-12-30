import React from 'react'
import ArticlePreview from './article-preview'
import FeaturedStyles from './styles/FeaturedStyles'

const Featured = ({ post }) => {
  return (
    <FeaturedStyles>
      <ul>
        <ArticlePreview article={post} />
      </ul>
    </FeaturedStyles>
  )
}

export default Featured
