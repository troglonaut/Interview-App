var mongoose = require('mongoose');

// Create the MovieSchema.
var QuestionModel = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    answer: {
        type: Number,
        required: true
        },
    multipleChoice: [{
        type: String
    }],
    language: {
        type: String,
        required: true,
        enum: ['html', 'css', 'javascript', 'mongodb', 'express', 'angularjs', 'nodejs', 'jquery', 'databases', 'git', 'github']
    }
});
    
// Export the model schema.
module.exports = mongoose.model('Questions', QuestionModel);