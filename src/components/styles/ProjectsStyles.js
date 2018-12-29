import styled from 'styled-components'

const ProjectsStyles = styled.div`
  margin-top: 4rem;
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card {
    width: 30%;
    margin: 1rem;
    background: white;
    box-shadow: ${props => props.theme.bs};
  }
  .project {
    width: 90%;
    margin: 1rem auto;
    display: flex;
    flex-wrap: wrap;
  }
  img {
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
`

export default ProjectsStyles
