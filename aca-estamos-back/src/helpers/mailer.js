const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, 
    auth: {
      user: "acaestamos90@outlook.com",
      pass: "arbol123",
      method: 'LOGIN',
    },
  });


  const sendEmail = async (to, subject, html) => {
    try {
        const result = await transporter.sendMail({
            from: "acaestamos90@outlook.com",
            to: to, // Asegúrate de que to sea el destinatario correcto
            subject: subject,
            html: html,
        });
        console.log('Correo enviado con éxito:', result);
        return result;
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw error;
    }
};

module.exports = { transporter, sendEmail };