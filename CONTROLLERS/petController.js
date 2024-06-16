
// Prompt model for pet 
const Pet = require ("../MODELS/petModel"); 


//Create Pet // POST 
const registerPet = async (req, res) => { 
    try{ 
        console.log(req.body);
        const pets = new Pet (req.body); 
        await pets.save(); 
        res.send(pets); // send pets data back to "client" as response 
    }
    catch(error) { 
        res.status(500).send(error); // 500: something went wrong 
    }
}; 

// QUEUE ALL PET // GET 
const allPets = async (req, res) => { 
    try { 
        const pets = await Pet.find({}).populate([ {path: "shelter", select: "shelterName"}, {path: "owner", select: "name"}]);  // Empty bracket to prompt all pets && resorting utilizing .Populate to display name of shelter that the available pet is in. Included owner if pet is unavailable
        res.send(pets);
    }
    catch (error) { 
        res.status(500).send(error); // 500: something went wrong 
    }
}; 
// QUEUE BY BREED // GET 
const findPetByBreed = async (req, res) => { 
    try {
        const pets = await Pet.find({breed: req.params.breed}); 
        res.send(pets); 
    }
    catch(error) { 
        res.status(500).send(error); // 500: something went wrong 
    }
}; 
//QUEUE BY ID  //  GET / iD 
const findPetById = async(req,res) => { 
    try { 
        const pets = await Pet.findById(req.params.id)
        res.send(pets); 
    }
    catch(error) { 
        res.status(500).send(error); // 500: something went wrong 
    }
}; 
//UPDATE PET // PUT 
const updatePet = async (req, res) => {
    try {
        const petData = req.body; 
        const pets = await Pet.findByIdAndUpdate(
            req.params.id,
            petData, 
            {new : true}
        ); 
        res.json(pets); 
    }
    catch(error) {
        res.status(500).json({message:error.message}); // 500: something went wrong 
    }
}; 

//DELETE 

const deletePetProfile = async (req, res) => { 
    try { 
        const pets = await Pet.findByIdAndDelete(req.params.id); 
        res.json(pets); 
    }
    catch(error) { 
        res.status(500).json ({message:error.message}); // 500: something went wrong 
    }
}; 

module.exports = { 
    registerPet, allPets, findPetByBreed, updatePet, deletePetProfile, findPetById
}; 