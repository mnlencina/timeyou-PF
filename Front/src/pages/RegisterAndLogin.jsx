import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { createUser, loginUser } from "../redux/Actions";
import { useDispatch } from "react-redux";

function RegisterAndLogin() {
  const dispatch = useDispatch();
  const [registerValues, setRegisterValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [loginAcount, setLoginAcount] = useState({
    email: "",
    password: "",
  });

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterValues({
      ...registerValues,
      [name]: value,
    });
    if (name === "password") {
      const valueForm = value.toString();
      setRegisterValues({
        ...registerValues,
        [name]: valueForm,
      });
    }
  };
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    dispatch(createUser(registerValues));
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginAcount({
      ...loginAcount,
      [name]: value,
    });
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault;
    dispatch(loginUser(loginAcount))
  };

  const renderRegister = () => (
    <ContainerRegister>
      <div className="register-container">
        <form
          action="POST"
          onSubmit={handleSubmitRegister}
          className="register"
        >
          <span>Nombre de Usuario:</span>
          <input
            type="text"
            name="userName"
            value={registerValues.userName}
            onChange={handleChangeRegister}
            placeholder="ingrese su nombre completo..."
          />
          <span>Email:</span>
          <input
            type="email"
            placeholder=" ingrese su email..."
            name="email"
            value={registerValues.email}
            onChange={handleChangeRegister}
          />
          <span>Contraseña:</span>
          <input
            type="password"
            placeholder="ingrese una contraseña"
            name="password"
            value={registerValues.password}
            onChange={handleChangeRegister}
          />
          <button> enviar</button>
        </form>
      </div>
    </ContainerRegister>
  );

  return (
    <ContainerLogin>
      <div className="login-container">
        <form action="GET" className="login">
          <span>email:</span>
          <input
            type="text"
            name="email"
            value={loginAcount.email}
            onChange={handleChangeLogin}
          />
          <span>Password:</span>
          <input
            type="password"
            name="password"
            value={loginAcount.password}
            onChange={handleChangeLogin}
          />
          <button>Login</button>
        </form>
      </div>
    </ContainerLogin>
  );
}

export default RegisterAndLogin;

const ContainerRegister = styled.main`
  width: 100vw;
  min-height: 400px;
  height: 100vh;
  .login-container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login {
      background-color: red;
      width: 350px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

const ContainerLogin = styled.div`
  width: 100vw;
  min-height: 400px;
  height: 100vh;
  .login-container {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login {
      background-color: red;
      width: 350px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
