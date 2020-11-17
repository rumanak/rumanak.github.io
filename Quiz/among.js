function check(){

var countred = 0;
var countblue = 0;
var countlime = 0;
var countpink = 0;
var countwhite = 0;

var colors = ["red", "blue", "lime", "pink", "white"];
	
var questions = [document.quiz.question1.value, document.quiz.question2.value, document.quiz.question3.value,
				document.quiz.question4.value, document.quiz.question5.value, document.quiz.question6.value,
				document.quiz.question7.value];

	var i;
	for (i = 1; i < 7; i++) {
		if (questions[i] == "red"){
			countred++;
		}
		else if (questions[i] == "blue"){
			countblue++;
		}
		else if (questions[i] == "lime"){
			countlime++;
		}
		else if (questions[i] == "pink"){
			countpink++;
		}
		else if (questions[i] == "white"){
			countwhite++;
		}
	}

var results = Math.max(countred, countblue, countlime, countwhite, countpink);
var you;
	if (results == countred){
		you = "red";
	}
	else if (results == countblue){
		you = "blue";
	}
	else if (results == countlime){
		you = "lime";
	}
	else if (results == countpink){
		you = "pink";
	}
	else if (results == countwhite){
		you = "white";
	}

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_choice").innerHTML = "You got " + you + ".";
}
