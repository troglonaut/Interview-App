var mongoose = require('mongoose');

// Create the MovieSchema.
var QuestionModel = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    answer: {
        type: String
        },
    language: {
        type: String,
        required: true,
        enum: ['html', 'css']
}
});
    
// Export the model schema.
module.exports = mongoose.model('Questions', QuestionModel);