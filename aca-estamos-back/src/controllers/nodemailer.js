const { sendEmail } = require("../helpers/mailer");
const fs = require('fs');
const path = require('path');

const htmlFilePath = path.join('src', 'views', 'MensajeCorreo', 'mensajeCorreo.html');

try {
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

    const nodemailer = async (req, res) => {
        const { Email } = req.params;

        try {
            // Usar la función sendEmail en lugar de transporter.sendMail
            await sendEmail(Email, "Mensaje de Contacto", htmlContent);

            res.status(200).json({ ok: true, message: "Código enviado con éxito" });
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            res.status(500).json({ ok: false, message: "Error al enviar el correo" });
        }
    };

    module.exports = nodemailer;
} catch (error) {
    console.error('Error al leer el archivo HTML:', error);
}
