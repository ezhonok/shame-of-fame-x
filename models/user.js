const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	img: String

})



module.exports = mongoose.model('User', userSchema)