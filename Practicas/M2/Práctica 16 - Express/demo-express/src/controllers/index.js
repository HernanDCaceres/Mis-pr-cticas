// TODO En este modulo van a estar  las funciones que establece la LOGICA DE NEGOCIO de cada una de las solicitudes

//? Para esa ruta GET users => 

//?Vamos a ir a la base de datos a pedir la información de los usuarios y responder al cliente
//? con la informacion obtenida.

const userController = (req, res) => {
    res.status(200).send("Estamos recibiendo una solcitud para obtener datos de usuarios");
};

const postController = (req, res) => {
    res.status(200).send("Estamos enviando información sobre posts.");
};

module.exports = {
    userController,
    postController,
};