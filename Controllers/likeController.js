//import the Model

const Post = require("../Models/postModel");

const Like = require("../Models/likeModel");

//logic

exports.createLike = async (req,res)=>{
    try{

        const {post, user}= req.body;

        const like= new Like({

            post, user
        });

        const savedLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post , {$push : {likes : savedLike} },{new:true}
            ).populate("likes").exec();


            res.json({
                post: updatedPost,
            });
    }
   catch(error) {
    return res.status(500).json({
        error:"error occured"
    })
   }
}

exports.unlikePost = async (req, res)=>{
        try{
            const {post, like} =req.body;
            const deleteLike = await Like.findOneAndDelete({post:post, _id:like});

            const updatedPost = await Post.findByIdAndUpdate(post, {$pull :{like: deleteLike._id}}, {new:  true});

            res.json({
                post:updatedPost,
            });
        }
        catch(error){
            return res.status(500).json({
                error:"error occured"
            })
        }
}