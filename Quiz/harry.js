function check(){

var countG = 0;
var countH = 0;
var countR = 0;
var countS = 0;

var questions = [document.quiz2.question1.value, document.quiz2.question2.value, document.quiz2.question3.value,
				document.quiz2.question4.value, document.quiz2.question5.value, document.quiz2.question6.value,
				document.quiz2.question7.value, document.quiz2.question8.value, document.quiz2.question9.value,
				document.quiz2.question10.value, document.quiz2.question11.value];

	var i;
	for (i = 1; i < 7; i++) {
		if (questions[i] == "G"){
			countG++;
		}
		else if (questions[i] == "H"){
			countH++;
		}
		else if (questions[i] == "R"){
			countR++;
		}
		else if (questions[i] == "S"){
			countS++;
		}
	}

var results = Math.max(countG, countH, countR, countS);
var you;
	if (results == countG){
		you = "Gryffindor";
	}
	else if (results == countH){
		you = "Hufflepuff";
	}
	else if (results == countR){
		you = "Ravenclaw";
	}
	else if (results == countS){
		you = "Slytherin";
	}

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_choice").innerHTML = "You belong in " + you + ".";
	
}