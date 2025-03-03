import "./Stacks.css"

import React from "react"

import bootstrapIcon from "../../assets/stacks/Bootstrap.svg"
import cssIcon from "../../assets/stacks/CSS.svg"
import discordIcon from "../../assets/stacks/Discord.svg"
import figmaIcon from "../../assets/stacks/Figma.svg"
import gitIcon from "../../assets/stacks/Git.svg"
import githubIcon from "../../assets/stacks/Github-Light.svg"
import gitlabIcon from "../../assets/stacks/Gitlab-Light.svg"
import htmlIcom from "../../assets/stacks/HTML.svg"
import javascriptIcon from "../../assets/stacks/Javascript.svg"
import pythonIcon from "../../assets/stacks/Python-Light.svg"
import reactIcom from "../../assets/stacks/React-Light.svg"
import reduxIcom from "../../assets/stacks/Redux.svg"
import tailwindCssIcon from "../../assets/stacks/TailwindCSS-Light.svg"
import typescriptIcon from "../../assets/stacks/Typescript.svg"
import viteIcon from "../../assets/stacks/Vite-Light.svg"
import vueIcon from "../../assets/stacks/VueJS-Light.svg"

interface Stack {
  name: string
  icon: string
}

const Stacks: React.FC = () => {
  const languageStacks: Stack[] = [
    { name: "HTML", icon: htmlIcom },
    { name: "CSS", icon: cssIcon },
    { name: "Javascript", icon: javascriptIcon },
    { name: "Typescript", icon: typescriptIcon },
    { name: "Python", icon: pythonIcon },
  ]

  const libraryFrameWorkStacks: Stack[] = [
    { name: "Vue", icon: vueIcon },
    { name: "React", icon: reactIcom },
    { name: "Redux", icon: reduxIcom },
    { name: "Tailwind CSS", icon: tailwindCssIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Vite", icon: viteIcon },
  ]

  const collaborationStacks: Stack[] = [
    { name: "Git", icon: gitIcon },
    { name: "Github", icon: githubIcon },
    { name: "Gitlab", icon: gitlabIcon },
    { name: "Discord", icon: discordIcon },
    { name: "Figma", icon: figmaIcon },
  ]

  return (
    <div id="stacks-page">
      <h1>기술 스택</h1>
      <div className="stacks">
        <h3>언어</h3>
        <div className="stacks-icons">
          {languageStacks.map((stack, i) => {
            return (
              <div key={i} className="stacks-icon">
                <img src={stack.icon} alt={stack.name} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="stacks">
        <h3>라이브러리 / 프레임워크</h3>
        <div className="stacks-icons">
          {libraryFrameWorkStacks.map((stack, i) => {
            return (
              <div key={i} className="stacks-icon">
                <img src={stack.icon} alt={stack.name} />
              </div>
            )
          })}
        </div>
      </div>

      <div className="stacks">
        <h3>협업 도구</h3>
        <div className="stacks-icons">
          {collaborationStacks.map((stack, i) => {
            return (
              <div key={i} className="stacks-icon">
                <img src={stack.icon} alt={stack.name} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Stacks
