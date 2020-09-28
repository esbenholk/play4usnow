


(function() {
    let possible  = [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
    ]
    let possibleFeeling  = [
        "horny", "sad", "aroused", "focused", "human"
    ]
   let answers = [];
   let counter= 1;
   let category = ["sexy","2","chat","girl","gay","online","dating","performance","sexw", "cam"]
    
   let recaptchalist = document.getElementsByClassName("recaptcha-grid");
   if(recaptchalist.length>0){
       for (let index = 0; index < recaptchalist.length; index++) {
           let recaptcha = recaptchalist[index];
           let images = recaptcha.getElementsByTagName("img");
           for (let i = 0; i < images.length; i++) {
               let image = images[i];
               image.src = possible[Math.floor(Math.random() * possible.length)];

               image.addEventListener("click", function(ev){
                answers.push(ev.target.src);
                ev.target.src = "https://picsum.photos/200/300?random="+counter+"";
                // ev.target.src= "https://source.unsplash.com/1600x900/?"+category[Math.floor(Math.random()*category.length)] +"";
                counter ++;
               })
           }
           
       }
   }

   let recaptchaforms = document.getElementsByClassName("recaptcha");
   if(recaptchaforms.length>0){
       for (let index = 0; index < recaptchaforms.length; index++) {

           let recaptchaform = recaptchaforms[index];
           let checkbox = recaptchaform.getElementsByTagName("input")[0];
           
           let question = recaptchaform.getElementsByTagName("p")[0];
            question.innerHTML = question.innerHTML + " "+ possibleFeeling[Math.floor(Math.random() * possibleFeeling.length)];
          

           checkbox.addEventListener("change", function(){
               let recaptcha_grid_container = recaptchaform.getElementsByClassName("recaptcha-grid-container")[0]
               recaptcha_grid_container.style.display = "inline-block"
            
           });

           let button = recaptchaform.getElementsByTagName("button")[0];
           button.addEventListener("click", function(){
            document.getElementById("answers").value = answers;
            document.getElementById("question").value = question.innerHTML;
       
    
         
        });
       }
   }


})();
