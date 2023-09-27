import express from "express";
import { userprofile } from "../controllers/profile.js";
import { userProfilePhoto } from "../Utility/multer.js";



//router init
const router = express.Router();
// router setup
router.post("/profile" ,userProfilePhoto, userprofile)
// router exports
export default router 