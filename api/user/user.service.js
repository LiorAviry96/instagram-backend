import { dbService } from "../../services/db.service.js";
import { logger } from "../../services/logger.service.js";
import { ObjectId } from "mongodb";

export const userService = {
  add,
  getById,
  update,
  remove,
  query,
  getByUsername,
  addUserMsg,
};

async function query(filterBy = { txt: "" }) {
  const criteria = _buildCriteria(filterBy);
  try {
    const collection = await dbService.getCollection("users");
    var users = await collection.find(criteria).toArray();
    users = users.map((user) => {
      delete user.password;
      user.createdAt = user._id.getTimestamp();

      return user;
    });
    return users;
  } catch (err) {
    logger.error("cannot find users", err);
    throw err;
  }
}

async function getById(userId) {
  try {
    var criteria = { _id: ObjectId.createFromHexString(userId) };

    const collection = await dbService.getCollection("users");
    const user = await collection.findOne(criteria);
    delete user.password;

    criteria = { byUserId: userId };

    return user;
  } catch (err) {
    logger.error(`while finding user by id: ${userId}`, err);
    throw err;
  }
}

async function getByUsername(username) {
  try {
    const collection = await dbService.getCollection("users");
    const user = await collection.findOne({ username });
    return user;
  } catch (err) {
    logger.error(`while finding user by username: ${username}`, err);
    throw err;
  }
}

async function remove(userId) {
  try {
    const criteria = { _id: ObjectId.createFromHexString(userId) };

    const collection = await dbService.getCollection("users");
    await collection.deleteOne(criteria);
  } catch (err) {
    logger.error(`cannot remove user ${userId}`, err);
    throw err;
  }
}

async function update(user) {
  try {
    const userToSave = {
      _id: ObjectId.createFromHexString(user._id),
      username: user.username,
      fullname: user.fullname,
      imgUrl: user.imgUrl,
      following: user.following,
      followers: user.followers,
      images: user.images,
      savedStorys: user.savedStorys,
      notifications: user.notifications,
    };
    const collection = await dbService.getCollection("users");
    await collection.updateOne({ _id: userToSave._id }, { $set: userToSave });
    return userToSave;
  } catch (err) {
    logger.error(`cannot update user ${user._id}`, err);
    throw err;
  }
}

async function add(user) {
  try {
    const userToAdd = {
      username: user.username,
      password: user.password,
      fullname: user.fullname,
      imgUrl: user.imgUrl,
      following: user.following,
      followers: user.followers,
      images: user.images,
      savedStorys: user.savedStorys,
      notifications: user.notifications,
    };
    const collection = await dbService.getCollection("users");
    await collection.insertOne(userToAdd);
    return userToAdd;
  } catch (err) {
    logger.error("cannot add user", err);
    throw err;
  }
}

async function addUserMsg(userId, msg) {
  try {
    const collection = await dbService.getCollection("msgs");

    const newMsg = {
      by: msg.by,
      to: msg.to,
      message: msg.message,
      timestamp: msg.timestamp,
    };

    const result = await collection.insertOne(newMsg);

    return { ...newMsg, _id: result.insertedId };
  } catch (err) {
    logger.error(`Cannot add message for user ${userId}`, err);
    throw err;
  }
}

function _buildCriteria(filterBy) {
  const criteria = {};
  if (filterBy.txt) {
    const txtCriteria = { $regex: filterBy.txt, $options: "i" };
    criteria.$or = [
      {
        username: txtCriteria,
      },
      {
        fullname: txtCriteria,
      },
    ];
  }

  return criteria;
}
