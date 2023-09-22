const express=require("express")
const homeRouter=express.Router()
const {HomeModel}=require("../model/home.model")
const jwt=require("jsonwebtoken")

homeRouter.get("/",async(req,res)=>{
    
   const token=req.headers.authorization.split(" ")[1]
   
    if(!token){
        res.status(400).send({"msg":"Do login first"})
    }else{
        try{
            const decoded=jwt.verify(token,"masai")
            if(decoded){
              //  const notes=await HomeModel.find({"userID":decoded.userID})
                res.status(200).send({"msg":"Welcome to Homepage"})
            }
        } catch(err){
            res.status(400).send({"msg":err.message}) 
        }
    }
    
})

module.exports={
    homeRouter
}