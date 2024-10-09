import Post from "../models/postModels.js";

export const getPosts = async (req,res) => {
    try{
        const posts = await Post.find()
        return res.status(200).json({posts})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

export const createPost = async (req,res)=>{
    const {title,body} = req.body;

    if(!title || !body){
        return res.status(400).json({error: "All fields are required"})
    }

    try{
        const post = await Post.create({title, body})
        res.status(201).json({success: "Post created", post})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}