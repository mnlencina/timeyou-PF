import { useDispatch} from "react-redux";
import { useNavigate} from "react-router-dom";
import { BTNCarritoDeCompras } from "../../utils/ComponentsStyle";
import {Container} from "./style"
import { clearCart, logOut } from "../../redux/Actions";


const LoginDelUser = ({user}) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    const handleClick = () => {
      dispatch(clearCart())
      dispatch(logOut())
      navigate("/contacto");
  };

  return (
    <Container>
      <div className="divResumen">
        <h1>          ¡Hola {user.userName}!         </h1>
        <h1>Tu cuenta registrada con {user.email}</h1>
        <h1>ha sido deshabilitada por politicas de nuestro sitio,</h1>
        <h1>para habilitarla y acceder a nuestros productos...</h1>
        <h1>¡Te invitamos a que te contactes con nosotros!</h1>
        
        <BTNCarritoDeCompras onClick={handleClick}>Contacto</BTNCarritoDeCompras>
      </div>
    </Container>
  );
};

export default LoginDelUser