const mongoose = require("mongoose");

const {Schema}= mongoose;

let user = new Schema({
    name:{
        type: String
    },
   
    number:{
        type: Number
    },
    email:{
        type: String
    },
    message:{
        type: String
    }
},
{
    collection: "contact"
});
module.exports= mongoose.model("contact",user);