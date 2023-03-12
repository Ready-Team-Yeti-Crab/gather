// serve in the MongoDB database
const {User} = require('../model/models.js')
const Session = require('../model/sessionsModel')
const bcrypt = require('bcryptjs')

const loginController = {}

// Create User controller (Variables: username & password)
loginController.createUser = (req, res, next) => {
  const { username, password } = req.body
  if (username && password) {
    User.create({username: username, password: password})
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
    .then(() => {
      res.locals.authorized = true;
      return next();
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
      // I'm struggling to redirect to signup. For now, I have an error sent to frontend alerting that username/password doesn't exist
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
                log: 'User not found',
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

// Compare password middleware with salt VIC: CHECK THE LOGIC HERE ON VARIABLE NAMES
// loginController.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if(err) return cb(err)
//     cb(null, isMatch)
//   })
// }

module.exports = loginController;