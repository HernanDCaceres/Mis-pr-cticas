// TODO Aca voy a tener una función

//* Esta función se comunica con la base de datos para pedir la información de los usuarios. Y darle el formato adecuado

//? id, nombre, nombre de usuario, email, fecha de alta, fecha de modificacion, domicilio, telefono

//* Responderá con esto => {id, nombre, nombre de usuario, email}.

const express = require("express");
const router = require("../routes/");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//* Aca quiero usar el middleware de Morgan

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use((req, res, next)=>{
    console.log("Estamos pasando por mi propio Middleware");
    next();
});

app.use(router);

module.exports = app;


