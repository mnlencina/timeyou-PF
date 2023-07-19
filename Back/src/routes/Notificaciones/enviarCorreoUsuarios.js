const express = require('express');
const router = express.Router();
const { enviarCorreoUsuarios } = require('../../controllers/enviarCorreoUsuarios');


router.post('/enviar-mensaje', async (req, res) => {

    try {
    const mensaje = req.body.mensaje;
      // Llama a la función controladora para enviar el mensaje a los usuarios
      await enviarCorreoUsuarios(mensaje);
      res.status(200).json({ mensaje: 'El mensaje se ha enviado correctamente' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Hubo un error al enviar los correos electrónicos' });
    }
  });


module.exports = router;


