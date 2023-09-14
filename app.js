const express = require('express'); // Importing express
const port = process.env.port || 4000; // getting port number from .env file or providing default port
// importing route in old way
const route = require('./routes/web');

// initializing the server
const app = express(); 

// using router for routes
app.use('/', route);


// listening server
app.listen(port, () => {
    console.log(`your server is running at http://localhost:${port}`);
});