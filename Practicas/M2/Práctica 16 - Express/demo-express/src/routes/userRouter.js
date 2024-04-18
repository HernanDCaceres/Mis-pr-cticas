const { Router } = require("express");
const  userController  = require("../controllers/userControler");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);

module.exports = userRouter;