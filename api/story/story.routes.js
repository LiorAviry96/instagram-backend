import express from "express";

import { requireAuth } from "../../middlewares/requireAuth.middleware.js";
import { log } from "../../middlewares/logger.middleware.js";

import {
  getStorys,
  getStoryById,
  addStory,
  updateStory,
  removeStory,
} from "./story.controller.js";

const router = express.Router();

router.get("/", log, getStorys);
router.get("/:id", log, getStoryById);
router.post("/", log, requireAuth, addStory);
router.put("/:id", requireAuth, updateStory);
router.delete("/:id", requireAuth, removeStory);

export const storyRoutes = router;
