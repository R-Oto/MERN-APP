import express from 'express'
import { createPost, getPosts, deletePost, updatePost } from '../controllers/postControllers.js';
const router = express.Router()

router.get("/", getPosts)
router.post("/", createPost)
router.delete("/:id", deletePost)
router.put("/:id", updatePost)

export default router;