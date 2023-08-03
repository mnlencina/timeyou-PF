import styled from 'styled-components'

 export const Container = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  margin: auto;
  z-index: 950;
  overflow: hidden;
  .container-slide {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    margin: auto;
    z-index: 950;
    gap: 1px;
    .slide {
      width: 10
      
      /* min-width: 10%;
      min-height: 100%;
      z-index: 30;
      margin: auto;
      z-index: 950; */
      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        z-index: 950;
        width: 100%;
      }
    }
  }
  .controles {
    position: absolute;
    top: 0;
    left: -85px;
    width: 115%;
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
