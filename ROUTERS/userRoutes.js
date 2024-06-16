const express = require("express"); 

const router = express.Router(); 

const userController = require("../CONTROLLERS/userController"); 


router.post("/user", userController.registerUser); 
router.get("/user", userController.listUsers); 
router.get("/user/:id", userController.locatebyUserId); 


module.exports = router; 