const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB');
const dotenv = require('dotenv');
const contactRoutes = require('./route/contact.route');
const loginRoutes = require('./route/login.route');
const signupRoutes = require('./route/singup.route');

//const errorHandler = require('express-error-handler');

dotenv.config();
const app = express();
const port = process.env.PORT || 2000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);
app.use('/contact', contactRoutes);
 

// Error handling middleware
//app.use(errorHandler);

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database is connected ' + config.DB);
}).catch((err) => {
  console.error('Cannot connect to the database ' + err);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
