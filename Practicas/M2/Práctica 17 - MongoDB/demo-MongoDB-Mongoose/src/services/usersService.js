const User = require("../models/User");

module.exports = {
    getUsers: async () => {
        const users = await User.find();
        return users;
    },

    createUser: async (name, email) => {
    },
};