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
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
/* styled  editing */
import { BTNLogin } from "../utils/ComponentsStyle";

function RegisterAndLogin() {
  const USER = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inModeLogin, setInModeLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState({});

  const validateInputs = (input) => {
    let errors = {};
    if (input.userName.toString().trim() === "") {
      errors.n1 = "El nombre de usuario requerido";
    }
    if (input.userName.length > 15) {
      errors.n2 = "El nombre de usuario no puede contener mas de 15 caracteres";
    }
    if (input.email.trim() === "") {
      errors.e1 = "El correo electronico es requerido";
    }
    if (!input.email.includes("@")) {
      errors.e2 = "ingrese una direccion de correo valida";
    }
    if (input.password.trim() === "") {
      errors.p = "Debe ingresar una contraseña";
    }
    return errors;
  };

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

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterValues({
      ...registerValues,
      [name]: value,
    });
    setError(
      validateInputs({
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
      setError(
        validateInputs({
          ...registerValues,
          [name]: value,
        })
      );
    }
  };
  console.log(error);
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    if (error !== null) {
      alert("Faltan datos");
    } else {
      dispatch(createUser(registerValues));
      BsArrowLeftRight("usuario registrado con exito");
    }
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginAcount({
      ...loginAcount,
      [name]: value,
    });
    setError(
      validateInputs({
        [name]: value,
      })
    );
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
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
      <div className="errors"></div>
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
            />
            {error.n1 && (
              <p style={{ position: "absolute", top: "50px", color: "red" }}>
                {error.n1}
              </p>
            )}
            {error.n2 && (
              <p
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "250px",
                  color: "red",
                  width: "100%",
                  textAlign: "center",
                  zIndex: 10,
                }}
              >
                {error.n2}
              </p>
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
            />
            {error.e1 && (
              <p
                style={{
                  position: "absolute",
                  top: "53px",
                  left: "0",
                  color: "red",
                  width: "100%",
                  textAlign: "center",
                  zIndex: 10,
                }}
              >
                {error.e1}
              </p>
            )}
            {error.e2 && (
              <p
                style={{
                  position: "absolute",
                  top: "53px",
                  left: "0",
                  color: "red",
                  width: "100%",
                  textAlign: "center",
                  zIndex: 10,
                }}
              >
                {error.e2}
              </p>
            )}
          </div>
          <div className="input-field">
            <AiOutlineLock />
            <input
              type="password"
              placeholder="ingrese una contraseña"
              name="password"
              value={registerValues.password}
              onChange={handleChangeRegister}
            />
            {error.p && (
              <p style={{ position: "absolute", top: "50px", color: "red" }}>
                {error.p}
              </p>
            )}
          </div>

          <BTNLogin alter="false"> enviar</BTNLogin>
        </form>
      </div>
    </ContainerRegister>
  );

  const renderLogin = () => (
    <ContainerLogin>
      <h1>Iniciar sesion</h1>
      <div className="login-container">
        {/* <div className="login-btn">
          <button>
            <FaFacebookF />
          </button>
          <button>
            <BsGoogle onClick={handleOnClick} />
          </button>
        </div> */}
        <form action="GET" onSubmit={handleSubmitLogin} className="login">
          <div className="input-field">
            <AiOutlineMail />
            <input
              placeholder="Ingrese su email.."
              type="text"
              name="email"
              value={loginAcount.email}
              onChange={handleChangeLogin}
            />
              {error.n1 && (
              <p style={{ position: "absolute", top: "50px", color: "red" }}>
                {error.n1}
              </p>
            )}
            {error.n2 && (
              <p
                style={{
                  position: "absolute",
                  top: "2px",
                  left: "250px",
                  color: "red",
                  width: "100%",
                  textAlign: "center",
                  zIndex: 10,
                }}
              >
                {error.n2}
              </p>
            )}
          </div>
          <div className="input-field">
            <AiOutlineLock />
            <input
              placeholder="Ingrese su contraseña..."
              type="password"
              name="password"
              value={loginAcount.password}
              onChange={handleChangeLogin}
            />
          </div>
          <BTNLogin>Login</BTNLogin>

          <div className="login-btn">
            <button>
              <FaFacebookF />
            </button>
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
          <h2>Ya tienes una cuenta</h2>
          <h4>haz Click para iniciar secion</h4>
          <button onClick={handleInMode}>ir a login</button>
        </div>
      </div>
      <div
        className={`panel-register${!inModeLogin ? " active-register" : ""}`}
      >
        <div className="panel">
          <h2>No tienes una cuenta?</h2>
          <h4>haz Click para registrarte</h4>
          <button onClick={handleInMode}>register</button>
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
    z-index: 20;
    border: 1px solid #fff;
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
    z-index: 20;
    border: 1px solid #fff;
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
  position: relative;
  h1 {
    width: 100%;
    text-align: center;
    margin-top: 60px;
    text-transform: uppercase;
  }
  .errors {
   /*  display: inline-block;
    position: absolute;
    top: 175px;
    left: 505px;
    width: 200px;
    height: 80px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    z-index: 20;
    transition: 0.3s ease; */
   /*  &::after {
      content: "";
      position: absolute;
      top: 25px;
      left: -12px;
      width: 25px;
      height: 25px;
      transform: rotate(45deg);
      background-color: red;
      z-index: 10;
    } */
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
        position: relative
        overflow: hidden;
        width: 90%;
        background-color: #f0f0f0;
        margin: 10px 0;
        height: 55px;
        border-radius: 55px;
        display: grid;
        grid-template-columns: 15% 85%;
        align-items: center;
        justify-items: center;
        padding: 0 0.4rem;
        position: relative;
        input {
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
  h1 {
    width: 100%;
    text-align: center;
    margin-top: 60px;
    text-transform: uppercase;
  }
  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
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
      position: absolute;
      top: 150px;
      right: 150px;
      width: 350px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 30px;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
      .input-field {
        overflow: hidden;
        width: 90%;
        background-color: #f0f0f0;
        margin: 10px 0;
        height: 55px;
        border-radius: 55px;
        display: grid;
        grid-template-columns: 15% 85%;
        align-items: center;
        justify-items: center;
        padding: 0 0.4rem;
        position: relative;
        input {
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
  z-index: 10;
`;
