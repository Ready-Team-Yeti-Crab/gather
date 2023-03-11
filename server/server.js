const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;


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
