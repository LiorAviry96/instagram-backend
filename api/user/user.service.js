import { dbService } from "../../services/db.service.js";
import { logger } from "../../services/logger.service.js";
import { ObjectId } from "mongodb";

export const userService = {
  add, // Create (Signup)
  getById, // Read (Profile page)
  update, // Update (Edit profile)
  remove, // Delete (remove user)
  query, // List (of users)
  getByUsername, // Used for Login
};

async function query(filterBy = { txt: "" }) {
  const criteria = _buildCriteria(filterBy);
  try {
    const collection = await dbService.getCollection("users");
    var users = await collection.find(criteria).toArray();
    users = users.map((user) => {
      delete user.password;
      user.createdAt = user._id.getTimestamp();
      // Returning fake fresh data
      // user.createdAt = Date.now() - (1000 * 60 * 60 * 24 * 3) // 3 days ago
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
    // peek only updatable properties
    const userToSave = {
      _id: ObjectId.createFromHexString(user._id), // needed for the returnd obj
      username: user.username,
      fullname: user.fullname,
      imgUrl: user.imgUrl,
      following: user.following,
      followers: user.followers,
      images: user.images,
      savedStorys: user.savedStorys,
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
    // peek only updatable fields!
    const userToAdd = {
      username: user.username,
      password: user.password,
      fullname: user.fullname,
      imgUrl: user.imgUrl,
      following: user.following,
      followers: user.followers,
      images: user.images,
      savedStorys: user.savedStorys,
    };
    const collection = await dbService.getCollection("users");
    await collection.insertOne(userToAdd);
    return userToAdd;
  } catch (err) {
    logger.error("cannot add user", err);
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
