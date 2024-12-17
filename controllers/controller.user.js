const userModel = require('../models/user.model.js')
const getAllUsersFromDB = async(req, res, next)=>{
	try{
		const users = await userModel.find({})
		return users
	}catch(err){
		console.log(err)
	}
}

const userController = {
	getAllUsersFromDB
}

module.export = userController;
