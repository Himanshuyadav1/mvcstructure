const express = require('express'); // Importing express
const port = process.env.port || 4000; // getting port number from .env file or providing default port
// importing path module
const path = require('path');

// importing route in old way
const route = require('./routes/web');

// initializing the server
const app = express(); 

// using router for routes
app.use('/', route);

// using static files
// app.use(express.static('public')); // declairing public directry as a static directry for all static files
//app.use('/static',express.static('public')); // for virtual path prefix, we also have to use that prefix with static file path where we are using that files

// Correct way using static files with absolute path
app.use(express.static(path.join(process.cwd(), 'public')));


// listening server
app.listen(port, () => {
    console.log(`your server is running at http://localhost:${port}`);
});