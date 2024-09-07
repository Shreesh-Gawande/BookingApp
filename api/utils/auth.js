
import { createError } from './error.js';
import { getUser } from './verifyToken.js';

export const verifyAdmin = (req, res, next) => {
    restrictToLogesInUsersOnly(req, res,next, () => {
        if (req.user.isAdmin) {
            next(); 
        } else {
            return next(createError(403, "Access denied. Admins only."));
        }
    });
};

export async function restrictToLogesInUsersOnly(req, res, next) {
    
    const userUid = req.cookies?.uid;

    if (!userUid) return res.send("User Id not found");

    const user = getUser(userUid);
    

    if (!user) return res.send("User is not found");

    req.user = user;
    next();
}
