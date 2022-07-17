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

export const deleteUser = (req, res, next) => {
	
}

export const getUser = (req, res, next) => {
	
}

export const subscribe = (req, res, next) => {
	
}


export const unsubscribe = (req, res, next) => {
	
}

export const likeVideo = (req, res, next) => {
	
}

export const dislikeVideo = (req, res, next) => {
	
}