import styled from 'styled-components'

const HalfRule = styled.h2`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.lightGray};
  line-height: 0.1em;
  margin-bottom: 3rem;
  span {
    background: ${props => props.theme.white};
    padding: 0 10px;
  }
`

export default HalfRule
