import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  padding: 6rem 6rem 1rem 6rem;
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
    <span>Life.</span>
    <span>Programming.</span>
    <span>Finance.</span>
    <span>Cycling.</span>
    <div>
      <small>Doesn't work yet --></small>
      <input type="search" placeholder="Search!" />
    </div>
  </Header>
)

export default BlogHeader
