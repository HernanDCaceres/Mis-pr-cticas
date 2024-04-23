const mongoose = require("mongoose");

const dbCon = async () => {
    //* Realiza la conexión con la base de datos
    await mongoose.connect(
        "mongodb+srv://projectmgray:KRHHfdvuXBRW6o2R@prueba.z58khk5.mongodb.net/Movies?retryWrites=true&w=majority&appName=Prueba"
    );
};

module.exports = dbCon;