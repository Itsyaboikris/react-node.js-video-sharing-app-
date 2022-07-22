import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { addVideo, getVideo, deleteVideo, updateVideo, addView, trending, random, sub, getByTag, search } from "../controllers/video.js";

const router = express.Router()

//create a video
router.post("/", verifyToken, addVideo)

//update a video
router.put("/:id", verifyToken, updateVideo)

//delete a video
router.delete("/:id", verifyToken, deleteVideo)

//get a video
router.get("/find/:id", getVideo)

//update view count
router.put("/view/:id", addView)

//get trending videos
router.get("/trend", trending)

//get random videos
router.get("/random", random)

//get subscribed videos
router.get("/sub", verifyToken, sub)

//get videos by tag
router.get("/tags", verifyToken, getByTag)

//get videos by title
router.get("/search", verifyToken, search)

export default router;