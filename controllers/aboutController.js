// creating controller for about page
const aboutController = (req, res) => {
    // Sending basic html in response
    res.send('<h1>About Page</h1>');
}

// exporting about controller in old way
module.exports = aboutController;