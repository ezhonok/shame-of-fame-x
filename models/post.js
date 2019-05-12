const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
	title: String,
	description: String,
})


//How will I store location from the API?
//How will I store image from user's device?

module.exports = mongoose.model('Post', postSchema)
