import "./Projects.css"

import React, { useState } from "react"

import leftIcon from "../../assets/icons/arrow-left-s-line.png"
import rightIcon from "../../assets/icons/arrow-right-s-line.png"

interface CaurouselItem {
  type: string
  src: string
}

const ProjectCarousel: React.FC<{ videoUrl: string; imgSrc: string[] }> = ({ videoUrl, imgSrc }) => {
  const [index, setIndex] = useState<number>(0)

  const carouselItems: CaurouselItem[] = [
    {
      type: "video",
      src: videoUrl,
    },
    ...imgSrc.map((content) => {
      return {
        type: "image",
        src: content,
      }
    }),
  ]

  function handleClickLeft(): void {
    setIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length)
  }

  function handleClickRight(): void {
    setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
  }

  return (
    <div className="project-carousel-container">
      <button className={index === 0 ? "project-carousel-btn-disabled" : "project-carousel-btn-left"} onClick={handleClickLeft} disabled={index === 0}>
        <img className="btn-icon" src={leftIcon} alt="<" />
      </button>
      <div className="project-carousel">
        <div className="project-carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {carouselItems.map((item: CaurouselItem, i) => (
            <div key={i} className="project-carousel-item">
              {item.type === "video" && (
                <iframe
                  width="100%"
                  height="100%"
                  src={item.src}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              )}
              {item.type === "image" && <img src={item.src} alt={item.src} />}
            </div>
          ))}
        </div>
      </div>
      <button className={index === carouselItems.length - 1 ? "project-carousel-btn-disabled" : "project-carousel-btn-right"} onClick={handleClickRight} disabled={index === carouselItems.length - 1}>
        <img className="btn-icon" src={rightIcon} alt=">" />
      </button>
    </div>
  )
}

export default ProjectCarousel
