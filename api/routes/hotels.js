import express from "express"
import Hotel from "../models/Hotel.js"
const router =express.Router();


//create
router.post("/",async (req,res)=>{
    const newHotel= new Hotel(req.body)

    try {
        const saveHotel =await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        res.status(500).json(error);
        
    }
})

//update
router.put("/:id",async (req,res)=>{

    try {
        const updatedHotel =await Hotel.findByIdAndUpdate(req.params.id , { $set: req.body},{new:true})
        res.status(200).json(updatedHotel)
        console.log(updatedHotel)
    } catch (error) {
        res.status(500).json(error);
        
    }
})

//delete
router.delete("/:id",async (req,res)=>{

    try {
        await Hotel.findByIdAndDelete(req.params.id )
        res.status(200).json("Hotel has been deleted")
        console.log("Hotel deleted")
    } catch (error) {
        res.status(500).json(error);
        
    }
})

//Get
router.get("/:id",async (req,res)=>{

    try {
        const hotel =await Hotel.findById(req.params.id )
        res.status(200).json(hotel)
        
    } catch (error) {
        res.status(500).json(error);
        
    }
})

//Get All
router.get("/",async (req,res)=>{

    try {
        const Hotels =await Hotel.find(req.params.id )
        res.status(200).json(Hotels)
        
    } catch (error) {
        res.status(500).json(error);
        
    }
})

export default router;