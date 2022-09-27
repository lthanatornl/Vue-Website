const Post = require("../models/posts");

module.exports = class API{
    //fetch all post
    static async fecthAllPost(req,res){
        try{
            const posts = await Post.find();    
            res.status(200).json(posts);
        } catch (err){
            res.status(404).json({message: err.massage});
        }
    }
    //By ID
    static async fecthPostByID(req,res){
        const id = req.params.id;
        try{
            const post = await Post.findById(id);
            res.status(200).json(post);
        }catch(err){
            res.status(404).json({message: err.massage});
        }
    }
    //Create Post
    static async createPost(req,res){
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;
        try{
            await Post.create(post);
            res.status(201).json({message: "Post created"});
        }catch (err){
            res.status(400).json({message: err.massage});
        }
    }
    //Update Post
    static async updatePost(req,res){
        const id = req.params.id;
        let new_image = "";
        if (req.file){
            new_image = req.file.filename;
            try{
                FileSystem.unlinkSync('./uploads/' + req.body.old_image);
            }catch (err){
                console.log(err);
            }
        }else{
            new_image = req.body.old_image;
        }
        const newPost = req.body;
        newPost.image = new_image;

        try{
            await Post.findByIdAndUpdate(id, newPost);
            res.status(200).json({message: 'Post Updated'});
        }catch (err){
            res.status(400).json({message: err.massage});
        }
    }
    //delete post
    static async deletePost(req,res){
        const id = req.params.id;
        try{
            const result = await Post.findByIdAndDelete(id);
            if(result.image != ''){
                try{
                    FileSystem.unlinkSync('./uploads/'+result.image);
                }catch(err){
                    console.log(err);
                }
            }
            res.status(200).json({message: 'Post Deleted'});
        }catch(err){
            res.status(404).json({message: err.message});
        }
    }
}