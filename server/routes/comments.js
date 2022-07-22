import express from "express";
import { addComment, deleteComment, getComments } from "../controllers/comment.js";
import {verifyToken} from "../middleware/verifyToken.js"

const router = express.Router()

// add coment 
router.post("/", verifyToken, addComment)

// delete comment
router.delete("/:id", verifyToken, deleteComment)

//get comment
router.get("/:videoId", getComments)

export default router;