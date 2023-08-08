import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import  "./Contacto.css";

const Contacto = () => { const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_82luhvo', 'template_f10h2js', form.current, '4liVfBKern8qYzMcv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return <form ref={form} onSubmit={sendEmail} className='field'>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
</form>
};

export default Contacto;