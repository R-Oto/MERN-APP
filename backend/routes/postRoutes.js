import express from 'express'
import { createPost, getPosts, deletePost, updatePost } from '../controllers/postControllers.js';
const postRoutes = express.Router()

postRoutes.get("/", getPosts)
postRoutes.post("/", createPost)
postRoutes.delete("/:id", deletePost)
postRoutes.put("/:id", updatePost)

export default postRoutes;