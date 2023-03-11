// serve in the MongoDB database
const User = require('../model/models.js')
const bcrypt = require('bcryptjs');

const loginController = {}

loginController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    User.create({username: username, password: password})
      .then(() => {
        // do a find request of user and store the userId onto our res.locals (for our cookies)
      })
      .catch((err) => {
        return next({
          // Global error handler here
        })
      })
  }
  // Else redirect back to signup or send error code? Ask the team 
}