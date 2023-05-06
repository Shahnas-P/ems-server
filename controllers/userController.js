const users = require("../models/userSchema");

// register logic 
 exports.usersRegister =async (req,res)=>{
    const file = req.file.filename
    const {fname,lname,email,mobile,gender,status,location}=req.body 
    if(!fname || !lname || !email || !mobile || !gender ||!status ||!location){
        res.status(403).json("All inputs required !!!")
    }
    try{
        const preuser = await users.findOne({email})
        if(preuser){
            res.status(403).json("User already exist in our database")
        }else{
            const newuser =new users({
                //this will store data in mongoose not in mongodb
                fname,lname,email,mobile,gender,status,profile:file,location
            })
            //while calling save() then only data store in mongodb
            await newuser.save()
            res.status(200).json(newuser)
        }

    }catch(error){
        //this means that error in try{}
        res.status(401).json(error)
    }
 }