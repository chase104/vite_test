// Require modules
const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet')
require('dotenv').config();
require('./config/database.js');
const Fruit = require('./models/Fruit.js')

// Create the Express app
const app = express();

app.use(cors({origin: "*"}));
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());


// Configure the app (app.set)
app.use(express.static(path.join(__dirname, 'client/dist')));
// app.use(express.static(path.join(__dirname, 'my_vite_app/dist')));
// Mount middleware (app.use)

// let myCar = {
//   make: "Hyundai",
//   model: "sonata",
//   year: 2009,
//   owners: ["jake", "Sarah", "Darren"],
//   color: "green",
//   currentOwner: {
//     name: "Chase",
//     age: 28
//   }
// }

// // Schemas (structure of our data)
// carsSchema = {
//   make: String,
//   model: String,
//   year: Number,
//   owners: Array[Strings],
//   color: String,
//   CurrentOwner: OwnerObjectSchema
// }

// ownerSchema = {
//   name: String,
//   age: Number
// }



app.get('/extra_data', (req, res) => {
  console.log(process.env.SECRET)
  res.send(process.env.SECRET);

})

// GET /movies/favorite
app.post('/user', (req, res) => {
  res.send("hitting user route")
})

app.get('/movies/favorite', (req, res) => {
  let movieId = req.params.movieId;
  console.log(movieId);
  res.status(200).send("titanic")

});
app.get('/movies/:movieYear/:name', (req, res) => {
  let { movieYear, name } = req.params;
  console.log(movieYear, name);
  let limit = req.query.limit;
  let rating = req.query.rating;
  res.status(200).send("titanic")

});

app.post('/movie', (req, res) => {
    console.log("req.body ", req.body);
})

app.post('/friends', (req, res) => {
    console.log("req.body ", req.body);
    User.create(req.body)
})

app.get('/fruits', async (req, res) => {
  res.send("good fruits")
});

app.post('/fruits', async (req, res) => {
  res.send("fruits good")
})


// Tell the app to listen on port 3000
app.listen(4001, function() {
 console.log('Listening on port 4001');
});