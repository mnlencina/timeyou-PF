import styled from 'styled-components'

 export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  left: 0.5vw;
  margin: auto;
  .containerHider {
  width: 80%;
  height: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
  }
  .container-slide {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    margin: auto;
    gap: 21px;
    .slide {
      min-height: 100%;
      margin: auto;
    }
  }
  .controles {
    position: absolute;
    top: 0;
    left: 4.5vw;
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index:-1;
    pointer-events: none;
  }
  .controles :hover {
    cursor: pointer;
  }
`;

