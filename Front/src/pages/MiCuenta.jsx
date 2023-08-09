import React, { useState } from "react";
import { styled } from "styled-components";
import {useDispatch, useSelector} from 'react-redux';
import { updateUser } from "../redux/actions/admin/updateUser";
import { BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { updateUserName } from "../redux/actions/user/updateUserName";

export default function MiCuenta() {
const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [ userName, setUserName ] = useState(user.userName);

  // updateUser(user.id, input)
  const newUser = async () => {
    // const valor = document.getElementById('newUserName').value;
    await dispatch(updateUser(user.id, {userName: userName}));
    await dispatch(updateUserName(userName));
    alert('Nombre de usuario actualizado!');
  }

  const handleChange = (e) => {
    const { value } = e.target;
    if(value === ''){
      setUserName(user.userName)
    } else setUserName(value);
  }

  return (
    <Container>
      <div className="caja">
        <div className="agrupe">
        <div className="titulos">Mi usuario</div>
        <div className="datos">{user?.userName}</div>
        <div className="titulos">Email</div>
        <div className="datos">{user?.email}</div>
        <div className="titulos">Cambiar nombre de Usuario</div>
        <input type="text" id="newUserName" onChange={handleChange}></input>
        <div className="btn">
        <BTNCarritoDeCompras onClick={newUser}>Actualizar</BTNCarritoDeCompras>
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
        font-size: 16px;
    }
    .datos {
        width: 98%;
        height: 30px;
        padding: 0px 15px;
        border: 1px solid black;
        border-radius: 20px;
        margin-bottom: 20px;
        font-size: 16px;
    }
    input {
        width: 98%;
        height: 30px;
        border: 1px solid black;
        border-radius: 20px;
        margin-bottom: 20px;
        font-size: 16px;
        padding: 0 15px;
    }
    .btn {
      width: 40%;
    }
`;