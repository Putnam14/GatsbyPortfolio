import React from 'react'
import HalfRule from './styles/HalfRule'
import ProjectsStyles from './styles/ProjectsStyles'
const Projects = () => {
  return (
    <ProjectsStyles id="projects">
      <HalfRule>
        <span>Projects</span>
      </HalfRule>
      <div className="projects">
        <div className="card">
          <div className="project">
            <img />
            <span className="projName">Reading Length</span>
            <span className="projType">Web App</span>
            <span className="projDesc">
              Book search engine built with vanilla NodeJS. Impressive usage
              statistics with over 80,000 unique visitors per month.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="project">
            <img />
            <span className="projName">Bridger Putnam</span>
            <span className="projType">Portfolio</span>
            <span className="projDesc">
              My portfolio site, built with a GatsbyJS front-end hosted on
              Netlify using GraphQL to get data from a Contentful CMS backend.
              This site is FAST.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="project">
            <img />
            <span className="projName">Sick Fits</span>
            <span className="projType">eCommerce</span>
            <span className="projDesc">
              Example eCommerce site built with NextJS, Apollo, and GraphQL
              (Yoga and Prisma.io). In other words, I built it myself without
              using any sort of eCommerce platform.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="project">
            <img />
            <span className="projName">Catch of the Day</span>
            <span className="projType">Restaurant</span>
            <span className="projDesc">
              Menu website for a fictional restaurant I built using plain old
              React and Firebase as a backend.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="project">
            <img />
            <span className="projName">LitBook</span>
            <span className="projType">Social Network</span>
            <span className="projDesc">
              Work in progress. A place for readers to track what they're
              reading and organize book clubs. Spinoff from Reading Length.
            </span>
          </div>
        </div>
      </div>
    </ProjectsStyles>
  )
}

export default Projects
