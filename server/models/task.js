console.log('WELCOME TO MODELS - TASK');
const mongoose = require('mongoose');

    var TaskSchema = new mongoose.Schema({
        title: { 
            type: String, 
            required: true, 
            minlength: 2 },
        description: {
            type: String,
            required: true,
            minlength: 2},
        completed: {
            type: Boolean,
            default: false},
    },
    {timestamps: true });
    mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'Tasks'
    
