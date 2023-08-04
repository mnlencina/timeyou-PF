import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Card } from "./Card";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { BTNHover } from "../utils/ComponentsStyle";

export const CardSlider = () => {
  const watches = useSelector((state) => state.Clocks);

  const numWatches = 90;
  const cardsPerPage = 4;
  const maxPages = Math.ceil(numWatches / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % maxPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + maxPages) % maxPages);
  };

  // Calcular el índice inicial para el grupo actual de tarjetas
  const startIndex = currentPage * cardsPerPage;
  // Obtener las tarjetas para mostrar en la página actual
  const cardsToShow = watches.slice(startIndex, startIndex + cardsPerPage);

  return (
    <Container>
      <div className="bodyContainer">
        <div className="bodyCard">
          <div className="controles">
            <BTNHover alter="true" onClick={handlePrev}>
              <AiOutlineLeft />
            </BTNHover>
            <BTNHover alter="true" onClick={handleNext}>
              <AiOutlineRight />
            </BTNHover>
          </div>
          {/* Mostrar las tarjetas para la página actual */}
          {cardsToShow.map((watch) => (
            <Card key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 400px;
  position: relative;
  margin: 0 auto;
  margin-bottom: 50px;
  margin-top: 50px;
  .bodyContainer {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    .bodyCard {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 15px;
      border-radius: 20px;
      position: relative;
      transition: 0.5s ease-in-out;
      .controles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 10;
        pointer-events: all;
      }
      .controles :hover{
        cursor: pointer;
      }
    }
  }
`;


