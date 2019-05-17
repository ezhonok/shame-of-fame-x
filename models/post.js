const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
	title: String,
	description: String,
	date: String,
	img: String,
	positive: Boolean,
	address: String,
	lat: Number,
	lng: Number,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref:'User'
	},

})





module.exports = mongoose.model('Post', postSchema)
