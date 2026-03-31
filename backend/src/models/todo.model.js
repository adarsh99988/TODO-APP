const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type:String,
        require:true,
    },
    description: {
        type:String,
        require:true,
    }},
    {
        timestamps:true,
    })                 
    
module.exports = mongoose.model('Todo', todoSchema);