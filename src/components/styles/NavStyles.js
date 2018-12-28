import styled from 'styled-components'

const NavStyles = styled.ul`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1.25em;
  height: 100px;
  align-items: center;
  li {
    margin: 0 1em 0 1em;
  }
  .name {
    font-size: 2em;
    font-weight: bold;
    color: white;
    margin-right: auto;
    margin-left: 3em;
  }
  .last {
    padding-right: 3em;
  }
  .active {
    border-bottom: 5px solid orange;
  }
  a {
    text-decoration: none;
  }
`

export default NavStyles
