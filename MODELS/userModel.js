const mongoose = require ("mongoose"); 


const userSchema = new mongoose.Schema( { 
    name: { 
        type: String, 
        required: true, 
    }, 
    email: { 
        type: String, 
        required: true, 
        unique: true, 
    }, 
    livingsituation: {
        type: String, 
        required: true, 
    }, 
    address:{ 
        type:String, 
        required:true, 
    }, 
    experiencewithpets: {
        type:String,
    },

}); 


const User = mongoose.model("User", userSchema); 

module.exports = User; 
