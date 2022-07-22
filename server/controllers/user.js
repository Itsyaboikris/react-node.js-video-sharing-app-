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

			const {password, ...others} = updatedUser._doc;

			res.status(200).json(others)
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
	try {
		const user = await User.findById(req.params.id)

		const {password, ...others} = user._doc;

		res.status(200).json(user);
	} catch (err) {
		next(err)
	}
}

export const subscribe = async (req, res, next) => {
	try {
	  	await User.findByIdAndUpdate(req.user.id, {
			$push: { subscribedUsers: req.params.id },
	  	});
	  	await User.findByIdAndUpdate(req.params.id, {
			$inc: { subscribers: 1 },
	  	});
	  	res.status(200).json("Subscription successfull.")
	} catch (err) {
	  next(err);
	}
};


export const unsubscribe = async (req, res, next) => {
	try {
		await User.findByIdAndUpdate(req.user.id,{
			$pull:{subscribedUsers: req.params.id}
		});

		await User.findByIdAndUpdate(req.params.id,{
			$inc:{subscribers: -1}
		});

		res.status(200).json("Unsubscription successful.")

	} catch (err) {
		next(err)
	}
}

export const likeVideo = async (req, res, next) => {
	
}

export const dislikeVideo = async (req, res, next) => {
	
}