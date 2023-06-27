const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true, 
        trim: true },
    lastName: { 
        type: String, 
        required: true, 
        trim: true },
    email: { type: String, 
        required: true, 
        trim: true, 
        unique: true, 
        lowercase: true, 
        match: [/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/] },
    password: { 
        type: String, 
        required: true }
},
    { timestamps: true }
)


module.exports = mongoose.model('Customer', CustomerSchema)