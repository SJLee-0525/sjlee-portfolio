import "./Home.css";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Introduction from "../components/introduction/Introduction.tsx";
import Profile from "../components/profile/Profile.tsx";
import Stacks from "../components/stacks/Stacks.tsx";
import Projects from "../components/projects/Projects.tsx";

gsap.registerPlugin(ScrollTrigger);

const components = [Introduction, Profile, Stacks, Projects];

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // ScrollTrigger.refresh();

    sectionRefs.current.forEach((section) => {
      if (!section) return;

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
            start: "top 25%",
            end: "bottom 75%",
            toggleActions: "play none none reverse",
            once: true,
          },
        }
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="home-container">
      {components.map((Component, index) => (
        <section
          key={index}
          className="section"
          ref={(el) => {
            sectionRefs.current[index] = el;
          }}
        >
          <Component />
        </section>
      ))}
    </div>
  );
};

export default Home;
