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

var x = 300;
var y = 375;
var p = document.getElementById('description');
	

$( "#after_submit" ).click(function() {
	if (you == "Slytherin"){
		$( "#SY" ).slideDown( "slow", function() {
			document.getElementById("SY").style.width = x + "px";
			document.getElementById("SY").style.height = y + "px";
			document.getElementById("number_choice").innerHTML = "You belong in " + you.fontcolor("green") + ".";
			p.remove();
			document.getElementById("SD").style.visibility = "visible";
  		});
  		$( "#GR").hide( function() {
  			$( "#GR").remove();
  		});
  		$( "#GD").hide( function() {
  			$( "#GD").remove();
  		});
  		$( "#RA").hide( function() {
  			$( "#RA").remove();
  		});
  		$( "#HP").hide( function() {
  			$( "#HP").remove();
  		});
  		$( "#GD").remove();
  		$( "#HD").remove();
  		$( "#RD").remove();
	}
	else if (you == "Gryffindor"){
		$( "#GR").slideDown( "slow", function() {
			document.getElementById("GR").style.width = x + "px";
			document.getElementById("GR").style.height = y + "px";
			document.getElementById("number_choice").innerHTML = "You belong in " + you.fontcolor("red") + ".";
			p.remove();
			document.getElementById("GD").style.visibility = "visible";
  		});
  		$( "#SY").hide( function() {
  			$( "#SY").remove();
  		});
  		$( "#RA").hide( function() {
  			$( "#RA").remove();
  		});
  		$( "#HP").hide( function() {
  			$( "#HP").remove();
  		});
  		$( "#SD").remove();
  		$( "#HD").remove();
  		$( "#RD").remove();
	}
	else if (you == "Ravenclaw"){
		$( "#RA" ).slideDown( "slow", function() {
			document.getElementById("RA").style.width = x + "px";
			document.getElementById("RA").style.height = y + "px";
			document.getElementById("number_choice").innerHTML = "You belong in " + you.fontcolor("blue") + ".";
			p.remove();
			document.getElementById("RD").style.visibility = "visible";
  		});
  		$( "#GR").hide( function() {
  			$( "#GR").remove();
  		});
  		$( "#SY").hide( function() {
  			$( "#SY").remove();
  		});
  		$( "#HP").hide( function() {
  			$( "#HP").remove();
  		});
  		$( "#GD").remove();
  		$( "#HD").remove();
  		$( "#SD").remove();
	}
	else if (you == "Hufflepuff"){
		$( "#HP" ).slideDown( "slow", function() {
			document.getElementById("HP").style.width = x + "px";
			document.getElementById("HP").style.height = y + "px";
			document.getElementById("number_choice").innerHTML = "You belong in " + you.fontcolor("yellow") + ".";
			p.remove();
			document.getElementById("HD").style.visibility = "visible";
  		});
  		$( "#GR").hide( function() {
  			$( "#GR").remove();
  		});
  		$( "#RA").hide( function() {
  			$( "#RA").remove();
  		});
  		$( "#SY").hide( function() {
  			$( "#SY").remove();
  		});
  		$( "#GD").remove();
  		$( "#SD").remove();
  		$( "#RD").remove();
	}
});

}