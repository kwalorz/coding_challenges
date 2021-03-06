/* #1 Create the instance properties fullname and email in the Employee class. Given a person's first and last names:
Form the fullname by simply joining the first and last name together, separated by a space.
Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.*/

class Employee {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get email() {
    return `${this.firstName}.${this.lastName}@company.com`.toLowerCase();
  }
}

// # 2 Create a function that takes a base number and an exponent number and returns the calculation.

const calculateExponent = (num, exp) => {
  return Math.pow(num, exp);
};

// #3 Create a function that counts the integer's number of digits.

const count = n => {
  return Math.abs(n).toString().length;
};

// #4 Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I don't know what I'm doing yet!");
  }, 800);
});

// #5 You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

const calculateLosses = obj => {
  if (Object.values(obj).length > 0) {
    return Object.values(obj).reduce((sum, itemValue) => {
      return sum + itemValue;
    });
  } else {
    return 'Lucky you!';
  }
};

// #6 Create a function that concatenates n input arrays, where n is variable.

const concat = (...arrays) => arrays.flat();

// #7 Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// #8 Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

const jazzify = arr =>
  arr.map(chord => {
    if (chord.endsWith('7')) {
      return chord;
    } else {
      return `${chord}7`;
    }
  });

/* #9 Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties: name, population, continent.
The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).*/

function cityFacts(city) {
  return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
}

// #10 Given an object of how many more pages each ink color can print, output the maximum number of pages the printer can print before any of the colors run out.

const inkLevels = inks => Math.min(...Object.values(inks));

/* #11 Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?
Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets, and the average person uses 57 sheets per day.
Create a function that will receive an object with two key/values:
people ⁠— Number of people in the household.
tp ⁠— Number of rolls.
Return a statement telling the user if they need to buy more TP!*/

function tpChecker(home) {
  let sheets = home.tp * 500;
  let usage = home.people * 57;
  let total = Math.floor(sheets / usage);
  if (total > 14) {
    return `Your TP will last ${total} days, no need to panic!`;
  } else {
    return `Your TP will only last ${total} days, buy more!`;
  }
}

// #12 Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

const freeShipping = order => {
  Object.values(order).reduce((total, item) => (item += total)) > 50
    ? true
    : false;
};

/* #13 Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.*/

const derivative = (b, m) => b * Math.pow(m, b - 1);

/* #14 Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.*/

const testJackpot = result => result.every(el => el === result[0]);

/* #15 The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.
Write a function that returns the total number of non-nested items in a nested array.*/
const getLength = arr => arr.flat(Infinity).length;

/* #16 Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.*/

const numInStr = arr => arr.filter(item => (item.match(/\d+/g) ? item : ''));

// #17 Create a function to return the amount of potatoes there are in a string.

const potatoes = str => str.match(/potato/g).length;

// #18 Create a function that takes a string and returns the number (count) of vowels contained within it.

const countVowels = str => str.match(/[aeiou]/gi).length;

// #19 Use a regular expression to test for an empty string.

const REGEXP = /^\s*$/g;

// #20 Create a function that takes an integer n and returns the nth tetrahedral number

const tetra = n => (n * (n + 1) * (n + 2)) / 6;

/* #21 Create a function that returns true if the first array can be nested inside the second.
		arr1 can be nested inside arr2 if:
		arr1's min is greater than arr2's min.
		arr1's max is less than arr2's max.*/

const canNest = (arr1, arr2) => {
  return (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  );
};

/* # 22 Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.*/

const addUp = num => {
  if (num === 0) {
    return num;
  } else {
    return num + addUp(num - 1);
  }
};

/* #23 Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:
"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification.*/

const ascDesNone = (arr, str) => {
  if (str == 'Asc') {
    return arr.sort((a, b) => a - b);
  } else if (str == 'Des') {
    return arr.sort((a, b) => b - a);
  } else {
    return arr;
  }
};

// #24 Create a function that squares every digit of a number.

const squareDigits = n => {
  return Number(
    n
      .toString()
      .split('')
      .map(num => num * num)
      .join('')
  );
};

/* #25 An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.*/

const isPositiveDominant = a => {
  return (
    Array.from(new Set(a))
      .map(num => Math.sign(num))
      .reduce((total, num) => total + num) > 0
  );
};

// #26 Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

const nextEdge = (side1, side2) => side1 + side2 - 1;

/* #27 Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea()and getPerimeter() which give both respective areas and perimeter (circumference).*/

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

// #28 Create a function that calculates the number of different squares in an n * n square grid.

