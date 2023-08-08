
///////////////////////////////
// Dependencies
////////////////////////////////
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
// create application object
const app = express();
const Exercise = require('./models/exercises.js')
const User = require('./models/user.js')
const Hep = require('./models/hep.js')
///////////////////////////////
// Application Settings
////////////////////////////////
require('dotenv').config();

const { PORT = 3001, DATABASE_URL } = process.env;


///////////////////////////////
// Mount Middleware
////////////////////////////////
mongoose.connect(DATABASE_URL);
// Mongo connection Events
mongoose.connection
  .on('open', () => console.log('You are connected to MongoDB'))
  .on('close', () => console.log('You are disconnected from MongoDB'))
  .on('error', (error) => console.log(`MongoDB Error: ${error.message}`));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

///////////////////////////////
// Mount Routes
////////////////////////////////

// create a test route
app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/exercises', async (req, res) => {
  try {
    res.status(201).json(await Exercise.find({}));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});

app.get('/heps', async (req, res) => {
  try {
    res.status(201).json(await Hep.find({}));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    res.status(201).json(await User.find({ id: req.params.id }));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});

app.get('/exercises/:bodyArea', async (req, res) => {
  try {
    const exercises = await Exercise.find({ bodyArea: req.params.bodyArea });
    res.status(200).json(exercises);
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

app.get('/exercise/:_id', async (req, res) => {
  try {
    console.log(req.params)
    res.status(201).json(await Exercise.find({_id: req.params._id}));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});

app.post('/exercises', async (req, res) => {
  try {
    res.status(201).json(await Exercise.create(req.body));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});

app.post('/users', async (req, res) => {
  try {
    res.status(201).json(await User.create(req.body));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});

app.post('/heps', async (req, res) => {

  try {
    res.status(201).json(await Hep.create(req.body));
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
});
//app.get("/exercises/bodyareas")

///////////////////////////////
// Tell the app to listen
////////////////////////////////
app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`);
});