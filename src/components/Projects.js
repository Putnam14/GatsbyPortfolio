import React from 'react'
import HalfRule from './styles/HalfRule'
import Img from 'gatsby-image'
import ProjectsStyles from './styles/ProjectsStyles'
const Projects = ({ projects }) => {
  return (
    <ProjectsStyles id="projects">
      {projects && (
        <>
          <HalfRule>
            <span>Projects</span>
          </HalfRule>
          <div className="projects">
            {projects.map(({ node }) => (
              <div className="card">
                <Img alt={node.name} fluid={node.image.fluid} />
                <div className="project">
                  <span className="projName">{node.name}</span>
                  <span className="projType">{node.type}</span>
                  <span className="projDesc">{node.shortDescription}</span>
                </div>
                <div className="links">
                  {node.link && <a href={node.link}>Live Website</a>}
                  {node.github && (
                    <a href={'https://github.com/' + node.github}>Github</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </ProjectsStyles>
  )
}

export default Projects
