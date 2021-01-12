//buble Object by Arnav(associative array) - key:value pairs




//Create an arry of random bubble objects
let bubbles = [];

console.log(bubbles)

//Main draw loop
requestAnimationFrame(draw);
function draw() {
    //Fill canvas
    background("black")
   

    for (let i = 0; i < bubbles.length; i++) {


        //Move and Draw All Bubbles
        moveBubble(bubbles[i]);
        drawBubble(bubbles[i]);
    }

    // Loop draw function
    requestAnimationFrame(draw);
}


//EVENT STUFF
document.addEventListener("keydown", keydownHandler);

function keydownHandler(event) {
    if (event.keyCode === 39) { // Right Arrow
        //Add a new random bubble - add a new random bubble
        addBubble();
    } else if (event.keyCode === 37) { //Left Arrow
        //Remove the last bubble
        bubbles.pop();

    }
}

//TIMERS
setInterval(addBubble, 1000);

function addBubble () {
    bubbles.push(newBubble(Math.random() * 800, Math.random() * 600, 30, "white"));  
}

cnv.addEventListener("click", clickHandler, )

let score = document.getElementById("scoreNumber")
let scores = 0;
let easyBtn = document.getElementById("easybtn")





function clickHandler () {
    bubbles.onclick = bubbles.pop();
    scores++
    scoreNumber.innerHTML = scores;
    
    
}

// function alert() {
//     alert("hello")
// }


