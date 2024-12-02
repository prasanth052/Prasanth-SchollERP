const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const dbconnect=require('./config/dbconnect')
const app = express();

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

dbconnect()
 app.use(express.json())

var product = require('./routes/product');
app.use('/product', product)

var order = require('./routes/order');
app.use('/order', order)

// Start the server
app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
});


// First create Folder and Create Backend Folder
// PACKAGES WANT TO  INSTALL 
   // 1.Install npminit
   // 2. nodemon
   // 3. express
   // 4. dotenv
   // 5. mongoose

// Create startup file with name like index.js or connection .js

// Update nodemon in package.json file 
     // main: startup file like index.js or connection .js
     // "scripts": {
            // "build": "ncc build index.js -o dist",
            // "start": "nodemon index.js",
            // "server": "nodemon app --ignore './client/'"
     // },

// Server Listing
// Create folder Inside the Backend config folder
    // Inside config folder create file config.env 
    // Inside config folder create PORT and  dbconnect.js 
        // PORT file for URL using in other file like PORTNO 
        // dbconnect.js file for connect database using mongoose

// Create Folder Controllers for Api 
// Create Folder Models for Database Schemma
// Create Folder Routes for API Routing


