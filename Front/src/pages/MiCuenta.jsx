import React from "react";
import style, { styled } from "styled-components";
import {useSelector} from 'react-redux';
import { updateUser } from "../redux/actions/admin/updateUser";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";

export default function MiCuenta() {

  const user = useSelector((state) => state.user);
  console.log(user.userName);

  return (
    <Container>
      <div className="caja">
        <div className="agrupe">
        <div className="titulos">Mi usuario</div>
        <div className="datos">{user?.userName}</div>
        <div className="titulos">Email</div>
        <div className="datos">{user?.email}</div>
        <div className="titulos">Cambiar nombre de Usuario</div>
        <input type="text" name="newUserName"></input>
        <div className="btn">
        <BTNCarritoDeCompras>Actualizar</BTNCarritoDeCompras>
        </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    /* background-color: rebeccapurple; */
    .caja {
        width: 30%;
        height: 100%;
        border: 1px;
        border-radius: 20px;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .agrupe {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin: 20px auto;
    }
    .titulos {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: start;
        margin-top: 20px;
        font-size: 20px;
    }
    .datos {
        width: 100%;
        height: 30px;
        padding: 0px 15px;
        border: 1px solid black;
        border-radius: 20px;
        margin-bottom: 20px;
        font-size: 16px;
    }
    input {
      width: 100%;
        height: 30px;
        border: 1px solid black;
        border-radius: 20px;
        margin-bottom: 20px;
    }
    .btn {
      width: 40%;
    }
    .prueba {
      display: flex;
      width: 100%;
    }
`;
