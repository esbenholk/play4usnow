///content
const terms = require("./public/content/terms.json")[0].terms
const performers = require("./public/content/performers.json")
const performers2 = require("./public/content/performers2.json")







///server-setup
const express = require("express");
const app = express();

// var bodyparser = require('body-parser');
// var urlencodedparser = bodyparser.urlencoded({extended:false})
// app.use(bodyparser.json());

///database connection
const databaseActions = require("./utils/database");

//handebars as engine
const hb = require("express-handlebars");
app.engine("handlebars", hb()); //handlebars is construction languae
app.set("view engine", "handlebars"); //handlebar is templating language

//public access
app.use(express.static("./views"));
app.use(express.static("./public"));
app.use(express.static("./utils"));


///cookie-setup
const cookieSession = require('cookie-session');
const csurf = require('csurf');
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(cookieSession({
  secret: `I'm always angry.`,
  maxAge: 1000 * 60 * 60 * 24 * 7 * 6,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(express.urlencoded({
  extended: false
}));

app.use(csurf({ cookie: false })); 

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
      res.redirect("/")
    })
    .catch(err => {
      console.log(err);
    });
});
app.post("/turnon",  (req, res) => {
  let turnon =req.body.answers
    databaseActions
    .registerTurnOn(turnon, req.cookies.id)
    .then(result => {
      res.render("frontpage", {
        layout: "main",
        name: result.rows[0].username, 
        captcha: false,
        performers: performers,
        performers2: performers2
      });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/cookies",  (req, res) => {

  if (req.body.yes == "") {
    let username = req.body.username;
    let age = req.body.age;

    if(age>17){
        databaseActions
          .createUser(username, age)
          .then(result => {
            console.log("cookie authenticated");
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
    

    } else{
      res.render("cookies", {
        layout: "main",
        alert: "you have to be over 18",
        terms: terms
      });
    }
    
    
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
  databaseActions
  .getUser(req.cookies.id)
  .then(result => {
    let captcha_state = true;
    if(result.rows[0].humanity_check){
      captcha_state = false;
    }
    res.render("frontpage", {
        layout: "main",
        name: result.rows[0].username, 
        captcha: captcha_state,
        performers: performers,
        performers2: performers2,
        loader: true
    });
  
  })
  .catch(err => {
    console.log("ups didnt insert sentence");
  });
 

});



app.post("/ajax", (req, res) => {
  console.log("ajax", req.body.question, req.body.answer);
});



app.post("/payment", (req, res) => {
  console.log(req.body.performer, parseInt(req.body.amount));
 
  databaseActions
      .updatePaymentStatus("PAID", req.body.paypal_username, req.cookies.id)
      .then(result => {
          console.log("payment registered", result);
          let added_amount = parseInt(req.body.amount);
         
          if(req.body.performer === "performer1"){
            console.log("tips performer1");
            if(result.rows[0].performer1 ){
              added_amount = result.rows[0].performer1 + parseInt(req.body.amount)
            } 
            databaseActions
            .tipPerformer1(added_amount, req.cookies.id)
            .then(result => {
              console.log("added performer1 tip", result);
            })
            .catch(err => {
              console.log("tippingERROR", err);
            });
          }
          else if(req.body.performer === "performer2"){
            console.log("tips performer2");
            if(result.rows[0].performer2 ){
              added_amount = result.rows[0].performer2 + parseInt(req.body.amount)
            } 
            databaseActions
            .tipPerformer2(added_amount, req.cookies.id)
            .then(result => {
              console.log("added performer2 tip", result);
            })
            .catch(err => {
              console.log("tippingERROR", err);
            });
          } 
          else if(req.body.performer === "performer3"){
            console.log("tips performer3");
            if(result.rows[0].performer3 ){
              added_amount = result.rows[0].performer3 + parseInt(req.body.amount)
            } 
            databaseActions
            .tipPerformer3(added_amount, req.cookies.id)
            .then(result => {
              console.log("added performer1 tip", result);
            })
            .catch(err => {
              console.log("tippingERROR", err);
            });
          } else if(req.body.performer === "performer4"){
            if(result.rows[0].performer4 ){
              added_amount = result.rows[0].performer4 + parseInt(req.body.amount)
            } 
            databaseActions
            .tipPerformer4(added_amount, req.cookies.id)
            .then(result => {
              console.log("added performer1 tip", result);
            })
            .catch(err => {
              console.log("tippingERROR", err);
            });
          }
          else if(req.body.performer === "performer5"){
            console.log("tips performer5");
            if(result.rows[0].performer5 ){
              added_amount = result.rows[0].performer5 + parseInt(req.body.amount)
            } 
            databaseActions
            .tipPerformer5(added_amount, req.cookies.id)
            .then(result => {
              console.log("added performer1 tip", result);
            })
            .catch(err => {
              console.log("tippingERROR", err);
            });
          } 
          else if(req.body.performer === "performer6"){
            console.log("tips performer6");
            if(result.rows[0].performer6 ){
              added_amount = result.rows[0].performer6 + parseInt(req.body.amount)
            } 
            databaseActions
            .tipPerformer6(added_amount, req.cookies.id)
            .then(result => {
              console.log("added performer1 tip", result);
            })
            .catch(err => {
              console.log("tippingERROR", err);
            });
          } 
          else if(req.body.performer === "performer7"){
            console.log("tips performer7");
            if(result.rows[0].performer7 ){
              added_amount = result.rows[0].performer7 + parseInt(req.body.amount)
            } 
            databaseActions
            .tipPerformer7(added_amount, req.cookies.id)
            .then(result => {
              console.log("added performer1 tip", result);
            })
            .catch(err => {
              console.log("tippingERROR", err);
            });
          } 
          else if(req.body.performer === "performer8"){
            console.log("tips performer8");
            if(result.rows[0].performer8 ){
              added_amount = result.rows[0].performer8 + parseInt(req.body.amount)
            } 
            databaseActions
            .tipPerformer8(added_amount, req.cookies.id)
            .then(result => {
              console.log("added performer1 tip", result);
            })
            .catch(err => {
              console.log("tippingERROR", err);
            });
          } 
          else if(req.body.performer === "performer9"){
            console.log("tips performer9");
            if(result.rows[0].performer9 ){
              added_amount = result.rows[0].performer9 + parseInt(req.body.amount)
            } 
            databaseActions
            .tipPerformer9(added_amount, req.cookies.id)
            .then(result => {
              console.log("added performer1 tip", result);
            })
            .catch(err => {
              console.log("tippingERROR", err);
            });
          } 
         
        
      })
      .catch(err => {
        console.log("paymentERROR", err);
      });
  

 

});




app.listen(process.env.PORT || 8080, () => console.log("PLAY4USNOW"));