const numberSquares = n => (n * (n + 1) * (2 * n + 1)) / 6;

// #29 Create a function that takes an array and returns the sum of all items in the array.

const sumArray = arr => {
  return arr.flat(Infinity).reduce((total, num) => total + num);
};

// #30 Create a function that finds the highest integer in the array

const findHighest = arr => arr.sort((a, b) => a - b).pop();

// #31 Write a function that calculates the factorial of a number recursively.

const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

// #32 Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class.

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

/* #33 Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish*/

const oddishOrEvenish = num => {
  return [...`${num}`].map(Number).reduce((a, b) => a + b) % 2 === 0
    ? 'Evenish'
    : 'Oddish';
};

/* #34 Create a Book constructor that has two properties : Title, Author and two methods:
A method named getTitle that returns: "Title: " + the instance title.
A method named getAuthor that returns: "Author: " + the instance author.
and instantiate this constructor by creating 3 new books:
Pride and Prejudice - Jane Austen (PP)
Hamlet - William Shakespeare (H)
War and Peace - Leo Tolstoy (WP)*/
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getTitle() {
    return `Title: ${this.title}`;
  }

  getAuthor() {
    return `Author: ${this.author}`;
  }
}

const PP = new Book('Pride and Prejudice', 'Jane Austen');
const H = new Book('Hamlet', 'William Shakespeare');
const WP = new Book('War and Peace', 'Leo Tolstoy');

/*#35  /*You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.*/

const sortDrinkByPrice = drinks => {
  return drinks.sort((a, b) => (a.price > b.price ? 1 : -1));
};

/*#36  Given an array of scrabble tiles, create a function that outputs the maximum possible score a player can achieve by summing up the total number of points for all the tiles in their hand. Each hand contains 7 scrabble tiles.*/

const maximumScore = tileHand => {
  return tileHand.map(obj => obj.score).reduce((sum, num) => sum + num);
};

/* #37 Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively. */

const mapping = letters => {
  return Object.fromEntries(
    letters.map(letter => [letter, letter.toUpperCase()])
  );
};

/* #38 Create two objects containing full name, mass, and height of Mark and John. Calculate the BMI of each and return which one has the larger BMI */

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

if (mark.bmi > john.bmi) {
  return '${mark.fullName} has a larger BMI at ${mark.bmi}!';
} else if ((mark.bmi = john.bmi)) {
  return "${mark.fullName} and ${john.fullName}'s BMI are the same at ${mark.bmi}";
} else {
  ("${john.fullName}'s BMI has a larger BMI at ${john.bmi}");
}

/* #39 Create a function that checks to see if one team's average score is double that of the opposing team's average score. Each team will give you 3 scores as paramters*/

const doubleAverage = (team1, team2) => {
  return;
  team1.reduce((total, score) => total + score) / team1.length >
  team2.reduce((total, score) => total + score) / team2.length
    ? 'Team 1 wins!'
    : 'Team 2 wins!';
};

/* #40 The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.
Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.*/

const calculateDifference = (obj, limit) => {
  return Object.values(obj).reduce((total, price) => total + price) - limit;
};

/* #41 Given a total due and a list representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.*/

function enoughChange(change, amountDue) {
  let quarters = change[0] * 0.25;
  let dimes = change[1] * 0.1;
  let nickels = change[2] * 0.05;
  let pennies = change[3] * 0.01;
  let total = quarters + dimes + nickels + pennies;

  return total >= amountDue;
}

/* #42 Create a function that takes an array of numbers and returns the second largest number.*/

const secondLargest = arr => arr.sort((a, b) => a - b)[arr.length - 2];

/* #43 In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus. You cannot move backward.
Given you and your friend's tile number(argument b), create a function that returns if it's possible to earn a bonus when you roll the dice.*/

const possibleBonus = (a, b) => a >= !b && b - a > !6;

// #44 Create a function that returns an array of strings sorted by length in ascending order.

const sortByLength = arr => {
  return arr.sort((a, b) => a.length - b.length);
};

/* #45 Create a function that changes specific words into emoticons. 
Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons. Try to solve this without using conditional statements like if/else or switch.*/

function emotify(str) {
  const emoticons = {
    smile: ':D',
    grin: ':)',
    sad: ':(',
    mad: ':P',
  };
  return `Make me ${emoticons[str.split(' ').pop()]}`;
}

// #46 Create a function that returns true if a string is empty and false otherwise;

const isEmpty = s => s === '';

// #47 Given two strings, firstName and lastName, return a single string in the format "last, first".

const concatName = (firstName, lastName) => `${lastName}, ${firstName}`;

