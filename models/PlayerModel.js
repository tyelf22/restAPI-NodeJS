const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

// Define Mongoose Schema
const PlayerModel = new Schema({
    firstname: String,
    lastname: String,
    team: String,
    height: String,
    weight: Number,
    age: Number
})

module.exports = Mongoose.model('person', PlayerModel)