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

//Create a function to return the amount of potatoes there are in a string.

const potatoes = str => str.match(/potato/g).length;


//Create a function that takes a string and returns the number (count) of vowels contained within it.

const countVowels = str => str.match(/[aeiou]/gi).length;

//Use a regular expression to test for an empty string.

const REGEXP = /^\s*$/g;

//Create a function that takes an integer n and returns the nth tetrahedral number

const tetra = n => (n * (n + 1) * (n + 2)) / 6;

/*Create a function that returns true if the first array can be nested inside the second.
arr1 can be nested inside arr2 if:
arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.*/

const canNest = (arr1, arr2) => {
	return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)
};


/*Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.*/

const addUp = num => {
	if(num === 0) {
		return num;
	} else {
		return num + addUp(num - 1);
	}
}
 
 
 
/*Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification.*/

const ascDesNone = (arr, str) => {
	if(str == "Asc") {
		return arr.sort((a,b) => a - b);
	} else if(str == "Des") {
		return arr.sort((a,b) => b - a);
	} else {
		return arr; 
	}
}
 
//Create a function that squares every digit of a number.

const squareDigits = n => {
return Number(n.toString().split('').map(num => num * num).join(''));
}
 
 
/*An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.*/

const isPositiveDominant = a => {
	return Array
		.from(new Set(a))
		.map(num => Math.sign(num))
		.reduce((total, num) => total + num) 
		> 0;
}

//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

const nextEdge = (side1, side2) => (side1 + side2) -1;

/*Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea()and getPerimeter() which give both respective areas and perimeter (circumference).*/

class Circle {
	constructor(radius){
		this.radius = radius
	}
	getPerimeter() {return 2 * Math.PI * this.radius}
	
	getArea(){return Math.PI * this.radius**2}
}

//Create a function that calculates the number of different squares in an n * n square grid.

const numberSquares = n =>  n * (n+1) * (2*n + 1) / 6;

//Create a function that takes an array and returns the sum of all items in the array.

const sumArray = arr => {  
	return	arr.flat(Infinity).reduce((total, num)=>total +num);
}


//Create a function that finds the highest integer in the array 

const findHighest = arr => arr.sort((a,b) => a-b).pop();


//Write a function that calculates the factorial of a number recursively.

const factorial = n => n === 0 ? 1 : n * factorial(n-1);

//Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class.

class OnesThreesNines {
	constructor(int) {
		this.int = int;
	}
	
	get ones() {
		return this.int / 1;
	}
	
	get threes() {
		return Math.floor(this.int / 3);
	}
	
	get nines() {
		return Math.floor(this.int / 9);
	}
	
}

/*Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish*/

const oddishOrEvenish = num => {
   return [...`${num}`]
			.map(Number)
			.reduce((a, b) => a + b) % 2 === 0 ? "Evenish" : "Oddish";
}

/*Create a Book constructor that has two properties : Title, Author and two methods:
A method named getTitle that returns: "Title: " + the instance title.
A method named getAuthor that returns: "Author: " + the instance author.
and instantiate this constructor by creating 3 new books:
Pride and Prejudice - Jane Austen (PP)
Hamlet - William Shakespeare (H)
War and Peace - Leo Tolstoy (WP)*/
class Book {
	constructor(title, author){
		this.title = title;
		this.author =author; 
	}
	
	getTitle(){
		return `Title: ${this.title}`;
	}
	
	getAuthor(){
		return `Author: ${this.author}`;
	}
}
 
const PP = new Book('Pride and Prejudice','Jane Austen');
const H = new Book('Hamlet', 'William Shakespeare');
const WP = new Book('War and Peace', 'Leo Tolstoy');

/*#34  /*You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.*/

const sortDrinkByPrice = drinks => {
	return drinks.sort((a, b) => a.price > b.price ? 1 : -1);
}


 
 
 





