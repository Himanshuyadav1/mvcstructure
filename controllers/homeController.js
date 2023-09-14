// importing path module
const path = require('path');

// creating controller for home page
const homeController = (req, res) => {
    // Sending basic html in response
    // res.send('<h1>Home Page</h1>');

    // creating absolute path for index.html
    console.log(path.join(process.cwd(), 'views', 'index.html'));

    //Sending HTML file in response
    res.sendFile(path.join(process.cwd(), 'views', 'index.html'));
}

// exporting home controller in old way
module.exports = homeController ;