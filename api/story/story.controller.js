import { logger } from "../../services/logger.service.js";
import { storyService } from "./story.service.js";

export async function getStorys(req, res) {
  try {
    const storys = await storyService.query();
    res.json(storys);
  } catch (err) {
    logger.error("Failed to get storys", err);
    res.status(400).send({ err: "Failed to get storys" });
  }
}

export async function getStoryById(req, res) {
  try {
    const storyId = req.params.id;
    const story = await storyService.getById(storyId);
    res.json(story);
  } catch (err) {
    logger.error("Failed to get story", err);
    res.status(400).send({ err: "Failed to get story" });
  }
}

export async function addStory(req, res) {
  const { loggedinUser, body: story } = req;

  try {
    story.owner = loggedinUser;
    const addedStory = await storyService.add(story);
    res.json(addedStory);
  } catch (err) {
    logger.error("Failed to add story", err);
    res.status(400).send({ err: "Failed to add story" });
  }
}

export async function updateStory(req, res) {
  const { loggedinUser, body: story } = req;
  const { _id: userId } = loggedinUser;

  if (story.owner._id !== userId) {
    res.status(403).send("Not your story...");
    return;
  }

  try {
    const updatedStory = await storyService.update(story);
    res.json(updatedStory);
  } catch (err) {
    logger.error("Failed to update story", err);
    res.status(400).send({ err: "Failed to update story" });
  }
}

export async function removeStory(req, res) {
  try {
    const storyId = req.params.id;
    const removedId = await storyService.remove(storyId);

    res.send(removedId);
  } catch (err) {
    logger.error("Failed to remove story", err);
    res.status(400).send({ err: "Failed to remove story" });
  }
}

/*export async function addCarMsg(req, res) {
  const { loggedinUser } = req;

  try {
    const carId = req.params.id;
    const msg = {
      txt: req.body.txt,
      by: loggedinUser,
    };
    const savedMsg = await carService.addCarMsg(carId, msg);
    res.json(savedMsg);
  } catch (err) {
    logger.error("Failed to update car", err);
    res.status(400).send({ err: "Failed to update car" });
  }
}

export async function removeCarMsg(req, res) {
  try {
    const { id: carId, msgId } = req.params;

    const removedId = await carService.removeCarMsg(carId, msgId);
    res.send(removedId);
  } catch (err) {
    logger.error("Failed to remove car msg", err);
    res.status(400).send({ err: "Failed to remove car msg" });
  }
}*/
