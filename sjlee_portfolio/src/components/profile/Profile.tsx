import "./Profile.css";
import React, { useState, JSX, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import PersonalInfo from "./details/PersonalInfo.tsx";
import EducationInfo from "./details/EducationInfo.tsx";
import Awards from "./details/Awards.tsx";

import profileImg from "../../assets/profiles/profile_img.jpg";
import leftIcon from "../../assets/icons/arrow-left-s-line.png";
import rightIcon from "../../assets/icons/arrow-right-s-line.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Profile: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const components: JSX.Element[] = [
    <PersonalInfo />,
    <EducationInfo />,
    <Awards />,
  ];

  useEffect(() => {
    let scrollTrigger: ScrollTrigger;

    if (containerRef.current && swiperRef.current) {
      scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (swiperRef.current && swiperRef.current.swiper) {
            const progress = self.progress;
            const totalSlides = swiperRef.current.swiper.slides.length;
            const targetIndex = Math.floor(progress * totalSlides);

            if (targetIndex !== swiperRef.current.swiper.activeIndex) {
              swiperRef.current.swiper.slideTo(targetIndex, 300);
            }

            setIsScrollLocked(progress > 0 && progress < 1);
          }
        },
        pin: true,
        pinSpacing: false,
      });
    }

    return () => {
      if (scrollTrigger) scrollTrigger.kill();
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrollLocked) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isScrollLocked]);

  return (
    <div id="profile-page" ref={containerRef}>
      <h1>About Me</h1>
      <div className="profile-container">
        <div className="profile-image-container">
          <img src={profileImg} alt="img" />
        </div>

        <div className="profile-details">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Mousewheel]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            speed={300}
            loop={false}
            allowTouchMove={false}
          >
            {components.map((component, index) => (
              <SwiperSlide key={index}>{component}</SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev">
            {/* <img className="btn-icon" src={leftIcon} alt="<" /> */}
          </div>
          <div className="swiper-button-next">
            {/* <img className="btn-icon" src={rightIcon} alt=">" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
