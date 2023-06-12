// Require modules
const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config()
// Create the Express app
const app = express();

app.use(cors({origin: "*"}))

// Configure the app (app.set)
app.use(express.static(path.join(__dirname, 'client/dist')));
// app.use(express.static(path.join(__dirname, 'my_vite_app/dist')));
// Mount middleware (app.use)



app.get('/extra_data', (req, res) => {
  console.log(process.env.SECRET)
  res.send(process.env.SECRET);

})
// Tell the app to listen on port 3000
app.listen(4001, function() {
 console.log('Listening on port 4001');
});