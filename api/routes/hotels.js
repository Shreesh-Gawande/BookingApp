import express from "express"

import { createHotel, deleteHotel, getallHotel, getHotel, updateHotel } from "../controllers/hotel.js";
const router =express.Router();


//create
router.post("/",createHotel)

//update
router.put("/:id",updateHotel)

//delete
router.delete("/:id",deleteHotel)

//Get
router.get("/:id",getHotel)

//Get All
router.get("/",getallHotel)

export default router;