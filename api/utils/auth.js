import { getUser } from './verifyToken.js';

export async function restrictToLogesInUsersOnly(req, res, next) {
    
    const userUid = req.cookies?.uid;

    if (!userUid) return res.send("User Id not found");

    const user = getUser(userUid);

    if (!user) return res.send("User is not found");

    req.user = user;
    next();
}
