const Post = require("../models/postModel")

exports.newPost = async (req,res,next)=>{
        const {text} = req.body;

        const posts = await Post.create({
            text,
        })
 
        const post = await Post.find()


        res.status(201).json({
            success:true,
            post
        })
}
 

//get Post 

exports.getPost = async(req,res,next)=>{
    const post = await Post.find()

    res.status(200).json({
        sucess:true,
        count : post.length,
        post
    })
}

//get single post 

exports.getSinglePost = async(req,res,next)=>{
    const post = await Post.findById(req.params.id)

    res.status(200).json({
        success:true,
        post
    })
}


//delet post 

exports.deletePost = async(req,res,next)=>{
    const posts = await Post.findById(req.params.id)

    posts.deleteOne();

    const post = await Post.find();

    res.status(200).json({
        success:true,
        message :"Post deleted successfully",
        post
    }) 
}