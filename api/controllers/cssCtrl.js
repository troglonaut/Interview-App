var Question = require('../models/questions.js');
module.exports = {
    getHtml: function (req, res) {
    res.send('working');
    },
    
    getQuestion : function  (req, res) {
        console.log('req.params.lang: ',req.params.lang);
        
        Question.find({'language': req.params.lang}).select('question multipleChoice').exec( function (err, result) {
            console.log('result: ', result);
            res.send(result);
            
        });
    }
};