const petShelter = require("../MODELS/petShelterModel"); 

//Create Shelter // PUT 
const createpetShelter = async (req, res) => { 
    try {
        const shelter = new petShelter(req.body); 
        await shelter.save(); 
        res.send(shelter); 
    }
    catch(error) { 
        res.status(500).send(error); 
    }
}; 

//list Pet Shelter // GET 

const allPetShelter = async (req,res) => { 
    try{
        const shelter = await petShelter.find({}); 
        res.send(shelter); 
    }
    catch(error) { 
        res.status(500).send(error); 
    }

}; 
// GET/ID 
const petShelterID = async (req,res) => { 
    try { 
        const shelter = await petShelter.findById(req.params.id)
        res.send(shelter); 
    }
    catch (error) { 
        res.status(500).send(error); 
    }
}; 

//PUT 
const updateShelter = async (req, res) => {
    try {
        const shelter = req.body; 
        const pets = await petShelter.findByIdAndUpdate(
            req.params.id,
            shelter, 
            {new : true}
        ); 
        res.json(pets); 
    }
    catch(error) {
        res.status(500).json({message:error.message}); // 500: something went wrong 
    }
}; 

//DELETE  

const deleteShelter = async (req, res) => { 
    try { 
        const shelter = await petShelter.findByIdAndDelete(req.params.id); 
        res.json(shelter); 
    }
    catch(error) { 
        res.status(500).json ({message:error.message}); 
    }
}; 

module.exports = { 
    createpetShelter, allPetShelter, petShelterID, deleteShelter, updateShelter
}; 