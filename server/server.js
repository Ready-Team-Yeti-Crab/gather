const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const PORT = 3000;

// Serving middlewares:
const loginController = require('./controllers/loginController')
const infoReqController = require('./controllers/infoReqController')


// Doing JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Doing Cookie parser
app.use(cookieParser())

const MONGO_URI =
	'mongodb+srv://Stan:TGJQJ2YK8pTgZjwC@gathercluster.59lrgnt.mongodb.net/?retryWrites=true&w=majority';

mongoose
	.connect(MONGO_URI, {
		// options for the connect method to parse the URI
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// sets the name of the DB that our collections are part of
		dbName: 'GatherDB',
	})
	.then(() => console.log('Connected to Mongo DB.'))
	.catch((err) => console.log(err));

// // SERVE STATIC AND PARSERS
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../dist')));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	// app.use(cookieParser())
}
// const key = 'AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o'
// app.get('/hang', async (req, res, next) => {
//  try {
//    const {data} = await axios.get(
// `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.763712820382324%2C-73.97776501914531&radius=1500&type=restaurant&key=${key}`
// // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${key}`
//    )
//    res.json(data)
//    console.log(data)
//    } 
//  catch (err) {
//   next(err)
// }
// })

// On general get request, we are serving the client the signup/login html (*we are checking if they have a session, if so we redirect them to our 'main')
app.get("/original", loginController.isLoggedIn, (req, res) => {
  // if res.locals.authorized is true, redirect to main
  if (res.locals.authorized) {
    return res.status(200).send({location: 'main'})
  }
  return res
    .status(200).send({location: 'signup'})
    // .sendFile(path.resolve(__dirname, "../dist/index.html"));
});

  

// Sign Up Request
app.post('/signup', loginController.createUser, loginController.setSSIDCookie, loginController.startSession, (req, res) => {
  res.status(200).redirect('/main')
})

//Login request
app.post('/login', loginController.verifyUser, loginController.setSSIDCookie, loginController.startSession, (req, res) => {
  res.status(200).redirect('/main')
})

// Main get request
app.get('/main', loginController.isLoggedIn, (req, res) => {
//   // if res.locals.authorized is false, send to /signup
//   if (res.locals.authorized === false) {
//     res.status(200).send({location: 'signup'})
//   }
//   // if res.locals.authorized is true, send main index
//   if (res.locals.authorized === true) {
//     res.status(200).send({location: 'main'})
//   }
	res.redirect('/original')
})

// Request info for rendering content (friendList and profileUser)
app.get('/friends', infoReqController.getFriends, infoReqController.parseFriends, (req, res) => {
  res.status(200).send(res.locals.infoForSending);
})

// Update user location
app.patch('/changelocation', loginController.changeLocation, (req, res, next) => {
	res.sendStatus(200)
})

// Global error handler:
app.use((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 500,
		message: { err: 'An error occurred' },
	};
	const errorObj = Object.assign({}, defaultErr, err);
	console.log(errorObj.log);
	return res.status(errorObj.status).send(errorObj.message);
});

// Listening port
app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
