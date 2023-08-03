import React, { useRef, useEffect } from "react";
import { imageCarrouselMarcas } from "../../utils/Constant";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BTNHover } from "../../utils/ComponentsStyle";
import { Container } from "./Style";
import { useDispatch } from "react-redux";
import { getWatchesByBrand } from "../../redux/Actions";

export const LogoSlider = () => {
  const slideShow = useRef(null);
  const timerRef = useRef(null);

 
  // const handleNext = () => {
  //   resetTimer();
  //   if (slideShow.current.children.length > 0) {
  //     const primerElemento = slideShow.current.children[0];

  //     slideShow.current.style.transition = "500ms ease-out all";

  //     const tamañoSlide = slideShow.current.children[0].offsetWidth;

  //     slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

  //     const transicion = () => {
  //       slideShow.current.style.transition = "none";
  //       slideShow.current.style.transform = "translateX(0)";
  //       slideShow.current.appendChild(primerElemento);
  //       slideShow.current.removeEventListener("transitionend", transicion);
  //     };
  //     slideShow.current.addEventListener("transitionend", transicion);
  //   }
  // };

  const handleNext = () => {
    resetTimer();
    if (slideShow.current.children.length > 0) {
      const primerElemento = slideShow.current.children[0];
      const clonePrimerElemento = primerElemento.cloneNode(true); // Clonar el primer elemento
  
      
      const tamañoSlide = primerElemento.offsetWidth;
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;
      
      // Ajustar la posición del clon del primer elemento después del último elemento
      slideShow.current.appendChild(clonePrimerElemento);
      slideShow.current.style.transition = "1000ms ease-out all";
      
      const transicion = () => {
        slideShow.current.style.transition = "none";
        slideShow.current.style.transform = "translateX(0)";
        slideShow.current.removeChild(primerElemento); // Eliminar el primer elemento original
        slideShow.current.removeEventListener("transitionend", transicion);
      };
      
      slideShow.current.addEventListener("transitionend", transicion);
    }
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      handleNext();
    }, 3000);
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

  const dispatch = useDispatch();
  const handleLinkClick = async (brand) => {
    const brandLowerCase = brand.toLowerCase();
      await dispatch(getWatchesByBrand(brandLowerCase));
  };


  return (
    <Container>

      <div className="container-slide" ref={slideShow}>
        {imageCarrouselMarcas.map((brand, index ) => (
          <div key={index} className="slide">
            <Link to={"/home"} onClick={() => handleLinkClick(brand.brand)}>
              <img src={brand.url} />
            </Link>
          </div>
        ))}
      </div>

      {/* <div className="controles">
        <BTNHover onClick={handlePrev}>
          <AiOutlineLeft />
        </BTNHover>
        <BTNHover onClick={handleNext}>
          <AiOutlineRight />
        </BTNHover>
      </div> */}
      
    </Container>
  );
};
