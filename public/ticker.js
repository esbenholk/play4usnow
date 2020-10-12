
(function() {
    ticker("headlines1");
    ticker("headlines2");
    ticker("headlines3");
  
    function ticker(name){
    var headlines = document.getElementById(name);
    if(headlines){
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
    

    }
    
  
  
  
  })();