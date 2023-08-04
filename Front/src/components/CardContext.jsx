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
          <Card key={e.id} watch={e}/>
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
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items:start;
    justify-items:center;
    gap: 10px;
    
  }

`;
