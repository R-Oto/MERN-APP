import User from "../models/userModels.js"

export const registerUser = async (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({error: "All fields are required"})
    }

    const exists = await User.findOne({email})
    if(exists){
        return res.status(400).json({error: "email is taken"})
    }

    try{
        const user = await User.create({email, password})
        return res.status(201).json({email})
    }catch(error){
        console.error(error);
        return res.status(500).json({error:error.message})
    }
}

export const loginUser = async (req,res) => {

}