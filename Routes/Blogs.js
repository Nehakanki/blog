const express = require('express');
const router = express.Router();

const {createComment} = require("../Controllers/commentController");
const { createPost, getAllPosts } = require('../Controllers/postController');
const { createLike, unlikePost } = require('../Controllers/likeController');

//path ko controller se map
router.post("/createComment", createComment);
router.post("/createPost",createPost);
router.post("/createLike",createLike);
router.get("/getPosts",getAllPosts)

router.post("/likes/unlike", unlikePost);


module.exports = router;