import jwt from "jsonwebtoken";
const secret="Shreesh10#"

const sessionIdToUserMap = new Map();

export function setUser( user) {
 
   return jwt.sign({
    _id:user._id,
    username:user.username,
    email:user.email,
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
