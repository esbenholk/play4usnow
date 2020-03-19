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
      if (accumulatedText.rows > 0) {
        console.log(accumulatedText.rows);
        let sentence =
          accumulatedText.rows[accumulatedText.rows.length - 1].sentence;
        console.log(sentence);
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

app.post("/sentenceupload", (req, res) => {
  let newSentence = req.body.sentence;
  console.log("reacting to upload:", newSentence);
  databaseActions
    .createSentences(newSentence)
    .then(result => {
      res.render("secondpage", {
        layout: "main",
        sentence: "thank you for adding to the chronicles. now wait your turn"
      });
    })
    .catch(err => {
      console.log("ups didnt insert sentence");
    });
});

app.listen(process.env.PORT || 8080, () => console.log("corona chronicles"));
