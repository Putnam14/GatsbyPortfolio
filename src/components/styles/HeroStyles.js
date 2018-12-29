import styled from 'styled-components'

const HeroStyles = styled.div`
  height: 100vh;
  min-height: 590px;
  width: 100vw;
  position: relative;
  .heroContainer {
    margin-top: -4rem;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-image: linear-gradient(white 90%, ${props => props.theme.white});
    .bio {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .bio-content {
      max-width: 50%;
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 1.5em;
    }
    .pre {
      color: ${props => props.theme.lightGray};
      margin-bottom: -0.5em;
    }
    .strong {
      font-weight: 900;
      margin-bottom: -0.25em;
    }
    .cta {
      margin: 1em 0 1em;
    }
    button {
      cursor: pointer;
      border: 0;
      background-color: ${props => props.theme.base};
      color: ${props => props.theme.white};
      font-size: 1rem;
      border-radius: 4px;
      box-shadow: ${props => props.theme.bs};
      height: 3rem;
      width: 50%;
    }
  }
  .bottomLinks {
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    i {
      color: ${props => props.theme.lightGray};
      opacity: 0.8;
      padding: 0 0 1rem 3rem;
      font-size: 3em;
    }
    .downArrow {
      margin-left: auto;
      padding-right: 3rem;
      opacity: 1;
      color: ${props => props.theme.base};
    }
  }
`

export default HeroStyles
