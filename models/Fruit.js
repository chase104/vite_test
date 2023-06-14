const mongoose = require('mongoose')

// create a mongoose scheema
const fruitSchema = new mongoose.Schema({
    name: String,
    age: Number,
    canEat: Boolean
});


const Fruit = mongoose.model('Fruit', fruitSchema);


module.exports = Fruit;

// use the scheema to make a Model
// Model is a Mongoose tool we can use to interact with the database