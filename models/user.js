const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	img: String,
	post: [{
		type: mongoose.Schema.Types.ObjectId,
		ref:'Post'
	}],

})



module.exports = mongoose.model('User', userSchema)