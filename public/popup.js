

(function() {

    let openingQuery = [ {
            question: "Are you ready to play a dangerous game?",
            questionID:"feelings_towards_danger", 
            headline: "Welcome",
            description: "",
            answers: ["Danger Turns Me On",
                "Get Me Out Of Here"
                ],
            images: [],
            inputfield: false,
            link: [""],
            url : "https://thumbs.gfycat.com/AthleticSimpleHuemul-size_restricted.gif",
        }
        
    ]
    let queries = [
        {
            question: "are you ready?",
            questionID:"readiness", 
            headline: "new for",
            description: "",
            answers: ["almost", "never", "oh boy am i", "i still dont know what this is"],
            images: [],
            inputfield: false,
            link: [],
            url : "https://image.shutterstock.com/z/stock-photo-sexy-closeup-portrait-of-handsome-topless-male-model-with-beautiful-eyes-sexy-man-or-muscular-747567787.jpg",

        },

        {
            question: "",
            questionID:"what_you_want_singles_to_know", 
            headline: "singles in your area are looking to meet you",
            description: "singles in your area are looking to meet you, tell them something about yourself!",
            answers: [],
            images: [],
            inputfield: true,
            link: [],
            url : "https://image.shutterstock.com/z/stock-photo-sexy-closeup-portrait-of-handsome-topless-male-model-with-beautiful-eyes-sexy-man-or-muscular-747567787.jpg",

        }, 
        {
            question: "",
            questionID:"sex_role", 
            headline: "",
            description: "For the hottest user experience, tell us about yourself.<br> Are you a: ",
            answers: ["Dominant",
                "Submissive",
                "Masochist",
                "Sadist",
                "Fetishist",
               " Vanilla Sundae"
                ],
            images: [],
            inputfield: false,
            link: [""],
            url : "https://64.media.tumblr.com/5710cff53f63ee210f0d922b9b8948d5/tumblr_pa386bxJTg1ri4zv1o1_540.gifv",
            color: ["pink", "white"]
        },
        {
            question: "Have you ever paid for the following services? ",
            questionID:"sex_work_consumer_experience", 
            headline: "",
            description: "",
            answers: ["Porn",
                "Stripping",
                "Camming",
                "Fetish/Domination",
                "OnlyFans",
                "Sexual Intercourse",
                "Other Sexual Service / Content",
                "I dont consume these services",
                "I dont pay for these services"
                ],
            images: [],
            inputfield: false,
            link: [""],
            url : "https://play4usnow.s3.amazonaws.com/sissy/Screen+Shot+2020-10-09+at+11.53.15.png",
            color: ["rgb(255, 0, 225)", "yellow"]
        },

        {
            question: "Have you ever received payment for the following services?",
            questionID:"sex_work_experience", 
            headline: "",
            description: "",
            answers: ["Porn",
                "Stripping",
                "Camming",
                "Fetish/Domination",
                "OnlyFans",
                "Sexual Intercourse",
                "Other Sexual Service / Content",
                "I dont perform these services",
                "I dont charge for these services"
                ],
            images: [],
            inputfield: false,
            link: [""],
            url : "https://media2.giphy.com/media/10rtoKqcDukJgc/giphy.gif?cid=ecf05e47sqo9x5operabvngievvqd8ql53onjm3gx5qkg4dn&rid=giphy.gif",
            color: ["white", "red"]
        },
        {
            question: "CLICK THIS LINK TO GET FOOT FETISH PORN",
            questionID:"follows_link_to_foot_porn", 
            headline: "this is an advertisement! this is an advertisement! this is an advertisement!",
            description: "",
            answers: [],
            images: [],
            inputfield: false,
            link: ["http://queerporn.tv/wp/?s=foot","https://play4usnow.s3.amazonaws.com/feet2.gif"],
            url : "",
            color: ["white", "red"]
        },
        {
            question: " What are you looking for?",
            questionID:"looking_for", 
            headline: "",
            description: "are you lost in anonymous proxy too?",
            answers: ["Friendship",
               " Sex",
                "Love",
                "A Reason to Live",
              "  A Reason to Die"
                ],
            images: [],
            inputfield: false,
            link: [""],
            url : "https://play4usnow.s3.amazonaws.com/cutoutlogo.jpg",
            color: ["#00ff11", "#6200ff"]
        },
        {
            question: "Are you a human?",
            questionID:"being_a_dog", 
            headline: "Wanna be my dog?",
            description: "",
            answers: ["woof", "Can I stay in your cage?", "Can I stay at the end of your bed?", "I am a human in need of training", "I think I’m a cat", "Is there another option?" ,"Why can I not be a human?"], 
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/MCh._Silverbarn%27s_Ulfi_a3_q.jpg/800px-MCh._Silverbarn%27s_Ulfi_a3_q.jpg",
            color: ["black", "red"]
        },
        {
            question: "Does data make you horny?",
            questionID:"does_data_make_horny", 
            headline: "take my identity and expose me",
            description: "",
            answers: ["I can’t...", "I’m free and open", "Im private forever", "I made my family who accept me and know everything","If my family find out Ill be turned on, but disowned"] ,
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "https://www.assuranceagency.com/Media/Default/blog/headers/Voluntary%20Series_Identity%20Theft.jpg",
            color: ["pink", "yellow"]
        },
        {
            question: "Tell us a sexy confession.",
            questionID:"confession", 
            headline: "",
            description: "",
            answers: [] ,
            images: [], 
            inputfield: true,  
            link: [ ],
            url : "",
            color: ["blue", "purple"]
        },
        {
            question: "What’s your favorite sexual activity?",
            questionID:"favorite_activity", 
            headline: "",
            description: "",
            answers: [] ,
            images: [], 
            inputfield: true,  
            link: [ ],
            url : "",
            color: ["blue", "purple"]
        },
        {
            question: "What’s your most embarrassing sexual secret?",
            questionID:"sexual_secret", 
            headline: "",
            description: "",
            answers: [] ,
            images: [], 
            inputfield: true,  
            link: [ ],
            url : "",
            color: ["blue", "purple"]
        },
        {
            question: "Have you ever cheated on a partner?",
            questionID:"cheated", 
            headline: "",
            description: "",
            answers: ["yes","no"] ,
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["black", "yellow"]
        },
        {
            question: "Which of the following would you enjoy?",
            questionID:"act_user_enjoys", 
            headline: "",
            description: "",
            answers: ["Acting Like A Dog",
            "Getting Fucked In The Ass",
            "Worshipping Feet",
            "Giving Away Money",
            "Being Humiliated",
            "Getting Tied Up",
            "Being Spanked/Beaten",
            "Wearing a Chastity Belt"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["white", "black"]
        },
        {
            question: "Which of the following would you enjoy?",
            questionID:"act_user_enjoys", 
            headline: "",
            description: "",
            answers: ["Acting Like A Dog",
            "Getting Fucked In The Ass",
            "Worshipping Feet",
            "Giving Away Money",
            "Being Humiliated",
            "Getting Tied Up",
            "Being Spanked/Beaten",
            "Wearing a Chastity Belt"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["white", "black"]
        },
        {
            question: "What’s your mother’s maiden name?",
            questionID:"mothers_maiden_name", 
            headline: "",
            description: "",
            answers: [],
            images: [], 
            inputfield: true,  
            link: [ ],
            url : "",
            color: ["white", "black"]
        },
        {
            question: "What city were you born in?",
            questionID:"birth_city", 
            headline: "",
            description: "",
            answers: [],
            images: [], 
            inputfield: true,  
            link: [ ],
            url : "",
            color: ["white", "black"]
        },
        {
            question: "What is the name of your first pet?",
            questionID:"first_pet", 
            headline: "",
            description: "",
            answers: [],
            images: [], 
            inputfield: true,  
            link: [ ],
            url : "",
            color: ["red", "pink"]
        },
        {
            question: "What was your childhood nickname?",
            questionID:"childhodd_nickname", 
            headline: "",
            description: "",
            answers: [],
            images: [], 
            inputfield: true,  
            link: [ ],
            url : "",
            color: ["white", "black"]
        },
        {
            question: "What was the name of your elementary / primary school?",
            questionID:"elementary_school", 
            headline: "",
            description: "",
            answers: [],
            images: [], 
            inputfield: true,  
            link: [ ],
            url : "",
            color: ["white", "black"]
        },
        {
            question: "Which services would you like to receive? ",
            questionID:"service_choice", 
            headline: "",
            description: "",
            answers: ["Musical striptease burlesque",
            "Vampiress / Schoolgirl Bondage and Teasing",
            "Demon Kitten Furry Play",
            "Big Tit Play",
            "Forced feminist reading",
            "Erotic hypnosis",
            "Puppet peep show"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["yellow", "black"]
        },
        {
            question: "Which performer would you like to meet? ",
            questionID:"performer_choice", 
            headline: "",
            description: "",
            answers: ["Petra Blair",
            "Kiko",
            "Violet Violent",
            "Mistress Amandara",
            "Goofy Toof",
            "Vega Bonita",
            "goddess Vannessa"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["red", "white"]
        },
        {
            question: "Do you want to feel?",
            questionID:"do_you_want_to_feel", 
            headline: "I’ll make you want",
            description: "",
            answers: ["yes", "yes please", "yes please Goddess", "Please, I beg you", "I won’t ever deserve but maybe the Mistress is charitable ","How much can I pay?"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["red", "white"]
        },
        {
            question: "What do you need?",
            questionID:"need", 
            headline: "Don't Lie",
            description: "",
            answers: ["A way through", "A sense of peace", "Someone to take control", "Freedom"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["red", "white"]
        },
        {
            question: "Do you believe in free will?",
            questionID:"free_will", 
            headline: "Don't Lie",
            description: "",
            answers: ["I am free to choose", "You tell me", "I am on new potency medication", "no", "everything is predetermined"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["red", "white"]
        },
        {
            question: "Do you share your mastubatory fantasies with your friends?",
            questionID:"sharing_mastubatory_fantasies", 
            headline: "tag your friends",
            description: "",
            answers: ["I dont have friends", "i dont masturbate", "my friends already know I fantasize about them", "i dont share masturbation", "i share everything"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["yellow", "black"]
        },
        {
            question: "",
            questionID:"fighter", 
            headline: "",
            description: "choose your fighter",
            answers: [],
            images: ["https://about.fb.com/de/wp-content/uploads/sites/10/2019/01/mz.jpg?fit=4655%2C3102", "https://miro.medium.com/max/2732/1*ZBcYLFqrzsJrIfz3j2ialA.png"], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["red", "white"]
        },
        {
            question: "How often do you climax yourself?",
            questionID:"masturbation", 
            headline: "",
            description: "continue for more ways of gratifying yourself",
            answers: ["around once a day", "a couple of times a week", "never","continously", "i am the only one who knows how to"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["red", "white"]
        },
        {
            question: "Have you ever done potency enhancing drugs?",
            questionID:"suplements", 
            headline: "try erotic meditation today!",
            description: "",
            answers: ["viagra", "levitra", "Flibanserin", "does ghb count?"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["black", "grey"]
        },
        {
            question: "Have you ever gotten hard or wet looking at art?",
            questionID:"art_turn_on", 
            headline: "try gratification today! FREE sign up!",
            description: "",
            answers: ["yes", "no", "this turns me on", "art is for bougies", "data turns me on", "i like it when art takes control"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["black", "grey"]
        },
        {
            question: "",
            questionID:"rorschak", 
            headline: "pictures leaked of things you can create association with",
            description: "which ink blot depicts your genitalia?",
            answers: [],
            images: ["https://img.buzzfeed.com/buzzfeed-static/static/2019-01/14/12/enhanced/buzzfeed-prod-web-06/enhanced-26805-1547485493-3.jpg?downsize=600:*&output-format=auto&output-quality=auto", "https://img.buzzfeed.com/buzzfeed-static/static/2019-01/14/12/enhanced/buzzfeed-prod-web-01/enhanced-20876-1547485629-1.jpg?downsize=600:*&output-format=auto&output-quality=auto"], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["black", "grey"]
        },
        {
            question: "do you agree with the mask mandate?",
            questionID:"mask", 
            headline: "mussle your mouth",
            description: "",
            answers: ["I wear mask", "I dont wear mask", "I like it when the state tells me what to do", "I unwillingly wear mask", "make me"],
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "",
            color: ["black", "grey"]
        },

        {
            question: "CHOOSE YOUR PATH",
            questionID:"pathway", 
            headline: "this data will be stored",
            description: "didnt we tell u we would be watching? ",
            answers: [],
            images: ["https://www.clinical-depression.co.uk/sites/clinical-depression.co.uk/files/learning-path.png","https://st.depositphotos.com/1962533/1873/i/950/depositphotos_18731293-stock-photo-digital-highway.jpg", "https://cdn.cheatcc.com/dispatches/large/d04201811.jpg"],
            inputfield: false,
            link: [],
            url : "https://image.shutterstock.com/z/stock-photo-sexy-closeup-portrait-of-handsome-topless-male-model-with-beautiful-eyes-sexy-man-or-muscular-747567787.jpg",

        }, 
            
            
            
            
            
            
    ]
 
    let colors = ["red", "#e04ac7", "#00ff19", "#000000", "#6ba1ff", "#00fbbc", "#ff9d00", "#fe6fff"]
  
   
    let answer = "";
    let name = $("#name")[0].innerText;
 
    function showPopUp(){
        createPopUp(queries);
    
        let closePopUp = document.getElementById("closePopUp");
        
        closePopUp.addEventListener("click", function(ev){
            answer = "too shy to answer";
        })
    }
    function showFirstPopUp(){
        createPopUp(openingQuery);
    
        let closePopUp = document.getElementById("closePopUp");
        
        closePopUp.addEventListener("click", function(ev){
            answer = "too shy to answer";
        })
    }

  

    function createPopUp(queryarray){
        var form = document.getElementById("popup");
       
        var question = document.getElementById("question");
        var headline = document.getElementById("popupHeadline");
        var description = document.getElementById("descriptiontext");
        var answers = document.getElementById("answers");
        answers.innerHTML = "";
        description.innerHTML = "";
        headline.innerHTML = "";
        question.innerHTML = "";
        var questionID = document.getElementById("questionID");
        questionID.innerHTML = "";
        
       
        let currentQueryIndex = Math.floor(Math.random()*queryarray.length);
        let currentQuery = queryarray[currentQueryIndex];
        queryarray.splice( currentQueryIndex, 1);
        console.log(queryarray, queryarray.length);

        question.innerHTML = currentQuery.question;
        if(currentQuery.headline){
            headline.innerHTML = currentQuery.headline + ", " + capitalizeFirstLetter(name);
        }
        description.innerHTML = currentQuery.description
        questionID.innerHTML = currentQuery.questionID;
  
        if(currentQuery.answers.length>0){
            for (let index = 0; index < currentQuery.answers.length; index++) {
                var textbutton = document.createElement("button");
                textbutton.setAttribute("type", "submit")
                textbutton.classList.add("button")
                textbutton.innerHTML =  currentQuery.answers[index];
                answers.append(textbutton);
                textbutton.addEventListener("click", function(ev){
                    answer = ev.target.innerHTML;
                })
                if(currentQuery.color){
                    styling(textbutton, currentQuery.color);
                }
            }
        } else if (currentQuery.images.length>0){  
            for (let index = 0; index < currentQuery.images.length; index++) {
                var imagebutton = document.createElement("button");
                imagebutton.setAttribute("type", "submit")
                imagebutton.classList.add("button")
                imagebutton.classList.add("imageChoice")
               
                let image = document.createElement("img");
                image.src = currentQuery.images[index]
                imagebutton.append(image); 
                if(currentQuery.images.length>2){
                    imagebutton.style.width = "100px"
                }
               
                answers.append(imagebutton);
                imagebutton.addEventListener("click", function(ev){
                    answer = currentQuery.images[index];
                })
            }
        } else if(currentQuery.inputfield){
            let inputfield = document.createElement("input");
            inputfield.setAttribute("name", "answer");
            inputfield.setAttribute("id", "answer");
            answers.appendChild(inputfield);
            var button = document.createElement("button");
            button.setAttribute("type", "submit")
            button.classList.add("inputfield-button")
            button.innerHTML =  "submit"
            answers.append(button);
            button.addEventListener("click", function(ev){
                answer = inputfield.value;
                console.log("inputfield", answer);
            })
         
        } else if(currentQuery.link.length>0){
            answers.innerHTML = `<a href="${currentQuery.link[0]}" target="_blank"><img src="${currentQuery.link[1]}"/></a>`;
        }

        if(currentQuery.color){
            styling(description, currentQuery.color);
        }




        let csurf_hiddenInput = document.createElement("input")
        csurf_hiddenInput.setAttribute("type", "hidden")
        csurf_hiddenInput.setAttribute("value", $('meta[name="_csrf"]').attr('content'))


        randomStyling(form, headline, question, answers, currentQuery.url);

        

    }
    function styling(element, color){
        element.style.backgroundColor = color[0];
        element.style.color = color[1];
        element.style.border = `2px solid ("${color[1]}")`;
    }

    function randomStyling(form, headline, question, answers, background){
    
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;

        if(window.innerWidth>750){
            form.style.width = 400 +"px"
         
            form.style.top = getRandomNumberBetween(0,windowHeight-400) +"px";
            form.style.left = getRandomNumberBetween(0,windowWidth-400)+"px";
        } else{
            form.style.width = 250 +"px"
         
            form.style.top = getRandomNumberBetween(0,windowHeight-250) +"px";
            form.style.left = getRandomNumberBetween(0,windowWidth-250)+"px";
            form.style.top = 0;
            form.style.left =0;
        }

        form.style.background = "";

        let backgroundColor = pickColor(colors);
        form.style.backgroundColor = backgroundColor;
    
        if(background.length > 1){
            form.style.background= `url("${background}")`;
        }


        form.style.display = "block"
        document.body.append(form);
       
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function getRandomNumberBetween(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    function pickColor(colors){
        let index = Math.floor(Math.random() * colors.length);
        let color = colors[index]
        queries.splice( index, 0);
        return color
    }
  

    setTimeout(showFirstPopUp, 0);



    $("#popup").submit(function(e) {
        e.preventDefault();
        let question = document.getElementById("questionID").innerHTML;
           
        $.post(
            "/ajax",
            {
                answer: answer,
               question: question,
                _csrf : $('meta[name="_csrf"]').attr('content')
            }, function (data) {
                console.log(data);
            });
        
        $("#popup").css("display","none");

        if(queries.length>0){
            if(answer === "too shy to answer"){
                showPopUp();
            } else {
                setTimeout(showPopUp, 2000); 
            }
        }
     
       
    });

})();


