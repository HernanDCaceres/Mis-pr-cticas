const Vehicule = require("../models/Vehicule");

module.exports = {
    getAllVehicules: async () => {
        const vehicules = await Vehicule.find();
        return vehicules;
    },

    createVehicule: async (vehicule) => {
        const newVehicule = await Vehicule.create(vehicule);
        return newVehicule;
    },
};
