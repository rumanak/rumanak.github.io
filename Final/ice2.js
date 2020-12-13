function check(){

var loan = parseInt(document.ask.question1.value);
var work = parseInt(document.ask.question2.value);
var save = parseInt(document.ask.question3.value);
var expense = parseInt(document.ask.question4.value);


var cost = 65000;
var cost_left = cost - loan;
var wage = work * 15;
var wage_year = wage * 48;
var wage_save = wage_year * (save/100);
var plus = expense * 48;
var cost_plus = cost_left + plus;
var real_cost = cost_plus - wage_save;
var loan_cost = real_cost + loan;



document.getElementById("after_submit").style.visibility = "visible";

document.getElementById("number_correct").innerHTML = "This leaves you with " + cost_left + " cost left for school in a year." +
"<br>" + "This is you income you saved " + wage_save
+ "<br>" +"This is " + cost_plus + " cost left plus your recreational expenses." + "<br>" 
+ "However, with your savings, your real cost is " + real_cost + "." + "<br>"
+ "Keep in mind, you have to pay back that loan though! " + loan_cost + ".";


if (real_cost < 10000){
	document.getElementById("happy").style.display = "block";
	document.getElementById("worried").style.display = "none";
	document.getElementById("sad").style.display = "none";
}
else if ((real_cost < 25000) && (real_cost > 10000)){
	document.getElementById("worried").style.display = "block";
	document.getElementById("sad").style.display = "none";
	document.getElementById("happy").style.display = "none";
}
else if (real_cost > 30000){
	document.getElementById("sad").style.display = "block";
	document.getElementById("worried").style.display = "none";
	document.getElementById("happy").style.display = "none";
	document.getElementById("number_correct").innerHTML = 
	"This leaves you with " + cost_left + " cost left for school in a year." +
	"<br>" + "This is you income you saved " + wage_save
	+ "<br>" +"This is " + cost_plus + " cost left plus your recreational expenses." + "<br>" 
	+ "However, with your savings, your real cost is " + real_cost + "." + "<br>"
	"Keep in mind, you have to pay back that loan though! Making your cost really " + loan_cost + "." + "<br>"
	"I hope you get a lot of financial aid!";
}


}