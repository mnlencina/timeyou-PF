import React from "react";
import styled from "styled-components";

export default function TerminosyCondiciones() {
  return (
    <>
      <Clausulas>
        <div className="contenedor">
          <h1>Términos & Condiciones</h1>
          <hr />
          <h4>
            Bienvenido a "TimeYou", el sitio web de comercio electrónico
            especializado en la venta de relojes de reconocidas marcas y
            estilos. Al acceder y utilizar nuestro sitio web, aceptas los
            siguientes términos y condiciones, los cuales rigen la relación
            legal entre el usuario y "TimeYou". Te recomendamos leer
            detenidamente estos términos antes de realizar cualquier compra:
          </h4>
          <h2>1 - USO DEL SITIO WEB:</h2>
          <li>
            1.1. Al acceder y utilizar el sitio web de "TimeYou", el usuario
            declara ser mayor de edad y/o contar con la capacidad legal para
            celebrar contratos vinculantes. 1.2. El usuario se compromete a
            proporcionar información precisa, veraz y completa durante el
            proceso de registro y compra, y acepta mantener actualizada dicha
            información.
          </li>
          <h2>2 - PRECIOS Y PAGOS:</h2>
          <li>
            2.1. Todos los precios de los relojes se muestran en la moneda local
            del país de operación de "TimeYou" y están sujetos a cambios sin
            previo aviso. 2.2. Los pagos se realizarán mediante métodos de pago
            seguros disponibles en el sitio web. El usuario debe asegurarse de
            proporcionar información de pago válida y autorizar la transacción.
          </li>
          <h2>3 - ENVÍO Y ENTREGA:</h2>
          <li>
            3.1. "TimeYou" ofrece envíos a direcciones dentro del territorio
            nacional. Los plazos de entrega estimados se especifican en la
            página de cada producto.
          </li>
          <li>
            3.2. Si bien nos esforzamos por cumplir con los plazos de entrega,
            "TimeYou" no asume responsabilidad por retrasos causados por
            factores externos, como servicios de mensajería o situaciones de
            fuerza mayor.
          </li>
          <h2>4 - POLÍTICA DE DEVOLUCIONES  REEMBOLSOS:</h2>
          <li>
            4.1. "TimeYou" permite a los clientes solicitar devoluciones de
            productos en un plazo de 15 días naturales contados desde la fecha
            de recepción del pedido.
          </li>
          <li>
            4.2. Los productos devueltos deben encontrarse en su estado
            original, sin haber sido utilizados ni dañados. Los gastos de envío
            de la devolución serán responsabilidad del cliente.
          </li>
          <li>
            4.3. Los reembolsos se realizarán mediante el mismo método de pago
            utilizado en la compra original, una vez que "TimeYou" haya recibido
            y verificado el estado del producto devuelto.
          </li>
          <h2>5 - PRIVACIDAD Y SEGURIDAD DE DATOS:</h2>
          <li>
            5.1. "TimeYou" se compromete a respetar la privacidad de los
            usuarios y proteger sus datos personales. Consulta nuestra Política
            de Privacidad para obtener información detallada sobre cómo
            manejamos la información del usuario.
          </li>
          <h2>6 - PROPIEDAD INTELECTUAL:</h2>
          <li>
            6.1. Todo el contenido y material presentes en el sitio web de
            "TimeYou", incluyendo logotipos, imágenes, descripciones de
            productos, entre otros, son propiedad exclusiva de "TimeYou" y están
            protegidos por las leyes de propiedad intelectual.
          </li>
          <h2>7 - LIMITACIÓN Y RESPOSABILIDAD:</h2>
          <li>
            7.1. "TimeYou" no se hace responsable de daños directos, indirectos
            o consecuenciales derivados del uso del sitio web, errores en la
            información proporcionada o de cualquier inconveniente relacionado
            con los productos adquiridos.
          </li>
          <h2>8 - JURISDICCIÓN Y LEY APLICABLE:</h2>
          <li>
            8.1. Estos términos y condiciones están sujetos a las leyes de la
            Republica Argentina, y cualquier disputa que surja bajo o en
            relación con estos términos estará sujeta a la jurisdicción
            exclusiva de los tribunales de la Ciudad Autonoma de Buenos Aires.
          </li>
          <p>
            Estos términos y condiciones constituyen el acuerdo completo entre
            el usuario y "TimeYou" y rigen el uso del sitio web y la compra de
            productos. Al acceder y utilizar nuestro sitio web, el usuario
            acepta estar legalmente vinculado por estos términos y condiciones.
            Si el usuario no está de acuerdo con alguno de estos términos, le
            recomendamos no utilizar nuestros servicios.
          </p>
        </div>
      </Clausulas>
    </>
  );
}

const Clausulas = styled.section`
  margin: auto;
  width: 100%;
  height: 100%;
  background-color: #f3f2f2;
  .contenedor {
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    width: 90%;
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
    font-weight: 300;
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
