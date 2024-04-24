const User = require("../models/User");

module.exports = {
    getUsers: async () => {
        const users = await User.find().populate("vehicule");
        return users;
    },

    getUserById: async (id) => {
        const user = await User.findById(id);
        return user
    },
    
    findUserByName: async (name) => {
        const user = await User.findOne({ name });
        return user;
    },

    createUser: async (user) => {
        const newUser = await User.create(user);
        return newUser;
    },

    addVehicule: async ({ userId, vehiculeId }) => {
        const user = await User.findById(userId);
        user.vehicule = vehiculeId;
        await user.save();
        return user;
    } 

};