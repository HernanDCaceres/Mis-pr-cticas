const usersService = require("../services/usersService");

module.exports = {
    getUsers: async (req, res) => {
        const users = await usersService.getUsers();
        res.status(200).json(users);
    },

    getUserById: async (req, res) => {
        const { id } = req.params;
        const user = await usersService.getUserById(id);
        res.status(200).json(user);
    },

    getuserByName: async (req, res) => {
        const { name } = req.body;
        const user = await usersService.findUserByName(name);
        res.status(200).json(user);
    },  

    createUser: async (req, res) => {
        const { name, email, age } = req.body;
        const newUser = await usersService.createUser({ name, email, age });
        res.status(201).json(newUser);
    },

    addVehicule: async (req, res) => {
        const { userId, vehiculeId } = req.body;
        await usersService.addVehicule({ userId, vehiculeId });
        res.status(200).json({ message: "Todo correcto"});
    }
};