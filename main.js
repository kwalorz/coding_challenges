/*Create the instance properties fullname and email in the Employee class. Given a person's first and last names:
Form the fullname by simply joining the first and last name together, separated by a space.
Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.*/

class Employee {
	constructor (firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	get fullName(){
		return `${this.firstName} ${this.lastName}`;
	}
	get email() {
		return      `${this.firstName}.${this.lastName}@company.com`.toLowerCase();
	}
}

//Create a function that takes a base number and an exponent number and returns the calculation.

const calculateExponent = (num, exp) => {
	return Math.pow(num, exp);
}


//Create a function that counts the integer's number of digits.

const count = n => {
		return Math.abs(n).toString().length;
}


//Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise.

let promise = new Promise ((resolve, reject) => {
	setTimeout(() => {
		resolve("I don't know what I'm doing yet!")
	}, 800 )
})




//You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

const calculateLosses = obj => {
		if(Object.values(obj).length > 0) { 
			return Object
				.values(obj)
				.reduce((sum, itemValue) => { 
					return sum + itemValue;							 		});
		}  else {
			return "Lucky you!";
	}


