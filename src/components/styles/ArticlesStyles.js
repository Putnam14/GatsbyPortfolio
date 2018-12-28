import styled from 'styled-components'

const ArticlesStyles = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  grid-gap: 10vmin;
`

export default ArticlesStyles
