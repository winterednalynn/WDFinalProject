//Bring in libraries. 
const express = require("express") ; 
const app = express (); 
const mongoose = require("mongoose"); 
const dotenv = require ("dotenv"); 

const userRoutes = require("./ROUTERS/userRoutes"); 
const petRoutes = require("./ROUTERS/petRoutes"); 
const shelterRoutes = require("./ROUTERS/petShelterRoutes"); 

const PORT = 1220;  

const cors = require("cors"); 

dotenv.config(); 

mongoose.connect(
    process.env.MY_CONNECTION_STRING); 

//Middleware - parsing to JSON requests 
app.use(express.json()); 

//CORS 
app.use(cors()); 

//
app.use(userRoutes); 
app.use(petRoutes); 
app.use(shelterRoutes); 

//Listener 

app.listen(PORT, () => console.log(`Server is up and running: http://localhost:${PORT}`));
