const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());

app.get("/user", (req,res)=>{
    const {email, password} = req.body;
    if(!email){
        res.json({message: "Email cannot be empty"});
    }
    if(!password){
        res.json({message: "Password cannot be empty"});
    }
    const user = {
        email,
        password
    };
    res.json({message: "Success", data: user});
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${process.env.PORT}`);
});
