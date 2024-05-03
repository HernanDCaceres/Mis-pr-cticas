import { Router } from "express";
import { createUser, getUsers, deleteUser } from "../controllers/userController";
import auth from "../middlewares/auth";

const router: Router = Router();

router.post("/users", createUser);

router.get("/users", auth, getUsers);

router.delete("/users", deleteUser);

export default router;