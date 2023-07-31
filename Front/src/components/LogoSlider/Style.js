import styled from 'styled-components'

 export const Container = styled.div`
  width: 85%;
  height: 100%;
  position: relative;
  margin: auto;
  z-index: 950;
  .container-slide {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    margin: auto;
    z-index: 950;
    .slide {
      min-width: 10%;
      min-height: 100%;
      z-index: 30;
      margin: auto;
      z-index: 950;
      img {
        width: 100%;
        min-height: 20px;
        height: 100%;
        vertical-align: top;
        z-index: 950;
      }
    }
  }
  .controles {
    position: absolute;
    top: 0;
    left: -65px;
    width: 110%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: -1;
  }
  .controles :hover{
    cursor: pointer;
    z-index: -1;
  }
`;
