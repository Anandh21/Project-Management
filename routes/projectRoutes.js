const express = require("express");
const router = express.Router();
const projectController = require("../controller/projetController");

router.get("/projects",projectController.all);

router.get("/projects/create", projectController.createGet);

router.post("/projects/create", projectController.createPost);

router.get("/projects/update/:id", projectController.updateGet);

router.post("/projects/update", projectController.updatePost);

router.get("/projects/delete/:id", projectController.deleteGet)

router.post("/projects/delete", projectController.deletePost)

module.exports = router
/**/