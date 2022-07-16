import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";

const PORT = process.env.PORT || 5000;
const app = express();
dotenv.config();

const connect = () => {
	mongoose.connect(process.env.MONGO_URI).then(
		() => {
			console.log("Connected to mongoDB");
		}
	).catch(err => {throw err})
}

app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comment", commentRoutes);

app.listen(PORT, () => {
	connect();
	console.log(`Server is running on port ${PORT}`);
});