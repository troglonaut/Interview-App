var mongoose = require('mongoose');

// Create the UserSchema.
var UserModel = new mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true},
    
    password: {
        type: String,
        required: true,
        unique: true;
        }
});
    
// Export the model schema.
module.exports = mongoose.model('User', UserModel);