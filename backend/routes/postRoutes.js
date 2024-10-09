import express from 'express'
import { createPost, getPosts, deletePost, updatePost } from '../controllers/postControllers.js';
import auth from '../middlewares/auth.js';
const postRoutes = express.Router()

postRoutes.get("/", getPosts)
postRoutes.post("/", auth, createPost)
postRoutes.delete("/:id", deletePost)
postRoutes.put("/:id", updatePost)

export default postRoutes;
