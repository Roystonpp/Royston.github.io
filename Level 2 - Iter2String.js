function iteration3() {

for (var i = 1; i < 101; i++) {
	    if (i % 3 === 0 && i % 5 === 0) {
	    console.log("FizzBuzz");
	    }
	    else if (i % 5 === 0) {
	    	console.log("Buzz");
	    }
	    else if (i % 3 === 0) 
	    {
	    	console.log("Fizz");
	    }
	    else {
	    	console.log(i);
	    }
    }   
}

function divide(number){
	
       count = 0;
while(number != 1){

	if( number % 3 == 0){
		
		number = number / 3;
		count++;		
		console.log(number);
	}

	else if ( number % 3 == 1){
		number = number -1;
		count++;		
		console.log(number);
	}

	else {
		number++;
		count++;		
		console.log(number);
	}
}
}

function stringFour(stringOne, stringTwo){

	let stringOne = "Chiiii";
	let stringTwo = "TheDuuuuffff";

}