import jwt from "jsonwebtoken";
import User from "../models/userModels.js";

const auth = async (req,res,next) => {
    const {authorization} = req.headers;

    if(!authorization){
        return res.status(401).json({error: "Authorization token not found"})
    }

    const token = authorization.split(" ")[1]

    try{
        const { _id } = jwt.verify(token, process.env.JWT)

        //save user
        req.user = await User.findById(_id).select("_id")
        next()
    }catch(error){
        return res.status(401).json({error:error.message})
    }
}

export default auth;