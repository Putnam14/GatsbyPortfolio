import styled from 'styled-components'

const FeaturedStyles = styled.div`
  background-image: linear-gradient(white 90%, ${props => props.theme.white});
  width: 100vw;
  ul {
    margin: 0 auto;
    padding: 0;
    width: 80%;
    list-style: none;
  }
  .gatsby-image-wrapper {
    max-height: 50vh;
  }
  img {
    border-radius: 40px;
    z-index: 0;
  }
  @media (max-width: 739px) {
    .card {
      padding: 0;
      margin-top: -40px;
      width: 100%;
      border-radius: 0 0 16px 16px;
    }
  }
  @media (min-width: 740px) {
    .gatsby-image-wrapper {
      max-width: 80%;
      margin-left: auto;
    }
    .card {
      position: absolute;
      bottom: 0;
      margin: 0;
      width: 50%;
      border-radius: 16px 16px 0 16px;
      padding-top: 1em;
    }
  }
  padding-top: 1rem;
  position: relative;
  li {
    position: relative;
  }
`
export default FeaturedStyles
