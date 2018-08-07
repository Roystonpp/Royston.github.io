var personObject = {name: "Royston", age: 21, Occupation: "QA Trainee"};
var myJSON = JSON.stringify(personObject);
//personObject.name = "Chi";
//document.write(personObject.name);
//----------------------------------------------------------------------
function addage(){
	personObject.age = personObject.age + 1
    return personObject;
} 
// function changeage()
// {
// 	var value = personObject(document.getElementById('age').value, 1);
// 	value++;
// 	document.getElementById('age').value = value;
//----------------------------------------------------------------------
function addperson(name, age, Occupation)
{
	var personObject = new Object();
	personObject.name = name;
	personObject.age = age;
	personObject.Occupation = Occupation;
 return personObject;
 }
//----------------------------------------------------------------------
 	var elliott = "He said 'My name is Elliott' ";
 	var upper = elliott.toUpperCase();
//----------------------------------------------------------------------
 	var str1 = "chi";
 	var str2 = 808;
 	var con = str1.concat(str2);
//----------------------------------------------------------------------
 	var trainers = ["adidas EQT ","Air Max 97 ","Jordan Retro 8 "];

function addString(string)
{
	trainers.push(string)
	return trainers;
}
function removeString()
{
	trainers.splice(trainers.length -1,1)
	return trainers;
}
