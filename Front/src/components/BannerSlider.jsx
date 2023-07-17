import React, { useRef } from "react";
import styled from "styled-components";
import { imageCarrousel } from "../utils/Constant";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BTNHover } from "../utils/ComponentsStyle";

export const BannerSlider = () => {
  const slideShow = useRef(null);

  console.log(slideShow.current);
  const handleNext = () => {
    if (slideShow.current.children.length > 0) {
      const primerElemento = slideShow.current.children[0];
      console.log(primerElemento);
      slideShow.current.style.transition = "500ms ease-out all";
      const tamañoSlide = slideShow.current.children[0].offsetWidth;
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;
      const transicion = () => {
        slideShow.current.transition = "none";
        slideShow.current.transform = "traslateX(0)";
        slideShow.current.appendChild(primerElemento);
        slideShow.current.removeEventListener("transitionend", transicion);
      };
      slideShow.addEventListener("transitionend", transicion);
    }
  };

  const handlePrev = () => {
    console.log("Prev");
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
          height: 100%;
          vertical-align: top;
          object-fit: cover;
        }
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
