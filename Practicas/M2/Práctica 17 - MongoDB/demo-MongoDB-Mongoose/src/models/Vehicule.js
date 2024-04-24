const mongoose = require("mongoose");

const vehiculeSchema = new mongoose.Schema({
    patente: String,
    marca: String
});

const Vehicule = mongoose.model("Vehicule", vehiculeSchema);

module.exports = Vehicule;