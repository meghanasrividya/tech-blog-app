const express = require('express');
const { createPost, getPosts, getPostsByCategory, updatePost, deletePost } = require('../controllers/postController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.post('/', authenticate, createPost);
router.get('/', getPosts);
router.get('/:category', getPostsByCategory);
router.put('/:id', authenticate, updatePost);
router.delete('/:id', authenticate, deletePost);

module.exports = router;