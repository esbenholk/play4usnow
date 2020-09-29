(function() {
    setTimeout(function(){
        document.getElementById("popup").style.display = "inline-block";
    }, 3000)
    let answer = "";
    let question = document.getElementById("question").innerHTML;
    console.log(question);

    let buttons = document.getElementsByClassName("button");
    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.addEventListener("click", function(ev){
            answer = ev.target.innerHTML;
            document.getElementById("answers").value = answer;

            button.parentNode.parentNode.display = "none";
        })
        let closePopUp = document.getElementById("closePopUp");
                closePopUp.addEventListener("click", function(ev){
                let answer = "too shy to answer";
                document.getElementById("answers").value = answer;
                closePopUp.parentNode.parentNode.display = "none";
        })

    }
    
    $("#popup").submit(function(e) {
        e.preventDefault();
        
        $.post(
            "/ajax",
            {
                answer: answer,
               question: question,
                _csrf : $('meta[name="_csrf"]').attr('content')
            }, function (data) {
                
    
            });
            $("#popup").css("display","none");
    });


  
})();


