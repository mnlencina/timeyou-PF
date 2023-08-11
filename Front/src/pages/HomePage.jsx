import { useState } from "react";
import styled from "styled-components";
import {
  CardContext,
  Drawer,
  Pagination,
} from "../components/index.js";
import { useSelector } from "react-redux";
import { Loader } from "../components/Loader/Loader.jsx";
import { ContainerLoader } from "../utils/ComponentsStyle.jsx";
import { useNavigate } from "react-router-dom";



export default function HomePage() {
  
  const navigate = useNavigate();
  
  const user = useSelector((state)=> state.user)
  const { Clocks, allClocks, searchActive } = useSelector((state) => state);
  const whatches = searchActive ? Clocks : allClocks;
  
  const watchDel1 = whatches.filter(watch => watch.stock > 0);
  const watchDel = watchDel1.filter(watch => watch.del === false);

  const loading = useSelector((state) => state.isLoading);

  const [show, setShow] = useState(false);

  //const showOpen = show.toString();

  //funciones de paginacion
  const [page, setPage] = useState(1);
  const itemPerPage = 12;
  const totalPages = Math.ceil(watchDel && (watchDel.length / itemPerPage)) 

  const paginacion = () => {
    const startIndex = (page - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    if (watchDel && watchDel.length) return watchDel.slice(startIndex, endIndex);
  };

  const PaginacionRelojes = paginacion()

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
    <ContainerMostrador show={show}>
      <div className="sidebar">
        <div className="btn-filter">
          <button onClick={() => setShow(!show)}>filtros</button>
        </div>
         <Drawer show={show} setPage={setPage} />
      </div>
      <section className="main-card">
        <CardContext pagination={PaginacionRelojes} show={show} />
      </section>
    </ContainerMostrador>
  );

  const renderLoader = () => (
    <ContainerLoader>
      <Loader />
    </ContainerLoader>
  );
  
  if (user.del) {
    navigate("/home/loginout")   
  }

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
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .sidebar {
    width: ${(props) => (props.show ? "300px" : "0")};
    height: ${props => props.show ? "1800px":"1100px"};
    background-color: #111;
    transition: 0.5s ease-in-out;
    position: relative;
    border-radius: 0 10px 10px 0;
    display: flex;
    .btn-filter {
      position: absolute;
      left: ${(props) => (props.show ? "300px" : "0px")};
      top: 30px;
      transition: all 0.5s ease-in-out;
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
    width:${(props) => (props.show ? "calc(100% - 300px)" : "100%")};
    min-height: 500px;
    height: 100%;
    transition: all 0.5s ease-in-out;
    display: grid;
    place-content: center;
  }
`;
