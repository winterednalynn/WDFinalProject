const express = require ("express"); 
const Prouter = express.Router(); 
const petController = require ("../CONTROLLERS/petController"); 

Prouter.get("/pet", petController.allPets);  //View all pets 

Prouter.get("/pet/:breed", petController.findPetByBreed); //Find by breed 

Prouter.post("/pet", petController.registerPet);  // Add pet for adoption 

Prouter.put("/pet/:id", petController.updatePet); //Update Profile , eg : Available , not available for adoption / neuter / spayed / not fixed 

Prouter.delete("/pet/:id", petController.deletePetProfile); //Delete Pet Profile 

Prouter.get("/pet/:id", petController.findPetById)

module.exports = Prouter; 