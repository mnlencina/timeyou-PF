import React from "react";
import styled from "styled-components";

export default function Preguntas() {
  return (
    <>
      <Clausulas>
        <div className="contenedor">
          <h1>Preguntas Frecuentes</h1>
          <hr />
          <h2>CAMBIOS</h2>
          <ul>
            <li>¿ CÓMO DEBO HACER PARA DEVOLVER O CAMBIAR UN ARTÍCULO ?</li>
            <li>CAMBIOS Y DEVOLUCIONES</li>
            <li>CAMBIOS</li>
            <li>DEVOLUCIONES</li>
            <li>SI DEVUELVO UN ARTÍCULO ¿ CUÁNDO OBTENGO EL REEMBOLSO ?</li>
            <li>COSTO DE CAMBIO/DEVOLUCIÓN</li>
            <li>INCONVENIENTES CON UN PRODUCTO</li>
          </ul>
          <h2>COMPRAS</h2>
          <ul>
            <li>CREAR UNA CUENTA EN TIME SHOP</li>
            <li>CONECTARSE A LA CUENTA</li>
            <li>SUSCRIPCIÓN AL NEWSLETTER</li>
            <li>SU CONTRASEÑA</li>
            <li>UTILIZAR UN CÓDIGO PROMOCIONAL</li>
            <li>FORMAS DE PAGO</li>
            <li>PRECIO DE LOS ARTÍCULOS</li>
            <li>RESERVAR UN PRODUCTO</li>
            <li>NO VEO EL PRODUCTO QUE QUIERO</li>
            <li>MEDIDAS DE LOS PRODUCTOS</li>
            <li>CÓMO REALIZAR UNA COMPRA</li>
            <li>CÓMO SE SI HAY STOCK DE UN MODELO?</li>
          </ul>
          <h2>ENTREGAS</h2>
          <ul>
            <li>DIRECCIÓN DE ENTREGA Y FACTURACIÓN</li>
            <li>DIRECCIÓN DE ENTREGA</li>
            <li>INCONVENIENTES EN LA ENTREGA</li>
            <li>ENTREGA EN PUNTO DE RETIRO GRATUITO</li>
            <li>RETIROS EN SUCURSAL DE CORREO Y ENVÍOS A DOMICILIO</li>
          </ul>
          <h2>ENVIOS</h2>
          <ul>
            <li>CÓMO SIGO MI ENVÍO?</li>
            <li>TRAKING</li>
            <li>CUÁNTO DEMORA MI ENVÍO?</li>
            <li>MEDIOS DISPONIBLES</li>
          </ul>
          <h2>PEDIDOS</h2>
          <ul>
            <li>TIENE ALGUNA PREGUNTA ?</li>
          </ul>
          <p/>
        </div>
      </Clausulas>
    </>
  );
}

const Clausulas = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #f3f2f2;
  .contenedor {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
  }
  h1 {
    display: flex;
    text-decoration: none;
    font-weight: bolder;
    font-size: 40px;
    color: #080808;
    margin-top: 50px;
  }
  h2 {
    display: flex;
    margin:30px 0 10px 0;
    font-weight: 400;
    font-size: 20px;
  }
  h4 {
    display: flex;
    justify-content: center;
    margin: 40px;
    font-size: 20px;
    font-weight: 300;
    color: #2e2e2e;
  }

  li {
    display: flex;
    font-weight: 300;
    color: #2e2e2e;
  }
  p {
      margin: 100px 150px 30px 150px;
      font-size: 11px;
      color: #2e2e2e;
  }
`;
