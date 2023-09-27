import expess from "express";
import { clouder } from "../controllers/cloud.js";
import { clouidmulter } from "../Utility/cloudMULTER.js";

// router init
const router = expess.Router();

//router make
router.post('/cloud', clouidmulter,  clouder );
// export router
export default router