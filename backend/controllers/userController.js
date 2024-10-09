import User from "../models/userModels.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//create jwt
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT, { expiresIn: "10d" })
}

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
        const token = createToken(user._id)
        return res.status(201).json({email, token})
    }catch(error){
        console.error(error);
        return res.status(500).json({error:error.message})
    }
}

export const loginUser = async (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({error: "All fields are required"})
    }

    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({error: "email is taken"})
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match){
        return res.status(400).json({error: "Incorrect password"})
    }

    try{
        const token = createToken(user._id)
        return res.status(200).json({email, token})
    }catch(error){
        return res.status(500).json({error:error.message})
    }
}