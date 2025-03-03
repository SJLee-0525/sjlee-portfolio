import "./Projects.css"

import React, { useContext } from "react"

import { PortfolioContext } from "../../store/PortfolioStore"

const Projects: React.FC = () => {
  const { portfolios, handleProjectModal } = useContext(PortfolioContext)

  return (
    <div id="projects-page">
      <h1>프로젝트</h1>
      <div className="projects">
        {portfolios.map((portfolio, index) => {
          return (
            <div key={index} className="project" onClick={() => handleProjectModal(index)}>
              <div className="project-img">
                <img src={portfolio.project.imgSrc[0]} alt="" />
              </div>
              <div className="project-details">
                <h3>{portfolio.project.title}</h3>
                <div className="project-info">
                  <p>{portfolio.project.name}</p>
                  <p>{portfolio.project.duration}</p>
                </div>
                <div>
                  <span className="project-role">{portfolio.responsibilities.role}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
