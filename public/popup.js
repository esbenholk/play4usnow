(function() {
    setTimeout(function(){
        document.getElementById("popup").style.display = "inline-block";
    }, 3000)

    let buttons = document.getElementsByClassName("button");
    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        button.addEventListener("click", function(ev){
            let answer = ev.target.innerHTML;
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

  
})();
