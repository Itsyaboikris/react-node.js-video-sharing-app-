import express from "express";
import { updateUser, deleteUser, getUser, subscribe, likeVideo } from "../controllers/user.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

//update user
router.put("/:id", verifyToken, updateUser)

//delete user
router.delete("/:id", verifyToken, deleteUser)

//get a user
router.get("/find/:id", verifyToken, getUser)

//subscribe a user
router.put("/sub/:id", verifyToken, subscribe)

//unsubscribe a user
router.put("/unsub/:id", verifyToken, subscribe)

//like a video
router.put("/like/:videoId", verifyToken, likeVideo)

//dislike a video
router.put("/dislike/:videoId", verifyToken, likeVideo)

export default router;