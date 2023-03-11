// serve in the MongoDB database
const {User} = require('../model/models.js')
const bcrypt = require('bcryptjs');

const loginController = {}

// Create User controller (Variables: username & password)
loginController.createUser = (req, res, next) => {
  const { username, password } = req.body
  if (username && password) {
    User.create({username: username, password: password})
      .then((() => {
        User.find({username: username})
          .then((data) => {
            res.locals.userId = data[0]._id;
            return next();
          })
          .catch((err) => {
            return next({
              log: `Error in retrieving the newly created user in createUser ${err}`,
              status: 500,
              message: { err: 'An error occurred' },
            })
          })
      }))
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


// Compare password middleware with salt VIC: CHECK THE LOGIC HERE ON VARIABLE NAMES
loginController.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return cb(err)
    cb(null, isMatch)
  })
}

module.exports = loginController;