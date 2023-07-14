import React from "react";
import {Card} from '../components/index.js'
import styled from "styled-components";

export const CardContext = () => {
  return (
    <Container>
      <div className="context-card">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 90%;
  min-height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .context-card {
    width: 100%;
    height: 100%;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   align-items: center;
   justify-items: center;
  }
  @media (max-width: 768px){
    .context-card{
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 500px){
    .context-card{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
`;
