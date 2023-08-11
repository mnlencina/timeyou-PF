import { useState } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions/admin/updateUser";
import { AppendBTN, BTNCarritoDeCompras } from "../utils/ComponentsStyle";
import { updateUserName } from "../redux/actions/user/updateUserName";
import { validateInputNewPass } from "../utils/functiosAux";
import Swal from 'sweetalert2';

export default function MiCuenta() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [editUser, setEditUser] = useState(false);
  const [editPass, setEditPass] = useState(false);
  const [inputSubmited, setInputSubmited] = useState(false);
  const [errorInput, setErrorInput] = useState({});

  const newUser = async () => {
    if (userName === "" && editUser === true) {
      setInputSubmited(true);
      setErrorInput(validateInputNewPass(""));
    } else {
      await dispatch(updateUser(user.id, { userName: userName }));
      await dispatch(updateUserName(userName));
      setEditUser(false);
      setUserName("");
      setErrorInput({});
      Swal.fire({
        icon: 'success',
        title: 'Nombre de usuario actualizado!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  const newPass = () => {
    if (password === "" && editPass === true) {
      setInputSubmited(true);
      setErrorInput(validateInputNewPass(""));
    } else {
      dispatch(updateUser(user.id, { password: password }));
      setEditPass(false);
      setPassword("");
      setErrorInput({});
      Swal.fire({
        icon: 'success',
        title: 'Contraseña nueva creada!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  const reset = () => {
    setEditUser(false);
    setEditPass(false);
    setPassword("");
    setUserName("");
    setInputSubmited(false);
    setErrorInput({});
  };

  const handleChangeUser = (e) => {
    const { value } = e.target;
    setInputSubmited(true);
    setErrorInput(validateInputNewPass(value));
    // if (Object.keys(errorInput).length > 0) {
    // }
    if (value === "") {
      setUserName(user.userName);
    } else setUserName(value);
  };

  const handleChangePass = (e) => {
    const { value } = e.target;
    setInputSubmited(true);
    setErrorInput(validateInputNewPass(value));
    // if (Object.keys(errorInput).length > 0) {
    // }
    setPassword(value);
  };

  return (
    <Container>
      <div className="caja">
        <div className="agrupe">
          <div className="titulos">Mi usuario</div>
          <div className="datos">{user?.userName}</div>
        </div>
        <div className="agrupe">
          <div className="titulos">Email</div>
          <div className="datos">{user?.email}</div>
        </div>
        {!editUser && !editPass && (
          <div className="botones">
            <BTNCarritoDeCompras onClick={() => setEditUser(true)}>
              Cambiar Nombre
            </BTNCarritoDeCompras>
            <BTNCarritoDeCompras onClick={() => setEditPass(true)}>
              Cambiar Contraseña
            </BTNCarritoDeCompras>
          </div>
        )}
        {editUser && (
          <div>
            <div className="reset">
              <AppendBTN alter="true" onClick={reset}>
                {"X"}
              </AppendBTN>
            </div>
            <div className="titulos">Nuevo nombre de Usuario</div>
            <input type="text" maxLength={11} onChange={handleChangeUser} />
            {inputSubmited && errorInput.e3 && (
              <ContainerError>
                <p>{errorInput.e3}</p>
              </ContainerError>
            )}
            {inputSubmited && errorInput.e2 && (
              <ContainerError>
                <p>{errorInput.e2}</p>
              </ContainerError>
            )}
            {inputSubmited && errorInput.e1 && (
              <ContainerError>
                <p>{errorInput.e1}</p>
              </ContainerError>
            )}
            <div className="btn">
              <BTNCarritoDeCompras onClick={newUser}>
                Actualizar
              </BTNCarritoDeCompras>
            </div>
          </div>
        )}
        {editPass && (
          <div>
            <div className="reset">
              <AppendBTN alter="true" onClick={reset}>
                {"X"}
              </AppendBTN>
            </div>
            <div className="titulos">Nueva Contraseña</div>
            <input type="text" maxLength={11} onChange={handleChangePass} />
            {inputSubmited && errorInput.e3 && (
              <ContainerError>
                <p>{errorInput.e3}</p>
              </ContainerError>
            )}
            {inputSubmited && errorInput.e4 && (
              <ContainerError>
                <p>{errorInput.e4}</p>
              </ContainerError>
            )}
            {inputSubmited && errorInput.e2 && (
              <ContainerError>
                <p>{errorInput.e2}</p>
              </ContainerError>
            )}
            {inputSubmited && errorInput.e1 && (
              <ContainerError>
                <p>{errorInput.e1}</p>
              </ContainerError>
            )}
            <div className="btn">
              <BTNCarritoDeCompras onClick={newPass}>
                Actualizar
              </BTNCarritoDeCompras>
            </div>
          </div>
        )}
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
  .caja {
    width: 30%;
    height: 435px;
    border: 1px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    .agrupe {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      margin: 30px auto;
      .titulos {
        display: flex;
        font-size: 16px;
      }
      .datos {
        display: flex;
        align-items: center;
        margin: 2px 4px;
        width: 98%;
        height: 30px;
        padding: 0px 15px;
        border: 1px solid black;
        border-radius: 20px;
        font-size: 16px;
      }
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
    .botones {
      width: 80%;
      height: 20%;
      gap: 10px;
      display: flex;
      margin: 100px auto;
    }
    .btn {
      font-size: 16px;
    }
    .reset {
      display: flex;
      align-items: center;
      justify-content: end;
    }
  }
`;

const ContainerError = styled.div`
  position: absolute;
  z-index: 10;
  background-color: #fff;
  width: 235px;
  height: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  &::before {
    content: "";
    position: absolute;
    top: -18px;
    left: 20px;
    width: 20px;
    height: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 12px solid #fff;
  }
  p {
    width: 90%;
    height: 100%;
    display: flex;
    place-content: center;
    color: red;
    opacity: 0.6;
  }
`;
