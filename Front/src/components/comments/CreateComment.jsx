import styled from 'styled-components';
//import { FaStar } from 'react-icons/fa';


const CreateComment = () => {

return (
  <Container>
    <h2>Califica tu compra</h2>
    <Formulario>
      <Container1>
        <div className="optionDiv">
          <button type="button" onClick={()=>{console.log("Holaaaa")}}>Enviar</button>
        </div>
      </Container1>
    </Formulario>
  </Container>
)
 }

export default CreateComment

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    
  h2 {
    margin: 10px;
  }
`;

const Formulario = styled.main`  
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;
  margin: 20px;
  
  select {
    width: 175px;
  }
  
  input {
    width: 175px;
  }
`;

const Container1 = styled.main`
  .funcionesDiv{
    width: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    
    span{
      margin: 2px;
      display: flex;
      align-items: center;
      cursor: pointer;
      background-color: #001aff55;
      border-radius: 5px;
      padding: 2px;
    }
  }
  .optionDiv{
    margin: 5px 5px 5px 0;
  }
  button {
    cursor: pointer;
  }
`;

