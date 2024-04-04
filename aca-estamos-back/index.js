require('dotenv').config();
const { config } = require('process');
const app = require("./src/app/app");
const dbconnect = require("./src/database/conexion");
const port = process.env.DEV_PORT;


dbconnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Aplicacion corriendo en ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error.message);
  });
