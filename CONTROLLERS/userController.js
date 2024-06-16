//Access to user model 
const User = require("../MODELS/userModel")

//Create User 

const registerUser  = async (req, res) => {
    try{
        const user = new User (req.body); //add to user 
        await user.save(); // prompt to save sign up user
        res.send(user); //send request to user 
    }
    catch(error) { 
        res.status(500).send(error); 
    }
}; 

const listUsers = async (req, res) => { 
    try { 
        const users = await User.find({}); //Empty bracket to queue registered users. 
        res.send(users); 
    }
    catch(error) { 
        res.status; 
    }
}; 

const locatebyUserId = async (req, res) => { 
    try { 
        const user = await User.findById(req.params.id); 
        if(!user) { 
            return res.status(404).json({message:"User not located"});  //404 = Not found 
        }
        res.status(200).json(user);  // 200 = If the user is located ; FOUND
    }
    catch (error) { 
        res.status(500).json({message:error.message}); 
    }
}; 

//Export Controllers : 
module.exports = { 
    registerUser, listUsers, locatebyUserId,
}; 

