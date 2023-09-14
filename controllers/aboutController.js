// importing path module
const path = require('path');


// creating controller for about page
const aboutController = (req, res) => {
    // Sending basic html in response
    // res.send('<h1>About Page</h1>');


    // creating absolute path for index.html
    console.log(path.join(process.cwd(), 'views', 'about.html'));

    //Sending HTML file in response
    res.sendFile(path.join(process.cwd(), 'views', 'about.html'));
}

// exporting about controller in old way
module.exports = aboutController;