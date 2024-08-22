
import Hotel from "../models/Hotel.js"
export const createHotel =async(req,res,next)=>{
    const newHotel= new Hotel(req.body)

    try {
        const saveHotel =await newHotel.save()
        res.status(200).json(saveHotel)
    } catch (error) {
        next(error);
        
    }
}

export const updateHotel =async(req,res,next)=>{
   
    try {
        const updatedHotel =await Hotel.findByIdAndUpdate(req.params.id , { $set: req.body},{new:true})
        res.status(200).json(updatedHotel)
        console.log(updatedHotel)
    } catch (error) {
        next(error);
        
    }
}

export const deleteHotel =async(req,res,next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id )
        res.status(200).json("Hotel has been deleted")
        console.log("Hotel deleted")
    } catch (error) {
        next(error);
        
    }
}

export const getHotel =async(req,res,next)=>{
    try {
        const hotel =await Hotel.findById(req.params.id )
        res.status(200).json(hotel)
        
    } catch (error) {
        next(error);
        
    }
}

export const getallHotel =async(req,res,next)=>{
    try {
        const Hotels =await Hotel.find(req.params.id )
        res.status(200).json(Hotels)
        
    } catch (error) {
        next(error);
        
    }
}


export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };

  export const countByType = async (req, res, next) => {
   
    try {
        const hotelCount = await Hotel.countDocuments({type:"hotel"});
        const apartmentCount = await Hotel.countDocuments({type:"apartment"});
        const resortCount =await Hotel.countDocuments({type:"resort"});
        const villaCount =await Hotel.countDocuments({type:"villa"});
        const cabinCount =await Hotel.countDocuments({type:"cabin"});
     
      res.status(200).json([
        {type: "hotel", count:hotelCount},
        {type: "apartment", count:apartmentCount},
        {type: "resort", count:resortCount},
        {type: "villa", count:villaCount},
        {type: "cabin", count:cabinCount},
      ]);
    } catch (err) {
      next(err);
    }
  };



