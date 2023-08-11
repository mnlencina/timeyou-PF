import React from "react";
import './style.css';
import {
  AiOutlineGithub,
  AiOutlineLinkedin
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Carta = ({ imagen, titulo, linkedin, github }) => {
  return (
    <div className="carta">
      <div className="imgBox">
      <img src={imagen} alt={titulo} />
      </div>
      <div className="content">
        <div className="titulo">
          <h3>{titulo}</h3>
        </div>
        <div className="links">
          <Link to={linkedin}>
            <AiOutlineLinkedin size={30} color="gray"/>
          </Link>
          <Link to={github}>
            <AiOutlineGithub size={30} color="gray"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Componente principal para la sección "Sobre Nosotros"
const SobreNosotros = () => {
  const cartasData = [
    {
      imagen: 'https://res.cloudinary.com/pagetimeyou/image/upload/v1691610862/Fotos%20equipo/Foto-FW_yyafww.jpg',
      titulo: 'Felipe Wyss',
      descripcion: 'Nos dedicamos a proporcionar...',
      linkedin: 'https://www.linkedin.com/in/felipe-wyss-039413217/',
      github: 'https://github.com/felipewyss',
    },
    {
      imagen: 'https://res.cloudinary.com/pagetimeyou/image/upload/v1691610866/Fotos%20equipo/Foto-Mari_pj1yj4.jpg',
      titulo: 'Mariela Ramirez',
      descripcion: 'Nos dedicamos a proporcionar...',
      linkedin: 'https://www.linkedin.com/in/mariela-ramirez-valle/',
      github: 'https://github.com/Magaerv',
    },
    {
      imagen: 'https://res.cloudinary.com/pagetimeyou/image/upload/v1691610871/Fotos%20equipo/Foto-JMA_enqrlp.jpg',
      titulo: 'Juan Manuel Aguirre',
      descripcion: 'Nos dedicamos a proporcionar...',
      linkedin: 'https://www.linkedin.com/in/juan-aguirre-902a1594',
      github: 'https://github.com/JuanManuelA12',
    },
    {
      imagen: 'https://res.cloudinary.com/pagetimeyou/image/upload/c_crop,h_800,w_800/v1691610875/Fotos%20equipo/Foto-JMM_b5aqi0.jpg',
      titulo: 'Juan Martin Mendoza',
      descripcion: 'Nos dedicamos a proporcionar...',
      linkedin: 'https://www.linkedin.com/in/juan-mart%C3%ADn-mendoza-697015154/',
      github: 'https://github.com/JuanmaMendoza',
    },
    {
      imagen: 'https://res.cloudinary.com/pagetimeyou/image/upload/v1691610859/Fotos%20equipo/Foto-COpaka_av9dki.jpg',
      titulo: 'Cristian Miguel Vazquez ',
      descripcion: 'Nos dedicamos a proporcionar...',
      linkedin: 'https://www.linkedin.com/in/cristian-vazquez-48b30346/ ',
      github: 'https://github.com/CVazquezOpalka',
    },
    {
      imagen: 'https://res.cloudinary.com/pagetimeyou/image/upload/v1691610858/Fotos%20equipo/Foto-Mil_igz03n.jpg',
      titulo: 'Milward Larico Tuni',
      descripcion: 'Nos dedicamos a proporcionar...',
      linkedin: 'https://www.linkedin.com/in/milward-larico-tuni-97b203118/',
      github: 'https://github.com/1000ward',
    },
    {
      imagen: 'https://res.cloudinary.com/pagetimeyou/image/upload/c_fit,h_800,w_800/v1691611114/Fotos%20equipo/Foto-Pininfarina_oiszrw.jpg',
      titulo: 'Matias Nicolas Lencina',
      descripcion: 'Nos dedicamos a proporcionar...',
      linkedin: 'https://www.linkedin.com/in/matias-lencina-b118a9116/',
      github: 'https://github.com/mnlencina',
    },
    {
      imagen: 'https://res.cloudinary.com/pagetimeyou/image/upload/c_crop,h_1200,w_1200/v1691612826/Fotos%20equipo/Foto-Jose_trgifm.jpg',
      titulo: 'Jose Miguel Pérez',
      descripcion: 'Nos dedicamos a proporcionar...',
      linkedin: 'https://www.linkedin.com/in/jose-miguel-perez-torrealba-a9549a258',
      github: 'https://github.com/josePerezt',
    }
  ];

  return (
    <div className="sobre-nosotros">
      <h1>Proyecto Final Grupo N°5 - Soy Henry</h1>
      <div className="cartas-container">
        {cartasData.map((carta, index) => (
          <Carta
            key={index}
            imagen={carta.imagen}
            titulo={carta.titulo}
            descripcion={carta.descripcion}
            linkedin={carta.linkedin}
            github={carta.github}
          />
        ))}
      </div>
    </div>
  );
};


export default SobreNosotros;


// export default function SobreNosotros() {
//   return (
//     <>
//       <Container>
//         <div className="contenedor">
//             Pruebas
//         </div>
//       </Container>
//     </>
//   );
// }

// const Container = styled.section`
//   margin: 0 auto;
//   width: 100%;
//   height: 100%;
//   background-color: #f3f2f2;
//   .contenedor {
//     margin: 0 auto;
//     display: flex;
//     flex-direction: column;
//     width: 80%;
//     height: 100%;
//   }
//   h1 {
//     display: flex;
//     text-decoration: none;
//     font-weight: bolder;
//     font-size: 40px;
//     color: #080808;
//     margin-top: 50px;
//   }
//   h2 {
//     display: flex;
//     margin:30px 0 10px 0;
//     font-weight: 400;
//     font-size: 20px;
//   }
//   h4 {
//     display: flex;
//     justify-content: center;
//     margin: 40px;
//     font-size: 20px;
//     font-weight: 300;
//     color: #2e2e2e;
//   }
//   li {
//     display: flex;
//     font-weight: 300;
//     color: #2e2e2e;
//   }
//   p {
//       margin: 100px 150px 30px 150px;
//       font-size: 11px;
//       color: #2e2e2e;
//   }
// `;
