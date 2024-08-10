import express from "express"


import {  verifyAdmin } from "../utils/auth.js";
import { createRoom, deleteRoom, getallRoom, getRoom, updateRoom } from "../controllers/room.js";
const router =express.Router();


router.post("/:hotelId",verifyAdmin,createRoom)

//update
router.put("/:id",verifyAdmin,updateRoom)

//delete
router.delete("/:id/:hotelId",verifyAdmin,deleteRoom)

//Get
router.get("/:id",getRoom)

//Get All
router.get("/",getallRoom)

export default router;