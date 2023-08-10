import { useState } from "react";
//importamos el componente e inicializamos mercado pago
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
//import "./Product.module.css";
import { BTNCarritoDeCompras } from "../../utils/ComponentsStyle";
import {SiMercadopago} from 'react-icons/si'

export const ProductMP = ({carrito}) => {
console.log(carrito);
  const [preferenceId, setPreferenceId] = useState(null);

  //eL DATO ENTRE PARENTESIS DEBE SER UNA VARIABLE DE ENTORNO CUANDO ESTE EN PRODUCCION
  initMercadoPago("TEST-6368b1f4-05a9-4581-9bf5-48dbe95009b4");

  const createPreference = async ({cart,userBuy}) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/MP/create_preference",
        {
          cart,
          userBuy,
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) setPreferenceId(id);
  };

  const customization = {
    texts: {
      action: "pay",
      valueProp: "security_details",
    },
    visual: {
      buttonBackground: "black",
      boderRadius: "6px",
    },
  };
  return (
    <>      
      {!preferenceId && <BTNCarritoDeCompras alter="true" onClick={handleBuy}><span><SiMercadopago/></span>Pagar con MP</BTNCarritoDeCompras>}
      {preferenceId && (
        <Wallet
          customization={customization}
          initialization={{ preferenceId }}
        />
      )}
    </>
  );
};

// TARJETA DE PRUEBA.

// 5031 7557 3453 0604
// 123
// 11/25
