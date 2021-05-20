const express = require("express");
const router = express.Router();
const userStoryController = require("../controller/userStoryController");

router.get("/user_stories/:projectId", userStoryController.allByProject);
router.get("/user_stories/create/:projectId", userStoryController.createGet);
router.post("/user_stories/create/:projectId", userStoryController.createPost);


module.exports = router;