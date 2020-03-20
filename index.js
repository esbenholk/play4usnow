const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));

const databaseActions = require("./utils/database");
// const querystring = require("querystring");
const hb = require("express-handlebars");
app.engine("handlebars", hb()); //handlebars is construction languae
app.set("view engine", "handlebars"); //handlebar is templating language
app.use(express.static("./views"));
app.use(express.static("./public"));
app.use(express.static("./utils"));

app.get("/", (req, res) => {
  databaseActions
    .getSentences()
    .then(accumulatedText => {
      if (accumulatedText.rows.length > 0) {
        let sentence =
          accumulatedText.rows[accumulatedText.rows.length - 1].sentence;
        console.log(sentence, "found in database for first load");
        res.render("frontpage", {
          layout: "main",
          sentence: sentence
        });
      } else {
        res.render("frontpage", {
          layout: "main",
          sentence: "there once was a quarantine..."
        });
      }
    })
    .catch(err => console.log("ups didnt get sentence"));
});

// app.get("/secondpage", (req, res) => {
//   res.render("secondpage", {
//     layout: "main",
//     sentence: "thank you for adding to the chronicles. now wait your turn"
//   });
// });

app.post("/sentenceupload", (req, res) => {
  let newSentence = req.body.sentence;
  if (newSentence.length <= 0) {
    res.render("frontpage", {
      layout: "main",
      sentence: "u gotta write something"
    });
  }
  databaseActions
    .createSentences(newSentence)
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

app.listen(process.env.PORT || 8080, () => console.log("corona chronicles"));
