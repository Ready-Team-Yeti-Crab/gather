// serve in the MongoDB database
const {User} = require('../model/models.js')
const Session = require('../model/sessionsModel')
const bcrypt = require('bcryptjs')
const axios = require('axios')
const { render } = require('react-dom')

const loginController = {}

// Create User controller 
loginController.createUser = async (req, res, next) => {
  const { username, password, location} = req.body
  
  // prepare the address for the geocode reversal call
  const convertedAddress = location.replace(/[\s,]+/g, '%20');
  
  
  // Pulling geocoordinates from address
  const locationObj = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${convertedAddress}}&key=AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o`)
  
  // getting username and password
  if (username && password) {
    User.create({username: username, password: password, location : {
      address : locationObj.data.results[0]['formatted_address'],
      geo : locationObj.data.results[0]['geometry']['location']
    }})
    .then((() => next()))
    .catch((err => {
      return next({
        log: `Error in creation of user ${err}`,
        status: 500,
        message: { err: 'An error occurred' },
      })
    }))
  }
  else {
    res.redirect(400, '/signup');
  }
}
// Update user location: 
loginController.changeLocation = async (req, res, next) => {
  const { location } = req.body;
  // prepare the address for the geocode reversal call
  const convertedAddress = location.replace(/[\s,]+/g, '%20');
  // Pulling geocoordinates from address
  const locationObj = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${convertedAddress}}&key=AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o`)

  User.findByIdAndUpdate(req.cookies.ssid, {location : {
    address : locationObj.data.results[0]['formatted_address'],
    geo : locationObj.data.results[0]['geometry']['location']
  }})
    .then((data) => {
      return next()
    })
    .catch((err) => {
      return next({
        log: `Error in finding user and updating through cookie id ${err}`,
        status: 500,
        message: { err: 'An error occurred' },
      })
    })

  // User.updateOne({_id: o_id}, {address : locationObj.data.results[0]['formatted_address'], geo : locationObj.data.results[0]['geometry']['location']})
  //   .then((data) => {
  //     console.log(req.cookies.ssid)
  //     return next()
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     return next({
  //       log: `Error in updating location in changeLocation ${err}`,
  //       status: 500,
  //       message: { err: 'An error occurred' },
  //     })
  //   })
    
}

// Setting session cookie
loginController.setSSIDCookie = (req, res, next) => {
  const { username } = req.body;
  User.find({username: username})
    .then(data => {
      res.locals.userId = data[0]._id;
    })
    .then(() => {
      res.cookie('ssid', res.locals.userId, {httpOnly: true});
      return next()
    })
    .catch(err => {
      return next({
        log: `Error in creation of cookie through userfind ${err}`,
        status: 500,
        message: { err: 'An error occurred' },
      })
    })
}

// Starting an actual session
loginController.startSession = (req, res, next) => {
  Session.find({cookieId: res.locals.userId})
    .then(data => {
      if (data[0] === undefined) {
        Session.create({cookieId: res.locals.userId})
          .then(() => next())
          .catch(err => {
            return next({
              log: `Error in creation of session through startSession ${err}`,
              status: 500,
              message: { err: 'An error occurred' },
            })
          })
      }
      else {
        return next();
      }
    })
}

// Checking if session is active (if they're logged in)
loginController.isLoggedIn = (req, res, next) => {
  // Check if they have a cookie and if that cookie matches a session cookie id
  Session.find({cookieId: req.cookies.ssid})
    .then((data) => {
      if (data[0] === undefined) {
        res.locals.authorized = false;
        return next();
      }
      else {
        res.locals.authorized = true;
        return next();
      }
    })
    .catch(() => {
      res.locals.authorized = false;
      return next();
    })
}

loginController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  User.find({username: username})
    .then((data) => {
      // Not sure how to redirect to signup. For now, I have an error sent to frontend alerting that username/password doesn't exist
      if (data[0] === undefined) {
        return next({
          log: 'User not found',
          // I chose 401 because it actually is still considered not an error but it's 'unauthorized'
          status: 401,
          message: { err: 'Username is incorrect' },
        })
      }
      else {
        bcrypt.compare(password, data[0].password)
          .then(response => {
            if (response) {
              res.locals.userId = data[0]._id;
              return next()
            }
            else {
              return next({
                log: 'Password incorrect',
                status: 401,
                message: { err: 'Password is incorrect' },
              })
            }
          })
        return next()
      }
    })
    .catch((err) => {
      return next({
        log: `Error when retrieving user ${err}`,
        status: 500,
        message: { err: 'An error occurred' },
      })
    })
}


module.exports = loginController;