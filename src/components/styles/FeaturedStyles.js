import styled from 'styled-components'

const FeaturedStyles = styled.div`
  background-image: linear-gradient(white 90%, ${props => props.theme.white});
  width: 100vw;
  padding-top: 1rem;
  position: relative;
  li {
    position: relative;
  }
  ul {
    margin: 0 auto;
    width: 80%;
    list-style: none;
  }
  .gatsby-image-wrapper {
    max-width: 80%;
    max-height: 50vh;
    margin-left: auto;
  }
  img {
    border-radius: 40px;
    z-index: 0;
  }
  .card {
    position: absolute;
    bottom: 0;
    margin: 0;
    width: 50%;
    border-radius: 16px 16px 0 16px;
    padding-top: 1em;
  }
`
export default FeaturedStyles
