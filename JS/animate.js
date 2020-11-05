console.log("js!");

let theButton = document.querySelector("button");
let theBody = document.querySelector('body');

var colors = ["pink", "purple", "green", "yellow"];
var i = 0;

if (theButton){
  theButton.addEventListener('click', myMove);
}

function myMove() {
  console.log("click!!!");
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}

document.addEventListener('keydown', theEvent => {
 if (theEvent.keyCode === 32) {
  console.log("space bar!");
  document.querySelector('h1').textContent = "you pressed the space bar!!";
  document.querySelector('button').style.color = "blue";
  document.querySelector('body').style.backgroundColor = colors[i];
  i++;
  if (i == 3)
    i = 0;
 }
})

document.addEventListener('keydown', function(theEvent) {
 if (theEvent.keyCode === 82) {
  console.log("R!");
  document.querySelector('h1').textContent = "Time to Reset";
  document.querySelector('body').style.backgroundColor = "blue";
  document.querySelector('button').style.color = "black";
  var elem = document.getElementById("animate");
  elem.style.top = 0 + "px"; 
  elem.style.left = 0 + "px";
  }
})

