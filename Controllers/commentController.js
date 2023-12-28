//Controllers are dependent on model 

const Post = require("../Models/postModel");

const Comment = require("../Models/commentModel");

//logic

exports.createComment = async (req,res)=>{
    try{
        //creating comment using the save fun
        //fetch the data from the req body
        const {post, user, body}= req.body;
        //create a comment obj
        const comment = new Comment({
            post,user,body
        });

        //obj to save to the Db

        const savedComment= await comment.save();
        //find the post by ID, add the new comment to its comments array
const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id}},{new:true}
                ).populate("comments").exec();


        res.json({
            post: updatedPost,
        });
    }

    catch(error){
        return res.status(500).json({
            error:"error occured"
        })
    }
}