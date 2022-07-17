import { createError } from "../middleware/error.js"
import User from "../models/User.js"

export const updateUser = async (req, res, next) => {
	if(req.params.id === req.user.id) {
		try {
			const updatedUser = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body
			},{
				new: true
			});

			res.status(200).json(updatedUser)
		} catch (error) {
			next(err)
		}
	} else {
		return next(createError("403", "You can only update you account"))
	}
}

export const deleteUser = async (req, res, next) => {
	if(req.params.id === req.user.id) {
		try {
			await User.findByIdAndDelete(req.params.id);

			res.status(200).json("User has been deleted")
		} catch (error) {
			next(err)
		}
	} else {
		return next(createError("403", "You can only delete you account"))
	}
}

export const getUser = async (req, res, next) => {
	
}

export const subscribe = async (req, res, next) => {
	
}


export const unsubscribe = async (req, res, next) => {
	
}

export const likeVideo = async (req, res, next) => {
	
}

export const dislikeVideo = async (req, res, next) => {
	
}