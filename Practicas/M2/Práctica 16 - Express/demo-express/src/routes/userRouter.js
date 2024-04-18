const { Router } = require("express");
const  userController  = require("../controllers/userControler");
const validateUser = require("../middlewares/validateUser");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", validateUser, userController.createUser)

module.exports = userRouter;