const axios = require('axios')
const mongoose = require('mongoose')
const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

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

// SERVE STATIC AND PARSERS
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // app.use(cookieParser())
}

app.get("/", (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../dist/index.html"));
});

const key = 'AIzaSyAqXxaH6gF-h75feDtCx12dYpMkjdQL_1o'
app.get('/restaurants', async (req, res, next) => {
 try {
   const neighborhood = 'chelsea'
   const borough = 'manhattan'
   const city = 'new+york+city'
   const category = 'burgers'
   const {data} = await axios.get(
`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${key}`
   )
   res.json(data)
   } 
 catch (err) {
  next(err)
}
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
