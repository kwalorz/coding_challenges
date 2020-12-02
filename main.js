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
	};
}

//Create a function that concatenates n input arrays, where n is variable.

const concat = (...arrays) => arrays.flat();


//Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).

class Circle {
	constructor(radius) {
		this.radius = radius;
	}
	getArea() {return Math.PI * Math.pow(this.radius, 2)};
	getPerimeter(){return (2*Math.PI) * this.radius};
}

//Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

const jazzify = arr => arr.map(chord => {
	if(chord.endsWith('7')) {
			return chord;
		} else {
			return `${chord}7`;
		}
});


/*Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties: name, population, continent.
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).*/

function cityFacts(city) {
	return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`
}

//Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

const inkLevels = inks => Math.min(...Object.values(inks));


/*Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?
Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
Create a function that will receive an object with two key/values:
people ⁠— Number of people in the household.
tp ⁠— Number of rolls.
Return a statement telling the user if they need to buy more TP!*/

function tpChecker(home) {
	let sheets = home.tp * 500;
	let usage = home.people * 57;
	let total = Math.floor(sheets/usage);
	if(total > 14) {
		return `Your TP will last ${total} days, no need to panic!`
	} else {
		return `Your TP will only last ${total} days, buy more!`
	}
}

//Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

const freeShipping = order => {
	 Object.values(order).reduce((total,item) => item += total) > 50 ? true : false;
}

/*Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.*/

const derivative = (b, m) => b * Math.pow(m, b -1);

/*Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.*/

const testJackpot = result => result.every(el => el === result[0]);

/*The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
Write a function that returns the total number of non-nested items in a nested array.*/
const getLength = arr => arr.flat(Infinity).length;
 
/*Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.*/

const numInStr = arr => arr.filter(item => item.match(/\d+/g) ? item : '');


