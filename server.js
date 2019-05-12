const express 		= require('express')
const app 			= express()
const bodyParser 	= require('body-parser')
const cors 			= require('cors')
const session 		= require('express-session')

require ('./db/db')

app.use(session({
	secret: 'nothing changes except what has to',
	resave: false,
	saveUninitialized: false
}))


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionSuccessStatus: 200
}


app.use(cors(corsOptions))

const postController = require('./controllers/postController')
const userController = require('./controllers/userController')
const authController = require('./controllers/authController')

// app.use('/api', postController)
// app.use('/auth', authController)

app.listen(process.env.PORT || 9000, () => {
	console.log('listening on port 9000');
})


