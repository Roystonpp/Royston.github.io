
var timeHourTens = {};
var timeHourUnits = {};
var timeMinutesTens = {};
var timeMinutesUnits = {};
var timeHours = {};
var timeMinutes = {};

var currentHours;
var currentMinUnits;
var isPM;
var currentMinutes1;
var currentMinutesTens;

timeHourTens["00"] = "";
timeHourTens[10] = "";
timeHourTens[20] = "Eight";

timeHours["00"] = "midnight";
timeHours["01"] = "one";
timeHours["02"] = "two";
timeHours["03"] = "three";
timeHours["04"] = "four";
timeHours["05"] = "five";
timeHours["06"] = "six";
timeHours["07"] = "seven";
timeHours["08"] = "eight";
timeHours["09"] = "nine";
timeHours["10"] = "ten";
timeHours["11"] = "eleven";
timeHours["12"] = "twelve";
timeHours["13"] = "one";
timeHours["14"] = "two";
timeHours["15"] = "three";
timeHours["16"] = "four";
timeHours["17"] = "five";
timeHours["18"] = "six";
timeHours["19"] = "seven";
timeHours["20"] = "eight";
timeHours["21"] = "nine";
timeHours["22"] = "ten";
timeHours["23"] = "eleven";

timeMinutes[11] = "eleven";
timeMinutes[12] = "twelve";
timeMinutes[13] = "thirteen";
timeMinutes[14] = "fourteen";
timeMinutes[15] = "fifteen";
timeMinutes[16] = "sixteen";
timeMinutes[17] = "seventeen";
timeMinutes[18] = "eighteen";
timeMinutes[19] = "nineteen";

timeMinutesTens["0"] = "oh";
timeMinutesTens[1] = "ten";
timeMinutesTens["2"] = "twenty";
timeMinutesTens[3] = "thirty";
timeMinutesTens[4] = "fourty";
timeMinutesTens[5] = "fifty";

timeMinutesUnits["0"] = "";
timeMinutesUnits["1"] = "one";
timeMinutesUnits[2] = "two";
timeMinutesUnits[3] = "three";
timeMinutesUnits[4] = "four";
timeMinutesUnits[5] = "five";
timeMinutesUnits[6] = "six";
timeMinutesUnits[7] = "seven";
timeMinutesUnits[8] = "eight";
timeMinutesUnits[9] = "nine";

var timeNow = new Date();
var hourNow = timeNow.getHours();
var minutesNow = timeNow.getMinutes();

if(hourNow.length<2){
	hourNow = "0"+ hourNow;
}

if(minutesNow.length<2){
	minutesNow = "0"+minutesNow;
}
var inputTime = hourNow + ":" + minutesNow;
console.log(inputTime);


function timeToText() {

	// var input = document.getElementById("timeText").value;
	var input = inputTime;
	console.log(input);
	console.log(timeHours[11]);
	currentHours = timeHours[(input.charAt(0)).concat(input.charAt(1))];

	var currentMinutes;
	
	switch((input.charAt(3)).concat(input.charAt(4))) {
		case "00":
		currentMinutes = "";
		break;
		case "10":
		currentMinutes = "ten";
		break;
		case "11":
		currentMinutes = "eleven";
		break;
		case "12":
		currentMinutes = "twelve";
		break;
		case "13": 
		currentMinutes = "thirteen";
		break;
		case "14":
		currentMinutes = "fourteen";
		break;
		case "15":
		currentMinutes = "fifteen";
		break;
		case "16":
		currentMinutes = "sixthteen";
		break;
		case "17":
		currentMinutes = "seventeen";
		break;
		case "18":
		currentMinutes = "eighteen";
		break;
		case "19":
		currentMinutes = "nineteen";
		break;
		case "20":
		currentMinutesTens = "twenty";
		case "30":
		currentMinutesTens = "thirty";
		break;
		case "40":
		currentMinutesTens = "fourty";
		break;

		case "50":
		currentMinutesTens = "fifty";
		break;


		default:
			currentMinutes = "";
			currentMinutesTens = timeMinutesTens[input.charAt(3)];

		}

	var toInt = parseInt((input.charAt(0)).concat(input.charAt(1)));
	
	if(currentMinutes != ""){
		currentMinutesTens = "";
		currentMinUnits = "";
	}
	else{

	currentMinUnits = timeMinutesUnits[input.charAt(4)];
}




	if(toInt<=12) {isPM = "am";}
	else if(toInt>=12) {isPM = "pm";}

	


document.getElementById('output').innerHTML = "It's " + currentHours + " " + currentMinutes + " " + currentMinutesTens + " " + currentMinUnits + " " + isPM;

}