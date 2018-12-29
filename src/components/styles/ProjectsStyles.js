import styled from 'styled-components'

const ProjectsStyles = styled.div`
  margin-top: 4rem;
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    display: grid;
    width: 300px;
    margin: 1rem;
    background: ${props => props.theme.cardBg};
    border-radius: 16px;
    box-shadow: ${props => props.theme.bs};
  }
  .project {
    width: 90%;
    margin: 1rem auto;
    display: flex;
    flex-wrap: wrap;
  }
  img {
    border-radius: 16px 16px 0 0;
    height: 125px;
    background: gray;
    margin-bottom: 1rem;
  }
  .projName {
    margin-right: auto;
  }
  .projType {
    font-weight: bold;
    color: ${props => props.theme.gray};
  }
  .projDesc {
    display: block;
    color: ${props => props.theme.lightGray};
  }
  .links {
    padding: 1rem;
    display: grid;
    justify-items: center;
    align-self: end;
    a {
      display: block;
      text-decoration: none;
      color: ${props => props.theme.base};
    }
  }
`

export default ProjectsStyles
