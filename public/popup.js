

(function() {
    let queries = [
        {
            question: "are you ready?",
            headline: "new for",
            answers: ["almost", "never", "oh boy am i", "i still dont know what this is"],
            images: [],
            inputfield: false,
            link: []
        },
        {
            question: "what do you like?",
            headline: "ALERT ALERT ALERT",
            answers: [],
            images: ["https://www.tutonaut.de/wp-content/uploads/2019/02/Glitch.jpg", "https://i.imgur.com/rLPAkoQ.jpg"],
            inputfield: false,
            link: []
        },
        {
            question: "are you honest?",
            headline: "singles in your area are looking to meet you",
            answers: [],
            images: [],
            inputfield: true,
            link: []
        },
        {
            question: "",
            headline: "HYDRA BERLIN",
            answers: [],
            images: [],
            inputfield: false,
            link: ["https://www.hydra-berlin.de/beratungsstelle/informationen/bibliothek/", "https://www.hydra-berlin.de/fileadmin/_processed_/csm_16-100_de7212bcde.jpg"]
        }
    ]
 
    let colors = ["red","grey","white", "black", "yellow", "#e04ac7", "#00ff19" ,"#d6d6d6"]
    let backgroundImages = [
        "https://media1.popsugar-assets.com/files/thumbor/TNoODquMD1Bd-GEci5ay6T-KZw0/0x0:1776x1776/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/10/16/910/n/1922398/3639bd7c5da782e4e78631.68367395_/i/Sexy-Kim-Kardashian-Pictures-2019.jpg",
        "https://image.shutterstock.com/z/stock-photo-sexy-closeup-portrait-of-handsome-topless-male-model-with-beautiful-eyes-sexy-man-or-muscular-747567787.jpg",
        "https://slm-assets.secondlife.com/assets/5806063/view_large/Snapshot_026_G.jpg?1340715470",
        "https://nwn.blogs.com/.a/6a00d8341bf74053ef0120a85e13b7970b-600wi",
        "https://media.istockphoto.com/photos/portrait-of-a-woman-picture-id961384258?k=6&m=961384258&s=612x612&w=0&h=uUOAxJPioYavXM7XLyxU7IQ9ykVZungPoZhVNJQMyac="
    ]
    let backgroundImageChoice = [true, false]

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
                textbutton.classList.add("button")
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
                imagebutton.classList.add("button")
                imagebutton.classList.add("imageChoice")
               
                imagebutton.style.background= `url("${currentQuery.images[index]}")`;
                
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
            button.innerHTML =  "submit"
            answers.append(button);
            button.addEventListener("click", function(ev){
                answer = inputfield.value;
                console.log("inputfield", answer);
            })
         
        } else if(currentQuery.link.length>0){
            answers.innerHTML = `<a href="${currentQuery.link[0]}"><img src="${currentQuery.link[1]}"/></a>`;
        }




        let csurf_hiddenInput = document.createElement("input")
        csurf_hiddenInput.setAttribute("type", "hidden")
        csurf_hiddenInput.setAttribute("value", $('meta[name="_csrf"]').attr('content'))


        randomStyling(form, headline, question, answers);

        form.style.display = "block"
        document.body.append(form);

    }

    function randomStyling(form, headline, question, answers){
        let windowWidth = window.innerWidth
        let maxWidth = windowWidth*0.80;
        let minWidth = windowWidth*0.50
        if(windowWidth>720){
            maxWidth = windowWidth*0.50;
            minWidth = windowWidth*0.10
        }
        let width = Math.random() * (maxWidth - minWidth) + minWidth;

        let windowHeight = window.innerHeight
        let maxHeight = windowHeight*0.60;
        let minHeight = windowHeight*0.50

        let height = Math.random() * (maxHeight- minHeight) + minHeight;
        
        form.style.width = width + "px";
        form.style.height = height + "px";

        let mainColor = pickColor(colors);
        let backgroundColor = pickColor(colors);
        if(backgroundColor === mainColor){
            backgroundColor = pickColor(colors);
        }
        form.style.backgroundColor = backgroundColor;
        form.style.border = `3px solid ${mainColor}`
        headline.style.color = mainColor;
        question.style.color = pickColor(colors);
 
        form.style.top = Math.random() * ((windowHeight-height) -0) + 0 + "px";
        form.style.left = Math.random() * ((windowWidth - width) -0) + 0 + "px";


        function pickColor(colors){
            let index = Math.floor(Math.random() * colors.length);
            let color = colors[index]
            queries.splice( index, 1);
            return color
        }
        if(backgroundImageChoice[Math.floor(Math.random() * backgroundImageChoice.length)]){
            form.style.background= `url("${backgroundImages[Math.floor(Math.random() * backgroundImages.length)]}") no-repeat`;
        }
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


