const express = require("express");
const app = express();

const cookieSession = require('cookie-session');
const csurf = require('csurf');

const databaseActions = require("./utils/database");
// const querystring = require("querystring");
const hb = require("express-handlebars");
app.engine("handlebars", hb()); //handlebars is construction languae
app.set("view engine", "handlebars"); //handlebar is templating language
app.use(express.static("./views"));
app.use(express.static("./public"));
app.use(express.static("./utils"));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(cookieSession({
  secret: `I'm always angry.`,
  maxAge: 1000 * 60 * 60 * 24 * 7 * 6
}));

app.use(express.urlencoded({
  extended: false
}));

app.use(csurf()); 

app.use(function(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
});  


app.get("/cookies", (req, res) => {
  res.render("cookies", {
    layout: "main",
  });
});


app.post("/cookies",  (req, res) => {
  console.log("answer to cookies", req);
  if (req.body.yes == "") {
      console.log("user said yes");
      console.log(req.body);
      res.cookie("authenticated", "true");
      res.redirect(url);
  } else {
      res.send(`<h1>u dont get to see this</h1>`);
  }
});

app.use((request, response, next) => {
  console.log("cookie middleware", request.cookies);
  if (request.cookies.authenticated != "true") {
      console.log("access denied");
      response.redirect("/cookies");
      response.send();
      console.log(request.url);
      return (url = request.url);
  } else {
      console.log("access granted");
      next();
  }
});



app.get("/", (req, res) => {
  res.render("frontpage", {
    layout: "main",
  });
});


















app.post("/senddata", (req, res) => {
  console.log(req.body.username);
  let username = req.body.username;
  if (username.length <= 0) {
    res.render("frontpage", {
      layout: "main",
      sentence: "u gotta write something"
    });
  }
  databaseActions
    .createUser(username)
    .then(result => {
      res.render("secondpage", {
        layout: "main",
        sentence: "there once was a quarantine..."
      });
      console.log("sent to database");
    })
    .catch(err => {
      console.log("ups didnt insert sentence");
    });
});

app.listen(process.env.PORT || 8080, () => console.log("PLAY4USNOW"));
