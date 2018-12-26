import styled from 'styled-components'

const NavStyles = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 1fr;
  justify-items: end;
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 20vh;
    max-height: 100px;
    font-size: 1.25em;
  }
  li {
    display: inline-flex;
    align-items: center;
    margin: 0 1em;
    a {
      text-decoration: none;
      color: currentColor;
    }
  }
`

export default NavStyles
