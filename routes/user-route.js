import express from 'express';
import userController from '../controllers/controller.user.js';
const router = express.Router();

console.log(userController)
router.get("/", userController.getAllUsersFromDB);
router.post("/create-user", userController.createUserIntoDB);

const userRoutes = router;
export default userRoutes; // Fixed: module.export => module.exports
