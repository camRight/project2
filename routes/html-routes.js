// Dependencies
const path = require("path");

// Routes
module.exports = (app) => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  // login route loads login.html
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // signup route loads signup.html
  app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });
  // explore route loads explore.html
  app.get("/explore", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/explore.html"));
  });
  // map route loads map.html
  app.get("/map", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/map.html"));
  });
};
