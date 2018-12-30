import styled from 'styled-components'

const BlogStyles = styled.div`
  width: calc(100% - 10vmin);
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 5vmin 0;
  a {
    text-decoration: none;
  }
  .pagination {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 2em;
    .prev {
      margin-left: auto;
    }
  }
`

export default BlogStyles
