import express from 'express'
import { createPost, getPosts } from '../controllers/postControllers.js';
const router = express.Router()

router.get("/", getPosts)
router.post("/", createPost)

export default router;