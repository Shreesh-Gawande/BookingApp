import express from "express"

import { createHotel, deleteHotel, getallHotel, getHotel, updateHotel } from "../controllers/hotel.js";
import {  verifyAdmin } from "../utils/auth.js";
const router =express.Router();


//create
router.post("/",verifyAdmin,createHotel)

//update
router.put("/:id",verifyAdmin,updateHotel)

//delete
router.delete("/:id",verifyAdmin,deleteHotel)

//Get
router.get("/:id",getHotel)

//Get All
router.get("/",getallHotel)

export default router;