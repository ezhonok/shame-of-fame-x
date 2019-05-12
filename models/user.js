const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	img: String, //for now - figure out img storing

})



module.exports = mongoose.model('User', userSchema)