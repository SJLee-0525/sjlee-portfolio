import "./Projects.css"

import React, { useContext } from "react"

import { PortfolioContext } from "../../store/PortfolioStore"

import { Portfolio } from "../../model/project.ts"

import Modal from "../modal/Modal.tsx"
import ProjectCarousel from "./ProjectCarousel.tsx"
import ProjectDetail from "./ProjectDetail.tsx"

const ProjectModal: React.FC = () => {
  const { portfolios, projectModal, handleCloseProjectModal } = useContext(PortfolioContext)

  const project: Portfolio = portfolios[projectModal]

  return (
    <Modal open={projectModal >= 0} onClose={projectModal >= 0 ? handleCloseProjectModal : () => {}}>
      {projectModal >= 0 && (
        <div id="project-modal">
          <ProjectCarousel videoUrl={project.project.videoUrl} imgSrc={project.project.imgSrc} />
          <ProjectDetail project={project} />
        </div>
      )}
    </Modal>
  )
}

export default ProjectModal
