import styled from 'styled-components'

const HeroStyles = styled.div`
  width: 100vw;
  position: relative;
  .heroContainer {
    background-image: linear-gradient(white 90%, ${props => props.theme.white});
  }
  .bottomLinks {
    display: flex;
    width: 100%;
    i {
      color: ${props => props.theme.lightGray};
      opacity: 0.8;
      font-size: 3em;
    }
  }
  @media (max-width: 739px) {
    .gatsby-image-wrapper {
      max-height: 50vh;
    }
    .bio-content {
      display: grid;
      width: 75%;
    }
    a {
      text-align: center;
    }
    .bottomLinks {
      margin: 1em 0;
      justify-content: space-evenly;
      .downArrow {
        display: none;
      }
    }
  }
  @media (min-width: 740px) {
    height: 100vh;
    min-height: 590px;
    .heroContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-top: -4rem;
      height: 100vh;
    }
    .bio-content {
      margin-top: 4rem;
      margin-bottom: 4rem;
      width: 50%;
      min-width: 300px;
    }
    .bottomLinks {
      position: absolute;
      bottom: 0;
      i {
        padding: 0 0 1rem 3rem;
      }
      .downArrow {
        margin-left: auto;
        padding-right: 3rem;
        opacity: 1;
        color: ${props => props.theme.base};
      }
    }
  }
  .bio {
    display: flex;
    align-items: center;
    justify-content: center;
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
  .fadeDown {
    animation: fadeDown 0.5s both linear 0.25s;
    @keyframes fadeDown {
      0% {
        opacity: 0;
        transform: translateY(-25px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  .bounce {
    position: relative;
    animation: bounce 1s linear 1.5s infinite;
    @keyframes bounce {
      0% {
        top: 0;
      }
      60% {
        top: 0;
      }
      70% {
        top: 0.2em;
      }
      80% {
        top: 0.3em;
      }
      100% {
        top: 0;
      }
    }
  }
`

export default HeroStyles
