// // Initialising the canvas
// var canvas = document.querySelector('canvas'),
//     ctx = canvas.getContext('2d');

// // Setting the width and height of the canvas
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Setting up the letters
var letters = [];
let users = document.getElementsByClassName("user");
for (let index = 0; index < users.length; index++) {
	const element = users[index];
	let quotes = element.getElementsByTagName("li");
	for (let index = 0; index < quotes.length; index++) {
		letters.push(quotes[index].innerHTML)
	
	}

	
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var fire = document.getElementById("burning");

setTimeout(burn, 5000)
function burn(){
	document.getElementById("burning").style.opacity = 1;
}

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//asian characters - taken from the unicode charset



//converting the string into an array of single characters


var font_size = 9;
var columns = c.width/font_size; //number of columns for the rain
console.log(columns);
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
  
   //added a small text in the middle of the matrix rain (for cute sense of humor)
//    ctx.fillStyle = "orange";
//    ctx.font = "bold 70px Arial";
//    ctx.fillText("This Matrix is running on 32-bit Windows", 50, 150);
	
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
	  //declare the empty text variable to alternate asian characters
	  var text;
		  text = letters[Math.floor(Math.random()*letters.length)];
		  
    
 
            
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
			
			


		
		//incrementing Y coordinate
		drops[i]+=0.2;
	}
}

setInterval(draw, 80);