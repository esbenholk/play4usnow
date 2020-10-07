


(function() {
    let possible  = [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://fenzy.de/media/uploads/public/product/9662-0940d404cd5d6448.jpg",
        "https://www.dw.com/image/37709110_403.jpg",
        "https://www.thcfinder.com/uploads/files/super-big-sexy-nugs-thcfinder.jpg",
        "https://m.media-amazon.com/images/I/71vGZmxWNeL._SS500_.jpg",
        "https://chandvishah.com/therapy/wp-content/uploads/sites/4/2019/11/crystals.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNrJaq9Rdi9v9T-pm17Y_bag3ey4U5-K6ehg&usqp=CAU",
        "https://images1.phoenixnewtimes.com/imager/u/original/10674460/psychic.jpg",
        "https://inst-1.cdn.shockers.de/hs_cdn/out/pictures/master/product/1/peitsche-mit-strass--schwarze-fetisch-peitsche--kunstleder-peitsche-29497.jpg", 
        "https://images-na.ssl-images-amazon.com/images/I/61SwNme4xqL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71r90zxNwCL._AC_UY218_.jpg",
        "data:image/jpeg;base64,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",
        "https://images-na.ssl-images-amazon.com/images/I/61VgeRLVngL._AC_SY355_.jpg",
        "https://lh3.googleusercontent.com/proxy/sXDL5NJcK_cFWzeoblBZ251Eq3wQHP1RPkr7TA5FZo--kEB13rmN0Hxywr7-P2hOo-y5za7U9QhHo0yJVlCsVRCNjfQFi4dl9JT1GSvxNkfVPazE1wfMIaIHke6dno_6_d0LVGVJRM3XV0t5UMoDR2d8bOX7xJ737kY",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLFkFMbCBEB8g40WYu5Gv9XTOnk4GAzes1TQ&usqp=CAU",
        "https://img-drugabuse-com.s3.amazonaws.com/wp-content/uploads/drugabuse-shutter501482518-snorting-morphine.jpg",
        "https://cdn.gaystarnews.com/uploads/2017/09/unspecified.jpeg",
        "https://cdn.gaystarnews.com/uploads/2017/09/5-Guys-chilling-Image-1-copy.jpg",
        "https://cafeconti.wdfiles.com/local--files/wiki%3Athe-difference-between-a-psychiatrist-and-psychologist/psychologist-1024x634.jpg",
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/phone-sex-operator-1554723977.jpg",
        "https://s3.crackedcdn.com/phpimages/personalexperience/8/7/2/527872_v2.jpg"

    ]

    let possibleFeeling  = [
        "horny", "sad", "aroused", "focused", "human"
    ]
   let answers = [];
   let counter= 1;
    
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

(function() {
    ticker("headlines1");
  
    function ticker(name){
    var headlines = document.getElementById(name);
    var links = headlines.getElementsByTagName("a");
  
    var anim;
    
  
    var left = headlines.offsetLeft;
  
    moveHeadLines();
    function moveHeadLines() {
        left--;
        if (left <= -links[0].offsetWidth) {
            left += links[0].offsetWidth;
            headlines.appendChild(links[0]);
        }
        headlines.style.left = left + "px";
        anim = requestAnimationFrame(moveHeadLines);
    }
    headlines.addEventListener("mouseenter", function() {
        cancelAnimationFrame(anim);
    });
  
    headlines.addEventListener("mouseleave", function() {
        moveHeadLines();
    });
  
    }
    
  
  
  
  })();
  
