const express = require('express');
const Router = express.Router();
const contactcontroller = require('../controller/contact'); 

Router.get('/', contactcontroller.getalluser); 
Router.post('/', contactcontroller.contact); 


module.exports = Router;
