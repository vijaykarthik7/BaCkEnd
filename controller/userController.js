import users from '../model/usermodel.js';
export const fetch=async(req,res)=>{// create
    try{
      let userdata=new users(req.body);
      const{email}=userdata;
      const userExist=await users.findOne({email});
      if(userExist){
        return res.status(400)
      }
      const saveduser = await userdata.save();
      res.status(200).json(saveduser)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server errors"})
    }
}
export const getData=async(req,res)=>{
    try{
      const userdata = await users.find();
      res.status(200).json(userdata);

    }
    catch(err){
        res.status(500).json({error:"internal server errors"})
    }
}
export const datas=async(req,res)=>{
    try{
    const id=req.params.id;
    const userExist=await users.findOne({_id:id});
    if(!userExist){
        return res.status(400);
    }
    res.status(200).json(userExist);
}
catch(err){
    res.status(500)
}
}

export const update=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await users.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User not found"});
        }
        const updateUser=await users.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({updateUser});
    }
    catch(err){
        res.status(500).json({error:"internal server error"});
    }
}

export const deleteUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const userExist=await users.findOne({_id:id});
        if(!userExist){
            return res.status(404).json({message:"User Not found"});

        }
        await users.findByIdAndDelete(id);
        res.status(200).json({message:"User deleteed"});
    }
    catch(err){
        res.status(500).json({error:"internal server error"});
    }
}