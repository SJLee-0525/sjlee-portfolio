import "./Profile.css"

import React, { useState, JSX } from "react"

import PersonalInfo from "./details/PersonalInfo.tsx"
import EducationInfo from "./details/EducationInfo.tsx"
import Awards from "./details/Awards.tsx"

import profileImg from "../../assets/profiles/profile_img.jpg"

import leftIcon from "../../assets/icons/arrow-left-s-line.png"
import rightIcon from "../../assets/icons/arrow-right-s-line.png"

const Profile: React.FC = () => {
  const [index, setIndex] = useState<number>(0)

  const components: JSX.Element[] = [<PersonalInfo />, <EducationInfo />, <Awards />]

  function handleClickLeft(): void {
    setIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length)
  }

  function handleClickRight(): void {
    setIndex((prevIndex) => (prevIndex + 1) % components.length)
  }

  return (
    <div id="profile-page">
      <h1>About Me</h1>
      <div className="profile-container">
        <div className="profile-image-container">
          <img src={profileImg} alt="img" />
        </div>

        <div className="profile-details">
          <button className={index === 0 ? "carousel-btn-disabled" : "carousel-btn-left"} onClick={handleClickLeft} disabled={index === 0}>
            <img className="btn-icon" src={leftIcon} alt="<" />
          </button>
          <div className="carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {components.map((component, i) => (
                <div key={i} className="carousel-item">
                  {component}
                </div>
              ))}
            </div>
          </div>
          <button className={index === components.length - 1 ? "carousel-btn-disabled" : "carousel-btn-right"} onClick={handleClickRight} disabled={index === components.length - 1}>
            <img className="btn-icon" src={rightIcon} alt=">" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
