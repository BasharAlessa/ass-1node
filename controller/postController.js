const post = require("../model/postModel")

const getAllPost= (req,res)=>{
    post.find()
    .then(result => res.render('homePage', {posts :result}))
    .catch (err => console.log(err))
}


const deletOnePost =(req , res)=>{

}
const creatNewPost= (req, res)=>{
    let newPost = new post(req.body)
    newPost.save()
    .then(()=>{res.redirect("/homePage")})
    .catch( err=> console.log(err))
}

module.exports={
    creatNewPost,
    getAllPost,
    deletOnePost
}