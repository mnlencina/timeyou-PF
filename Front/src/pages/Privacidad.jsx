import React from "react";
import styled from "styled-components";

export default function Privacidad() {
  return (
    <>
      <Clausulas>
        <div className="contenedor">
          <h1>Política de Privacidad - "TimeYou"</h1>
          <hr />
          <h4>
          En "TimeYou", la privacidad de nuestros usuarios es de suma importancia. Esta Política de Privacidad describe cómo recopilamos, utilizamos, compartimos y protegemos la información personal proporcionada por nuestros usuarios. Al acceder y utilizar nuestro sitio web, el usuario acepta los siguientes términos de esta Política de Privacidad. Si no estás de acuerdo con estos términos, te recomendamos no utilizar nuestros servicios.
          </h4>
          <h2>INFORMACIÓN RECOPILADA</h2>
          <li>
          Información Personal: Podemos recopilar información personal que el usuario proporciona voluntariamente, como nombre, dirección, dirección de correo electrónico, número de teléfono, información de pago, entre otros, al registrarse en nuestro sitio web o realizar una compra.
          </li>
          <li>
          Información de Navegación: Cuando el usuario accede a nuestro sitio web, recopilamos automáticamente cierta información, como la dirección IP, el tipo de navegador, el dispositivo utilizado, las páginas visitadas, la ubicación geográfica aproximada y otros datos de navegación.
          </li>
          <h2>USO DE INFORMACIÓN</h2>
          <li>
          Utilización de Información Personal: Utilizamos la información personal del usuario para procesar y enviar pedidos, proporcionar servicios y asistencia al cliente, enviar comunicaciones promocionales, mejorar nuestro sitio web y personalizar la experiencia del usuario.
          </li>
          <li>
          Uso de Información de Navegación: La información de navegación se utiliza para analizar tendencias de uso, administrar nuestro sitio web, mejorar la seguridad y optimizar la experiencia del usuario.
          </li>
          <h2>INFORMACIÓN COMPARTIDA</h2>
          <li>
          Proveedores de Servicios: Podemos compartir información personal con terceros que nos brindan servicios, como servicios de envío y procesamiento de pagos. Estos proveedores solo tendrán acceso a la información necesaria para cumplir con sus funciones y están obligados a mantener la confidencialidad de dicha información.
          </li>
          <li>
          Cumplimiento Legal: En determinadas circunstancias, podemos divulgar información personal para cumplir con las leyes y regulaciones aplicables, responder a solicitudes legales, proteger nuestros derechos, privacidad y seguridad, o para cualquier otro fin legalmente permitido.
          </li>
          <h2>COOKIES Y TECNOLOGÍAS SIMILARES</h2>
          <li>
          Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y comprender el uso de nuestro sitio web. Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario y nos permiten recordar sus preferencias y sesiones.
          </li>
          <li>
          El usuario puede modificar la configuración del navegador para rechazar cookies o recibir notificaciones cuando se envían cookies. Sin embargo, esto puede afectar la funcionalidad del sitio web.
          </li>
          <h2>SEGURIDAD DE DATOS</h2>
          <li>
          Implementamos medidas de seguridad para proteger la información personal del usuario contra accesos no autorizados, pérdida, uso indebido o divulgación. Sin embargo, ninguna transmisión de datos por Internet o sistema de almacenamiento es 100% seguro, por lo que no podemos garantizar la seguridad absoluta de la información.
          </li>
          <h2>ENLACES A SITIOS EXTERNOS</h2>
          <li>
          Nuestro sitio web puede contener enlaces a sitios web de terceros. No nos hacemos responsables de las prácticas de privacidad o contenido de dichos sitios externos. Te recomendamos leer las políticas de privacidad de esos sitios antes de proporcionar información personal.
          </li>
          <h2>CAMBIOS A LA POLITICA DE PRIVACIDAD</h2>
          <li>
          Nos reservamos el derecho de actualizar o modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será efectivo a partir de la fecha de publicación en nuestro sitio web. Te recomendamos revisar periódicamente esta página para estar informado sobre cualquier actualización.
          </li>
          <h2>CONTACTO</h2>
          <li>
          Para cualquier consulta o solicitud relacionada con nuestra Política de Privacidad, puedes contactarnos a través de pagetimeyou@gmail.com
          </li>
          <p>
          Esta Política de Privacidad es parte integral de nuestros Términos y Condiciones. Al utilizar nuestro sitio web, el usuario acepta estar legalmente vinculado por ambos documentos.

¡Gracias por leer nuestra Política de Privacidad!
          </p>
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
