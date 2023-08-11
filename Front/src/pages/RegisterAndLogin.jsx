import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
/* actions */
import { createUser, loginGoogle, loginUser } from "../redux/Actions";
/* hooks */
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
/* iconos */
import { FaFacebookF } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
/* styled  editing */
import { BTNLogin } from "../utils/ComponentsStyle";
/* funciones de validacion */
import {
  validateInputLogin,
  validateInputRegister,
} from "../utils/functiosAux";
import Swal from 'sweetalert2';

function RegisterAndLogin() {
  const USER = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* Estados locales */
  const [inModeLogin, setInModeLogin] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [registerSubmitted, setRegisterSubmitted] = useState(false);
  const [loginSubmitted, setLoginSubmitted] = useState(false);
  const [errorRegister, setErrorRegister] = useState({});
  const [errorLogin, setErrorLogin] = useState({});
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

  /* Controladores */
  const handleInMode = () => {
    setInModeLogin(!inModeLogin);
    setToggle(false);
  };

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterValues({
      ...registerValues,
      [name]: value,
    });
    setErrorRegister(
      validateInputRegister({
        ...registerValues,
        [name]: value,
      })
    );
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
    setRegisterSubmitted(true);
    if (Object.keys(errorRegister).length > 0) {
      /* Agregar alerta! */
      Swal.fire({
        icon: 'error',
        title: 'No se registraron datos',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    } else {
      dispatch(createUser(registerValues));
      setInModeLogin(!inModeLogin);
    }
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginAcount({
      ...loginAcount,
      [name]: value,
    });
    setErrorLogin(
      validateInputLogin({
        ...loginAcount,
        [name]: value,
      })
    );
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    setLoginSubmitted(true);
    if (Object.keys(errorLogin).length > 0) {
      /* agregar alertas!!!! */
      Swal.fire({
        icon: 'error',
        title: 'Usuario o contraseña incorrectos',
        showConfirmButton: false,
        timer: 1500
      })
      return;
    }
    dispatch(loginUser(loginAcount));
    setLoggedIn(true);
    const redirectPath = new URLSearchParams(location.search).get("redirect");
    if (redirectPath) {
      // Redirige a la pagina donde estaba el usuario previamente
      navigate(redirectPath);
    } else {
      navigate("/auth");
    }
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (USER.role !== "") {
      USER.role === "admin" ? navigate("/admin/dashboard") : navigate("/home");
    }
  }, [USER]);

  /* funciones de google */

  const LoginGoogle = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const dataString = queryParams.get("data");
    const userData = dataString
      ? JSON.parse(decodeURIComponent(dataString))
      : null;
    const confirmation = queryParams.get("confirmation");

    if (userData) {
      dispatch(loginGoogle(userData));
      navigate("/");
    }
  };

  const handleOnClick = async () => {
    // Redireccionar al usuario a la página de inicio de sesión de Google
    window.location.href = "http://localhost:3001/auth/google"; // Reemplaza esta URL con la ruta adecuada de tu servidor para la autenticación de Google
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
          <div className="input-field">
            <AiOutlineUser />
            <input
              type="text"
              name="userName"
              value={registerValues.userName}
              onChange={handleChangeRegister}
              placeholder="ingrese su nombre de usuario..."
              maxLength={20}
            />

            {registerSubmitted && errorRegister.n1 && (
              <ContainerError>
                <p>{errorRegister.n1}</p>
              </ContainerError>
            )}
            {registerSubmitted && errorRegister.n2 && (
              <ContainerError>
                <p>{errorRegister.n2}</p>
              </ContainerError>
            )}
          </div>
          <div className="input-field">
            <AiOutlineMail />
            <input
              type="email"
              placeholder=" ingrese su email..."
              name="email"
              value={registerValues.email}
              onChange={handleChangeRegister}
              maxLength={30}
            />
            {registerSubmitted && errorRegister.e1 && (
              <ContainerError>
                <p>{errorRegister.e1}</p>
              </ContainerError>
            )}
            {registerSubmitted && errorRegister.e2 && (
              <ContainerError>
                <p>{errorRegister.e2}</p>
              </ContainerError>
            )}
          </div>
          <div className="input-field">
            <AiOutlineLock />
            <input
              type={toggle ? "text" : "password"}
              placeholder="ingrese una contraseña..."
              name="password"
              value={registerValues.password}
              onChange={handleChangeRegister}
              maxLength={15}
            />
            <div className="toggle" onClick={handleToggle}>
              {toggle ? <PiEyeBold size={25} /> : <PiEyeClosedBold size={25} />}
            </div>
          </div>

          <BTNLogin alter="false"> enviar</BTNLogin>
        </form>
      </div>
    </ContainerRegister>
  );
  console.log(errorLogin.n1);
  const renderLogin = () => (
    <ContainerLogin>
      <div className="login-container">
        <h1 className="iniciar">Iniciar sesion</h1>

        <form action="GET" onSubmit={handleSubmitLogin} className="login">
          <div className="input-field">
            <AiOutlineMail />
            <input
              placeholder="Ingrese su email..."
              type="text"
              name="email"
              value={loginAcount.email}
              onChange={handleChangeLogin}
              maxLength={30}
            />
            {loginSubmitted && errorLogin.e1 && (
              <ContainerErrorLogin>
                <p>{errorLogin.e1}</p>
              </ContainerErrorLogin>
            )}
            {loginSubmitted && errorLogin.e2 && (
              <ContainerErrorLogin>
                <p>{errorLogin.e2}</p>
              </ContainerErrorLogin>
            )}
          </div>
          <div className="input-field">
            <AiOutlineLock />
            <input
              placeholder="Ingrese su contraseña..."
              type={toggle ? "text" : "password"}
              name="password"
              value={loginAcount.password}
              onChange={handleChangeLogin}
              maxLength={15}
            />
            <div className="inicioSesion" onClick={handleToggle}>
              {toggle ? <PiEyeBold size={25} /> : <PiEyeClosedBold size={25} />}
            </div>
          </div>
          <BTNLogin>Ingresar</BTNLogin>
          <div className="login-btn">
            {/* <button>
              <FaFacebookF />
            </button> */}
            <button>
              <BsGoogle onClick={handleOnClick} />
            </button>
          </div>
        </form>
      </div>
    </ContainerLogin>
  );
  return (
    <Container>
      {LoginGoogle()}
      {renderRegister()}
      <div className={`panel-login${inModeLogin ? " active-login" : ""}`}>
        <div className="panel">
          <h2>¿Ya tienes una cuenta?</h2>
          <h4>Haz Click para iniciar sesion</h4>
          <button onClick={handleInMode}>iniciar</button>
        </div>
      </div>
      <div
        className={`panel-register${!inModeLogin ? " active-register" : ""}`}
      >
        <div className="panel">
          <h2>¿No tienes una cuenta?</h2>
          <h4>Haz Click para registrarte</h4>
          <button onClick={handleInMode}>registrate</button>
        </div>
      </div>
      <TransitionDiv inModeLogin={inModeLogin} />
      {renderLogin()}
    </Container>
  );
}

