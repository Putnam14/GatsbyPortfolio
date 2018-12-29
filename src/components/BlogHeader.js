import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  padding: 6rem 6rem 1rem 6rem;
  background-color: white;
  display: flex;
  div {
    margin-left: auto;
  }
  span {
    font-weight: bold;
    padding-left: 2rem;
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
