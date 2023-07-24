import React from 'react'
import styled from 'styled-components'

function RegisterAndLogin() {





  return (
    <Container>
      <div className="register-container">
        <form action="" className='register'>
          <span>Nombre de Usuario:</span>
          <input type="text" placeholder='ingrese su nombre completo...' />
          <span>Email:</span>
          <input type="email" placeholder=' ingrese su email...' />
          <span>Contraseña:</span>
          <input type="password" placeholder='ingrese una contraseña' />
          <button> enviar</button>
        </form>
      </div>
    </Container>
  )
}

export default RegisterAndLogin;

const Container = styled.main`
  width: 100vw;
  min-height: 400px;
  height: 100vh;
  .register-container{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .register{
      background-color: red;
      width: 350px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

`