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

// We can add a middleware for the entire router:
// router.use(requireAuth)

router.get("/", log, getStorys);
router.get("/:id", log, getStoryById);
router.post("/", log, requireAuth, addStory);
router.put("/:id", requireAuth, updateStory);
router.delete("/:id", requireAuth, removeStory);
// router.delete('/:id', requireAuth, requireAdmin, removeCar)

//router.post("/:id/msg", requireAuth, addCarMsg);
//router.delete("/:id/msg/:msgId", requireAuth, removeCarMsg);

export const storyRoutes = router;
