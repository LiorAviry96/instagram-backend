import express from "express";

import { requireAuth } from "../../middlewares/requireAuth.middleware.js";

import {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  addUserMsg,
  getUserChatMessages,
} from "./user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/:id/inbox", requireAuth, addUserMsg);
router.get("/:id/inbox/:targetUserId", requireAuth, getUserChatMessages);

export const userRoutes = router;
