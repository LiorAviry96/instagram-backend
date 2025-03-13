import { userService } from "./user.service.js";
import { logger } from "../../services/logger.service.js";
import { socketService } from "../../services/socket.service.js";

export async function getUser(req, res) {
  try {
    const user = await userService.getById(req.params.id);
    res.send(user);
  } catch (err) {
    logger.error("Failed to get user", err);
    res.status(400).send({ err: "Failed to get user" });
  }
}

export async function getUsers(req, res) {
  try {
    const filterBy = req.query;

    const users = await userService.query(filterBy);
    res.send(users);
  } catch (err) {
    logger.error("Failed to get users", err);
    res.status(400).send({ err: "Failed to get users" });
  }
}

export async function deleteUser(req, res) {
  try {
    await userService.remove(req.params.id);
    res.send({ msg: "Deleted successfully" });
  } catch (err) {
    logger.error("Failed to delete user", err);
    res.status(400).send({ err: "Failed to delete user" });
  }
}

export async function updateUser(req, res) {
  try {
    //console.log("PUT request received for user update:", req.body);
    const user = req.body;
    const savedUser = await userService.update(user);

    res.send(savedUser);
  } catch (err) {
    logger.error("Failed to update user", err);
    res.status(400).send({ err: "Failed to update user" });
  }
}

export async function addUserMsg(req, res) {
  const { loggedinUser } = req;

  const { id } = req.params;

  if (!loggedinUser) {
    return res.status(401).json({ err: "User not authenticated" });
  }

  try {
    const msg = {
      by: {
        _id: loggedinUser._id,
        fullname: loggedinUser.fullname,
      },
      to: {
        _id: req.body.targetUser._id,
        fullname: req.body.targetUser.fullname,
        imgUrl: req.body.targetUser.imgUrl,
      },
      message: req.body.txt,
      timestamp: new Date(),
    };

    const savedMsg = await userService.addUserMsg(id, msg);
    res.json(savedMsg);
  } catch (err) {
    logger.error("Failed to add user message", err);
    res.status(500).send({ err: "Failed to add user message" });
  }
}

export async function getUserChatMessages(req, res) {
  const { loggedinUser } = req;
  const { id, targetUserId } = req.params;
  //console.log("req.params", req.params);
  //console.log("req.body", req.body);

  console.log("loggedinUser", loggedinUser);

  console.log("targetUserId", targetUserId);

  try {
    const messages = await userService.getChatMessages(
      loggedinUser._id,
      targetUserId
    );
    res.json(messages);
  } catch (err) {
    logger.error("Error fetching chat messages:", err);
    res.status(500).send("Failed to retrieve messages");
  }
}
