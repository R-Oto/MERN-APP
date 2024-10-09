import mongoose from "mongoose";
import Post from "../models/postModels.js";
import User from "../models/userModels.js";

export const getPosts = async (req,res) => {
    try{
        const posts = await Post.find()
        return res.status(200).json({posts})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

export const getUserPosts = async (req,res) => {

    const user = await User.findById(req.user._id)

    try{
        const userPosts = await Post.find({user: user._id})
        return res.status(200).json({userPosts})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

export const createPost = async (req,res)=>{
    const {title,body} = req.body;

    if(!title || !body){
        return res.status(400).json({error: "All fields are required"})
    }

    const user = await User.findById(req.user._id)

    try{
        const post = await Post.create({user: user._id, title, body})
        res.status(201).json({success: "Post created", post})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

export const deletePost = async (req,res)=>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({error: "Incorrect Id"})
    }
    const post = await Post.findById(req.params.id)
    
    if (!post){
        return res.status(400).json({error: "Post not found"})
    }

    const user = await User.findById(req.user._id)
    if(!post.user.equals(user._id)) {
        return res.status(401).json({error: "not authorized"})
    }

    try{
        await Post.deleteOne()
        return res.status(200).json({success: "Post was deleted"})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

export const updatePost = async (req,res)=>{
    const {title,body} = req.body;

    if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        return res.status(400).json({error: "Incorrect Id"})
    }

    const post = await Post.findById(req.params.id)
    
    if (!post){
        return res.status(400).json({error: "Post not found"})
    }

    if(!title || !body){
        return res.status(400).json({error: "All fields are required"})
    }

    const user = await User.findById(req.user._id)
    if(!post.user.equals(user._id)) {
        return res.status(401).json({error: "not authorized"})
    }

    try{
        await post.updateOne({title, body})
        return res.status(200).json({success: "Post was updated"})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}