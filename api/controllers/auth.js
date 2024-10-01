
import User from '../models/User.js';
import { setUser } from '../utils/verifyToken.js';

export const register = async (req, res, next) => {
    const { username, email, password, phone, city, country,isAdmin } = req.body;
    await User.create({
        username,
        email,
        password,
        phone,
        city,
        country,
        isAdmin
    });
    return res.redirect("/");
};

export const login = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) return res.status(404).send("Invalid email or password");

   const token= setUser( user);
    res.cookie("uid", token);
    return  res.status(200).json({
        id: user._id,
        username: user.username,
        createdAt: user.createdAt,
      });
};
