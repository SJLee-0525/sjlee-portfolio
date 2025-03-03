import "./Projects.css"

import React from "react"

import { Portfolio } from "../../model/project.ts"

const ProjectDetail: React.FC<{ project: Portfolio }> = ({ project }) => {
  return (
    <div className="project-detail-container">
      <div className="project-detail-header">
        <h1>{project.project.name}</h1>
        <h3>{project.project.description}</h3>
      </div>

      <hr />

      <div className="project-detail-body">
        <h2>개요</h2>

        <div className="project-overview">
          <h3>프로젝트 기간</h3>
          <p>{project.project.duration}</p>
        </div>

        <div className="project-overview">
          <h3>팀 구성</h3>
          <ul>
            {project.project.team.map((member, index) => {
              return (
                <li key={index}>
                  {member[0]}: {member[1]}명
                </li>
              )
            })}
          </ul>
        </div>

        <div className="project-overview">
          <h3>협업 도구</h3>
          <ul>
            {project.project.collaboration_tools.map((tool, index) => {
              return <li key={index}>{tool}</li>
            })}
          </ul>
        </div>

        <div className="project-overview">
          <h3>수상</h3>
          <p>{project.project.award}</p>
        </div>
      </div>

      <div className="project-overview">
        <h2>담당 업무</h2>
        <p>
          <span className="project-role ">{project.responsibilities.role}</span>
        </p>
        <ul>
          {project.responsibilities.tasks.map((task, index) => {
            return <li key={index}>{task}</li>
          })}
        </ul>

        <div className="project-overview">
          <h3>사용 기술</h3>
          <table>
            <tbody>
              {project.technologies.map((technology, index) => {
                return (
                  <tr key={index}>
                    <td className="td-title">{technology[0]}</td>
                    <td className="td-content">
                      <p>
                        {technology[1].map((tech, index) => {
                          return (
                            <span key={index} className="content-elem">
                              {tech}
                            </span>
                          )
                        })}
                      </p>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="project-detail-body">
        <h2>회고</h2>
        <div className="project-overview">
          <h3>좋았던 점</h3>
          {project.retrospective.positives.map((positive, index) => {
            return (
              <div key={index}>
                <h4>{positive[0]}</h4>
                <p>{positive[1]}</p>
              </div>
            )
          })}
        </div>

        <div className="project-overview">
          <h3>아쉬웠던 점</h3>
          {project.retrospective.negatives.map((negative, index) => {
            return (
              <div key={index}>
                <h4>{negative[0]}</h4>
                <p>{negative[1]}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
