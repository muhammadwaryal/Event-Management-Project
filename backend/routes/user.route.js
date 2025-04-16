import express  from "express";
import { getProfileById, login, logout, register, updateProfile, updateProfileWithoutId } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import  {singleUpload} from "../middlewares/multer.js";
const router = express.Router();


router.route('/register').post(singleUpload,register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/update/profile').post(singleUpload,isAuthenticated,updateProfileWithoutId);
router.route('/update/profile/:id').post(isAuthenticated,updateProfile);
router.route('/profile/:id').get(getProfileById);
//update profile ma singleupload aaega

export default router;