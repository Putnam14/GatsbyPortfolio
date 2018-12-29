import styled from 'styled-components'

const NavStyles = styled.ul`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1.25em;
  font-weight: 600;
  height: 4rem;
  align-items: center;
  background-color: rgba(161, 162, 167, 0.8);
  box-shadow: ${props => props.theme.bs};
  -webkit-backdrop-filter: blur(2px);
  li {
    margin: 0 1em 0 1em;
  }
  .name {
    font-weight: 900;
    font-size: 2em;
    color: ${props => props.theme.base};
    margin-right: auto;
    margin-left: 3em;
  }
  .last {
    padding-right: 3em;
  }
  .active {
    border-bottom: 5px solid ${props => props.theme.accent};
  }
  a {
    text-decoration: none;
  }
`

export default NavStyles
