import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background-color: white;
  display: flex;
  @media (max-width: 739px) {
    width: 100%;
    margin: 0;
    padding: 1rem 0 0 0;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (min-width: 740px) {
    padding: 2rem 6rem 1rem 6rem;
    div {
      margin-left: auto;
    }
    span {
      padding-left: 2rem;
    }
  }
  span {
    font-weight: bold;
    color: ${props => props.theme.base};
  }
`

const BlogHeader = () => (
  <Header>
    <span>Programming.</span>
    <span>Cycling.</span>
    <span>Adventures.</span>
    <span>Life.</span>
    <div style={{ display: 'none' }}>
      <small>Doesn't work yet --></small>
      <input type="search" placeholder="Search!" />
    </div>
  </Header>
)

export default BlogHeader
