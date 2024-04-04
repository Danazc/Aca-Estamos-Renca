const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("../router/router");
const path = require("path");
const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// aqui definimos la ruta para acceder a los archivos estaticos
app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));
app.use(router);

module.exports = app;