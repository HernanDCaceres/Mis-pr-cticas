const { Router} = require("express");
const usersController = require("../controllers/usersController");
const vehiculesController = require("../controllers/vehiculesController");

const router = Router();

router.get("/users", usersController.getUsers);

router.get("/users/byName", usersController.getuserByName);

router.get("/users/:id", usersController.getUserById);

router.post("/users", usersController.createUser);

router.put("/users/addVehicule", usersController.addVehicule);

router.get("/vehicules", vehiculesController.getAllVehicules);

router.post("/vehicules", vehiculesController.createVehicule);


module.exports = router;