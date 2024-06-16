const mongoose = require ("mongoose"); 

const petShelterSchema = new mongoose.Schema( { 
    shelterName: { 
        type: String, 
        required: true,
    },
    address: {
        type:String, 
        required: true,
    }, 
    contactNumber: {
        type:String, 
        required:true, 
    },
}); 

const PetShelter = mongoose.model("PetShelter", petShelterSchema); 

module.exports = PetShelter; 