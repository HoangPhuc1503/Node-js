// models/Post.js
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;


