const express 		= require('express')
const app 			= express()
const bodyParser 	= require('body-parser')
const cors 			= require('cors')
const session 		= require('express-session')
const multer		= require('multer')
// const superagent	= require('./apiKey')

require ('dotenv').config()

require ('./db/db')

app.use(session({
	secret: process.env.SECRET,
	resave: false,
	saveUninitialized: false
}))


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const corsOptions = {
	origin: process.env.FRONT_END_URL,
	credentials: true,
	optionSuccessStatus: 200
}


app.use(cors(corsOptions))

const postController = require('./controllers/postController')
// const userController = require('./controllers/userController')
const authController = require('./controllers/authController')

app.use('/api/posts', postController)
app.use('/auth', authController)

app.listen(process.env.PORT || 9000, () => {
	console.log('listening on port ' + process.env.PORT);
})


