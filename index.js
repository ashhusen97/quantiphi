var express = require("express"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose = require("passport-local-mongoose"),
  fileupload = require("express-fileupload");
cors = require("cors");
//   User = require("./models/user");

// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
// mongoose.set("useUnifiedTopology", true);
// mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
var users = [];
app.use(bodyParser.json());
app.use(fileupload());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   require("express-session")({
//     secret: "Rusty is a dog",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================

// Showing home page
app.get("/", function (req, res) {
  res.send("hello");
});

// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
  res.render("secret");
});

// Showing register form
app.get("/register", function (req, res) {
  res.render("register");
});

// Handling user signup
app.post("/register", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var username = req.body.email;
  users = [];
  users.push({
    email,
    password,
    username,
  });

  res
    .status(200)
    .json({ message: "success", token: { email, password, username } });
});

//Showing login form
app.get("/login", function (req, res) {
  res.render("login");
});

//Handling user login
app.post(
  "/login",
  //   passport.authenticate("local", {
  //     successRedirect: "/secret",
  //     failureRedirect: "/login",
  //   }),
  function (req, res) {
    // console.log(users);
    let user = users.find((x) => {
      return x.email === req.body.username && x.password === req.body.password;
    });

    console.log(user);
    if (user) {
      res.status(200).json({ message: "success", token: user });
    } else {
      res.status(400).json({ message: "Invalid Credential" });
    }
    // if (req.body.username === "admin@gmail.com" && req.body.password === "admin123") {
    //   res.status(200).json({ message: "success", token: req.body });
    // } else {
    //   res.status(400).json({ message: "Invalid Credential" });
    // }
  }
);

//Handling user logout
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.post("/upload", function (req, res) {
  if (req.files === null) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

var port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log("Server Has Started!", port);
});
