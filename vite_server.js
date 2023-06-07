// Require modules
const express = require('express');
const path = require('path');

// Create the Express app
const app = express();

// Configure the app (app.set)
app.use(express.static(path.join(__dirname, 'my_vite_app/dist')));


// Mount middleware (app.use)


// Mount routes
app.get('/', function(req, res) {
    res.set('Content-Type', 'text/html')
  	res.json({data: "I am a string"});
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});