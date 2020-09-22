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

app.get("/", (req, res) => {
  // databaseActions
  //   .getSentences()
  //   .then(accumulatedText => {
  //     if (accumulatedText.rows.length > 0) {
  //       let sentence =
  //         accumulatedText.rows[accumulatedText.rows.length - 1].sentence;
  //       console.log(sentence, "found in database for first load");
  //       res.render("frontpage", {
  //         layout: "main",
  //         sentence: sentence
  //       });
  //     } else {
  //       res.render("frontpage", {
  //         layout: "main",
  //         sentence: "there once was a quarantine..."
  //       });
  //     }
  //   })
  //   .catch(err => console.log("ups didnt get sentence"));
  res.render("frontpage", {
    layout: "main",
    sentence: "there once was a quarantine..."
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
