import jwt from "jsonwebtoken";
const secret="Shreesh10#"

export function setUser( user) {
 
   return jwt.sign({
    _id:user._id,
    username:user.username,
    email:user.email,
    country:user.country,
    city:user.city,
    phone:user.phone,
    isAdmin:user.isAdmin,
    
   },secret);
}

export function getUser(token) {
    if(!token)return null;
    try {
        return jwt.verify(token,secret);
    } catch (error) {
        return null;
    }
  
}