export default RegisterAndLogin;

const Container = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  .panel-login {
    width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 150px;
    right: -2000px;
    z-index: 200;

    transition: all 0.7s ease-in-out;
    border-radius: 50%;
    .panel {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      color: #fff;
      border-radius: 50%;
      button {
        padding: 7px 30px;
        background: none;
        border: 1px solid #fff;
        border-radius: 20px;
        color: #fff;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  .active-login {
    transition-delay: 1s;
    right: 150px;
  }
  .panel-register {
    width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 150px;
    left: -2500px;
    z-index: 200;

    transition: all 0.7s ease-in-out;
    border-radius: 50%;
    .panel {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
      color: #fff;
      border-radius: 50%;
      button {
        padding: 7px 30px;
        background: none;
        border: 1px solid #fff;
        border-radius: 20px;
        color: #fff;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  .active-register {
    transition-delay: 1s;
    left: 150px;
  }
`;

const ContainerRegister = styled.div`
  width: 50%;
  height: 100%;
  h1 {
    width: 100%;
    margin-left: 220px;
    margin-top: 60px;
    text-transform: uppercase;
    text-decoration: underline;
  }
  .register-container {
    width: 100%;
    height: 100%;
    .container-btn {
      width: 300px;
      height: 110px;
      position: absolute;
      bottom: 40px;
      left: 175px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      .content {
        width: 100%;
        height: 20%;
        p {
          line-height: 50px;
          width: 100%;
          text-align: center;
        }
      }
      .btn-controllers {
        width: 100%;
        height: calc(100% - 20%);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
      }
      button {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: none;
        border: #111;
        transition: 0.3s ease;
        font-size: 25px;
        &:hover {
          transform: scale(1.2);
          background-color: white;
          border: 1px solid red;
        }
      }
    }
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
      .input-field {
        width: 90%;
        background-color: #f0f0f0;
        margin: 10px 0;
        height: 55px;
        border-radius: 55px;
        display: grid;
        grid-template-columns: 15% 85%;
        align-items: center;
        justify-items: center;
        position: relative;
        input {
          position: relative;
          overflow: hidden;
          background: none;
          outline: none;
          border: none;
          width: 100%;
          height: 100%;
          line-height: 1;
          font-weight: 600;
          font-size: 1rem;
          color: #333;
        }
        .toggle {
          position: absolute;
          margin-left: 250px;
        }

        svg {
          text-align: center;
          line-height: 55px;
          color: #111;
          opacity: 0.8;
          font-size: 1.3rem;
        }
      }
    }
  }
`;

const ContainerLogin = styled.div`
  width: 50%;
  height: 100%;

  .iniciar {
    //width: 100%;
    //display: flex;
    margin-top: 10%;
    text-transform: uppercase;
    text-decoration: underline;
  }
  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
    .login-btn {
      bottom: 60px;
      right: 240px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      button {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: none;
        border: #111;
        transition: 0.3s ease;
        font-size: 25px;
        &:hover {
          transform: scale(1.2);
          background-color: white;
          border: 1px solid red;
        }
      }
    }
    .login {
      width: 350px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 30px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

      .input-field {
        width: 90%;
        background-color: #f0f0f0;
        margin: 10px 0;
        height: 55px;
        border-radius: 55px;
        display: grid;
        grid-template-columns: 15% 85%;
        align-items: center;
        justify-items: center;
        position: relative;
        input {
          position: relative;
          overflow: hidden;
          background: none;
          outline: none;
          border: none;
          width: 100%;
          height: 100%;
          line-height: 1;
          font-weight: 600;
          font-size: 1rem;
          color: #333;
        }
        .inicioSesion {
          position: absolute;
          margin-left: 250px;
        }
        svg {
          text-align: center;
          line-height: 55px;
          color: #111;
          opacity: 0.8;
          font-size: 1.3rem;
        }
      }
    }
  }
`;

const TransitionDiv = styled.div`
  width: 1500px;
  height: 1500px;
  position: absolute;
  top: -720px;
  left: -779px;
  background-color: #111;
  backdrop-filter: blur(5px);
  border-radius: 50%;
  transform: ${(props) =>
    props.inModeLogin ? "translateX(calc(107vw))" : "translateX(-2.7vw)"};
  transition: all 2s ease-in-out;
  z-index: 100;
`;

const ContainerError = styled.div`
  position: absolute;
  top: 60px;
  left: 20px;
  z-index: 10;
  background-color: #fff;
  width: 280px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
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
    display: grid;
    place-content: center;
    color: red;
    opacity: 0.6;
  }
`;

const ContainerErrorLogin = styled.div`
  position: absolute;
  top: 50px;
  background-color: red;
  z-index: 10;
  background-color: #fff;
  width: 280px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: 300ms ease;
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
    display: grid;
    place-content: center;
    color: red;
    opacity: 0.6;
  }
`;
