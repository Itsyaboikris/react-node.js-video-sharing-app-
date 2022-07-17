import express from "express";
import { updateUser, deleteUser, getUser, subscribe, likeVideo } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

//update user
router.put("/:id", verifyToken, updateUser)

//delete user
router.delete("/:id", deleteUser)

//get a user
router.get("/find/:id", getUser)

//subscribe a user
router.put("/sub/:id", subscribe)

//unsubscribe a user
router.put("/unsub/:id", subscribe)

//like a video
router.put("/like/:videoId", likeVideo)

//dislike a video
router.put("/dislike/:videoId", likeVideo)

export default router;