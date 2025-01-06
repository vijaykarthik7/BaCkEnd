import mongoose from "mongoose";
//Defining datas here
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true  //This is mandatory if no required mentioned then it is default it takes false
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        
    }

});
export default mongoose.model("users",userSchema)  //users are the collection of database created in db