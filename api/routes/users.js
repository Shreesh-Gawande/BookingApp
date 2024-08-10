import express from "express"
import {  deleteUser, getallUser, getUser, updateUser } from "../controllers/user.js";
import { restrictToLogesInUsersOnly, verifyAdmin } from "../utils/auth.js";



const router =express.Router();

router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
    res.send("Hellow admin you are logged in and you can delete your accounts");
})

//update
router.put("/:id",restrictToLogesInUsersOnly,updateUser)

//delete
router.delete("/:id",restrictToLogesInUsersOnly,deleteUser)

//Get
router.get("/:id",restrictToLogesInUsersOnly,getUser)

//Get All
router.get("/",verifyAdmin,getallUser)

export default router;