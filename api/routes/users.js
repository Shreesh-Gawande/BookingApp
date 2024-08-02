import express from "express"
import {  deleteUser, getallUser, getUser, updateUser } from "../controllers/user.js";

const router =express.Router();
//update
router.put("/:id",updateUser)

//delete
router.delete("/:id",deleteUser)

//Get
router.get("/:id",getUser)

//Get All
router.get("/",getallUser)

export default router;