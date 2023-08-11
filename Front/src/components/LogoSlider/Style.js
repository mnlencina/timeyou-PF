import styled from 'styled-components'

 export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .containerHider {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100%;
    overflow: hidden;
  }
  .container-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    margin: auto;
    gap: 43px;
    .slide {
      margin: auto;
    }
  }
`;

