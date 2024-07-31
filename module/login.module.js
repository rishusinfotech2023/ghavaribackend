const mongoose = require("mongoose");

const {Schema}= mongoose;

let user = new Schema({
    email:{
        type: String
    },
    password:{
        type: String
    }
},
{
    collection: "login"
});
module.exports= mongoose.model("login",user);