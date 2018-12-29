import styled from 'styled-components'

const NavStyles = styled.ul`
  z-index: 10;
  width: 100vw;
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 600;
  background-color: rgba(161, 162, 167, 0.8);
  box-shadow: ${props => props.theme.bs};
  -webkit-backdrop-filter: blur(2px);
  .name {
    font-weight: 900;
    font-size: 2em;
    color: ${props => props.theme.base};
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 739px) {
    display: grid;
    justify-items: center;
    .active {
      border-bottom: 2px solid ${props => props.theme.accent};
    }
    .extras {
      display: none;
    }
  }
  @media (min-width: 740px) {
    display: flex;
    font-size: 1.25em;
    height: 4rem;
    align-items: center;
    li {
      margin: 0 0 0 1em;
    }
    .name {
      margin-right: auto;
    }
    .last {
      padding-right: 3em;
    }
    .active {
      border-bottom: 5px solid ${props => props.theme.accent};
    }
  }
`

export default NavStyles
