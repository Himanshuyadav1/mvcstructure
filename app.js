const express = require('express'); // Importing express
const port = process.env.port || 4000; // getting port number from .env file or providing default port

// initializing the server
const app = express(); 

//making basic route from server
app.get('/', (req, res) => {
    // sending response from server to client
    res.send('Hello from server!!');  
});

// listening server
app.listen(port, () => {
    console.log(`your server is running at http://localhost:${port}`);
});