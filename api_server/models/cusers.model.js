const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cusersSchema = new Schema({
    name		: {type: String, required: true},
    uid         :  {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    number      : {type : Number},
	createdAt	: {type: Date},
    updatedAt	: {type:Date},
    count       : {type : Number}
});


// Export the model
module.exports = mongoose.model('Cusers', cusersSchema);