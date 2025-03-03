import "./Home.css"

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Introduction from "../components/introduction/Introduction.tsx"
import Profile from "../components/profile/Profile.tsx"
import Stacks from "../components/stacks/Stacks.tsx"
import Projects from "../components/projects/Projects.tsx"

gsap.registerPlugin(ScrollTrigger)

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const sections = document.querySelectorAll(".section")

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      )
    })

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1), // 스냅 간격 유지,
          duration: 1,
          ease: "power2.inOut",
        },
      },
    })
  }, [])

  return (
    <div ref={containerRef} className="home-container">
      <section className="section">
        <Introduction />
      </section>
      <section className="section">
        <Profile />
      </section>
      <section className="section">
        <Stacks />
      </section>
      <section className="section">
        <Projects />
      </section>
    </div>
  )
}

export default Home
