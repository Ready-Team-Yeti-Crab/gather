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

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
