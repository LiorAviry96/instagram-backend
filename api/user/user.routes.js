import express from "express";

import {
  requireAuth,
  requireAdmin,
} from "../../middlewares/requireAuth.middleware.js";

import {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  addUserMsg,
} from "./user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/:id/msg", requireAuth, addUserMsg);

export const userRoutes = router;
