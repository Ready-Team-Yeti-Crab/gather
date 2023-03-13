const {User} = require('../model/models.js')

const infoReqController = {};

// Get all friends (including profile user)
infoReqController.getFriends = (req, res, next) => {
  User.find({})
    .then(data => {
      res.locals.friendList = data;
      return next()
    })
    .catch(err => {
      return next({
        log: `Users not found ${err}`,
        status: 404,
        message: { err: 'Username is incorrect' },
      })
    })
}

// Parse through friend list to isolate the profile user
infoReqController.parseFriends = (req, res, next) => {
  // Variables for friend array and profile user:
  const friendList = [];
  let profileUser = {};
  res.locals.friendList.forEach(elem => {
    if (elem._id.toString() === req.cookies.ssid) {
      profileUser = elem;
    }
    else {
      friendList.push(elem);
    }
  })
  res.locals.infoForSending = {friendList: friendList, profileUser: profileUser}
  return next()
}

module.exports = infoReqController