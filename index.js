const terms = require("./public/content/terms.json")[0].terms


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
  if (req.cookies.authenticated != "true") {
      console.log("cookie isnt authenticated");
      res.render("cookies", {
        layout: "main",
        terms: terms
      });
  } else {
    res.redirect("/");
  }
});

app.post("/robottest",  (req, res) => {
 
  let humanityCheck = {"question": req.body.question, "answer": req.body.answers } 
    databaseActions
    .checkHumanity(humanityCheck, req.cookies.id)
    .then(result => {
      console.log(result);
      res.render("secondpage", {
        layout: "main",
        humanityCheck: "okay we trust u",
      });
    })
    .catch(err => {
      console.log(err);
    });
    
 
  console.log("captcha to database now", req.body, req.cookies.id);
});

app.post("/cookies",  (req, res) => {
  if (req.body.yes == "") {
    let username = req.body.username;
    let age = req.body.age;
    databaseActions
    .createUser(username, age)
    .then(result => {
      res.cookie("authenticated", "true");
      res.cookie("id", result.rows[0].id); 
      res.redirect("/");
    })
    .catch(err => {
      res.render("cookies", {
        layout: "main",
        alert: "you didn't give us the required data",
        terms: terms
      });
    });
    
  } else {
      res.send(`<h1>no data = no fun</h1>`);
  }
});

app.use((request, response, next) => {
  if (request.cookies.authenticated != "true") {
      response.redirect("/cookies");
      response.send();
      return (url = request.url);
  } else {
      next();
  }
});

app.get("/", (req, res) => {
  console.log("cookie id", req.cookies);
  databaseActions
  .getUser(req.cookies.id)
  .then(result => {
    console.log("got user details", result);
    res.render("frontpage", {
      layout: "main",
      name: result.rows[0].username
    });
  })
  .catch(err => {
    console.log("ups didnt insert sentence");
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

});

app.listen(process.env.PORT || 8080, () => console.log("PLAY4USNOW"));
