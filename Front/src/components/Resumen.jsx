import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Resumen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // const cart = useSelector((state) => state.cart);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  // useEffect(() => {}, []);

  return (
    <Container>
      <h1>
        ¡Hola {user.userName}! ¡Gracias por habernos elegido para tu compra!
        Esperamos que la disfrutes. ¡Tu satisfacción es nuestra prioridad
      </h1>
      <button onClick={handleClick}>Ir al Catalogo</button>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    text-align: center;
  }
  button {
    width: 200px;
    height: 40px;
    margin-bottom: 15px;
    margin-left: 200px;
    cursor: pointer;
    border-radius: 8px;
    text-align: center;
    text-align: center;
    padding: 10px 20px;
    font-weight: bold;
  }
`;

export default Resumen;
