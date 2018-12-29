import styled from 'styled-components'

const ArticlePreviewStyles = styled.li`
  img {
    border-radius: 16px;
    z-index: 0;
  }
  .card {
    position: relative;
    background: ${props => props.theme.cardBg};
    margin-top: -4em;
    width: 80%;
    border-radius: 0 16px 16px 16px;
    padding-top: 1em;
    box-shadow: ${props => props.theme.bs};
  }
  .tag {
    display: block;
    color: ${props => props.theme.lightGray};
    padding: 0.25em;
    margin: 0;
    border-left: 4px solid ${props => props.theme.accent};
    text-transform: capitalize;
  }
  h3 {
    margin: 0;
    padding-left: 0.5em;
    color: ${props => props.theme.base};
    font-size: 1.5em;
  }
  a {
    text-decoration: none;
  }
  div {
    padding: 0.5em;
    margin: 0;
  }
  small {
    display: block;
    padding: 1em;
    color: ${props => props.theme.lightGray};
  }
  :nth-child(even) {
    .card {
      border-radius: 16px 0 16px 16px;
      margin-left: auto;
    }
    .tag {
      margin-left: auto;
      text-align: right;
      border-left: 0;
      border-right: 4px solid ${props => props.theme.accent};
    }
    small {
      text-align: right;
    }
  }
`

export default ArticlePreviewStyles
