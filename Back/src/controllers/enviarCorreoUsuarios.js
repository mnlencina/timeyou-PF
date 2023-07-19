require('dotenv').config();
const { EMAIL_EMPRESA, PASSWORD_EMAIL } = process.env;
const nodemailer = require('nodemailer');
const { Usuario } = require('../models/user'); // Importa el modelo de Usuario de Sequelize

const enviarCorreoUsuarios = async (mensaje) => {
    // Busca los usuarios en la base de datos que tienen un correo electrónico válido
    const usuarios = await Usuario.findAll({ where: { correo_electronico: { [Op.not]: null } } });
  
    // Crea un objeto de transporte para el servicio de correo electrónico que usarás
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: EMAIL_EMPRESA,
        pass: PASSWORD_EMAIL
      }
    });
  
    // Itera sobre los usuarios y envía un mensaje a cada uno
    usuarios.forEach(async (usuario) => {
      // Define el mensaje que enviarás
      const correo = {
        from: EMAIL_EMPRESA,
        to: usuario.correo_electronico,
        subject: 'Envio de catalogo de productos',
        text: `Hola ${usuario.nombre} : ${mensaje}`
        
      };
  
      // Envía el mensaje utilizando el objeto de transporte que creaste
      const info = await transporter.sendMail(correo);
  
      console.log('Correo electrónico enviado: ' + info.response);
    });
  
    console.log('Correos electrónicos enviados correctamente');
  };
  
  module.exports = {
    enviarCorreoUsuarios
  };
  

