import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { imageCarrousel } from "../../utils/Constant";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BTNHover } from "../../utils/ComponentsStyle";
import { Container } from "./Style";

export const BannerSlider = () => {
  const slideShow = useRef(null);
  const timerRef = useRef(null);

 
  const handleNext = () => {
    resetTimer();
    if (slideShow.current.children.length > 0) {
      const primerElemento = slideShow.current.children[0];

      slideShow.current.style.transition = "2000ms ease-out all";

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
    }, 6000);
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
        slideShow.current.style.transition = "2000ms ease-out all";
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
        <BTNHover onClick={handlePrev} alter="false">
          <AiOutlineLeft />
        </BTNHover>
        <BTNHover onClick={handleNext} alter="false">
          <AiOutlineRight />
        </BTNHover>
      </div>
    </Container>
  );
};
