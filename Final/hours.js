function check(){

var sleep = parseInt(document.ask.question1.value);
var school = parseInt(document.ask.question2.value);
var hw = parseInt(document.ask.question3.value);
var work = parseInt(document.ask.question4.value);

var hours_start = 168;
var hours_used;
var hours_remain;
var days;

hours_used = sleep + school + hw + work;
hours_remain = hours_start - hours_used;
days = parseInt(hours_remain/7);

document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "This leaves you with " + hours_remain + " hours left in a week."
+ "<br>" +"This is " + days + " hours per day left for eating, traveling, and free time for yourself";
}