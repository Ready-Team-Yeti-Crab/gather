const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

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

  
// Setting user scehma
const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profile : String,
<<<<<<< HEAD
    location: Object, 
=======
    location: String, 
    latAndLong: Object,
>>>>>>> dev
    cookie : String,
    hangs : Array,
  });

// Setting hangouts schema
const hangSchema = new Schema({
  geoCoords : Array,
  users : Array // array of user objects with fields name, location to track which user initialized the hang search and their location when they did
})
const Hang = mongoose.model('hang',hangSchema )


// // Setting up pre save bcrypting hook
const SALT_WORK_FACTOR = 10;

// // NO ARROW FUNCTIONS 
userSchema.pre('save', function(next){
  // console.log('in the pre save hook')
  // bcrypt.hash(this.password, SALT_WORK_FACTOR, (err, hash) => {
  //   if (err) {
  //     return next(err)
  //   }
  //   this.password = hash;
  //   return next();
  // });
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
      return next()
    })
  })
})
const User = mongoose.model('user', userSchema)



// Exporting models
module.exports = {
  User, 
  Hang
}



