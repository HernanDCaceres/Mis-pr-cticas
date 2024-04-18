const { Router } = require("express");
const postController = require("../controllers/postControler");

const postRouter = Router();

postRouter.get("/", postController.getAllPosts);

module.exports = postRouter;