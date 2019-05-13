const express = require('express')
const router = express.Router()
const User = require('../models/user')


//registration
router.post('/register', async (req, res, next) => {
	console.log(req.body, ' this is the session');

	try {
		const user = await User.create(req.body)
		req.session.logged = true;
		req.session.username = req.body.username;

		res.json({
			status: 200,
			data: 'registration successful'
		})

	} catch(err){
		res.status(400).json(error);
	}
})

//login
router.post('/login', async (req, res, next) => {
  try{
    const foundUser = await User.findOne({'username': req.body.username});
    console.log(foundUser)

		res.json({
			status: 200,
			data: 'login successful'
		})

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