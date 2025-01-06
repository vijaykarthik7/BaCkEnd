const express=require('express');
let router=express.Router();

router.get("/",(req,res)=>{
    res.send("UserInformation");
})
router.get("/newuser",(req,res)=>{
    res.send("new user");
})  
router.route('/:id')// the newuser can be given in the front or back also
.get((req,res)=>{
    console.log(req.usery);
    res.send("Retrieve id value"+req.params.id);
})
.put((req,res)=>{
    res.send("Updated id: "+req.params.id)
})
.delete((req,res)=>{
    res.send("Deleted id : "+req.params.id)
})
const users=[{name:"raj"},{name:"se"},{name:"hj"}];
router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery=users[id];
    next();
})

//we need to export the router
module.exports=router// here router is a variable
