const {getPost, newPost, deletePost, getSinglePost} = require("../controllers/postController")

const express = require("express");

const router = express.Router();

router.route("/new").post(newPost)
router.route("/posts").get(getPost)
router.route("/post/:id").delete(deletePost)
                        .get(getSinglePost)
module.exports = router;