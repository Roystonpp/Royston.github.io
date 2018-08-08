var personObject = {name: "Royston", age: 21, Occupation: "QA Trainee"};
var myJSON = JSON.stringify(personObject);
//----------------------------------------------------------------------
function condition()
{
  if(personObject.age >= 20 && personObject.age <= 40){
        document.write("I see you shining b ")
        return true;
  }
    else {
  	    return false;
  }
}
//----------------------------------------------------------------------
function loop()
{
for (var i = 0; i < 11; i++)
    {
	    document.write(+i)
	    console.log(+i); 
    }   
}
//----------------------------------------------------------------------
function iteration2()
{

for (var i = 1; i < 11; i++)
    {
	    if (i % 2 === 0)
	    {
	    document.write(i)
	    console.log(i); 
	    }
    }   
}
