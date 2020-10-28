///content
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
        layout: "main"
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
      console.log("sending to database", req.body, username, age);
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
              alert: "you didn't give us the required data"
            });
          });
    

    } else{
      res.render("cookies", {
        layout: "main",
        alert: "you have to be over 18"
      });
    }
    
    
  } else {
   

    databaseActions
    .getEveryone()
    .then(result => {
  
      res.render("nofun", {
        layout: "destruction",
        users: result.rows
      });
    
    })
    .catch(err => {
      res.render("countdown", {
        layout: "main"
    });
    });
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
    res.render("cookies", {
      layout: "main"
  });
  });
 

});
app.get("/destruction", (req, res) => {
  databaseActions
  .getEveryone()
  .then(result => {

    res.render("destruction", {
        layout: "destruction",
        users: result.rows
    });
  
  })
  .catch(err => {
    res.render("countdown", {
      layout: "main"
  });
  });
 

});
app.get("/data", (req, res) => {
  databaseActions
  .getEveryone()
  .then(result => {

    res.render("datadisplay", {
        layout: "destruction",
        users: result.rows
    });
  
  })
  .catch(err => {
    res.render("countdown", {
      layout: "main"
  });
  });
 

});



app.get("/countdown", (req, res)=>{
  databaseActions
  .getUser(req.cookies.id)
  .then(result => {
  
    res.render("countdown", {
        layout: "main",
        name: result.rows[0].username, 
  
    });
  
  })
  .catch(err => {
    console.log("ups didnt insert sentence");
  });
}
)

app.post("/ajax", (req, res) => {

  let value = req.body.answer;
  let column = req.body.question; 

  if(typeof value === 'string'){
    value = "'"+value+"'";
    console.log("answer is a string", req.body.question, value);
  }
  if(column){
    console.log(column, value);
    databaseActions.dynamicUpdate(column, value, req.cookies.id).then(result => {
      console.log(result);
     
     })
     .catch(err => {
       console.log("ups didnt insert sentence");
     });
  }
 
 
});

app.post("/email", (req, res) => {

  let value = req.body.email;

  console.log("processing email", value);
    databaseActions.updateEmail(value, req.cookies.id).then(result => {
      console.log("did insert email", result.rows[0].email);
     
     })
     .catch(err => {
       console.log("ups didnt do email insert", err);
     });
  
 
});

app.post("/payment", (req,res)=>{
  
  let value = parseInt(req.body.amount); 
  let column = req.body.performer.replace(/\s/g, '').toLowerCase();
  console.log(req.body, req.body.column, column);

  databaseActions
  .getUser(req.cookies.id)
  .then(result => {

    if(result.rows[0].has_tipped_performer === 'PAID'){

      if(column === "kiko"){
        value = value + result.rows[0].Kiko
      } else if(column === "mistressamandara"){
        value = value + result.rows[0].mistressamandara
      } else if(column === "petrablair"){
        value = value + result.rows[0].petrablair
      } else if(column === "violetviolent"){
        value = value + result.rows[0].violetviolent
      } else if(column === "vegabonita"){
        value = value + result.rows[0].vegabonita
      } else if(column === "goddessvanessa"){
        value = value + result.rows[0].goddessvanessa
      } else if(column === "goofytoof"){
        value = value + result.rows[0].goofytoof
      } else if(column === "sendatiptoeveryone"){
        value = value + result.rows[0].sendatiptoeveryone
      } else if(column === "thebenefactress"){
        value = value + result.rows[0].thebenefactress
      }

      console.log(value, column, result.rows[0]);
      databaseActions.dynamicTip(column, value, req.cookies.id).then(result => {
        console.log("tip added", result);
       
       })
       .catch(err => {
         console.log("didnt add tip");
      });
   
      
     

    }else {
      databaseActions
      .updatePaymentStatus("PAID", req.body.paypal_username, column, value, req.cookies.id)
      .then(result => {
          console.log("payment registered", result);
  
      })
      .catch(err => {
        console.log("paymentERROR", err);
      });
    }
  
  })
  .catch(err => {
    console.log("ups didnt insert sentence");
  });
 
 
  

})





app.listen(process.env.PORT || 8080, () => console.log("PLAY4USNOW"));
