import styled from 'styled-components'

const FooterStyles = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.gray};
  color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.bs};
  .container {
    margin: 0 auto;
    padding: 1em;
    max-width: ${props => props.theme.maxWidth};
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
  }
  p {
    margin: 0;
  }
  a {
    color: ${props => props.theme.base};
    text-decoration: none;
  }
  svg {
    padding: 0 0.5em;
    font-size: 1.5em;
  }
  .attribution {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    span {
      padding: 0 1em;
    }
  }
  img {
    height: 40px;
    padding-top: 1em;
    max-width: 150px;
  }
`

export default FooterStyles
