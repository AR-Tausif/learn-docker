const express = require('express')
const userController = require('../controllers/controller.user.js')
const router = express.Router()

 router.get("/", userController.getAllUsersFromDB)

const userRoutes = router;
module.export =userRoutes;