import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../redux/Actions";
import { useDispatch } from "react-redux";

function RegisterAndLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inModeLogin, setInModeLogin] = useState(false);
  const handleInMode = () => {
    setInModeLogin(!inModeLogin);
  };
  const [registerValues, setRegisterValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [loginAcount, setLoginAcount] = useState({
    email: "",
    password: "",
    provider: "local",
  });

  const handleClickTransition = () => {
    // Mostrar el div "transition" cuando se hace clic en el botón
    toogle.current.style.display = "block";
  };

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
    e.preventDefault();
    dispatch(loginUser(loginAcount));
    navigate("/");
  };

  const renderRegister = () => (
    <ContainerRegister>
      <h1>registrarse</h1>
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

  const renderLogin = () => (
    <ContainerLogin>
      <h1>Iniciar sesion</h1>
      <div className="login-container">
        <form action="GET" onSubmit={handleSubmitLogin} className="login">
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
  return (
    <Container>
      {renderRegister()}
      <button style={{zIndex:300}} onClick={handleInMode}>click</button>
      <TransitionDiv inModeLogin={inModeLogin}/>
      {renderLogin()}
    </Container>
  );
}

export default RegisterAndLogin;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ContainerRegister = styled.main`
  width: 50%;
  height: 100%;
  h1 {
    width:100%;
    text-align: center;
    margin-top:60px;
    text-transform: uppercase;
  }
  .register-container {
    width: 100%;
    height: 100%;
    display: flex;
    .register {
      position: absolute;
      top: 150px;
      left: 150px;
      width: 350px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    }
  }
`;

const ContainerLogin = styled.div`
  width: 50%;
  height: 100%;
  h1 {
    width:100%;
    text-align: center;
    margin-top:60px;
    text-transform: uppercase;
  }
  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    .login {
      position: absolute;
      top: 150px;
      right: 150px;
      width: 350px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 30px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
    }
  }
`;

const TransitionDiv = styled.div`
  width: 1500px;
  height: 1500px;
  position: absolute;
  top:-700px;
  left:-800px;
  background-color: #111 ;
  backdrop-filter: blur(5px);
  border-radius:50%;
  transform:${(props)=>props.inModeLogin?"translateX(calc(107vw))":"translateX(0)"} ;
  transition: all 2s ease-in-out;
  z-index: 10;
`