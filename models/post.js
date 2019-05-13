const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
	title: String,
	description: String,
	date: String,
	img: String,
	positive: Boolean
})



module.exports = mongoose.model('Post', postSchema)
