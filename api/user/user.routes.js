import express from "express";

import { requireAuth } from "../../middlewares/requireAuth.middleware.js";

import {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  addUserMsg,
  getUserChatMessages,
  getUserNotificationsHandler,
} from "./user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/:id/inbox", requireAuth, addUserMsg);
router.get("/:id/inbox/:targetUserId", requireAuth, getUserChatMessages);
router.get("/:id/notifications", requireAuth, getUserNotificationsHandler);

export const userRoutes = router;
