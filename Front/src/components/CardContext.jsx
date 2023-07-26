// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Card } from "../components/index.js";
import styled from "styled-components";
import { getProducts } from "../redux/Actions.js";
import { useDispatch, useSelector } from "react-redux";

export const CardContext = ({pagination}) => {
  const dispatch = useDispatch();
 
  const loading = useSelector(state=> state.isLoading);

  //useEffect(() => {
  //  dispatch(getProducts());
  //}, []);
  return (
    <Container>
      <div className="context-card">
      {
        loading ? (<h1>Cargando...</h1>):(pagination.map(e=>(
          <Card key={e.idProduct} watch={e}/>
        )))
      }
      </div>
    </Container>
  );
};

const Container = styled.section`

  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .context-card {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
   /*  display: flex;
    flex-wrap: wrap; */
    align-items: center;
    justify-items: center;
    
  }
  @media (max-width: 768px) {
    .context-card {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 500px) {
    .context-card {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
