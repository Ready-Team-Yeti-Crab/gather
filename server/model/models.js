const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');


// CONNECT TO DATABASE
const MONGO_URI = 'mongodb+srv://Stan:TGJQJ2YK8pTgZjwC@gathercluster.59lrgnt.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'GatherDB'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;
  
  const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profile : String,
    location: String, 
    cookie : String,
    hangs : []
  });
  
  
  const SALT_WORK_FACTOR = 10;
  
  // NO ARROW FUNCTIONS 
  userSchema.pre('save', function(next){
    const user = this; 
  
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
      // error handling
      if (err) return next(err);
      //hash
      bcrypt.hash(user.password, salt, (err, hash) => {
        // hash error handling
        if(err) return next(err)
        user.password = hash;
        next()
      })
    })
  })
  
  userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if(err) return cb(err)
      cb(null, isMatch)
    })
  }



