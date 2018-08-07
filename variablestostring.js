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

 function stringOne(String)
 {
 	var elliott = new Object("He said 'My name is Elliott' ");
 }
