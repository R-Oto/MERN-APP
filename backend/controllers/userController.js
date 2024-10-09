import User from "../models/userModels.js"
import bcrypt from 'bcryptjs'

export const registerUser = async (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({error: "All fields are required"})
    }

    const exists = await User.findOne({email})
    if(exists){
        return res.status(400).json({error: "email is taken"})
    }

    const salt = await bcrypt.genSalt()
    const hashed = await bcrypt.hash(password, salt)

    try{
        const user = await User.create({email, password: hashed})
        return res.status(201).json({email})
    }catch(error){
        console.error(error);
        return res.status(500).json({error:error.message})
    }
}

export const loginUser = async (req,res) => {

}