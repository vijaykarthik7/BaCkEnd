
const express=require('express');// express library is imported on the express variable
const app=express();// making the express functionality into the app variable
app.set('view engine','ejs');
app.get('/',(req,res)=>{ //app.get is sused for the url getting and the host number
    console.log("Hi");

    // res.status(500).send("Hello You Got an Error")// to check the status
    // res.status(200).send({message:"Hai"});
    // res.json({express:"Learning Express"});
    // res.send("Ha");
    res.render("index",{text:"Helo"});
    // res.send("Hllo")
});
const userRoute=require('./routes/user');
app.use('/user',userRoute)// here '/user' mentions that no need mention the /user in user code alone



app.listen(3000);// app will run in host 3000 app will listen for that