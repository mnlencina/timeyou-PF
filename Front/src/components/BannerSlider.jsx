import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { imageCarrousel } from "../utils/Constant";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BTNHover } from "../utils/ComponentsStyle";

export const BannerSlider = () => {
  const slideShow = useRef(null);
  const timerRef = useRef(null);

  console.log(slideShow.current);
  const handleNext = () => {
    resetTimer();
    if (slideShow.current.children.length > 0) {
      const primerElemento = slideShow.current.children[0];

      slideShow.current.style.transition = "500ms ease-out all";

      const tamañoSlide = slideShow.current.children[0].offsetWidth;

      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        slideShow.current.style.transition = "none";
        slideShow.current.style.transform = "translateX(0)";
        slideShow.current.appendChild(primerElemento);
        slideShow.current.removeEventListener("transitionend", transicion);
      };
      slideShow.current.addEventListener("transitionend", transicion);
    }
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      handleNext();
    }, 4000);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    startTimer();
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    resetTimer();
    if (slideShow.current.children.length > 0) {
      const index = slideShow.current.children.length - 1;
      const ultimoElemento = slideShow.current.children[index];
      slideShow.current.insertBefore(
        ultimoElemento,
        slideShow.current.firstChild
      );

      slideShow.current.style.transition = "none";
      const tamañoSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideShow.current.style.transition = "500ms ease-out all";
        slideShow.current.style.transform = "translateX(0)";
      }, 30);
    }
  };

  return (
    <Container>
      <div className="container-slide" ref={slideShow}>
        {imageCarrousel.map((item, index) => (
          <div key={index} className="slide">
            <Link to={"/"}>
              <img src={item} alt={item} />
            </Link>
          </div>
        ))}
      </div>
      <div className="controles">
        <BTNHover onClick={handlePrev}>
          <AiOutlineLeft />
        </BTNHover>
        <BTNHover onClick={handleNext}>
          <AiOutlineRight />
        </BTNHover>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .container-slide {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    .slide {
      min-width: 100%;
      min-height: 100%;
      z-index: 10;
      img {
        width: 100%;
        min-height: 200px;
        height: 100%;
        vertical-align: top;
        
      }
    }
  }

  .controles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 20;
  }
`;
