import express from 'express'
import { createPost, getPosts, getUserPosts, deletePost, updatePost } from '../controllers/postControllers.js';
import auth from '../middlewares/auth.js';
const postRoutes = express.Router()

postRoutes.get("/", getPosts)
postRoutes.get("/user", auth, getUserPosts)
postRoutes.post("/", auth, createPost)
postRoutes.delete("/:id", auth, deletePost)
postRoutes.put("/:id", auth, updatePost)

export default postRoutes;
