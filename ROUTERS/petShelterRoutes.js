const express = require ("express"); 
const PSrouter = express.Router(); 
const shelterController = require ("../CONTROLLERS/petShelterContorller"); 

PSrouter.get("/petShelter" , shelterController.allPetShelter); //Queue all pet shelters
PSrouter.get("/petShelter/:id", shelterController.petShelterID); // Located pet shelter by ID 
PSrouter.post("/petShelter", shelterController.createpetShelter); // Create Pet Shelter information 
PSrouter.put("/petShelter/:id", shelterController.updateShelter); //Update Shelter 
PSrouter.delete("/petShelter/:id", shelterController.deleteShelter); //Delete Shelter 

module.exports = PSrouter; 