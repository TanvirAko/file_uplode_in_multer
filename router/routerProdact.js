 import express from "express";
import { getAllprodact, getAllsengleprodact, getSengleProdact, getsengleprodactDelete } from "../controllers/prodactss.js";
import {getprodactmulter} from "../Utility/cloudMULTER.js"

 // router init 
 const router = express.Router();

// router make
// get all  PRODACT
router.get("/prodact", getAllprodact)
router.get("/prodact/:slog", getAllsengleprodact)
router.delete("/prodact/:id", getsengleprodactDelete)
// get all sengle prodact
router.post("/prodact",getprodactmulter, getSengleProdact)
 // router exports 

 export default router