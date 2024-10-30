'use strict';

function logger() {
  console.log('My name is Jonas');
}

logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const juice = fruitProcessor(5, 0);
console.log(`${juice}`);

// LECTURE: Functions
//===================================

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry('Ukraine', 48, 'Kyiv'));

function percentageOfWorld1(population) {
  const worldPopulation = 7900;
  return population / worldPopulation * 100;
}

console.log(percentageOfWorld1(43.81));

const percentageOfWorld2 = function (population) {
  const worldPopulation = 7900;
  return population / worldPopulation * 100;
}

console.log(percentageOfWorld2(43.81));

const percentageOfWorld3 = population => (population / 7900 * 100);
console.log(percentageOfWorld3(43.81));

// Coding Challenge #1
//===================================
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolhins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log(`No team wins!`)
  }
}

let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolhins, avgKoalas);

avgDolhins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolhins, avgKoalas);
*/

// Coding Challenge #2
//===================================

// function calcTip (bill) {
//   if ( bill >= 50 && bill <= 300 ) {
//     return bill * 0.15
//   } else {
//     return bill * 0.2
//   }
// }

// const bills = new Array(125, 555, 44);
// const tips = new Array();
// tips.push(calcTip(bills[0]))
// tips.push(calcTip(bills[1]))
// tips.push(calcTip(bills[2]))

// const total = new Array(bills, tips)
// console.log(total)

// Object Challenge
//===================================
const person = {
  objName: 'Jonas',
  birthYear: '1991',
  occupation: 'teacher',
  hasDrivingLicence: false,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.objName} is a ${this.calcAge()}-old ${this.occupation}, and has ${this.hasDrivingLicence ? 'a' : 'no'} driver's license`
  }
};

console.log(person.getSummary());


// Coding Challenge #3
//===================================
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: 'Mark Miller',
  weight: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.weight / (this.height ** 2);
    return this.bmi 
  }
};

const john = {
  fullName: 'John Smith',
  weight: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.weight / (this.height ** 2);
    return this.bmi 
  }
};

mark.calcBMI();
john.calcBMI();

if ( mark.bmi > john.bmi ) {
  console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}`);
} else {
  console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`);
}


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = new Array();
const totals = new Array();

function calcTip (bill) {
  if ( bill >= 50 && bill <= 300 ) {
    return bill * 0.15
  } else {
    return bill * 0.2
  }
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

function calcAverage (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log(`Totals array: ${totals}`);
console.log(`Totals average: ${calcAverage(totals)}`);