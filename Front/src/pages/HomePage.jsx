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
import { Loader } from "../components/Loader/Loader.jsx";
import { ContainerLoader } from "../utils/ComponentsStyle.jsx";

export default function HomePage() {

  const { Clocks, allClocks, searchActive } = useSelector((state) => state);
  const whatches = searchActive ?  Clocks : allClocks;

  const loading = useSelector((state) => state.isLoading);


  const [show, setShow] = useState(false);
  
  //const showOpen = show.toString();

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

  const onNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const onPreviusPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const renderMostrador = () => (
    <ContainerMostrador show={show.toString()}>
      <div className="sidebar">
        <div className="btn-filter">
          <button onClick={() => setShow(!show)}>filtros</button>
        </div>
        <Drawer show={show.toString()} setPage={setPage} />
      </div>
      <section className="main-card">
        <CardContext pagination={PaginacionRelojes} />
      </section>
    </ContainerMostrador>
  );

  const renderLoader = () => (
    <ContainerLoader>
      <Loader />
    </ContainerLoader>
  );

  return (
    <>
      {loading ? (
        renderLoader()
      ) : (
        <>
          <Pagination
            totalPages={totalPages}
            page={page}
            onPrev={onPreviusPage}
            onNext={onNextPage}
          />
          {renderMostrador()}
          <Pagination
            totalPages={totalPages}
            page={page}
            onPrev={onPreviusPage}
            onNext={onNextPage}
          />
        </>
      )}
    </>
  );
}

const ContainerMostrador = styled.div`
    width: 100%;
    min-height: 180vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  .sidebar {
    width: ${(props) => (props.show === "true" ? "200px" : "0")};
    height: 100%;
    background: #111;
    transition: all 0.3s ease-in-out;
    position: relative;
    border-radius: 0 10px 10px 0;
    display: flex;
    transition: 1s;
    margin-left: 0px;
    .btn-filter {
      position: absolute;
      right: ${(props) => (props.show === "true" ? "-199px" : "0px")};
      top: 30px;
      transition: all 0.3s ease-in-out;
      position: relative;
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
