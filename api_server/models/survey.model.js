const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let questions= new Schema({
	qtype		: {type : String },
	qt 			: {type : String },
	ans			: {type : String }
});
let SurveySchema = new Schema({
    name		: {type: String, required: true},
	createdAt	: {type: Date},
	updatedAt	: {type:Date},
	questions	: [questions]
});


// Export the model
module.exports = mongoose.model('Survey', SurveySchema);