import express from "express";
import { usermultipolePhoto } from "../controllers/multipole.js";
import { usermultipolePhotouplode } from "../Utility/multer.js";



//router init
const router = express.Router();
// router setup
router.post("/galary", usermultipolePhotouplode,  usermultipolePhoto )
// router exports
export default router 