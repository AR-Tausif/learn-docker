import userModel from '../models/user.model.js';

const getAllUsersFromDB = async (req, res, next) => {
	try {
		const users = await userModel.find({});
		
		return res.json(users); // Ensure you send a response
	} catch (err) {
		next(err); // Pass errors to the next middleware 
	}
};

const createUserIntoDB = async (req, res, next) => {
	try {
		const {name, email, address}=req.body;
		console.log(req.body)

		const users = await userModel.create({name, email, address});
		
		return res.json(users); 
	} catch (err) {
		next(err); // Pass errors to the next middleware
	}
};

const userController = {
	getAllUsersFromDB,
	createUserIntoDB,
};

export default userController; // Fixed: module.export => module.exports
