const mongoose=require("mongoose")

//home schema
const homeSchema=mongoose.Schema({
    title: String,
    body: String,
    sub: String,
    userID: String
},{
    versionKey:false
})

const HomeModel=mongoose.model("home",homeSchema)

module.exports={
    HomeModel
}