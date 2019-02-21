const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsersSchema = new Schema({
    name		: {type: String, required: true, max: 100},
    emailid		: {type: String, required: false},
	number		: {type: Number, required: true, unique: true},
	devicetoken	: {type: String, required: true},
	ostype		: {type: String, required: true},
	deviceuid	: {type: String, required: true},
	status		: {type: Number, required: true},
	createdAt	: {type: Date},
	updatedAt	: {type:Date}
	
});


// Export the model
module.exports = mongoose.model('Users', UsersSchema);