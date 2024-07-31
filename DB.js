const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config();

const DB_URI=process.env.DB;

module.exports={
    DB:DB_URI
};