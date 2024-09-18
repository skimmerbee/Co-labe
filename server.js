const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./models/User'); // Import User model

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection string
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route to register a user
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  console.log('Register request received:', { username, email, password });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Email already in use');
      return res.status(400).send('Email already in use');
    }

    const newUser = new User({ username, email, password });
    console.log('New user object before saving:', newUser); // Log new user
    await newUser.save();
    console.log('User registered successfully');
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error during registration:', error); // This will log the error to the terminal
    res.status(500).send('Error registering user');
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Login request received:', { email, password });

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      console.log('Login successful');
      res.status(200).send('Login successful');
    } else {
      console.log('Invalid email or password');
      res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Error logging in');
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
