

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
            headline: "ake my identity and expose me",
            description: "",
            answers: ["I can’t...", "I’m free and open", "Im private forever", "I made my family who accept me and know everything","If my family find out Ill be turned on, but disowned"] ,
            images: [], 
            inputfield: false,  
            link: [ ],
            url : "https://www.assuranceagency.com/Media/Default/blog/headers/Voluntary%20Series_Identity%20Theft.jpg",
            color: ["pink", "yellow"]
            },
            
    ]
 
    let colors = ["red","white", "#e04ac7", "#00ff19"]
  
   
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
                // imagebutton.style.background= `url("${currentQuery.images[index]}")`;
                imagebutton.append(image); 
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

        form.style.display = "block"
        document.body.append(form);

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
            form.style.height = "auto"
            form.style.top = getRandomNumberBetween(0,windowHeight-400) +"px";
            form.style.left = getRandomNumberBetween(0,windowWidth-400)+"px";
        } else{
            form.style.width = 250 +"px"
            form.style.height = 250 +"px"
            form.style.top = getRandomNumberBetween(0,windowHeight-250) +"px";
            form.style.left = getRandomNumberBetween(0,windowWidth-250)+"px";
            form.style.top = 0;
            form.style.left =0;
        }

        let backgroundColor = pickColor(colors);
        form.style.backgroundColor = backgroundColor;
    
        if(background.length > 1){
            form.style.background= `url("${background}")`;
        }
       
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
        queries.splice( index, 1);
        return color
    }
  

    setTimeout(showFirstPopUp, 30000);



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
                setTimeout(showPopUp, 6000); 
            }
        }
     
       
    });

})();


