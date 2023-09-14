// creating controller for home page
const homeController = (req, res) => {
    // Sending basic html in response
    res.send('<h1>Home Page</h1>');
}

// exporting home controller in old way
module.exports = homeController ;