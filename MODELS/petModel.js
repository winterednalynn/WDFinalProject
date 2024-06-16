const mongoose = require("mongoose"); 

const petSchema = new mongoose.Schema({
    name: { 
        type:String, 
        required: true, 
    }, 
    age:{
        type:Number, 
        required: true, 
    },
    breed: { 
        type: String, 
        required:true, 
    }, 
    gender: { 
        type: String, 
        required: true, 
    }, 
    size: {
        type:String, 
        required: true, 
    },
    shelter: { 
      type:mongoose.Schema.Types.ObjectId, 
       ref: "PetShelter",
       required:true, 
    
    },
     status: {
        type: String, 
        required: true,
     }, 
     owner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
     }, 



}); 

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet; 

