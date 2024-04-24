const vehiculeService = require("../services/vehiculeService");

module.exports = {
    getAllVehicules: async (req, res) => {
        const vehicules = await vehiculeService.getAllVehicules();
        res.status(200).json(vehicules);
    },

    createVehicule: async (req, res) => {
        const { patente, marca } = req.body;
        const newVehicule = await vehiculeService.createVehicule({ patente, marca });
        res.status(201).json(newVehicule);
    }
};