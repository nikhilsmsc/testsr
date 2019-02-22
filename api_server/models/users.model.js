const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let branches= new Schema({
	name		: {type : String },
	location 	: {type : String, unique:true }
});
let UsersSchema = new Schema({
    name		: {type: String, required: true, max: 100},
    emailid		: {type: String, required: true,unique:true},
	number		: {type: Number, required: true},
	password	: {type: String, required: true},
	status		: {type: Number, required: true},
	createdAt	: {type: Date},
	updatedAt	: {type:Date},
	branches	: [branches]
	
});


// Export the model
module.exports = mongoose.model('Users', UsersSchema);