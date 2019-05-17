const express = require('express')
const router = express.Router()
const User = require('../models/user')

const bcrypt = require('bcryptjs')


//registration
router.post('/register', async (req, res, next) => {
	const password = req.body.password
	const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
	console.log(passwordHash);
	const userData = {}
	userData.username = req.body.username
	userData.password = passwordHash
	userData.img = req.body.img
	console.log(userData, ' this is userData');

	try {

		const createdUser = await User.create(userData)
		req.session.logged = true;
		req.session.userDataId = createdUser._id
		req.session.username = req.body.username;
		//store user id in session

		res.json({
			status: 200,
			data: 'registration successful',
			userId: createdUser._id
			// createdUser: user
		})

	} catch(err){
		next(err)
	}
})

//login
router.post('/login', async (req, res, next) => {
  try{
    	const foundUser = await User.findOne({'username': req.body.username});
    	console.log(foundUser)
    	console.log(foundUser.password);
    	// set session variables here
    	if(foundUser){
    	if(bcrypt.compareSync(req.body.password, foundUser.password) === true){
    		req.session.logged = true
    		req.session.userDataId = foundUser._id
    		console.log('logged in successfully');

    		res.json({
			status: 200,
			data: 'login successful'
		})

    }
	}	

  }catch(err) {
    next(err)
  }
})

//logout
router.get('/logout', async (req, res, next) =>{
	try{
		req.session.destroy()
		console.log(req.session);
		res.json({
				status: 200,
				data: 'logout successful'
			})
	}catch(err) {
		next(err)
	}
})




module.exports = router