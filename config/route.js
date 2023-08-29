const express=require("express");
const route = express.Router()
const pageController =require("../controller/pageController")
const userController = require("../controller/userController")
const postController = require("../controller/postController")
route.get("/",pageController.homePage)
route.get("/about",pageController.aboutPage)

route.post("/creat-new-ueser" ,userController.createNewUser)
route.get("/get-all-users",userController.getAllUser )
route.post("/creatNewPost", postController.creatNewPost)

route.get("/get-all-post" , postController.getAllPost)
route.get("/add-new-post",postController.creatNewPost)
route.get("/delet-one-post", postController.deletOnePost)
module.exports=route