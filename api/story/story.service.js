import { ObjectId } from "mongodb";

import { logger } from "../../services/logger.service.js";
import { makeId } from "../../services/util.service.js";
import { dbService } from "../../services/db.service.js";
import { asyncLocalStorage } from "../../services/als.service.js";

const PAGE_SIZE = 3;

export const storyService = {
  remove,
  query,
  getById,
  add,
  update,
};

async function query(filterBy = { txt: "" }) {
  try {
    const criteria = _buildCriteria(filterBy);
    const sort = _buildSort(filterBy);

    const collection = await dbService.getCollection("storys");

    var storyCursor = await collection.find(criteria, { sort });

    if (filterBy.pageIdx !== undefined) {
      storyCursor.skip(filterBy.pageIdx * PAGE_SIZE).limit(PAGE_SIZE);
    }

    const storys = storyCursor.toArray();
    return storys;
  } catch (err) {
    logger.error("cannot find storys", err);
    throw err;
  }
}

async function getById(storyId) {
  try {
    const criteria = { _id: ObjectId.createFromHexString(storyId) };

    const collection = await dbService.getCollection("storys");
    const story = await collection.findOne(criteria);

    story.createdAt = story._id.getTimestamp();
    return story;
  } catch (err) {
    logger.error(`while finding story ${storyId}`, err);
    throw err;
  }
}

async function remove(storyId) {
  const { loggedinUser } = asyncLocalStorage.getStore();

  try {
    const criteria = {
      _id: ObjectId.createFromHexString(storyId),
    };

    const collection = await dbService.getCollection("storys");
    const res = await collection.deleteOne(criteria);

    if (res.deletedCount === 0) throw "Not yor story";
    return storyId;
  } catch (err) {
    logger.error(`cannot remove story ${storyId}`, err);
    throw err;
  }
}

async function add(story) {
  try {
    const collection = await dbService.getCollection("storys");
    await collection.insertOne(story);

    return story;
  } catch (err) {
    logger.error("cannot insert story", err);
    throw err;
  }
}

async function update(story) {
  const storyToSave = {
    txt: story.txt,
    comments: story.comments,
    likedBy: story.likedBy,
  };

  try {
    const criteria = { _id: ObjectId.createFromHexString(story._id) };

    const collection = await dbService.getCollection("storys");
    await collection.updateOne(criteria, { $set: storyToSave });

    return story;
  } catch (err) {
    logger.error(`cannot update car ${story._id}`, err);
    throw err;
  }
}

/*async function removeCarMsg(carId, msgId) {
  try {
    const criteria = { _id: ObjectId.createFromHexString(carId) };

    const collection = await dbService.getCollection("car");
    await collection.updateOne(criteria, { $pull: { msgs: { id: msgId } } });

    return msgId;
  } catch (err) {
    logger.error(`cannot remove car msg ${carId}`, err);
    throw err;
  }
}*/

function _buildCriteria(filterBy) {
  const criteria = {};
  if (filterBy.txt) {
    criteria.txt = { $regex: filterBy.txt, $options: "i" };
  }
  return criteria;
}

function _buildSort(filterBy) {
  if (!filterBy.sortField) return {};
  return { [filterBy.sortField]: filterBy.sortDir };
}
