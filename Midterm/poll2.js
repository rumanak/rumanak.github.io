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

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}
