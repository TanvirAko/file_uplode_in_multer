import express from "express";
import { userpostphoto } from "../controllers/post.js";
import { userpostphotos } from "../Utility/multer.js";
//router setup 
const router = express.Router();

router.post("/post",userpostphotos, userpostphoto)


// router export
export default router;