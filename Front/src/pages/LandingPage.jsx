import React, { useState } from "react";
import styled from "styled-components";
import {
  CardContext,
  Drawer,
  BannerSlider,
  Pagination,
  CardSlider,
} from "../components/index.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function LandingPage() {

    const { Clocks, searchClocks, searchActive } = useSelector((state) => state);
  const whatches = searchActive ? searchClocks : Clocks;

  const [show, setShow] = useState(false);
  const showOpen = show.toString();

  //funciones de paginacion
  const [page, setPage] = useState(1);
  const itemPerPage = 12;
  const totalPages = Math.ceil(whatches.length / itemPerPage);

  const paginacion = () => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    if (whatches.length) return whatches.slice(startIndex, endIndex);
  };

  const PaginacionRelojes = paginacion();

//   const onNextPage = () => {
//     if (page < totalPages) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   };

//   const onPreviusPage = () => {
//     if (page > 1) {
//       setPage((prevPage) => prevPage - 1);
//     }
//   };

  const slideContainer = () => (
    <ContainerSlide>
      <div className="slide-container">
        <BannerSlider />
      </div>
    </ContainerSlide>
  );

  const renderMostrador = () => (
    <ContainerMostrador show={show.toString()}>
      <div className="sidebar">
        <div className="btn-filter">
          <button onClick={() => setShow(!show)}>filtros</button>
        </div>
        <Drawer show={show} />
      </div>
      <section className="main-card">
        <CardContext pagination={PaginacionRelojes} />
      </section>
    </ContainerMostrador>
  );


  return (
    <>
      {slideContainer()}
       {/* <Link to={'/home'}>
        <button className="Explore">
            Explore
        </button>
       </Link> */}
      <CardSlider />
    </>
  );
}

const Explore = styled.section`

`;

const ContainerSlide = styled.section`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .slide-container {
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
  }
`;
const ContainerMostrador = styled.div`
  width: 100%;
  min-height: 500px;
  height: 180vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .sidebar {
    width: ${(props) => (props.show === "true" ? "200px" : "0")};
    height: 100%;
    background: #111;
    transition: all 0.3s ease-in-out;
    position: relative;
    border-radius: 0 10px 10px 0;
    .btn-filter {
      position: absolute;
      left: ${(props) => (props.show === "true" ? "200px" : "0px")};
      top: 30px;
      transition: all 0.3s ease-in-out;
      button {
        width: 40px;
        height: 150px;
        background-color: #111;
        border: none;
        border-radius: 0 10px 10px 0;
        color: #fff;
        writing-mode: vertical-lr;
        text-transform: uppercase;
        letter-spacing: 3px;

        transition: 0.3s;
        &:hover {
          transform: scale(1.1);
          border-right: none;
        }
      }
    }
  }
  .main-card {
    width: ${(props) =>
      props.show === "true" ? "calc(100% - 200px)" : "100%"};
    min-height: 500px;
    height: 100%;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    height: 1600px;
  }
  @media (max-width: 500px) {
    height: 2400px;
  }
`;