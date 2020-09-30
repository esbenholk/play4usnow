

(function() {
    let queries = [
        {
            question: "are you ready?",
            headline: "new for",
            answers: ["almost", "never", "oh boy am i", "i still dont know what this is"],
            images: [],
            inputfield: false
        },
        {
            question: "what do you like?",
            headline: "ALERT ALERT ALERT",
            answers: [],
            images: ["https://www.tutonaut.de/wp-content/uploads/2019/02/Glitch.jpg", "https://i.imgur.com/rLPAkoQ.jpg"],
            inputfield: false
        },
        {
            question: "are you honest?",
            headline: "singles in your area are looking to meet you",
            answers: [],
            images: [],
            inputfield: true
        }
    ]
 
    setTimeout(showPopUp, 0);

    let answer = "";
    let name = $("#name")[0].innerText;
 
    function showPopUp(){

        createPopUp();
    
        let closePopUp = document.getElementById("closePopUp");
        
        closePopUp.addEventListener("click", function(ev){
            answer = "too shy to answer";
        })
    }

    function createPopUp(){
        var form = document.getElementById("popup");
       
        var question = document.getElementById("question");
        var headline = document.getElementById("popupHeadline");
        var answers = document.getElementById("answers");
        answers.innerHTML = "";
       
        let currentQueryIndex = Math.floor(Math.random()*queries.length);
        let currentQuery = queries[currentQueryIndex];
        queries.splice( currentQueryIndex, 1);

        question.innerHTML = currentQuery.question;
        headline.innerHTML = currentQuery.headline + ", " + capitalizeFirstLetter(name);
  
        if(currentQuery.answers.length>0){
            for (let index = 0; index < currentQuery.answers.length; index++) {
                var textbutton = document.createElement("button");
                textbutton.setAttribute("type", "submit")
                textbutton.innerHTML =  currentQuery.answers[index];
                answers.append(textbutton);
                textbutton.addEventListener("click", function(ev){
                    answer = ev.target.innerHTML;
                })
            }
        } else if (currentQuery.images.length>0){  
            for (let index = 0; index < currentQuery.images.length; index++) {
                var imagebutton = document.createElement("button");
                imagebutton.setAttribute("type", "submit")
               
                imagebutton.style.backgroundImage = currentQuery.images[index];
                answers.append(imagebutton);
                imagebutton.addEventListener("click", function(ev){
                    answer = ev.target.innerHTML;
                })
            }
        } else if(currentQuery.inputfield){
            let inputfield = document.createElement("input");
            inputfield.setAttribute("name", "answer");
            inputfield.setAttribute("id", "answer");
            answers.appendChild(inputfield);
            var button = document.createElement("button");
            button.setAttribute("type", "submit")
            button.innerHTML =  "submit"
            answers.append(button);
            button.addEventListener("click", function(ev){
                answer = inputfield.value;
                console.log("inputfield", answer);
            })
         
        }
        let csurf_hiddenInput = document.createElement("input")
        csurf_hiddenInput.setAttribute("type", "hidden")
        csurf_hiddenInput.setAttribute("value", $('meta[name="_csrf"]').attr('content'))


        randomStyling(form);

        form.style.display = "block"
        document.body.append(form);

    }

    function randomStyling(form){
        form.style.width = Math.random() * (700 - 100) + 200 + "px";
        form.style.height = Math.random() * (700 - 100) + 200 + "px";

        var r = () => Math.random() * 256 >> 0;
        form.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`;

        form.style.top = Math.random() * (500 - 100) + 100 + "px";
        form.style.left = Math.random() * (500 - 100) + 100 + "px";
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    $("#popup").submit(function(e) {
        e.preventDefault();
        let question = document.getElementById("question").innerHTML;
           
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
                setTimeout(showPopUp, 3000); 
            }
        }
     
       
    });

})();