/* #48 Try to write a function to flatten an array of subarrays into one array. (Suppose you are  unware there is a .flat() method in the Array prototype). In other words, you want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4] without .flat().*/

function flatten(...arr) {
  return arr;
}

// #49 Given two arguments, return an array which contains these two arguments.

const makePair = (num1, num2) => [num1, num2];

// #50 Create a function that moves all capital letters to the front of a word.

function capToFront(s) {
  let caps = s.match(/[A-Z]/g);
  return caps.concat(s.replace(/[A-Z]/g, '').split('')).join('');
}

// #51 Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

const checkTitle = title =>
  title.split(' ').every(word => word[0] === word[0].toUpperCase());

/*  #52 Create a function that takes 2 arrays of dog’s ages(‘dogsJulia’ and dogsKate) and tells whether not a dog is an adult(3 years old and up) or a puppy(less than 3 years old). Also, there are some surprises thrown in the mix as follows:
Julia found out that the owners of the first and last 2 dogs actually are cats, not dogs. Find a way to remove the cats and display the corrected data*/

function getDogs(dogsJulia, dogsKate) {
  return [...dogsJulia.slice(1, -2), ...dogsKate].map((age, i) => {
    return age >= 3
      ? `Dog number ${i + 1} is an adult, and is ${age} years old.`
      : `Dog number ${i + 1} is still a puppy!`;
  });
}

// #53 Create a function that takes an array of ages and returns the average age for only the adults in the group

function calcAverageAge(ages) {
  return ages
    .map(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
}

// #54 Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

const largestNumbers = (n, arr) =>
  n === 0 ? [] : arr.sort((a, b) => a - b).slice(-n);

// #55 Create a function that will take a HEX number and returns the binary equivalent (as a string).

const toBinary = num => num.toString(2);

// #56 Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.

function getMiddle(str) {
  if (str.length > 2 && str.length % 2 === 0) {
    return str.slice(str.length / 2 - 1, str.length / 2 + 1);
  } else if (str.length > 2 && str.length % 2 !== 0) {
    return str[Math.trunc(str.length / 2)];
  } else {
    return str;
  }
}

// #57 Given a string, reverse all the words which have odd length. The even length words are not changed.

function reverseOdd(str) {
  return str
    .split(' ')
    .map(word => {
      return word.length % 2 !== 0 ? word.split('').reverse().join('') : word;
    })
    .join(' ');
}

// #58  Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

const cardHide = card => card.slice(-4).padStart(card.length, '*');

// #59 Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

function reverseCase(str) {
  return str
    .split('')
    .map(letter => {
      return letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase();
    })
    .join('');
}

/* #60  Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.
The words and, the, of and in should be lowercase.
All other words should have the first character as uppercase and the rest lowercase. */
function correctTitle(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => {
      if (word === 'the' || word === 'of' || word === 'in' || word === 'and') {
        return word;
      } else if (word.includes('-')) {
        return word
          .split('-')
          .map(word => {
            if (
              word === 'the' ||
              word === 'of' ||
              word === 'in' ||
              word === 'and'
            ) {
              return word;
            } else {
              return `${word[0].toUpperCase().concat(word.slice(1))}`;
            }
          })
          .join('-');
      } else {
        return `${word[0].toUpperCase().concat(word.slice(1))}`;
      }
    })
    .join(' ');
}

/* #61 Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.*/

function sortDescending(num) {
  return Number(
    Array.from(String(num))
      .sort((a, b) => b - a)
      .join('')
  );
}

/* # 62 Suppose you get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const fieldPlayers = players1.slice(1);
const allPlayers = [...players1, ...players2];
const players1Final = players1.concat(['Thiago', 'Coutinho', 'Perisic']);
const {
  odds: { team1, x: draw, team2 },
} = game;

function printGoals(...players) {
  console.log(`Total Goals: ${players.length}`);
  console.log('Scored by:');
  console.log(players);
}

// #63 Create a function that takes a word and returns the new word without including the first character.

const newWord = str => [...str].slice(1).join('');

// #64 Write a function that removes any non-letters from a string, returning a well-known film title.

const lettersOnly = str => str.match(/[a-z]/gi).join('');

// #65 Create a  calculator that takes an array of bill values and tips 15% if the bill is between 50 and 300,  and 20% if the value is different. The result should be the total check paid(bill plus tip).

function calcCheck(bills) {
  return bills.map(bill =>
    bill >= 50 && bill <= 300
      ? bill * (15 / 100) + bill
      : bill * (20 / 100) + bill
  );
}
