function check(){

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var correct = 0;
	
	if (question1 == "c"){
		correct++;
	}

	if (question2 == "c"){
		correct++;
	}

var messages = ["You would have passed!", "You would not pass."];

var range;

	if (correct < 1){
		range = 1;
	}

	if (correct > 0 && correct < 2) {
		range = 1;
	}

	if (correct > 1) {
		range = 0;
	}

document.getElementById("after_submit").style.visibilty = "visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

}
