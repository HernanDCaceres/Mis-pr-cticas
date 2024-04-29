const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use(require("./routes"));

app.use((err, req, res, next) => {
    //Manejo de error
    res.status(err.statusCode || 500).json({error: err.message})
});

module.exports = app;
