//import the Model

const Post = require("../Models/postModel");

//logic
exports.createPost = async(req, res)=>{
    try{
        const {title, body}= req.body;
        const post= new Post({
            title, body
        });
        const savedPost = await post.save();
            res.json({
                post:savedPost
            })

          

    }
    catch(error){
        return res.status(500).json({
            error:"error occured"
        })
    }
}

exports.getAllPosts = async(req,res)=>{
    try{

        const post = await Post.find().populate("likes").populate("comments").exec();

        res.json({
            post,
        })

    }
    catch(error){
        return res.status(500).json({
            error:"error occured"
        })
    }
}