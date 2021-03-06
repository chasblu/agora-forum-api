//mongo atlas connection 
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const PORT = process.env.PORT || 8000;



// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

//middleware

// app.use(cors());

// app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// Connect to Mongo
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
},  function (err, res) {
        try {
            console.log('Connected to Database');
        } catch (err) {
            throw err;
        }
    })
// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is Mongodb not running?'));
db.on('connected', () => console.log('mongo connected at: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

//seeding the db

// const seedData = require('../db/seed')
// Forum.findOneAndUpdate(seedData, (err, forum) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log('added provided forum data', forum);
// 	db.close();
// });


// Open the Connection
db.on('open', () => {
	console.log('✅ mongo connection made!');
});
// now, our mongoose instance has a configured connection to our local db, in addition
// to its model configuration
module.exports = mongoose;
