//? Consultar a una BDD
//? Realizar una solicitud a un servicio externo
//? Leerán la información de un documento

const users = [       
        
    {
        id: 1,
        name: "Hernán",
    },
    {
        id: 2,
        name: "Daniela",
    },
    {
        id: 3,
        name: "Oscar",
    },
];

let id = 4;

module.exports = {
    getUsers: async () => {
    return users;
    },

    createUser:async (name) => {
        const newUser = {
            id,
            name,
        };
        id++;
        users.push(newUser);
    }
};