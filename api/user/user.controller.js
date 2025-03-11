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
    console.log("PUT request received for user update:", req.body);
    const user = req.body;
    console.log("user", user);
    const savedUser = await userService.update(user);
    console.log("savedUser", savedUser);

    res.send(savedUser);
  } catch (err) {
    logger.error("Failed to update user", err);
    res.status(400).send({ err: "Failed to update user" });
  }
}

export async function addUserMsg(req, res) {
  const { loggedinUser } = req;
  const { id } = req.params; // Extracting userId from the request params

  if (!loggedinUser) {
    return res.status(401).json({ err: "User not authenticated" });
  }

  try {
    const msg = {
      by: {
        _id: loggedinUser._id,
        userName: loggedinUser.userName,
        fullname: loggedinUser.fullname,
        imgUrl: loggedinUser.imgUrl,
      },
      message: req.body.message, // Change from `txt` to `message`
      timestamp: new Date(),
    };

    const savedMsg = await userService.addUserMsg(id, msg);
    res.json(savedMsg);
  } catch (err) {
    logger.error("Failed to add user message", err);
    res.status(500).send({ err: "Failed to add user message" });
  }
}
